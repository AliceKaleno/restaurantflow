import { Order } from "@/types/order";

export function getOrdersByStatus(orders: Order[]) {
  return {
    pendente: orders.filter(
      (o) => o.status === "Pendente"
    ).length,

    preparando: orders.filter(
      (o) => o.status === "Preparando"
    ).length,

    pronto: orders.filter(
      (o) => o.status === "Pronto"
    ).length,

    entregue: orders.filter(
      (o) => o.status === "Entregue"
    ).length,

    cancelado: orders.filter(
      (o) => o.status === "Cancelado"
    ).length,
  };
}