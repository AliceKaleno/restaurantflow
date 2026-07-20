import { OrderStatus } from "@/types/order";

export function getNextOrderStatus(
  status: OrderStatus
): OrderStatus {

  switch (status) {

    case "Pendente":
      return "Preparando";

    case "Preparando":
      return "Pronto";

    case "Pronto":
      return "Entregue";

    default:
      return status;
  }

}