'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays, Clock, Users, Utensils, ShoppingCart, CheckCircle2,
  Plus, Minus, Trash2, ChevronRight, ChevronLeft, Zap, Phone, User, MessageSquare, Loader2,
  AlertCircle, ArrowRight, Info, Star, Sparkles, MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────────────────
interface TableItem { id: string; number: string; capacity: number; status: string; }
interface MenuItem  { id: string; name: string; description?: string; price: number; categoryId: string; isAvailable: boolean; }
interface Category  { id: string; name: string; items: MenuItem[]; }
interface CartItem  { menuItem: MenuItem; quantity: number; }

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const fetchJson = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Fetch error for ${url}:`, err);
    throw err;
  }
};

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const slideIn = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: -20, opacity: 0, transition: { duration: 0.3 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.05 } }
};

// ─── Shared Components ───────────────────────────────────────────────────────

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <div className="p-2 rounded-xl bg-crm-primary/10 text-crm-primary"><Icon size={20} /></div>}
      <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-white/40 text-sm font-medium ml-1">{subtitle}</p>}
  </div>
);

const StepIndicator = ({ step }: { step: number }) => {
  const steps = ['Столик', 'Меню', 'Оформление'];
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center relative px-2">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
        {steps.map((label, i) => {
          const isActive = i === step;
          const isCompleted = i < step;
          
          return (
            <div key={i} className="relative z-10 flex flex-col items-center group">
              <div className={cn(
                "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500",
                isCompleted ? "bg-crm-success text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]" :
                isActive ? "bg-crm-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-110" :
                "bg-slate-900 text-white/20 border border-white/5"
              )}>
                {isCompleted ? <CheckCircle2 size={18} /> : <span className="text-sm font-black">{i + 1}</span>}
              </div>
              <span className={cn(
                "absolute -bottom-7 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300",
                isActive ? "text-crm-primary" : "text-white/20"
              )}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Step 0 — Table & Time ────────────────────────────────────────────────────

const StepTable = ({ onNext, tables, loading, error }: { onNext: (data: any) => void; tables: TableItem[]; loading: boolean; error: boolean }) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('18:00');
  const [endTime, setEndTime]     = useState('20:00');
  const [guests, setGuests]       = useState(2);
  const [tableId, setTableId]     = useState('');

  const available = useMemo(() => 
    tables.filter(t => t.capacity >= guests && t.status === 'Available'),
    [tables, guests]
  );

  const handleNext = () => {
    if (!date || !startTime || !endTime) return;
    onNext({
      tableId: tableId || null,
      guestCount: guests,
      startTime: `${date}T${startTime}:00`,
      endTime:   `${date}T${endTime}:00`,
    });
  };

  if (error) return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center py-16 space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-crm-danger/10 border border-crm-danger/20 flex items-center justify-center mx-auto shadow-2xl">
        <AlertCircle className="text-crm-danger" size={40} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-white">Режим ожидания</h3>
        <p className="text-white/40 max-w-xs mx-auto text-sm leading-relaxed">
          Наш сервис временно недоступен. Мы уже работаем над восстановлением связи.
        </p>
      </div>
      <button onClick={() => window.location.reload()} className="btn btn-secondary px-8 py-4 rounded-2xl">
        Попробовать снова
      </button>
    </motion.div>
  );

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="space-y-10">
      <SectionHeader 
        title="Ваш визит" 
        subtitle="Запланируйте идеальный вечер в нашем заведении"
        icon={CalendarDays}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Дата</label>
          <div className="relative group">
            <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
            <input type="date" min={today} value={date} onChange={e => setDate(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all cursor-pointer shadow-inner" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Гости</label>
          <div className="flex items-center gap-2 p-1 bg-white/[0.03] border border-white/5 rounded-2xl shadow-inner">
            <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-14 h-14 rounded-xl hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all">
              <Minus size={20} />
            </button>
            <div className="flex-1 flex items-center justify-center gap-3">
              <Users size={18} className="text-crm-primary" />
              <span className="text-2xl font-black text-white tabular-nums">{guests}</span>
            </div>
            <button onClick={() => setGuests(g => Math.min(20, g + 1))} className="w-14 h-14 rounded-xl hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Время прибытия</label>
          <div className="relative group">
            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
            <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all cursor-pointer shadow-inner" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Длительность до</label>
          <div className="relative group">
            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
            <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all cursor-pointer shadow-inner" />
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-end px-1">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Расположение</label>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <Info size={12}/> Выбор стола не обязателен
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => <div key={i} className="h-24 rounded-3xl bg-white/[0.02] border border-white/5 animate-pulse" />)}
          </div>
        ) : (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.button
              variants={fadeIn}
              onClick={() => setTableId('')}
              className={cn(
                "group relative overflow-hidden p-5 rounded-3xl border transition-all duration-500 text-left",
                !tableId 
                  ? "border-crm-primary bg-crm-primary/10 text-white shadow-[0_0_25px_rgba(59,130,246,0.15)]" 
                  : "border-white/5 bg-white/[0.01] text-white/30 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/60"
              )}
            >
              <div className="relative z-10">
                <div className="text-lg font-black tracking-tight">Любой</div>
                <div className="text-[10px] uppercase font-black tracking-widest opacity-40 mt-1">Оптимально</div>
              </div>
              {!tableId && <motion.div layoutId="tableGlow" className="absolute inset-0 bg-gradient-to-br from-crm-primary/20 to-transparent pointer-events-none" />}
            </motion.button>
            {available.map(t => (
              <motion.button
                key={t.id}
                variants={fadeIn}
                onClick={() => setTableId(t.id)}
                className={cn(
                  "group relative overflow-hidden p-5 rounded-3xl border transition-all duration-500 text-left",
                  tableId === t.id 
                    ? "border-crm-primary bg-crm-primary/10 text-white shadow-[0_0_25px_rgba(59,130,246,0.15)]" 
                    : "border-white/5 bg-white/[0.01] text-white/30 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/60"
                )}
              >
                <div className="relative z-10">
                  <div className="text-lg font-black tracking-tight">Стол {t.number}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-40 mt-1">{t.capacity} мест</div>
                </div>
                {tableId === t.id && <motion.div layoutId="tableGlow" className="absolute inset-0 bg-gradient-to-br from-crm-primary/20 to-transparent pointer-events-none" />}
              </motion.button>
            ))}
          </motion.div>
        )}
        {(!loading && available.length === 0) && (
          <div className="p-12 text-center rounded-3xl border border-dashed border-white/5 bg-white/[0.01]">
            <p className="text-white/20 text-sm font-medium">Нет доступных локаций на выбранные параметры</p>
          </div>
        )}
      </div>

      <button onClick={handleNext} className="btn-primary w-full py-6 rounded-3xl text-lg font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
        Продолжить <ChevronRight size={20} />
      </button>
    </motion.div>
  );
};

// ─── Step 1 — Menu & Cart ─────────────────────────────────────────────────────

const StepMenu = ({
  categories, cart, onAdd, onRemove, onNext, onBack
}: {
  categories: Category[]; cart: CartItem[]; onAdd: (item: MenuItem) => void; onRemove: (id: string) => void; onNext: () => void; onBack: () => void;
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '');
  const total = cart.reduce((s, c) => s + c.menuItem.price * c.quantity, 0);
  const getQty = (id: string) => cart.find(c => c.menuItem.id === id)?.quantity ?? 0;

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeader 
          title="Гастрономия" 
          subtitle="Добавьте изысканные блюда к вашему столу"
          icon={Utensils}
        />
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 px-6 py-4 rounded-3xl bg-slate-900 border border-white/5 shadow-2xl"
        >
          <div className="p-2.5 rounded-2xl bg-crm-primary/10 text-crm-primary shadow-inner">
            <ShoppingCart size={22} />
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-black text-white/30 leading-none mb-1 tracking-widest">Предзаказ</p>
            <p className="text-xl font-black text-white tabular-nums">₽{total.toLocaleString('ru-RU')}</p>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
              activeCategory === cat.id 
                ? "bg-crm-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                : "bg-white/[0.03] text-white/30 hover:bg-white/[0.07] hover:text-white border border-white/5"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[520px] overflow-y-auto pr-3 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {(categories.find(c => c.id === activeCategory)?.items ?? []).map(item => {
            const qty = getQty(item.id);
            return (
              <motion.div 
                key={item.id} 
                layout
                variants={fadeIn}
                className="glass-panel p-6 group hover:border-crm-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex justify-between items-start gap-4 mb-4 relative z-10">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-white tracking-tight text-lg mb-1 group-hover:text-crm-primary transition-colors">{item.name}</h4>
                    <p className="text-xs text-white/30 font-medium line-clamp-2 leading-relaxed h-8 italic">
                      {item.description || 'Изысканное сочетание ингредиентов от нашего шеф-повара'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-xl text-white tracking-tighter">₽{item.price.toLocaleString('ru-RU')}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-end h-12 relative z-10">
                  {qty === 0 ? (
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onAdd(item)} 
                      className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 hover:bg-crm-primary hover:border-crm-primary hover:text-white transition-all"
                    >
                      <Plus size={16} /> Добавить
                    </motion.button>
                  ) : (
                    <div className="flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-2xl p-1.5 shadow-inner">
                      <button onClick={() => onRemove(item.id)} className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all">
                        <Minus size={18} />
                      </button>
                      <span className="text-white font-black text-lg w-6 text-center tabular-nums">{qty}</span>
                      <button onClick={() => onAdd(item)} className="w-9 h-9 rounded-xl bg-crm-primary flex items-center justify-center text-white shadow-lg">
                        <Plus size={18} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-crm-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-4">
        <button onClick={onBack} className="flex items-center justify-center gap-2 py-6 rounded-3xl border border-white/5 bg-white/[0.03] text-white/40 font-black uppercase tracking-widest hover:bg-white/[0.07] hover:text-white transition-all">
          <ChevronLeft size={20} /> Назад
        </button>
        <button onClick={onNext} className="btn-primary py-6 rounded-3xl font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          Финальный этап <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

// ─── Step 2 — Confirm ─────────────────────────────────────────────────────────

const StepConfirm = ({ cart, onBack, onSubmit, loading }: { cart: CartItem[]; onBack: () => void; onSubmit: (n: string, p: string, c: string) => void; loading: boolean; }) => {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [comment, setComment] = useState('');
  const total = cart.reduce((s, c) => s + c.menuItem.price * c.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    onSubmit(name, phone, comment);
  };

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="space-y-10">
      <SectionHeader 
        title="Подтверждение" 
        subtitle="Персональный подход к вашему комфорту"
        icon={User}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Как к вам обращаться?</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
                  <input required value={name} onChange={e => setName(e.target.value)} placeholder="Ваше благородное имя"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all shadow-inner" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Контактный телефон</label>
                <div className="relative group">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
                  <input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all shadow-inner" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Особые пожелания</label>
              <div className="relative group">
                <MessageSquare className="absolute left-5 top-5 text-white/20 group-focus-within:text-crm-primary transition-colors" size={20} />
                <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Аллергии, предпочтения по столу, музыка или повод визита..." rows={4}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-14 pr-5 text-white font-bold focus:outline-none focus:border-crm-primary/40 focus:bg-white/[0.07] transition-all resize-none shadow-inner" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-4">
              <button type="button" onClick={onBack} className="flex items-center justify-center gap-2 py-6 rounded-3xl border border-white/5 bg-white/[0.03] text-white/40 font-black uppercase tracking-widest hover:bg-white/[0.07] hover:text-white transition-all">
                <ChevronLeft size={20} /> Назад
              </button>
              <button type="submit" disabled={loading} className="btn-primary py-6 rounded-3xl font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
                {loading ? <Loader2 size={24} className="animate-spin" /> : <><CheckCircle2 size={20} /> Забронировать</>}
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-panel p-8 sticky top-28 bg-slate-900/60 shadow-2xl overflow-hidden border-crm-primary/10">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-crm-primary mb-6 flex items-center gap-3">
              <Sparkles size={16}/> Резюме заказа
            </h4>
            
            <div className="space-y-5">
              {cart.length > 0 ? (
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map(c => (
                    <div key={c.menuItem.id} className="flex justify-between items-start gap-4 text-sm animate-fade-in">
                      <div className="flex-1">
                        <p className="text-white font-black tracking-tight">{c.menuItem.name}</p>
                        <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-0.5">Кол-во: {c.quantity}</p>
                      </div>
                      <p className="text-white font-black tabular-nums">₽{(c.menuItem.price * c.quantity).toLocaleString('ru-RU')}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center border border-dashed border-white/5 rounded-2xl">
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Только бронирование</p>
                </div>
              )}

              <div className="h-px bg-white/5" />
              
              <div className="flex justify-between items-center pt-2">
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Итоговая сумма</p>
                  <p className="text-3xl font-black text-white tracking-tighter tabular-nums">₽{total.toLocaleString('ru-RU')}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-crm-primary/10 flex items-center justify-center text-crm-primary shadow-inner">
                  <Star size={24} className="fill-current" />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-crm-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SuccessScreen = ({ hasOrder, onReset }: { hasOrder: boolean; onReset: () => void }) => (
  <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center py-20 space-y-10">
    <div className="relative mx-auto w-32 h-32">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-tr from-crm-success/20 to-transparent rounded-[2.5rem] blur-2xl" 
      />
      <div className="relative w-32 h-32 rounded-[2.5rem] bg-slate-900 border border-crm-success/20 flex items-center justify-center shadow-2xl">
        <CheckCircle2 size={64} className="text-crm-success" />
      </div>
    </div>
    
    <div className="space-y-4">
      <h2 className="text-5xl font-black text-white tracking-tighter">Визит подтвержден</h2>
      <p className="text-white/40 text-lg font-medium max-w-sm mx-auto leading-relaxed">
        Ваше бронирование{hasOrder ? ' и гастрономический предзаказ' : ''} успешно внесены в систему ожидания.
      </p>
    </div>

    <div className="flex flex-col items-center gap-4">
      <button onClick={onReset} className="btn-primary px-12 py-5 rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
        Новое бронирование
      </button>
      <div className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest pt-4">
        <MapPin size={12} /> Центр города, ул. Центральная, 1
      </div>
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BookingPortal() {
  const [step, setStep]           = useState(0);
  const [done, setDone]           = useState(false);
  const [hasOrder, setHasOrder]   = useState(false);
  const [tables, setTables]       = useState<TableItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart]           = useState<CartItem[]>([]);
  const [reservation, setReservation] = useState<any>(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    Promise.all([
      fetchJson(`${BASE}/tables`),
      fetchJson(`${BASE}/menu`),
    ]).then(([t, m]) => {
      setTables(t);
      setCategories(m);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.menuItem.id === item.id);
      return existing
        ? prev.map(c => c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)
        : [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(c => c.menuItem.id === id);
      if (!existing) return prev;
      return existing.quantity === 1
        ? prev.filter(c => c.menuItem.id !== id)
        : prev.map(c => c.menuItem.id === id ? { ...c, quantity: c.quantity - 1 } : c);
    });
  };

  const handleSubmit = async (name: string, phone: string, comment: string) => {
    setSubmitting(true);
    try {
      const resBody = { ...reservation, customerName: name, phone };
      await fetch(`${BASE}/reservations/client`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resBody),
      });

      if (cart.length > 0) {
        const orderBody = {
          customerName: name,
          phone,
          comment,
          tableId: reservation.tableId,
          items: cart.map(c => ({ menuItemId: c.menuItem.id, quantity: c.quantity })),
        };
        await fetch(`${BASE}/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderBody),
        });
        setHasOrder(true);
      }
      setDone(true);
    } catch (err) {
      console.error(err);
      alert('Ошибка соединения. Пожалуйста, убедитесь, что сервер запущен.');
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(0); setDone(false); setHasOrder(false);
    setCart([]); setReservation(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sora overflow-x-hidden selection:bg-crm-primary/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-crm-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-crm-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5 px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-crm-primary to-crm-secondary flex items-center justify-center shadow-xl">
              <Zap size={24} className="text-white fill-current" />
            </div>
            <div>
              <p className="text-white font-black tracking-tighter text-2xl leading-none uppercase">DAAMDA</p>
              <p className="text-crm-primary text-[10px] font-black uppercase tracking-[0.3em] mt-1.5 opacity-80">Concierge Service</p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Портал', 'Локации', 'Меню', 'О нас'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-crm-primary transition-all duration-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <AnimatePresence mode="wait">
              {done ? (
                <SuccessScreen key="success" hasOrder={hasOrder} onReset={reset} />
              ) : (
                <motion.div 
                  key="content"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <StepIndicator step={step} />
                  
                  <div className="glass-panel p-8 md:p-12 bg-slate-900/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border-white/10 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {step === 0 && (
                        <StepTable
                          key="step0"
                          tables={tables}
                          loading={loading}
                          error={error}
                          onNext={data => { setReservation(data); setStep(1); }}
                        />
                      )}
                      {step === 1 && (
                        <StepMenu
                          key="step1"
                          categories={categories}
                          cart={cart}
                          onAdd={addToCart}
                          onRemove={removeFromCart}
                          onNext={() => setStep(2)}
                          onBack={() => setStep(0)}
                        />
                      )}
                      {step === 2 && (
                        <StepConfirm
                          key="step2"
                          cart={cart}
                          loading={submitting}
                          onBack={() => setStep(1)}
                          onSubmit={handleSubmit}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crm-primary/5 blur-[100px] rounded-full pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <footer className="mt-20 text-center space-y-4">
            <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
              <span>Security</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
            <p className="text-white/5 text-[9px] font-black uppercase tracking-[0.4em]">
              © 2026 DAAMDA LUXURY GROUP. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </div>
      </main>

      {/* Global CSS Overrides for this component */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.4);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.3;
          cursor: pointer;
        }
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.3;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
