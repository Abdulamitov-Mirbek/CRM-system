'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Loader2, CheckCircle, KeyRound, Lock } from 'lucide-react';

type Step = 'email' | 'reset' | 'success';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const requestCode = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/request-password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || 'Не удалось отправить код');
      }

      setStep('reset');
    } catch (err: any) {
      setError(err.message || 'Не удалось отправить код. Проверьте email.');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code.length !== 6) {
      setError('Введите 6-значный код');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен быть минимум 6 символов');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code, password }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || 'Не удалось изменить пароль');
      }

      setStep('success');
    } catch (err: any) {
      setError(err.message || 'Не удалось изменить пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a18] text-white px-6">
      <div className="glass-panel p-8 sm:p-10 rounded-3xl w-full max-w-md">
        {step === 'success' ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-emerald-400/10 text-emerald-400 shadow-neon-cyan">
                <CheckCircle size={48} />
              </div>
            </div>
            <h1 className="text-3xl font-bold">Пароль изменён</h1>
            <p className="text-white/40">Теперь можно войти в аккаунт с новым паролем.</p>
            <Link href="/login" className="inline-flex items-center gap-2 text-velocity-cyan hover:underline">
              <ArrowLeft size={18} />
              Вернуться ко входу
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">Сброс пароля</h1>
            <p className="text-white/40 mb-8 text-center">
              {step === 'email'
                ? 'Введите email аккаунта, и мы отправим код подтверждения.'
                : 'Введите код из письма и задайте новый пароль.'}
            </p>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl mb-6 text-sm text-center">
                {error}
              </div>
            )}

            {step === 'email' ? (
              <form onSubmit={requestCode} className="space-y-6">
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
                  className="w-full bg-velocity-purple text-white font-bold py-3 rounded-xl hover:bg-velocity-purple/90 transition-all flex items-center justify-center gap-2 shadow-neon-purple disabled:opacity-60"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : 'Отправить код'}
                </button>
              </form>
            ) : (
              <form onSubmit={resetPassword} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Код подтверждения</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 tracking-[0.35em] focus:outline-none focus:border-velocity-cyan transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Новый пароль</label>
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
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Повторите пароль</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-velocity-cyan transition-colors"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-velocity-cyan text-black font-bold py-3 rounded-xl hover:bg-velocity-cyan/90 transition-all flex items-center justify-center gap-2 shadow-neon-cyan disabled:opacity-60"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : 'Изменить пароль'}
                </button>
                <button
                  type="button"
                  onClick={() => requestCode()}
                  disabled={loading}
                  className="w-full text-sm text-white/40 hover:text-white transition-colors disabled:opacity-60"
                >
                  Отправить код ещё раз
                </button>
              </form>
            )}

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
