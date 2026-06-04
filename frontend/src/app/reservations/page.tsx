'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Plus, 
  Search, 
  CheckCircle2,
  XCircle,
  AlertCircle,
  Utensils,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { reservationService, contactService, tableService } from '@/services/api';
import { Reservation, Table, CreateReservationDto } from '@/types/reservation';
import { Contact } from '@/types/contact';

const statusConfig = {
  Pending: { label: 'Ожидание', color: 'bg-crm-warning/10 border-crm-warning/20 text-crm-warning' },
  Confirmed: { label: 'Подтверждена', color: 'bg-crm-primary/10 border-crm-primary/20 text-crm-primary' },
  Seated: { label: 'За столом', color: 'bg-crm-secondary/10 border-crm-secondary/20 text-crm-secondary' },
  Completed: { label: 'Завершена', color: 'bg-crm-success/10 border-crm-success/20 text-crm-success' },
  Cancelled: { label: 'Отменена', color: 'bg-crm-danger/10 border-crm-danger/20 text-crm-danger' },
};

const formatDate = (date: string) => 
  new Intl.DateTimeFormat('ru-RU', { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  }).format(new Date(date));

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredReservations = reservations.filter(res => {
    const matchesStatus = filter === 'all' || res.status === filter;
    const matchesSearch = searchQuery === '' || 
      res.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.guestCount.toString().includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-crm-primary" size={48} />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Бронирования</h1>
          <p className="text-white/50 font-medium">Управление заказами столиков и гостями</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-crm-primary text-white font-bold hover:bg-blue-600 transition-all shadow-md"
        >
          <Plus size={20} />
          <span>Новая бронь</span>
        </button>
      </div>

      {/* New Booking Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="crm-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Новое бронирование</h2>
            <form onSubmit={handleCreate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Client Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Клиент *</label>
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    value={formData.contactId}
                    onChange={e => setFormData({ ...formData, contactId: e.target.value })}
                  >
                    <option value="" className="bg-slate-900">Выберите клиента</option>
                    {contacts.map(c => (
                      <option key={c.id} value={c.id} className="bg-slate-900">
                        {c.firstName} {c.lastName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Table Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Столик</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    value={formData.tableId || ''}
                    onChange={e => setFormData({ ...formData, tableId: e.target.value || undefined })}
                  >
                    <option value="" className="bg-slate-900">Без назначения</option>
                    {tables.map(t => (
                      <option key={t.id} value={t.id} className="bg-slate-900">
                        Стол №{t.number} ({t.capacity} мест)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Count */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Гостей *</label>
                  <input 
                    type="number" 
                    min="1"
                    max="50"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    value={formData.guestCount}
                    onChange={e => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                  />
                </div>

                {/* Start Time */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Начало *</label>
                  <input 
                    type="datetime-local" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    value={formData.startTime}
                    onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                  />
                </div>

                {/* End Time */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Конец *</label>
                  <input 
                    type="datetime-local" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    value={formData.endTime}
                    onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                  />
                </div>

                {/* Notes */}
                <div className="md:col-span-3 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Заметки</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
                    rows={2}
                    placeholder="Добавьте специальные пожелания или заметки..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-white/5 text-white/60 font-semibold hover:bg-white/10 transition-all"
                >
                  Отмена
                </button>
                <button 
                  type="submit"
                  className="px-8 py-2.5 rounded-lg bg-crm-primary text-white font-semibold hover:bg-blue-600 transition-all"
                >
                  Создать бронь
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          <input 
            type="text"
            placeholder="Поиск по клиентам, гостям..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-crm-primary/50 focus:bg-white/10"
          />
        </div>
        
        <div className="flex gap-2">
          {['all', 'Pending', 'Confirmed', 'Seated', 'Completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-semibold transition-all',
                filter === status 
                  ? 'bg-crm-primary text-white' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              )}
            >
              {status === 'all' ? 'Все' : statusConfig[status as keyof typeof statusConfig]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reservations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReservations.length > 0 ? (
          filteredReservations.map((res, idx) => (
            <motion.div 
              key={res.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="crm-card p-6 rounded-2xl flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{res.contactName}</h3>
                  <p className="text-xs text-white/40 mt-1">ID: {res.id.substring(0, 8)}</p>
                </div>
                <span className={cn("px-3 py-1 rounded-full border text-[10px] font-bold uppercase", statusConfig[res.status as keyof typeof statusConfig]?.color)}>
                  {statusConfig[res.status as keyof typeof statusConfig]?.label}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center gap-3 text-sm">
                  <CalendarIcon size={16} className="text-crm-primary flex-shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs">Дата и время</p>
                    <p className="text-white font-medium">{formatDate(res.startTime)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-crm-secondary flex-shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs">Гостей</p>
                    <p className="text-white font-medium">{res.guestCount} человек</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Utensils size={16} className="text-crm-accent flex-shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs">Столик</p>
                    <p className="text-white font-medium">{res.tableNumber ? `Стол №${res.tableNumber}` : 'Не назначен'}</p>
                  </div>
                </div>

                {res.notes && (
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <p className="text-[10px] text-white/50 font-semibold mb-1">ЗАМЕТКИ</p>
                    <p className="text-xs text-white/80">{res.notes}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                {res.status === 'Pending' && (
                  <button 
                    onClick={() => updateStatus(res.id, 'Confirmed')}
                    className="w-full py-2 rounded-lg bg-crm-primary/10 border border-crm-primary/20 text-crm-primary text-xs font-bold uppercase tracking-widest hover:bg-crm-primary hover:text-white transition-all"
                  >
                    <CheckCircle2 className="inline mr-2" size={14} />
                    Подтвердить
                  </button>
                )}
                {res.status === 'Confirmed' && (
                  <button 
                    onClick={() => updateStatus(res.id, 'Seated')}
                    className="w-full py-2 rounded-lg bg-crm-secondary/10 border border-crm-secondary/20 text-crm-secondary text-xs font-bold uppercase tracking-widest hover:bg-crm-secondary hover:text-white transition-all"
                  >
                    <Utensils className="inline mr-2" size={14} />
                    За столом
                  </button>
                )}
                {res.status === 'Seated' && (
                  <button 
                    onClick={() => updateStatus(res.id, 'Completed')}
                    className="w-full py-2 rounded-lg bg-crm-success/10 border border-crm-success/20 text-crm-success text-xs font-bold uppercase tracking-widest hover:bg-crm-success hover:text-white transition-all"
                  >
                    <CheckCircle2 className="inline mr-2" size={14} />
                    Завершить
                  </button>
                )}
                
                {['Pending', 'Confirmed', 'Seated'].includes(res.status) && (
                  <button 
                    onClick={() => updateStatus(res.id, 'Cancelled')}
                    className="w-full py-2 rounded-lg bg-crm-danger/10 border border-crm-danger/20 text-crm-danger text-xs font-bold uppercase tracking-widest hover:bg-crm-danger hover:text-white transition-all"
                  >
                    <XCircle className="inline mr-2" size={14} />
                    Отменить
                  </button>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <AlertCircle className="mx-auto mb-4 text-white/30" size={48} />
            <p className="text-white/50 font-medium">Нет бронирований</p>
          </div>
        )}
      </div>
    </div>
  );
}
