import { Order } from "@/types/order";

export function getDashboardAnalytics(history: Order[]) {
  const revenueByPayment = {
    PIX: 0,
    Cartão: 0,
    Dinheiro: 0,
  };

  const products = new Map<string, number>();

  history
    .filter((order) => order.status === "Entregue")
    .forEach((order) => {
      revenueByPayment[order.paymentMethod] += order.total;

      order.items.forEach((item) => {
        products.set(
          item.name,
          (products.get(item.name) || 0) + item.quantity
        );
      });
    });

  const topProducts = [...products.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, quantity]) => ({
      name,
      quantity,
    }));

  return {
    revenueByPayment,

    topProducts,
  };
}