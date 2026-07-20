import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Order, OrderStatus } from "@/types/order";

interface OrderStore {
  orders: Order[];

  history: Order[];

  addOrder: (order: Order) => void;

  removeOrder: (id: string) => void;

  updateStatus: (id: string, status: OrderStatus) => void;

  clearOrders: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],

      history: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      removeOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id),
        })),

      updateStatus: (id, status) =>
        set((state) => {
          const order = state.orders.find((o) => o.id === id);

          if (!order) return state;

          const updatedOrder = {
            ...order,
            status,

            completedAt:
              status === "Entregue" || status === "Cancelado"
                ? new Date().toISOString()
                : undefined,
          };

          if (status === "Entregue" || status === "Cancelado") {
            return {
              orders: state.orders.filter((o) => o.id !== id),

              history: [updatedOrder, ...state.history],
            };
          }

          return {
            orders: state.orders.map((o) => (o.id === id ? updatedOrder : o)),
          };
        }),

      clearOrders: () =>
        set({
          orders: [],
          history: [],
        }),
    }),
    {
      name: "restaurantflow-orders",
    },
  ),
);
