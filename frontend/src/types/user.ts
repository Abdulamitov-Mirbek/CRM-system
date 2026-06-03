export type UserRole = 'OWNER' | 'ADMINISTRATOR' | 'MANAGER' | 'WAITER';

export interface StaffUser {
  id: string;
  name: string | null;
  email: string;
  role: UserRole;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InviteUserDto {
  email: string;
  name?: string;
  role: UserRole;
}

export interface UpdateUserDto {
  name?: string | null;
  email?: string;
}
