'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, Briefcase, Mail, Search, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactService } from '@/services/api';
import { Contact, ContactStatus } from '@/types/contact';

const statusNames: Record<string, string> = {
  [ContactStatus.Lead]: 'Лид',
  [ContactStatus.Prospect]: 'Перспективный',
  [ContactStatus.Customer]: 'Клиент',
};

const statusStyles: Record<ContactStatus, string> = {
  [ContactStatus.Lead]: 'bg-velocity-cyan/10 border-velocity-cyan/20 text-velocity-cyan',
  [ContactStatus.Prospect]: 'bg-velocity-purple/10 border-velocity-purple/20 text-velocity-purple',
  [ContactStatus.Customer]: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
};

const initials = (contact: Contact) =>
  `${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`.toUpperCase();

export default function ProfilesPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        setContacts(await contactService.getAll());
      } catch {
        setError('Не удалось загрузить профили из базы данных.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProfiles();
  }, []);

  const filteredContacts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return contacts;
    }

    return contacts.filter((contact) =>
      [contact.firstName, contact.lastName, contact.email, contact.company, contact.status].some((value) =>
        value?.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [contacts, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Профили контактов</h1>
          <p className="text-white/40 mt-1">Идентификация личностей из PostgreSQL</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск профилей..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-velocity-cyan/50"
          />
        </div>
      </div>

      {error && (
        <div className="glass-panel rounded-2xl border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 flex items-center gap-3">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {isLoading ? (
        <div className="glass-panel rounded-3xl p-10 text-center text-white/40">Загрузка профилей...</div>
      ) : filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <motion.div key={contact.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Link href={`/profiles/${contact.id}`} className="glass-panel p-6 rounded-3xl block group hover:border-velocity-cyan/30 transition-all">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-velocity-purple to-velocity-cyan p-[2px]">
                    <div className="w-full h-full rounded-[14px] bg-background flex items-center justify-center text-xl font-bold">
                      {initials(contact)}
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-velocity-cyan transition-colors" />
                </div>

                <h2 className="text-xl font-bold group-hover:text-velocity-cyan transition-colors">
                  {contact.firstName} {contact.lastName}
                </h2>
                <div className="mt-3 space-y-2 text-sm text-white/40">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail size={14} className="shrink-0 text-velocity-purple" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <Briefcase size={14} className="shrink-0 text-velocity-purple" />
                    <span className="truncate">{contact.company || 'Компания не указана'}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className={cn('px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest', statusStyles[contact.status])}>
                    {statusNames[contact.status]}
                  </span>
                  <UserCircle size={18} className="text-white/20" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-10 text-center">
          <p className="text-lg font-bold">Профили не найдены</p>
          <p className="text-white/40 text-sm mt-2">Сначала создайте контакты, и они появятся здесь.</p>
        </div>
      )}
    </div>
  );
}
