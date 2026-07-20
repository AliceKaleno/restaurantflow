import { Order } from "@/types/order";

export function getPeakHours(history: Order[]) {
  const hours: Record<number, number> = {};

  history.forEach((order) => {
    const hour = new Date(order.createdAt).getHours();

    hours[hour] = (hours[hour] ?? 0) + 1;
  });

  return Object.entries(hours)
    .map(([hour, total]) => ({
      hour: `${hour}h`,
      total,
    }))
    .sort(
      (a, b) =>
        Number(a.hour.replace("h", "")) -
        Number(b.hour.replace("h", ""))
    );
}