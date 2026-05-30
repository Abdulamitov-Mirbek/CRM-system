'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Calendar, Zap, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function MyProfilePage() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-velocity-purple to-velocity-cyan p-[3px] shadow-neon-purple">
          <div className="w-full h-full rounded-[21px] bg-background flex items-center justify-center text-3xl font-bold uppercase">
            {session.user?.name ? session.user.name.substring(0, 2) : '??'}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{session.user?.name || 'Пользователь'}</h1>
          <p className="text-white/40 mt-1 uppercase tracking-widest text-xs font-bold flex items-center gap-2">
            <Shield size={12} className="text-velocity-cyan" />
            Администратор системы
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <User size={20} className="text-velocity-purple" />
            Детали аккаунта
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Email адрес</span>
              <span className="text-lg font-medium flex items-center gap-2">
                <Mail size={16} className="text-white/20" />
                {session.user?.email}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Дата регистрации</span>
              <span className="text-lg font-medium flex items-center gap-2">
                <Calendar size={16} className="text-white/20" />
                Май 2026
              </span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <Zap size={20} className="text-velocity-cyan" />
            Сигнал эффективности
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">Успешность</span>
              <span className="text-xl font-bold text-emerald-400">72.4%</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">Скорость</span>
              <span className="text-xl font-bold text-velocity-cyan">A+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-3xl">
        <h2 className="text-xl font-bold mb-8">Личный вклад</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-velocity-purple/10 text-velocity-purple">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">$1.2M</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Пайплайн</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-velocity-cyan/10 text-velocity-cyan">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">48</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Контакты</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-emerald-400/10 text-emerald-400">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">$840k</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Выручка</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-8 py-3 rounded-2xl border border-white/10 text-white/40 font-bold hover:bg-white/5 transition-all">
          Настройки
        </button>
        <button className="px-8 py-3 rounded-2xl bg-velocity-purple text-white font-bold shadow-neon-purple hover:scale-105 transition-all">
          Редактировать
        </button>
      </div>
    </div>
  );
}
