'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  Loader2,
  Utensils,
  Coffee,
  CalendarCheck
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';
import { analyticsService } from '@/services/api';
import { DashboardSummary, AnalyticsReport } from '@/types/analytics';
import { useSession } from 'next-auth/react';

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

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [report, setReport] = useState<AnalyticsReport | null>(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const userRole = (session?.user as any)?.role;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [s, r] = await Promise.all([
          analyticsService.getSummary(),
          analyticsService.getReport()
        ]);
        setSummary(s);
        setReport(r);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !summary || !report) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-daamda-cyan" size={48} />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Рабочий стол: {userRole}</h1>
          <p className="text-white/40 mt-1">Интеллектуальный обзор вашего заведения</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Выручка сегодня" value={`${summary.dailyRevenue} kgs som`} change={8.4} icon={DollarSign} color="emerald-400" />
        <KpiCard title="Средний чек" value={`${summary.averageCheck.toFixed(0)} kgs som`} change={3.2} icon={TrendingUp} color="daamda-purple" />
        <KpiCard title="Всего заказов" value={summary.totalOrders} change={12.1} icon={Coffee} color="daamda-cyan" />
        <KpiCard title="Активные клиенты" value={summary.totalCustomers} change={5.7} icon={Users} color="white" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl flex flex-col h-[400px]">
          <h2 className="text-xl font-bold mb-8">Динамика выручки</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={report.revenueByDay}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.2)', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0b1326', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl flex flex-col">
          <h2 className="text-xl font-bold mb-8">Топ блюд</h2>
          <div className="space-y-6 flex-1">
            {report.topDishes.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-white/40">{i+1}</div>
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest">{item.quantity} порций</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-velocity-purple">{item.revenue} ₽</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {(userRole === 'OWNER' || userRole === 'MANAGER') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-6">Популярные напитки</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={report.topDrinks}>
                  <XAxis dataKey="name" hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0b1326', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="revenue" radius={[10, 10, 0, 0]}>
                    {report.topDrinks.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#22d3ee'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-emerald-400/10 flex items-center justify-center mb-6">
              <CalendarCheck className="text-emerald-400" size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Бронирования на вечер</h2>
            <p className="text-white/40 text-sm mb-6 max-w-[250px]">Сегодня ожидается 14 гостей на 5 столиков. Все системы работают в штатном режиме.</p>
            <button className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              Проверить график
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
