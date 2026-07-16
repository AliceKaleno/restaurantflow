import { create } from "zustand";

import { Order } from "@/types/order";

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => void;

  removeOrder: (id: string) => void;

  clearOrders: () => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
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

  clearOrders: () =>
    set({
      orders: [],
    }),
}));