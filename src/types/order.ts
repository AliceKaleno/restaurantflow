import { MenuItem } from "./menu";

export type OrderStatus =
  | "Pendente"
  | "Preparando"
  | "Pronto"
  | "Entregue"
  | "Cancelado";

export type PaymentMethod = "PIX" | "Cartão" | "Dinheiro";

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {

  id: string;

  customerName: string;

  table: string;

  paymentMethod: PaymentMethod;

  status: OrderStatus;

  items: OrderItem[];

  createdAt: string;

  completedAt?: string;
}