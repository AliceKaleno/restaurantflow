import { Order, OrderItem, PaymentMethod } from "@/types/order";

interface CreateOrderData {
  customerName: string;
  table: string;
  paymentMethod: PaymentMethod;
  items: OrderItem[];
}

export function createOrder({
  customerName,
  table,
  paymentMethod,
  items,
}: CreateOrderData): Order {
  const now = new Date().toISOString();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const order: Order = {
    id: crypto.randomUUID(),

    customerName,

    table: table.trim() || null,

    items,

    total,

    paymentMethod,

    status: "Pendente",

    createdAt: now,

    preparingAt: undefined,

    readyAt: undefined,

    completedAt: undefined,
  };

  return order;
}