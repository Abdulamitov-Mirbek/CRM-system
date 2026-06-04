'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, RefreshCw, ChefHat, CheckCircle2, XCircle, Clock, Package, Truck } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

interface OrderItem { id: string; menuItemName: string; quantity: number; price: number; }
interface Order {
  id: string; customerName: string; phone: string; comment?: string;
  status: string; totalPrice: number; tableNumber?: string;
  items: OrderItem[]; createdAt: string;
}

const STATUS_LIST = ['New', 'Accepted', 'Preparing', 'Ready', 'Issued', 'Completed', 'Cancelled'];

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  New:       { label: 'Новый',      color: 'bg-white/10 border-white/20 text-white',               icon: Clock },
  Accepted:  { label: 'Принят',     color: 'bg-crm-primary/10 border-crm-primary/20 text-crm-primary', icon: CheckCircle2 },
  Preparing: { label: 'Готовится',  color: 'bg-crm-warning/10 border-crm-warning/20 text-crm-warning', icon: ChefHat },
  Ready:     { label: 'Готов',      color: 'bg-crm-success/10 border-crm-success/20 text-crm-success', icon: Package },
  Issued:    { label: 'Выдан',      color: 'bg-crm-accent/10  border-crm-accent/20  text-crm-accent',  icon: Truck },
  Completed: { label: 'Завершён',   color: 'bg-crm-success/10 border-crm-success/20 text-crm-success', icon: CheckCircle2 },
  Cancelled: { label: 'Отменён',    color: 'bg-crm-danger/10  border-crm-danger/20  text-crm-danger',  icon: XCircle },
};

const NEXT_STATUS: Record<string, string | null> = {
  New: 'Accepted', Accepted: 'Preparing', Preparing: 'Ready',
  Ready: 'Issued', Issued: 'Completed', Completed: null, Cancelled: null,
};

const NEXT_LABEL: Record<string, string> = {
  New: 'Принять', Accepted: 'Готовится', Preparing: 'Готов',
  Ready: 'Выдать', Issued: 'Завершить',
};

export default function OrdersPage() {
  const { data: session } = useSession();
  const [orders, setOrders]     = useState<Order[]>([]);
  const [loading, setLoading]   = useState(true);
  const [filter, setFilter]     = useState('all');
  const [updating, setUpdating] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const url = filter === 'all' ? '/api/orders' : `/api/orders?status=${filter}`;
      const res = await fetch(url);
      const data = await res.json();
      setOrders(data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }, [filter]);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (id: string, status: string) => {
    setUpdating(id);
    try {
      await fetch(`/api/orders/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    } catch (e) { console.error(e); }
    finally { setUpdating(null); }
  };

  const cancel = async (id: string) => {
    if (!confirm('Отменить заказ?')) return;
    await updateStatus(id, 'Cancelled');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Заказы</h1>
          <p className="text-white/50">Управление заказами клиентов</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Обновить
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setFilter('all')} className={cn('px-4 py-2 rounded-lg text-sm font-semibold transition-all', filter === 'all' ? 'bg-crm-primary text-white' : 'bg-white/5 text-white/60 hover:bg-white/10')}>
          Все
        </button>
        {STATUS_LIST.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={cn('px-4 py-2 rounded-lg text-sm font-semibold transition-all border', filter === s ? 'bg-crm-primary text-white border-crm-primary' : `${STATUS_CONFIG[s].color} hover:opacity-80`)}>
            {STATUS_CONFIG[s].label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <Loader2 className="animate-spin text-crm-primary" size={40} />
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 text-white/40">Заказов нет</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {orders.map((order, idx) => {
              const cfg = STATUS_CONFIG[order.status];
              const Icon = cfg.icon;
              const next = NEXT_STATUS[order.status];
              return (
                <motion.div key={order.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="crm-card p-5 rounded-2xl flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-white">{order.customerName}</p>
                      <p className="text-xs text-white/50">{order.phone}</p>
                      {order.tableNumber && <p className="text-xs text-white/40 mt-1">Стол №{order.tableNumber}</p>}
                    </div>
                    <span className={cn('px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border flex items-center gap-1', cfg.color)}>
                      <Icon size={11} /> {cfg.label}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="space-y-1.5">
                    {order.items.map(i => (
                      <div key={i.id} className="flex justify-between text-sm">
                        <span className="text-white/70">{i.menuItemName} <span className="text-white/40">×{i.quantity}</span></span>
                        <span className="text-white font-semibold">₽{i.price.toLocaleString('ru-RU')}</span>
                      </div>
                    ))}
                    {order.comment && (
                      <p className="text-xs text-white/40 italic mt-2 p-2 bg-white/5 rounded">"{order.comment}"</p>
                    )}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center border-t border-white/10 pt-3">
                    <span className="text-xs text-white/40">{new Date(order.createdAt).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
                    <span className="font-bold text-crm-primary">₽{order.totalPrice.toLocaleString('ru-RU')}</span>
                  </div>

                  {/* Actions */}
                  {(next || !['Completed', 'Cancelled'].includes(order.status)) && (
                    <div className="flex gap-2">
                      {next && (
                        <button
                          disabled={updating === order.id}
                          onClick={() => updateStatus(order.id, next)}
                          className="flex-1 py-2 rounded-lg bg-crm-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
                        >
                          {updating === order.id ? <Loader2 size={14} className="animate-spin mx-auto" /> : NEXT_LABEL[order.status]}
                        </button>
                      )}
                      {!['Completed', 'Cancelled'].includes(order.status) && (
                        <button
                          disabled={updating === order.id}
                          onClick={() => cancel(order.id)}
                          className="px-3 py-2 rounded-lg bg-crm-danger/10 border border-crm-danger/20 text-crm-danger text-xs font-bold hover:bg-crm-danger hover:text-white transition-all"
                        >
                          <XCircle size={14} />
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
