import { Order } from "@/types/order";

export function getTopProducts(history: Order[]) {
  const products: Record<
    string,
    {
      name: string;
      quantity: number;
    }
  > = {};

  history.forEach((order) => {
    order.items.forEach((item) => {
      if (!products[item.menuItemId]) {
        products[item.menuItemId] = {
          name: item.name,
          quantity: 0,
        };
      }

      products[item.menuItemId].quantity += item.quantity;
    });
  });

  return Object.values(products)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);
}