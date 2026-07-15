import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Order } from "@/features/orders/types/order";

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => void;

  removeOrder: (id: string) => void;

  updateOrder: (
    id: string,
    data: Partial<Order>
  ) => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      removeOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter(
            (order) => order.id !== id
          ),
        })),

      updateOrder: (id, data) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id
              ? {
                  ...order,
                  ...data,
                }
              : order
          ),
        })),
    }),
    {
      name: "restaurantflow-orders",
    }
  )
);