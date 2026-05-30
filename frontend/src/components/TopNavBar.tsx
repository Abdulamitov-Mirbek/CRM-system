'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell, RefreshCw, Zap, Loader2 } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export const TopNavBar = () => {
  const { data: session } = useSession();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.contacts || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchResults, 300);
    return () => clearTimeout(timer);
  }, [query]);

  if (!session) return null;

  return (
    <header className="fixed top-0 left-64 right-0 h-20 glass-panel z-40 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-velocity-cyan transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Поиск контактов, компаний..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-velocity-cyan/50 focus:bg-white/10 transition-all"
          />
          
          {showResults && (query.length >= 2 || loading) && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-50">
              {loading ? (
                <div className="p-4 flex justify-center">
                  <Loader2 className="animate-spin text-velocity-cyan" size={20} />
                </div>
              ) : results.length > 0 ? (
                <div className="py-2">
                  {results.map((contact) => (
                    <Link
                      key={contact.id}
                      href={`/contacts`}
                      onClick={() => setShowResults(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-velocity-purple/20 flex items-center justify-center text-xs font-bold text-velocity-purple">
                        {contact.firstName[0]}{contact.lastName[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{contact.firstName} {contact.lastName}</span>
                        <span className="text-[10px] text-white/40 uppercase">{contact.company || 'Частное лицо'}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-white/40">Ничего не найдено</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-velocity-purple/10 text-velocity-purple text-sm font-semibold hover:bg-velocity-purple/20 transition-all border border-velocity-purple/20">
          <RefreshCw size={16} />
          <span>Синхронизация</span>
        </button>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <button className="relative p-2 text-white/40 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-velocity-cyan rounded-full shadow-neon-cyan" />
          </button>
          
          <div className="w-px h-6 bg-white/10" />
          
          <div className="flex items-center gap-3">
             <button 
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-rose-400 transition-colors"
             >
               Выйти
             </button>
          </div>
        </div>
      </div>
      {showResults && <div className="fixed inset-0 z-[-1]" onClick={() => setShowResults(false)} />}
    </header>
  );
};
