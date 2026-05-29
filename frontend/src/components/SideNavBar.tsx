'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, UserCircle, Kanban, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Profiles', href: '/profiles', icon: UserCircle },
  { name: 'Pipelines', href: '/pipeline', icon: Kanban },
];

export const SideNavBar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-panel z-50 flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-velocity-purple flex items-center justify-center shadow-neon-purple">
          <Zap className="text-white fill-current" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          VELOCITY
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative",
                isActive 
                  ? "bg-velocity-purple/10 text-white" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={20} className={cn(isActive && "text-velocity-purple")} />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-velocity-purple rounded-r-full shadow-neon-purple" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-velocity-purple to-velocity-cyan p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-xs font-bold">
              JD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">Executive</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
