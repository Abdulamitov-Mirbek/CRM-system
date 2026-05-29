'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Briefcase,
  Calendar,
  Heart,
  Mail,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactService } from '@/services/api';
import { Contact, ContactStatus } from '@/types/contact';

const statusStyles: Record<ContactStatus, string> = {
  [ContactStatus.Lead]: 'bg-velocity-cyan/10 border-velocity-cyan/20 text-velocity-cyan',
  [ContactStatus.Prospect]: 'bg-velocity-purple/10 border-velocity-purple/20 text-velocity-purple',
  [ContactStatus.Customer]: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
};

const probabilityByStatus: Record<ContactStatus, number> = {
  [ContactStatus.Lead]: 42,
  [ContactStatus.Prospect]: 68,
  [ContactStatus.Customer]: 92,
};

const healthByStatus: Record<ContactStatus, string> = {
  [ContactStatus.Lead]: 'Developing',
  [ContactStatus.Prospect]: 'Strong',
  [ContactStatus.Customer]: 'Excellent',
};

const initials = (contact: Contact) =>
  `${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`.toUpperCase();

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [contact, setContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setContact(await contactService.getById(params.id));
      } catch {
        setError('Could not load this profile from the CRM API.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [params.id]);

  if (isLoading) {
    return <div className="glass-panel rounded-3xl p-10 text-center text-white/40">Loading executive profile...</div>;
  }

  if (error || !contact) {
    return (
      <div className="space-y-6">
        <Link href="/profiles" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Profiles
        </Link>
        <div className="glass-panel rounded-2xl border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 flex items-center gap-3">
          <AlertCircle size={18} />
          <span>{error || 'Profile not found.'}</span>
        </div>
      </div>
    );
  }

  const name = `${contact.firstName} ${contact.lastName}`;
  const probability = probabilityByStatus[contact.status];

  const timelineEvents = [
    {
      id: 1,
      title: 'Profile synchronized',
      date: formatDate(contact.updatedAt),
      desc: `${name}'s CRM identity was updated from PostgreSQL.`,
    },
    {
      id: 2,
      title: `${contact.status} status confirmed`,
      date: formatDate(contact.createdAt),
      desc: 'Relationship stage is now available to the sales command center.',
    },
    {
      id: 3,
      title: 'Contact record created',
      date: formatDate(contact.createdAt),
      desc: `${contact.email} entered the VELOCITY relationship graph.`,
    },
  ];

  return (
    <div className="space-y-8">
      <Link href="/profiles" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
        <ArrowLeft size={16} />
        Profiles
      </Link>

      <div className="flex flex-col xl:flex-row justify-between items-start gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-velocity-purple to-velocity-cyan p-[2px] shadow-neon-purple">
            <div className="w-full h-full rounded-[22px] bg-background flex items-center justify-center text-3xl font-bold">
              {initials(contact)}
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
            <p className="text-white/40 flex items-center gap-2 mt-1">
              Contact at <span className="text-velocity-cyan font-bold">{contact.company || 'Unassigned Company'}</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className={cn('px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest', statusStyles[contact.status])}>
                {contact.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Live DB Profile
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-2xl glass-panel font-bold hover:bg-white/10 transition-all">Edit Identity</button>
          <button className="px-6 py-3 rounded-2xl bg-velocity-purple text-white font-bold shadow-neon-purple">Compose Action</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/20">Identity Data</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm min-w-0">
                  <Mail className="text-velocity-purple shrink-0" size={18} />
                  <span className="truncate">{contact.email}</span>
                </div>
                <div className="flex items-center gap-4 text-sm min-w-0">
                  <Phone className="text-velocity-purple shrink-0" size={18} />
                  <span className="truncate">{contact.phone || 'No phone captured'}</span>
                </div>
                <div className="flex items-center gap-4 text-sm min-w-0">
                  <Briefcase className="text-velocity-purple shrink-0" size={18} />
                  <span className="truncate">{contact.company || 'Unassigned company'}</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 md:border-l border-white/5 md:pl-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/20">Revenue Impact</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-2xl bg-white/5">
                  <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Relationship Signal</p>
                  <p className="text-xl font-bold">{healthByStatus[contact.status]}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5">
                  <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">AI Probability</p>
                  <p className="text-xl font-bold text-velocity-cyan">{probability}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/20 mb-8">Interaction Timeline</h3>
            <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              {timelineEvents.map((event) => (
                <div key={event.id} className="relative">
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-background border-2 border-velocity-purple flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-velocity-purple shadow-neon-purple" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    <h4 className="font-bold">{event.title}</h4>
                    <span className="text-[10px] text-white/20 uppercase tracking-widest">{event.date}</span>
                  </div>
                  <p className="text-sm text-white/40">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl bg-velocity-purple/5 border-velocity-purple/20">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-velocity-purple" size={24} />
              <h3 className="font-bold">AI Intelligence</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 leading-relaxed italic">
                  "{name} is marked as {contact.status}. Prioritize the next action based on response speed and company fit."
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-white/40">Closing Probability</span>
                    <span className="text-velocity-cyan">{probability}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${probability}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-velocity-cyan shadow-neon-cyan"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-white/40">Deal Health</span>
                    <span className="text-emerald-400">{healthByStatus[contact.status]}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(probability + 6, 100)}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all group">
                Generate Smart Insight
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/20 mb-6">Security & Trust</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <ShieldCheck className="text-emerald-400" size={18} />
                <span>Verified CRM Record</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Heart className="text-rose-400" size={18} />
                <span>{contact.status} Relationship</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Calendar className="text-velocity-cyan" size={18} />
                <span>Created: {formatDate(contact.createdAt)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
