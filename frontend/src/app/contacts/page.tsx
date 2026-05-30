'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Briefcase,
  Filter,
  Mail,
  MoreVertical,
  Phone,
  Plus,
  RefreshCw,
  Search,
  UserPlus,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactService } from '@/services/api';
import { Contact, ContactStatus, CreateContactDto } from '@/types/contact';

const emptyForm: CreateContactDto = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  status: ContactStatus.Lead,
};

const statusNames: Record<string, string> = {
  [ContactStatus.Lead]: 'Лид',
  [ContactStatus.Prospect]: 'Перспективный',
  [ContactStatus.Customer]: 'Клиент',
};

const statusStyles: Record<ContactStatus, string> = {
  [ContactStatus.Lead]: 'bg-velocity-cyan shadow-[0_0_8px_rgba(76,215,246,0.6)]',
  [ContactStatus.Prospect]: 'bg-velocity-purple shadow-[0_0_8px_rgba(139,92,246,0.6)]',
  [ContactStatus.Customer]: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
};

const statusPillStyles: Record<ContactStatus, string> = {
  [ContactStatus.Lead]: 'bg-velocity-cyan/10 border-velocity-cyan/20 text-velocity-cyan',
  [ContactStatus.Prospect]: 'bg-velocity-purple/10 border-velocity-purple/20 text-velocity-purple',
  [ContactStatus.Customer]: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
};

const getInitials = (contact: Contact) =>
  `${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`.toUpperCase();

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('ru', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));

const ContactCard = ({ contact }: { contact: Contact }) => {
  const name = `${contact.firstName} ${contact.lastName}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel p-6 rounded-3xl group hover:border-velocity-cyan/30 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xl font-bold">
            {getInitials(contact)}
          </div>
          <div className={cn('absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-background', statusStyles[contact.status])} />
        </div>
        <button className="p-2 text-white/20 hover:text-white transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      <h3 className="text-lg font-bold mb-1 group-hover:text-velocity-cyan transition-colors">{name}</h3>
      <div className="flex items-center gap-2 text-white/40 text-xs mb-4 min-w-0">
        <Mail size={12} className="shrink-0" />
        <span className="truncate">{contact.email}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-1 min-w-0">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Компания</p>
          <div className="flex items-center gap-1.5 text-sm min-w-0">
            <Briefcase size={14} className="text-velocity-purple shrink-0" />
            <span className="truncate">{contact.company || 'Не указано'}</span>
          </div>
        </div>
        <div className="space-y-1 min-w-0">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Телефон</p>
          <div className="flex items-center gap-1.5 text-sm font-bold text-velocity-cyan min-w-0">
            <Phone size={14} className="shrink-0" />
            <span className="truncate">{contact.phone || 'Нет номера'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
          {formatDate(contact.createdAt)}
        </span>
        <span className={cn('px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest', statusPillStyles[contact.status])}>
          {statusNames[contact.status]}
        </span>
      </div>
    </motion.div>
  );
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ContactStatus | 'All'>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreateContactDto>(emptyForm);

  const loadContacts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await contactService.getAll();
      setContacts(data);
    } catch {
      setError('Не удалось подключиться к API. Убедитесь, что база данных запущена.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const filteredContacts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return contacts.filter((contact) => {
      const matchesStatus = statusFilter === 'All' || contact.status === statusFilter;
      const matchesSearch = !query || [
        contact.firstName,
        contact.lastName,
        contact.email,
        contact.phone,
        contact.company,
      ].some((value) => value?.toLowerCase().includes(query));

      return matchesStatus && matchesSearch;
    });
  }, [contacts, searchQuery, statusFilter]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const created = await contactService.create(formData);
      setContacts((current) => [created, ...current]);
      setFormData(emptyForm);
      setIsFormOpen(false);
    } catch {
      setError('Контакт не был сохранен. Проверьте соединение с базой.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Список контактов</h1>
          <p className="text-white/40 mt-1">Управление отношениями в реальном времени</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Поиск контактов..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-velocity-cyan/50"
            />
          </div>
          <button
            onClick={loadContacts}
            className="p-2.5 rounded-2xl glass-panel text-white/40 hover:text-white transition-colors"
          >
            <RefreshCw size={20} className={cn(isLoading && 'animate-spin')} />
          </button>
          <button
            onClick={() => setIsFormOpen(true)}
            className="p-2.5 rounded-2xl bg-velocity-cyan text-background hover:shadow-[0_0_20px_rgba(76,215,246,0.35)] transition-all"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {error && (
        <div className="glass-panel rounded-2xl border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 flex items-center gap-3">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {isFormOpen && (
        <form onSubmit={handleCreate} className="glass-panel rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">Новый контакт</h2>
              <p className="text-white/40 text-sm">Данные сохраняются напрямую в базу</p>
            </div>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="p-2 rounded-2xl bg-white/5 text-white/40 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Имя" className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Фамилия" className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50" />
            <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50" />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="Компания" className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50" />
            <select name="status" value={formData.status} onChange={handleChange} className="bg-[#111827] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-velocity-cyan/50">
              <option value={ContactStatus.Lead}>Лид</option>
              <option value={ContactStatus.Prospect}>Перспективный</option>
              <option value={ContactStatus.Customer}>Клиент</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-2xl bg-velocity-purple px-5 py-2.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] disabled:opacity-60 transition-all"
            >
              <UserPlus size={18} />
              {isSaving ? 'Сохранение...' : 'Создать контакт'}
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/40">Фильтры</h2>
              <Filter size={18} className="text-white/20" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Статус отношений</label>
              <div className="space-y-2">
                {(['All', ContactStatus.Lead, ContactStatus.Prospect, ContactStatus.Customer] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={cn(
                      'w-full flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-colors',
                      statusFilter === status
                        ? 'border-velocity-cyan/40 bg-velocity-cyan/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/40 hover:text-white'
                    )}
                  >
                    <span>{status === 'All' ? 'Все' : statusNames[status]}</span>
                    <span className="text-xs text-white/30">
                      {status === 'All' ? contacts.length : contacts.filter((contact) => contact.status === status).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="glass-panel rounded-3xl p-10 text-center text-white/40">Загрузка контактов...</div>
          ) : filteredContacts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-10 text-center">
              <p className="text-lg font-bold">Контактов не найдено</p>
              <p className="text-white/40 text-sm mt-2">Добавьте контакт, чтобы увидеть его здесь.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
