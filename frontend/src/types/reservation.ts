export interface Reservation {
  id: string;
  contactId: string;
  contactName: string;
  tableId?: string;
  tableNumber?: string;
  guestCount: number;
  startTime: string;
  endTime: string;
  status: 'Pending' | 'Confirmed' | 'Seated' | 'Cancelled' | 'Completed';
  notes?: string;
  createdAt: string;
}

export interface CreateReservationDto {
  contactId: string;
  tableId?: string;
  guestCount: number;
  startTime: string;
  endTime: string;
  notes?: string;
}

export interface Table {
  id: string;
  number: string;
  capacity: number;
  branchId: string;
}
