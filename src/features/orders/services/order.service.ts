import { OrderItem } from "../types/order";

export function getOrderSubtotal(
  items: OrderItem[]
) {
  return items.reduce(
    (acc, item) =>
      acc +
      item.menuItem.price *
        item.quantity,
    0
  );
}

export function getOrderTotal(
  items: OrderItem[]
) {
  return getOrderSubtotal(items);
}