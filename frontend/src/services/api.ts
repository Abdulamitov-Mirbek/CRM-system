import axios from 'axios';
import { Contact, CreateContactDto } from '../types/contact';
import { Reservation, CreateReservationDto, Table } from '../types/reservation';
import { Category, MenuItem, Branch } from '../types/menu';
import { Review, MailingCampaign } from '../types/marketing';
import { DashboardSummary, AnalyticsReport } from '../types/analytics';
import { StaffUser, InviteUserDto, UpdateUserDto, UserRole } from '../types/user';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  getAll: async (): Promise<Contact[]> => {
    const response = await api.get<Contact[]>('/contacts');
    return response.data;
  },

  getById: async (id: string): Promise<Contact> => {
    const response = await api.get<Contact>(`/contacts/${id}`);
    return response.data;
  },

  create: async (contact: CreateContactDto): Promise<Contact> => {
    const response = await api.post<Contact>('/contacts', contact);
    return response.data;
  },

  update: async (id: string, contact: Partial<CreateContactDto>): Promise<Contact> => {
    const response = await api.put<Contact>(`/contacts/${id}`, contact);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/contacts/${id}`);
  },
};

export const reservationService = {
  getAll: async (): Promise<Reservation[]> => {
    const response = await api.get<Reservation[]>('/reservations');
    return response.data;
  },
  create: async (reservation: CreateReservationDto): Promise<Reservation> => {
    const response = await api.post<Reservation>('/reservations', reservation);
    return response.data;
  },
  updateStatus: async (id: string, status: string): Promise<void> => {
    await api.put(`/reservations/${id}/status`, { status });
  },
};

export const tableService = {
  getAll: async (): Promise<Table[]> => {
    const response = await api.get<Table[]>('/tables');
    return response.data;
  },
};

export const menuService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>('/menu/categories');
    return response.data;
  },
  createCategory: async (name: string): Promise<Category> => {
    const response = await api.post<Category>('/menu/categories', { name });
    return response.data;
  },
  createMenuItem: async (item: Partial<MenuItem>): Promise<MenuItem> => {
    const response = await api.post<MenuItem>('/menu/items', item);
    return response.data;
  },
  updateAvailability: async (id: string, isAvailable: boolean): Promise<void> => {
    await api.patch(`/menu/items/${id}/availability`, isAvailable);
  },
};

export const branchService = {
  getAll: async (): Promise<Branch[]> => {
    const response = await api.get<Branch[]>('/branches');
    return response.data;
  },
  create: async (branch: Partial<Branch>): Promise<Branch> => {
    const response = await api.post<Branch>('/branches', branch);
    return response.data;
  },
};

export const marketingService = {
  getReviews: async (): Promise<Review[]> => {
    const response = await api.get<Review[]>('/reviews');
    return response.data;
  },
  respondToReview: async (id: string, response: string, responderId: string): Promise<void> => {
    await api.post(`/reviews/${id}/respond`, { response, responderId });
  },
  sendCampaign: async (campaign: MailingCampaign): Promise<any> => {
    const response = await api.post('/mailing/send', campaign);
    return response.data;
  },
};

export const analyticsService = {
  getSummary: async (): Promise<DashboardSummary> => {
    const response = await api.get<DashboardSummary>('/analytics/summary');
    return response.data;
  },
  getReport: async (): Promise<AnalyticsReport> => {
    const response = await api.get<AnalyticsReport>('/analytics/report');
    return response.data;
  },
};

export const userService = {
  getAll: async (): Promise<StaffUser[]> => {
    const response = await api.get<StaffUser[]>('/users');
    return response.data;
  },

  getById: async (id: string): Promise<StaffUser> => {
    const response = await api.get<StaffUser>(`/users/${id}`);
    return response.data;
  },

  invite: async (data: InviteUserDto): Promise<{ user: StaffUser; method: string; temporaryPassword?: string }> => {
    const response = await api.post('/users/invite', data);
    return response.data;
  },

  update: async (id: string, data: UpdateUserDto): Promise<StaffUser> => {
    const response = await api.put<StaffUser>(`/users/${id}`, data);
    return response.data;
  },

  updateRole: async (id: string, role: UserRole): Promise<StaffUser> => {
    const response = await api.put<StaffUser>(`/users/${id}/role`, { role });
    return response.data;
  },

  updateStatus: async (id: string, isActive: boolean): Promise<StaffUser> => {
    const response = await api.put<StaffUser>(`/users/${id}/status`, { isActive });
    return response.data;
  },
};

export default api;
