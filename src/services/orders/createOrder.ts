import { Order, OrderItem, PaymentMethod } from "@/types/order";

interface CreateOrderData {
  customerId: string;
  customerName: string;

  tableId: string | null;
  tableNumber: number | null;

  paymentMethod: PaymentMethod;
  items: OrderItem[];
}

export function createOrder({
  customerId,
  customerName,
  tableId,
  tableNumber,
  paymentMethod,
  items,
}: CreateOrderData): Order {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const order: Order = {
    id: crypto.randomUUID(),

    customerId,
    customerName,

    tableId,
    tableNumber,

    paymentMethod,

    status: "Pendente",

    items,

    total,

    createdAt: new Date().toISOString(),
  };

  return order;
}