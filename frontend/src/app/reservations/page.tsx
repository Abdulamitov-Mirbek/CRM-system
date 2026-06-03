'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  MoreHorizontal, 
  Plus, 
  Search, 
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Utensils
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { reservationService, contactService, tableService } from '@/services/api';
import { Reservation, Table, CreateReservationDto } from '@/types/reservation';
import { Contact } from '@/types/contact';

const statusColors = {
  Pending: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Confirmed: 'text-velocity-cyan bg-velocity-cyan/10 border-velocity-cyan/20',
  Seated: 'text-velocity-purple bg-velocity-purple/10 border-velocity-purple/20',
  Completed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Cancelled: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
};

const formatDate = (date: string) => 
  new Intl.DateTimeFormat('ru', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(date));

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<CreateReservationDto>({
    contactId: '',
    tableId: undefined,
    guestCount: 2,
    startTime: '',
    endTime: '',
    notes: '',
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resData, contactData, tableData] = await Promise.all([
        reservationService.getAll(),
        contactService.getAll(),
        tableService.getAll()
      ]);
      setReservations(resData);
      setContacts(contactData);
      setTables(tableData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const created = await reservationService.create(formData);
      setReservations([created, ...reservations]);
      setIsFormOpen(false);
      setFormData({
        contactId: '',
        tableId: undefined,
        guestCount: 2,
        startTime: '',
        endTime: '',
        notes: '',
      });
    } catch (error) {
      alert('Ошибка при создании брони');
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await reservationService.updateStatus(id, status);
      setReservations(reservations.map(r => r.id === id ? { ...r, status: status as any } : r));
    } catch (error) {
      alert('Ошибка при обновлении статуса');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Бронирования</h1>
          <p className="text-white/40 mt-1">Управление столиками и гостями кафе</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-velocity-purple text-white font-bold shadow-neon-purple hover:scale-105 transition-all"
        >
          <Plus size={20} />
          <span>Новая бронь</span>
        </button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Клиент</label>
                <select 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
                  value={formData.contactId}
                  onChange={e => setFormData({ ...formData, contactId: e.target.value })}
                >
                  <option value="" className="bg-slate-900">Выберите клиента</option>
                  {contacts.map(c => (
                    <option key={c.id} value={c.id} className="bg-slate-900">{c.firstName} {c.lastName}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Столик</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
                  value={formData.tableId || ''}
                  onChange={e => setFormData({ ...formData, tableId: e.target.value || undefined })}
                >
                  <option value="" className="bg-slate-900">Без назначения</option>
                  {tables.map(t => (
                    <option key={t.id} value={t.id} className="bg-slate-900">Стол №{t.number} (мест: {t.capacity})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Гости</label>
                <input 
                  type="number" 
                  min="1"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
                  value={formData.guestCount}
                  onChange={e => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Начало</label>
                <input 
                  type="datetime-local" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
                  value={formData.startTime}
                  onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Конец</label>
                <input 
                  type="datetime-local" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50"
                  value={formData.endTime}
                  onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                />
              </div>

              <div className="md:col-span-3 flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-3 rounded-2xl bg-white/5 text-white/60 font-bold hover:text-white transition-all"
                >
                  Отмена
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 rounded-2xl bg-velocity-cyan text-background font-bold shadow-neon-cyan hover:scale-105 transition-all"
                >
                  Забронировать
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservations.map((res) => (
          <motion.div 
            layout
            key={res.id}
            className="glass-panel p-6 rounded-3xl group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <CalendarIcon className="text-velocity-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-velocity-cyan transition-colors">{res.contactName}</h3>
                  <p className="text-xs text-white/40 font-medium">Создано: {new Date(res.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <span className={cn("px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest", statusColors[res.status])}>
                {res.status}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-velocity-cyan" />
                <span className="text-white/60 font-medium">{formatDate(res.startTime)} — {new Date(res.endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users size={16} className="text-velocity-purple" />
                <span className="text-white/60 font-medium">{res.guestCount} гостей</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Utensils size={16} className="text-emerald-400" />
                <span className="text-white/60 font-medium">{res.tableNumber ? `Стол №${res.tableNumber}` : 'Стол не назначен'}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {res.status === 'Pending' && (
                <button 
                  onClick={() => updateStatus(res.id, 'Confirmed')}
                  className="flex-1 py-2 rounded-xl bg-velocity-cyan/10 border border-velocity-cyan/20 text-velocity-cyan text-xs font-bold uppercase tracking-widest hover:bg-velocity-cyan hover:text-background transition-all"
                >
                  Подтвердить
                </button>
              )}
              {res.status === 'Confirmed' && (
                <button 
                  onClick={() => updateStatus(res.id, 'Seated')}
                  className="flex-1 py-2 rounded-xl bg-velocity-purple/10 border border-velocity-purple/20 text-velocity-purple text-xs font-bold uppercase tracking-widest hover:bg-velocity-purple hover:text-white transition-all"
                >
                  Посадить
                </button>
              )}
              {['Pending', 'Confirmed', 'Seated'].includes(res.status) && (
                <button 
                  onClick={() => updateStatus(res.id, 'Cancelled')}
                  className="p-2 rounded-xl bg-rose-400/10 border border-rose-400/20 text-rose-400 hover:bg-rose-400 hover:text-white transition-all"
                >
                  <XCircle size={18} />
                </button>
              )}
              {res.status === 'Seated' && (
                <button 
                  onClick={() => updateStatus(res.id, 'Completed')}
                  className="p-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 hover:bg-emerald-400 hover:text-background transition-all"
                >
                  <CheckCircle2 size={18} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
