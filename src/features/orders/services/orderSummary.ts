import { Order } from "@/types/order";

export function getOrderTotal(order: Order) {
  return order.items.reduce(
    (total, item) =>
      total + item.menuItem.price * item.quantity,
    0
  );
}

export function getOrderItemsDescription(order: Order) {
  return order.items
    .map((item) => item.menuItem.name)
    .join(" • ");
}

export function getOrderItemsCount(order: Order) {
  return order.items.reduce(
    (count, item) => count + item.quantity,
    0
  );
}