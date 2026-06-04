"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const navItems = [
  { name: "Рабочий стол",  href: "/dashboard",    icon: LayoutDashboard },
  { name: "Заказы",        href: "/orders",        icon: ShoppingBag },
  { name: "Бронирования",  href: "/reservations",  icon: CalendarDays },
  { name: "Контакты",      href: "/contacts",      icon: Users },
  { name: "Отзывы",        href: "/reviews",       icon: MessageSquare },
  { name: "Профили",       href: "/profiles",      icon: UserCircle },
  { name: "Пайплайны",     href: "/pipeline",      icon: Kanban },
];

const adminItems = [
  { name: "Управление меню", href: "/admin/menu",  icon: UtensilsCrossed },
  { name: "Сотрудники",      href: "/employees",   icon: ShieldCheck },
];

export const SideNavBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userRole = (session?.user as any)?.role;
  const canManage =
    userRole === "OWNER" ||
    userRole === "ADMINISTRATOR" ||
    userRole === "ADMIN";

  if (!session) return null;
  if (pathname?.startsWith("/client-booking") || pathname?.startsWith("/book")) return null;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface border-r border-white/5 z-50 flex flex-col backdrop-blur-md">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-crm flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-crm-primary transition-colors">
              DAAMDA
            </span>
            <span className="text-[10px] text-white/40 font-semibold">CRM</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-3 pb-2">
          Основное
        </div>

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 relative",
                isActive
                  ? "bg-crm-primary/10 text-crm-primary font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5",
              )}
            >
              <Icon size={18} className="flex-shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-crm-primary rounded-r-full" />
              )}
            </Link>
          );
        })}

        {/* Admin Section */}
        {canManage && (
          <div className="pt-4 mt-4 border-t border-white/5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-3 pb-2 pt-2">
              Администрирование
            </div>
            {adminItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 relative",
                    isActive
                      ? "bg-crm-secondary/10 text-crm-secondary font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  <span className="text-sm font-medium">{item.name}</span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-crm-secondary rounded-r-full" />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Client portal link */}
      <div className="px-3 pb-2">
        <a
          href="/book"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-crm-success/10 border border-crm-success/20 text-crm-success text-xs font-semibold hover:bg-crm-success/20 transition-colors"
        >
          <ExternalLink size={14} />
          Страница бронирования
        </a>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-white/5">
        <div className="glass-panel-elevated p-3 rounded-lg flex items-center gap-3 hover:bg-white/[0.08] transition-colors">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crm-primary to-crm-secondary flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">
            {session.user?.name ? session.user.name.substring(0, 2).toUpperCase() : "??"}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold text-white truncate">
              {session.user?.name || "Пользователь"}
            </span>
            <span className="text-[10px] text-white/40 truncate uppercase">
              {userRole || "Пользователь"}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
