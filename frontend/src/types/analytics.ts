export interface DashboardSummary {
  totalRevenue: number;
  dailyRevenue: number;
  averageCheck: number;
  totalOrders: number;
  totalCustomers: number;
}

export interface PopularItem {
  name: string;
  quantity: number;
  revenue: number;
}

export interface AnalyticsReport {
  revenueByDay: { label: string; value: number }[];
  topDishes: PopularItem[];
  topDrinks: PopularItem[];
}
