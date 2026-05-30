'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import { Mail, Lock, Globe, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const handleFirebaseSync = async (firebaseUser: any) => {
    const idToken = await firebaseUser.getIdToken();
    
    // Sync with our DB
    const syncRes = await fetch('/api/auth/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        emailVerified: firebaseUser.emailVerified 
      }),
    });

    if (!syncRes.ok) throw new Error('Failed to sync user');

    // If not verified, redirect to verification page
    if (!firebaseUser.emailVerified) {
      router.push('/verify-email');
      return;
    }

    // Sign in to NextAuth session
    const res = await signIn('credentials', {
      email: firebaseUser.email,
      password: 'FIREBASE_AUTH_EXTERNAL',
      redirect: false,
    });

    if (res?.error) {
      setError('Ошибка синхронизации сессии');
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await handleFirebaseSync(userCredential.user);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setError('Неверный email или пароль');
      } else {
        setError('Ошибка при входе');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleFirebaseSync(result.user);
    } catch (err: any) {
      console.error(err);
      setError('Ошибка при входе через Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a18] text-white">
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Velocity CRM</h1>
        
        {message === 'verify-email' && (
          <div className="bg-velocity-cyan/10 border border-velocity-cyan/20 text-velocity-cyan p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
            <CheckCircle size={18} />
            <span>Инструкции отправлены на почту. Пожалуйста, подтвердите email.</span>
          </div>
        )}

        <p className="text-white/40 mb-8 text-center">Войдите в свой аккаунт через Firebase</p>
        
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-xl mb-6 text-sm text-center flex items-center justify-center gap-2">
            <AlertTriangle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-white/60">Пароль</label>
              <Link href="/forgot-password" size="sm" className="text-xs text-velocity-cyan hover:underline">
                Забыли пароль?
              </Link>
            </div>
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
            className="w-full bg-velocity-cyan text-black font-bold py-3 rounded-xl hover:bg-velocity-cyan/90 transition-all flex items-center justify-center gap-2 shadow-neon-cyan"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Войти'}
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">ИЛИ</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
        >
          <Globe size={20} className="text-velocity-cyan" />
          Продолжить с Google
        </button>
        
        <p className="mt-8 text-center text-sm text-white/40">
          Нет аккаунта?{' '}
          <Link href="/register" className="text-velocity-cyan hover:underline">
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </div>
  );
}
