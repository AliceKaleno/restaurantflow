import { Order } from "@/types/order";

export interface OrderStatistics {
  totalOrders: number;

  activeOrders: number;

  completedOrders: number;

  cancelledOrders: number;

  totalRevenue: number;

  averageTicket: number;

  pending: number;

  preparing: number;

  ready: number;

  delivered: number;
}

export function getOrderStatistics(
  activeOrders: Order[],
  history: Order[],
): OrderStatistics {

  const allOrders = [
    ...activeOrders,
    ...history,
  ];

  const completedOrders =
    history.filter(
      (order) => order.status === "Entregue"
    );

  const cancelledOrders =
    history.filter(
      (order) => order.status === "Cancelado"
    );

  const totalRevenue =
    completedOrders.reduce(
      (total, order) =>
        total +
        order.items.reduce(
          (subtotal, item) =>
            subtotal +
            item.price * item.quantity,
          0,
        ),
      0,
    );

  return {

    totalOrders: allOrders.length,

    activeOrders: activeOrders.length,

    completedOrders: completedOrders.length,

    cancelledOrders: cancelledOrders.length,

    totalRevenue,

    averageTicket:
      completedOrders.length === 0
        ? 0
        : totalRevenue /
          completedOrders.length,

    pending:
      activeOrders.filter(
        (o) => o.status === "Pendente"
      ).length,

    preparing:
      activeOrders.filter(
        (o) => o.status === "Preparando"
      ).length,

    ready:
      activeOrders.filter(
        (o) => o.status === "Pronto"
      ).length,

    delivered:
      completedOrders.length,
  };

}