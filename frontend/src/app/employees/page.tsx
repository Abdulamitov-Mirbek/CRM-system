'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { AlertTriangle, Loader2, Mail, ShieldCheck, ToggleLeft, ToggleRight, UserPlus } from 'lucide-react';
import { userService } from '@/services/api';
import { StaffUser, UserRole } from '@/types/user';

const roles: UserRole[] = ['OWNER', 'ADMINISTRATOR', 'MANAGER', 'WAITER'];

const roleLabels: Record<UserRole, string> = {
  OWNER: 'Owner',
  ADMINISTRATOR: 'Administrator',
  MANAGER: 'Manager',
  WAITER: 'Waiter',
};

export default function EmployeesPage() {
  const { data: session } = useSession();
  const currentRole = (session?.user as any)?.role;
  const canInvite = currentRole === 'OWNER' || currentRole === 'ADMINISTRATOR' || currentRole === 'ADMIN';
  const canChangeRole = currentRole === 'OWNER';
  const canChangeStatus = currentRole === 'OWNER';
  const availableInviteRoles = useMemo(
    () => (currentRole === 'OWNER' ? roles : (['WAITER'] as UserRole[])),
    [currentRole]
  );

  const [users, setUsers] = useState<StaffUser[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('WAITER');
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    setError('');
    setLoading(true);

    try {
      setUsers(await userService.getAll());
    } catch (err: any) {
      setError(err.response?.data || 'Не удалось загрузить сотрудников');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const inviteUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTemporaryPassword('');
    setSaving(true);

    try {
      const result = await userService.invite({ email, name, role });
      setUsers((current) => [result.user, ...current]);
      setName('');
      setEmail('');
      setRole('WAITER');

      if (result.temporaryPassword) {
        setTemporaryPassword(result.temporaryPassword);
      }
    } catch (err: any) {
      setError(err.response?.data || 'Не удалось создать сотрудника');
    } finally {
      setSaving(false);
    }
  };

  const updateRole = async (userId: string, nextRole: UserRole) => {
    setError('');

    try {
      const updated = await userService.updateRole(userId, nextRole);
      setUsers((current) => current.map((user) => (user.id === userId ? updated : user)));
    } catch (err: any) {
      setError(err.response?.data || 'Не удалось изменить роль');
    }
  };

  const updateStatus = async (userId: string, isActive: boolean) => {
    setError('');

    try {
      const updated = await userService.updateStatus(userId, isActive);
      setUsers((current) => current.map((user) => (user.id === userId ? updated : user)));
    } catch (err: any) {
      setError(err.response?.data || 'Не удалось изменить статус');
    }
  };

  if (!canInvite) {
    return (
      <main className="p-8 text-white">
        <div className="flex items-center gap-3 text-rose-400">
          <AlertTriangle size={20} />
          <span>Нет доступа к управлению сотрудниками</span>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8 text-white space-y-8">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-velocity-cyan" size={28} />
          <h1 className="text-3xl font-bold tracking-tight">Сотрудники</h1>
        </div>
        <p className="text-white/40">Роли, доступы и статус сотрудников ресторана</p>
      </header>

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 px-4 py-3 rounded-xl flex items-center gap-3">
          <AlertTriangle size={18} />
          <span>{error}</span>
        </div>
      )}

      {temporaryPassword && (
        <div className="bg-velocity-cyan/10 border border-velocity-cyan/20 text-velocity-cyan px-4 py-3 rounded-xl">
          Временный пароль: <span className="font-bold tracking-widest">{temporaryPassword}</span>
        </div>
      )}

      <section className="glass-panel rounded-2xl p-6">
        <form onSubmit={inviteUser} className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_220px_auto] gap-4 items-end">
          <label className="space-y-2">
            <span className="text-sm text-white/50">Имя</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-cyan"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm text-white/50">Email</span>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-velocity-cyan"
                required
              />
            </div>
          </label>
          <label className="space-y-2">
            <span className="text-sm text-white/50">Роль</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full bg-[#0b1020] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-velocity-cyan"
            >
              {availableInviteRoles.map((item) => (
                <option key={item} value={item}>
                  {roleLabels[item]}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            disabled={saving}
            className="h-12 px-5 rounded-xl bg-velocity-cyan text-black font-bold flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {saving ? <Loader2 className="animate-spin" size={18} /> : <UserPlus size={18} />}
            Создать
          </button>
        </form>
      </section>

      <section className="glass-panel rounded-2xl overflow-hidden">
        {loading ? (
          <div className="h-48 flex items-center justify-center">
            <Loader2 className="animate-spin text-velocity-cyan" size={28} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-white/40">
                <tr>
                  <th className="text-left font-medium px-5 py-4">Сотрудник</th>
                  <th className="text-left font-medium px-5 py-4">Роль</th>
                  <th className="text-left font-medium px-5 py-4">Дата создания</th>
                  <th className="text-left font-medium px-5 py-4">Статус</th>
                  <th className="text-right font-medium px-5 py-4">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-white/[0.03]">
                    <td className="px-5 py-4">
                      <div className="font-semibold">{user.name || 'Без имени'}</div>
                      <div className="text-white/40">{user.email}</div>
                    </td>
                    <td className="px-5 py-4">
                      {canChangeRole ? (
                        <select
                          value={user.role}
                          onChange={(e) => updateRole(user.id, e.target.value as UserRole)}
                          className="bg-[#0b1020] border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-velocity-cyan"
                        >
                          {roles.map((item) => (
                            <option key={item} value={item}>
                              {roleLabels[item]}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="text-white/80">{roleLabels[user.role]}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-white/60">{new Date(user.createdAt).toLocaleDateString('ru-RU')}</td>
                    <td className="px-5 py-4">
                      <span className={user.isActive ? 'text-emerald-400' : 'text-rose-400'}>
                        {user.isActive ? 'Активен' : 'Заблокирован'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      {canChangeStatus && (session?.user as any)?.id !== user.id && (
                        <button
                          onClick={() => updateStatus(user.id, !user.isActive)}
                          className="inline-flex items-center gap-2 text-white/60 hover:text-white"
                        >
                          {user.isActive ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                          {user.isActive ? 'Блокировать' : 'Активировать'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
