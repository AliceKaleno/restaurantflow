import { MenuItem } from "@/types/menu";

export type OrderStatus =
  | "Pendente"
  | "Em preparo"
  | "Pronto"
  | "Entregue"
  | "Cancelado";

export type PaymentMethod =
  | "Dinheiro"
  | "Cartão"
  | "PIX";

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
}