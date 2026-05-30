'use client';

import React, { useState } from 'react';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { Mail, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError('Не удалось отправить письмо для сброса. Проверьте правильность email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a18] text-white">
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md">
        {success ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-emerald-400/10 text-emerald-400 shadow-neon-cyan">
                <CheckCircle size={48} />
              </div>
            </div>
            <h1 className="text-3xl font-bold">Проверьте почту</h1>
            <p className="text-white/40">Мы отправили инструкции по сбросу пароля на ваш email.</p>
            <Link href="/login" className="inline-flex items-center gap-2 text-velocity-cyan hover:underline">
              <ArrowLeft size={18} />
              Вернуться ко входу
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">Сброс пароля</h1>
            <p className="text-white/40 mb-8 text-center">Введите ваш email, и мы отправим ссылку для сброса пароля</p>
            
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-xl mb-6 text-sm text-center">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-velocity-purple text-white font-bold py-3 rounded-xl hover:bg-velocity-purple/90 transition-all flex items-center justify-center gap-2 shadow-neon-purple"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Сбросить пароль'}
              </button>
            </form>
            
            <p className="mt-8 text-center text-sm">
              <Link href="/login" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                <ArrowLeft size={16} />
                Назад ко входу
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
