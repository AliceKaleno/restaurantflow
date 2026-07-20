export interface Customer {
  id: string;

  name: string;

  email: string;

  phone: string;

  totalOrders: number;

  totalSpent: number;

  lastVisit: string;

  status: "Novo" | "Frequente" | "VIP";

  createdAt: string;
}