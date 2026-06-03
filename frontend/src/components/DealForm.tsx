'use client';

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { contactService } from '../services/api';
import { Contact } from '../types/contact';
import { Stage } from '../types/pipeline';

interface DealFormProps {
  stages: Stage[];
  onClose: () => void;
  onSuccess: (deal: any) => void;
}

export default function DealForm({ stages, onClose, onSuccess }: DealFormProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    value: 0,
    contactId: '',
    stageId: stages[0]?.id || '',
  });

  useEffect(() => {
    contactService.getAll().then(setContacts);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      console.error('Error creating deal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h2 className="text-xl font-bold">Новая сделка</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Заголовок</label>
            <input
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-purple transition-all"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="Напр. Продажа лицензий"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Сумма ($)</label>
              <input
                type="number"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-purple transition-all"
                value={formData.value}
                onChange={e => setFormData({ ...formData, value: parseFloat(e.target.value) })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Этап</label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-purple transition-all appearance-none"
                value={formData.stageId}
                onChange={e => setFormData({ ...formData, stageId: e.target.value })}
              >
                {stages.map(stage => (
                  <option key={stage.id} value={stage.id} className="bg-slate-900">{stage.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Контакт</label>
            <select
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-purple transition-all appearance-none"
              value={formData.contactId}
              onChange={e => setFormData({ ...formData, contactId: e.target.value })}
            >
              <option value="" className="bg-slate-900">Выберите контакт</option>
              {contacts.map(contact => (
                <option key={contact.id} value={contact.id} className="bg-slate-900">
                  {contact.firstName} {contact.lastName} ({contact.company})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Описание</label>
            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-purple transition-all h-24 resize-none"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              placeholder="Детали сделки..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-velocity-purple text-white font-bold shadow-neon-purple hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
          >
            {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Создать сделку'}
          </button>
        </form>
      </div>
    </div>
  );
}
