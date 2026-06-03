export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  isAvailable: boolean;
}

export interface Branch {
  id: string;
  name: string;
  address?: string;
}
