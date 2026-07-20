import { Order } from "@/types/order";

function isToday(date: Date) {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function getTodayRevenue(history: Order[]) {
  return history
    .filter((order) => isToday(new Date(order.createdAt)))
    .reduce((sum, order) => sum + order.total, 0);
}

export function getWeekRevenue(history: Order[]) {
  const now = new Date();

  const weekAgo = new Date();

  weekAgo.setDate(now.getDate() - 7);

  return history
    .filter(
      (order) =>
        new Date(order.createdAt) >= weekAgo
    )
    .reduce((sum, order) => sum + order.total, 0);
}

export function getMonthRevenue(history: Order[]) {
  const now = new Date();

  return history
    .filter((order) => {
      const date = new Date(order.createdAt);

      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    })
    .reduce((sum, order) => sum + order.total, 0);
}

export function getAverageTicket(history: Order[]) {
  if (!history.length) return 0;

  const total = history.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return total / history.length;
}