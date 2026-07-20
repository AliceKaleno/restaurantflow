import { Order } from "@/types/order";

export function getTodayOrders(history: Order[]) {
  const today = new Date().toDateString();

  return history.filter(
    (order) =>
      order.completedAt &&
      new Date(order.completedAt).toDateString() === today
  );
}

export function getTodayRevenue(history: Order[]) {
  return getTodayOrders(history).reduce(
    (total, order) => total + order.total,
    0
  );
}

export function getAverageTicket(history: Order[]) {
  const orders = getTodayOrders(history);

  if (orders.length === 0) return 0;

  return (
    orders.reduce((sum, order) => sum + order.total, 0) /
    orders.length
  );
}

export function getOrdersCount(history: Order[]) {
  return getTodayOrders(history).length;
}

export function getCompletedOrders(history: Order[]) {
  return history.filter(
    (order) => order.status === "Entregue"
  ).length;
}

export function getCanceledOrders(history: Order[]) {
  return history.filter(
    (order) => order.status === "Cancelado"
  ).length;
}

export function getTopProducts(history: Order[]) {
  const products = new Map<
    string,
    {
      name: string;
      quantity: number;
    }
  >();

  history.forEach((order) => {
    order.items.forEach((item) => {
      const existing = products.get(item.menuItemId);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        products.set(item.menuItemId, {
          name: item.name,
          quantity: item.quantity,
        });
      }
    });
  });

  return [...products.values()]
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);
}

export function getRevenueByHour(history: Order[]) {
  const hours = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    revenue: 0,
  }));

  history.forEach((order) => {
    if (!order.completedAt) return;

    const hour = new Date(order.completedAt).getHours();

    hours[hour].revenue += order.total;
  });

  return hours;
}