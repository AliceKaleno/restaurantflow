import { Order } from "@/types/order";

export function getRevenueLast7Days(history: Order[]) {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const result = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();

    date.setDate(date.getDate() - i);

    const revenue = history
      .filter((order) => {
        const orderDate = new Date(order.createdAt);

        return (
          orderDate.getDate() === date.getDate() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getFullYear() === date.getFullYear()
        );
      })
      .reduce((sum, order) => sum + order.total, 0);

    result.push({
      day: days[date.getDay()],
      revenue,
    });
  }

  return result;
}