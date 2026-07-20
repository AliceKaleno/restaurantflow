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

  menuItemId: string;

  name: string;

  price: number;

  quantity: number;
}

export interface Order {
  id: string;

  customerName: string;

  table: string | null;

  paymentMethod: PaymentMethod;

  status: OrderStatus;

  items: OrderItem[];

  total: number;

  createdAt: string;

  preparingAt?: string;

  readyAt?: string;

  completedAt?: string;
}