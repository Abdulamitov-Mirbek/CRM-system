"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  RefreshCw,
  LogOut,
  Loader2,
  Settings,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const TopNavBar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

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
  if (pathname?.startsWith('/client-booking') || pathname?.startsWith('/book')) return null;

  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-surface border-b border-white/5 z-40 px-8 flex items-center justify-between backdrop-blur-md">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-crm-primary transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Поиск контактов, сделок, компаний..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-crm-primary/50 focus:bg-white/10 transition-all placeholder:text-white/30"
          />

          {/* Search Results Dropdown */}
          {showResults && (query.length >= 2 || loading) && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-panel-elevated rounded-lg overflow-hidden shadow-card-hover border border-white/10 z-50">
              {loading ? (
                <div className="p-4 flex justify-center">
                  <Loader2
                    className="animate-spin text-crm-primary"
                    size={20}
                  />
                </div>
              ) : results.length > 0 ? (
                <div className="py-2 max-h-96 overflow-y-auto">
                  {results.map((contact) => (
                    <Link
                      key={contact.id}
                      href={`/contacts`}
                      onClick={() => setShowResults(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/[0.02] last:border-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-crm-primary/20 flex items-center justify-center text-xs font-bold text-crm-primary flex-shrink-0">
                        {contact.firstName[0]}
                        {contact.lastName[0]}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-white truncate">
                          {contact.firstName} {contact.lastName}
                        </span>
                        <span className="text-[10px] text-white/40 uppercase">
                          {contact.company || "Частное лицо"}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-white/40">
                  Ничего не найдено
                </div>
              )}
            </div>
          )}
          {showResults && (
            <div
              className="fixed inset-0 z-[-1]"
              onClick={() => setShowResults(false)}
            />
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-8">
        {/* Sync Button */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-crm-primary/10 text-crm-primary text-sm font-semibold hover:bg-crm-primary/20 transition-all border border-crm-primary/20 group">
          <RefreshCw
            size={16}
            className="group-hover:rotate-180 transition-transform duration-500"
          />
          <span className="hidden sm:inline">Синхро</span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/5" />

        {/* Notification Bell */}
        <button className="relative p-2 text-white/40 hover:text-white transition-colors group">
          <Bell
            size={20}
            className="group-hover:text-crm-primary transition-colors"
          />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-5 h-5 bg-crm-danger text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Settings Button */}
        <button className="p-2 text-white/40 hover:text-white transition-colors group">
          <Settings
            size={20}
            className="group-hover:text-crm-primary transition-colors"
          />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/5" />

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-semibold"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Выход</span>
        </button>
      </div>
    </header>
  );
};
