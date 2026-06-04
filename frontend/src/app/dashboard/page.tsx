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
  CalendarCheck,
  BarChart3,
  PieChart
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart as RechartsPie, Pie
} from 'recharts';
import { analyticsService } from '@/services/api';
import { DashboardSummary, AnalyticsReport } from '@/types/analytics';
import { useSession } from 'next-auth/react';

const KpiCard = ({ title, value, change, icon: Icon, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="crm-card h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg bg-${color}/10 text-${color}`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm font-semibold ${change >= 0 ? 'text-crm-success' : 'text-crm-danger'}`}>
        {change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {Math.abs(change)}%
      </div>
    </div>
    <h3 className="text-white/50 text-xs font-semibold mb-1 uppercase tracking-wide">{title}</h3>
    <p className="text-3xl font-bold text-white">{value}</p>
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
      <Loader2 className="animate-spin text-crm-primary" size={48} />
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">DAAMDA CRM</h1>
          <p className="text-white/50 font-medium">Добро пожаловать! Вот общий обзор вашего бизнеса</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-sm mb-1">Последнее обновление</p>
          <p className="text-white font-semibold">{new Date().toLocaleDateString('ru-RU')}</p>
        </div>
      </motion.div>

      {/* KPI Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Выручка сегодня" 
          value={`₽${summary.dailyRevenue.toLocaleString('ru-RU')}`} 
          change={8.4} 
          icon={DollarSign} 
          color="crm-success" 
        />
        <KpiCard 
          title="Средний чек" 
          value={`₽${summary.averageCheck.toLocaleString('ru-RU')}`} 
          change={3.2} 
          icon={TrendingUp} 
          color="crm-primary" 
        />
        <KpiCard 
          title="Всего заказов" 
          value={summary.totalOrders.toLocaleString('ru-RU')} 
          change={12.1} 
          icon={Coffee} 
          color="crm-secondary" 
        />
        <KpiCard 
          title="Активные клиенты" 
          value={summary.totalCustomers.toLocaleString('ru-RU')} 
          change={5.7} 
          icon={Users} 
          color="crm-accent" 
        />
      </motion.div>

      {/* Charts Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 crm-card p-8 rounded-2xl flex flex-col h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 size={20} className="text-crm-primary" />
              Динамика выручки
            </h2>
            <select className="bg-white/5 border border-white/10 text-white text-sm px-3 py-1 rounded-lg focus:outline-none focus:border-crm-primary/50">
              <option>Последние 7 дней</option>
              <option>Последние 30 дней</option>
              <option>Последние 90 дней</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={report.revenueByDay}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#3b82f6' }}
                  labelStyle={{ color: '#ffffff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Items */}
        <div className="crm-card p-8 rounded-2xl flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <PieChart size={20} className="text-crm-secondary" />
            Топ позиции
          </h2>
          <div className="space-y-4 flex-1">
            {report.topDishes.slice(0, 4).map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-crm-primary/10 flex items-center justify-center text-xs font-bold text-crm-primary">
                    {i+1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-[10px] text-white/40">{item.quantity} продано</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-crm-success">₽{item.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detailed Charts */}
      {(userRole === 'OWNER' || userRole === 'MANAGER') && (
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Popular Items Chart */}
          <div className="crm-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Популярные позиции</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={report.topDrinks}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 11}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Bar dataKey="revenue" radius={[10, 10, 0, 0]}>
                    {report.topDrinks.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#8b5cf6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="crm-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <CalendarCheck size={20} className="text-crm-success" />
                Предстоящие брони
              </h2>
              <p className="text-white/50 text-sm mb-6">График на вечер</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-white/[0.02] rounded-lg border border-crm-success/20 flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-white">VIP столик (6 гостей)</p>
                  <p className="text-[10px] text-white/40">19:30 - Премиум зона</p>
                </div>
                <span className="badge badge-success">Подтверждена</span>
              </div>
              <div className="p-3 bg-white/[0.02] rounded-lg border border-crm-warning/20 flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-white">У окна (2 гостя)</p>
                  <p className="text-[10px] text-white/40">20:00 - Основной зал</p>
                </div>
                <span className="badge badge-warning">Ожидание</span>
              </div>
            </div>
            
            <button className="w-full py-2.5 rounded-lg bg-crm-primary text-white font-semibold hover:bg-blue-600 transition-colors text-sm">
              Все брони →
            </button>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <button className="crm-card p-4 text-center hover:border-crm-primary/50 transition-all group">
          <Users size={24} className="mx-auto mb-2 text-crm-primary group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-white">Новый контакт</p>
        </button>
        <button className="crm-card p-4 text-center hover:border-crm-primary/50 transition-all group">
          <Activity size={24} className="mx-auto mb-2 text-crm-secondary group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-white">Новая сделка</p>
        </button>
        <button className="crm-card p-4 text-center hover:border-crm-primary/50 transition-all group">
          <CalendarCheck size={24} className="mx-auto mb-2 text-crm-accent group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-white">Бронирование</p>
        </button>
        <button className="crm-card p-4 text-center hover:border-crm-primary/50 transition-all group">
          <TrendingUp size={24} className="mx-auto mb-2 text-crm-success group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-white">Отчеты</p>
        </button>
      </motion.div>
    </motion.div>
  );
}
