import { create } from "zustand";
import { persist } from "zustand/middleware";

import { MenuItem } from "@/types/menu";
import { initialMenu } from "@/data/menu";

interface MenuStore {
  items: MenuItem[];

  editingItem: MenuItem | null;

  addItem: (item: MenuItem) => void;

  removeItem: (id: string) => void;

  updateItem: (
    id: string,
    data: Partial<MenuItem>
  ) => void;

  setItems: (items: MenuItem[]) => void;

  setEditingItem: (
    item: MenuItem | null
  ) => void;
}

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      items: initialMenu,

      editingItem: null,

      addItem: (item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        })),

      updateItem: (id, data) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...data,
                }
              : item
          ),
        })),

      setItems: (items) =>
        set({
          items,
        }),

      setEditingItem: (item) =>
        set({
          editingItem: item,
        }),
    }),
    {
      name: "restaurantflow-menu",
    }
  )
);