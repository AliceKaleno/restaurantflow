import { create } from "zustand";

import { RestaurantTable } from "@/types/table";

interface TableStore {
  tables: RestaurantTable[];

  addTable: (table: RestaurantTable) => void;

  updateTable: (
    id: string,
    data: Partial<RestaurantTable>
  ) => void;

  removeTable: (id: string) => void;
}

export const useTableStore = create<TableStore>(
  (set) => ({
    tables: [],

    addTable: (table) =>
      set((state) => ({
        tables: [...state.tables, table],
      })),

    updateTable: (id, data) =>
      set((state) => ({
        tables: state.tables.map((table) =>
          table.id === id
            ? { ...table, ...data }
            : table
        ),
      })),

    removeTable: (id) =>
      set((state) => ({
        tables: state.tables.filter(
          (table) => table.id !== id
        ),
      })),
  })
);