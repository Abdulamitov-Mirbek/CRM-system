'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Activity, ArrowUpRight, ArrowDownRight, Loader2 } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const KpiCard = ({ title, value, change, icon: Icon, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-panel p-6 rounded-3xl relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 blur-3xl -mr-16 -mt-16 group-hover:bg-${color}/20 transition-colors`} />
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}/10 text-${color}`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm ${change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
        {change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {Math.abs(change)}%
      </div>
    </div>
    <h3 className="text-white/40 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);

const SignalItem = ({ title, time, type }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
    <div className={`w-2 h-2 rounded-full ${
      type === 'deal' ? 'bg-velocity-purple shadow-[0_0_8px_rgba(139,92,246,0.6)]' : 
      type === 'contact' ? 'bg-velocity-cyan shadow-[0_0_8px_rgba(76,215,246,0.6)]' : 
      'bg-white/20'
    }`} />
    <div className="flex-1">
      <p className="text-sm font-medium group-hover:text-velocity-cyan transition-colors">{title}</p>
      <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{time}</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-velocity-cyan" size={48} />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Рабочий стол</h1>
          <p className="text-white/40 mt-1">Интеллектуальный обзор из живой базы данных</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard title="Успешные сделки" value={`${stats.winRate}%`} change={5.2} icon={TrendingUp} color="velocity-purple" />
        <KpiCard title="Объем пайплайна" value={`$${(stats.totalValue / 1000).toFixed(1)}k`} change={12.4} icon={DollarSign} color="velocity-cyan" />
        <KpiCard title="Всего контактов" value={stats.contactsCount} change={2.1} icon={Users} color="white" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl flex flex-col h-[450px]">
          <h2 className="text-xl font-bold mb-8">Воронка выручки</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.pipeline}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="stage" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: 'rgba(255,255,255,0.2)', fontSize: 12}} 
                  dy={10} 
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0b1326', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#8b5cf6' }}
                />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl flex flex-col">
          <h2 className="text-xl font-bold mb-8">Пульс квартала</h2>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <svg className="w-48 h-48 -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
              <motion.circle
                cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent"
                strokeDasharray="502.4"
                initial={{ strokeDashoffset: 502.4 }}
                animate={{ strokeDashoffset: 502.4 * (1 - 0.65) }}
                className="text-velocity-cyan shadow-neon-cyan"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">65%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">Цель достигнута</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-3xl">
        <h2 className="text-xl font-bold mb-6">Сигналы в реальном времени</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.recentDeals.length > 0 ? stats.recentDeals.map((deal: any) => (
            <SignalItem key={deal.id} title={`Новая сделка: ${deal.title}`} time="Только что" type="deal" />
          )) : (
            <p className="text-white/20 text-sm">Нет новых сигналов</p>
          )}
        </div>
      </div>
    </div>
  );
}
