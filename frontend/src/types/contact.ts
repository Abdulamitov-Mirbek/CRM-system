export enum ContactStatus {
  Lead = 'Lead',
  Prospect = 'Prospect',
  Customer = 'Customer'
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  birthday?: string;
  gender?: string;
  address?: string;
  status: ContactStatus;
  bonusBalance: number;
  loyaltyLevel: string;
  totalSpent: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  birthday?: string;
  gender?: string;
  address?: string;
  status: ContactStatus;
}
