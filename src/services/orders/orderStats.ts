import { Order } from "@/types/order";

export function getOrderStats(
  orders: Order[],
  history: Order[]
) {
  const allOrders = [...orders, ...history];

  const revenue = history
    .filter((o) => o.status === "Entregue")
    .reduce(
      (sum, order) => sum + order.total,
      0
    );

  const pending = orders.filter(
    (o) => o.status === "Pendente"
  ).length;

  const preparing = orders.filter(
    (o) => o.status === "Preparando"
  ).length;

  const ready = orders.filter(
    (o) => o.status === "Pronto"
  ).length;

  const delivered = history.filter(
    (o) => o.status === "Entregue"
  ).length;

  const canceled = history.filter(
    (o) => o.status === "Cancelado"
  ).length;

  const averageTicket =
    delivered === 0
      ? 0
      : revenue / delivered;

  return {
    revenue,

    averageTicket,

    pending,

    preparing,

    ready,

    delivered,

    canceled,

    totalOrders: allOrders.length,
  };
}