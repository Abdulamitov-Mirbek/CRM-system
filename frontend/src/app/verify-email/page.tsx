'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, ShieldCheck, Loader2, ArrowRight, RefreshCcw } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function VerifyEmailPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const inputRefs = useRef<any[]>([]);

  // Авто-фокус на первом поле
  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Только цифры
    
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Переход к следующему полю
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async (finalCode?: string) => {
    const codeString = finalCode || code.join('');
    if (codeString.length !== 6) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: codeString }),
      });

      if (res.ok) {
        // Успех! Автоматически логиним через NextAuth
        await signIn('credentials', {
          email,
          password: 'FIREBASE_AUTH_EXTERNAL',
          callbackUrl: '/dashboard',
        });
      } else {
        const msg = await res.text();
        setError(msg || 'Неверный код');
      }
    } catch (err) {
      setError('Ошибка сервера. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setSending(true);
    try {
      await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      alert('Новый код отправлен!');
    } catch (err) {
      alert('Ошибка при отправке');
    } finally {
      setSending(false);
    }
  };

  // Авто-проверка при вводе 6-й цифры
  useEffect(() => {
    if (code.every(digit => digit !== '')) {
      handleVerify();
    }
  }, [code]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a18] text-white p-6">
      <div className="glass-panel p-10 rounded-[40px] w-full max-w-lg text-center shadow-2xl relative overflow-hidden">
        {/* Декоративный свет */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-velocity-cyan/20 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-velocity-purple/20 blur-[100px]" />

        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-velocity-purple/20 to-velocity-cyan/20 border border-white/10 flex items-center justify-center">
            <ShieldCheck size={40} className="text-velocity-cyan animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-3">Код подтверждения</h1>
        <p className="text-white/40 mb-10">
          Мы отправили 6-значный код на <br />
          <span className="text-white font-medium">{email}</span>
        </p>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-2xl mb-8 text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-center gap-3 mb-10">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className="w-12 h-16 md:w-16 md:h-20 bg-white/5 border border-white/10 rounded-2xl text-center text-2xl font-bold focus:outline-none focus:border-velocity-cyan focus:bg-white/10 transition-all"
            />
          ))}
        </div>

        <button
          onClick={() => handleVerify()}
          disabled={loading || code.some(d => d === '')}
          className="w-full bg-velocity-cyan text-black font-bold py-4 rounded-2xl hover:bg-velocity-cyan/90 transition-all flex items-center justify-center gap-2 shadow-neon-cyan disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={24} /> : (
            <>
              Подтвердить доступ
              <ArrowRight size={20} />
            </>
          )}
        </button>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button 
            onClick={handleResend}
            disabled={sending}
            className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2"
          >
            <RefreshCcw size={14} className={sending ? 'animate-spin' : ''} />
            Не получили код? Отправить снова
          </button>
          
          <button 
            onClick={() => router.push('/login')}
            className="text-xs text-velocity-purple uppercase tracking-widest font-bold hover:underline"
          >
            Вернуться к логину
          </button>
        </div>
      </div>
    </div>
  );
}
