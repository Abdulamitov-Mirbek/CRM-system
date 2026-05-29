import axios from 'axios';
import { Contact, CreateContactDto } from '../types/contact';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

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

export default api;
