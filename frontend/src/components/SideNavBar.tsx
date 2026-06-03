'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CalendarDays,
  Kanban,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  UserCircle,
  Users,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

const navItems = [
  { name: 'Дашборд', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Бронирования', href: '/reservations', icon: CalendarDays },
  { name: 'Контакты', href: '/contacts', icon: Users },
  { name: 'Отзывы', href: '/reviews', icon: MessageSquare },
  { name: 'Профили', href: '/profiles', icon: UserCircle },
  { name: 'Пайплайны', href: '/pipeline', icon: Kanban },
];

const adminItems = [
  { name: 'Управление меню', href: '/admin/menu', icon: UtensilsCrossed },
  { name: 'Сотрудники', href: '/employees', icon: ShieldCheck },
];

export const SideNavBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userRole = (session?.user as any)?.role;
  const canManage = userRole === 'OWNER' || userRole === 'ADMINISTRATOR' || userRole === 'ADMIN';

  if (!session) return null;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-panel z-50 flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-daamda-purple flex items-center justify-center shadow-neon-purple">
          <Zap className="text-white fill-current" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          DAAMDA
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative',
                isActive ? 'bg-daamda-purple/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon size={20} className={cn(isActive && 'text-velocity-purple')} />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-velocity-purple rounded-r-full shadow-neon-purple" />
              )}
            </Link>
          );
        })}

        {canManage && (
          <>
            <div className="pt-6 pb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
              Администрирование
            </div>
            {adminItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative',
                    isActive ? 'bg-daamda-cyan/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'
                  )}
                >
                  <item.icon size={20} className={cn(isActive && 'text-daamda-cyan')} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-velocity-cyan rounded-r-full shadow-neon-cyan" />
                  )}
                </Link>
              );
            })}
          </>
        )}
      </nav>

      <div className="p-4 mt-auto">
        <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-daamda-purple to-daamda-cyan p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-xs font-bold uppercase">
              {session.user?.name ? session.user.name.substring(0, 2) : '??'}
            </div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold truncate">{session.user?.name || 'User'}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest truncate">{session.user?.email}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
