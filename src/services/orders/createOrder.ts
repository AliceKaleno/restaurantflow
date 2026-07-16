import { Order, OrderItem } from "@/types/order";

interface CreateOrderData {
  customerName: string;
  table?: string;
  items: OrderItem[];
}

export function createOrder({
  customerName,
  table,
  items,
}: CreateOrderData): Order {
  const total = items.reduce(
    (sum, item) =>
      sum + item.menuItem.price * item.quantity,
    0
  );

  return {
    id: crypto.randomUUID(),

    customerName,

    table,

    items,

    total,

    paymentMethod: "PIX",

    status: "Pendente",

    createdAt: new Date().toISOString(),
  };
}