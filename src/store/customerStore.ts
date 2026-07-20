import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Customer } from "@/types/customer";

interface CustomerStore {
  customers: Customer[];

  addCustomer: (customer: Customer) => void;

  updateCustomer: (customer: Customer) => void;

  removeCustomer: (id: string) => void;
}

export const useCustomerStore = create<CustomerStore>()(
  persist(
    (set) => ({
      customers: [],

      addCustomer: (customer) =>
        set((state) => ({
          customers: [customer, ...state.customers],
        })),

      updateCustomer: (customer) =>
        set((state) => ({
          customers: state.customers.map((item) =>
            item.id === customer.id ? customer : item
          ),
        })),

      removeCustomer: (id) =>
        set((state) => ({
          customers: state.customers.filter(
            (customer) => customer.id !== id
          ),
        })),
    }),

    {
      name: "restaurantflow-customers",
    }
  )
);