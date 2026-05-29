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
  status: ContactStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  status: ContactStatus;
}
