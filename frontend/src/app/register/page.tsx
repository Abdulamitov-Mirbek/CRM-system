'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Mail, Lock, User, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Create user in Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      // 2. Sync with PostgreSQL
      const syncRes = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, emailVerified: false }),
      });

      if (!syncRes.ok) throw new Error('Ошибка синхронизации');

      // 3. Request Code Sending
      await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      // 4. Redirect to code entry
      router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ошибка при регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a18] text-white">
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Velocity CRM</h1>
        <p className="text-white/40 mb-8 text-center">Создайте аккаунт и получите код подтверждения</p>
        
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-xl mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">Полное имя</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-velocity-cyan transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-velocity-cyan transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">Пароль</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-velocity-cyan transition-colors"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-velocity-purple text-white font-bold py-3 rounded-xl hover:bg-velocity-purple/90 transition-all flex items-center justify-center gap-2 shadow-neon-purple"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Зарегистрироваться'}
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm text-white/40">
          Уже есть аккаунт?{' '}
          <Link href="/login" className="text-velocity-purple hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
