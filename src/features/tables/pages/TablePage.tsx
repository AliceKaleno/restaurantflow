"use client";

import { useState } from "react";

import TableHeader from "../components/TableHeader";
import TableStats from "../components/TableStats";
import TableGrid from "../components/TableGrid";
import TableSheet from "../components/TableSheet";
import NewTableSheet from "../components/NewTableSheet";

import { useTableStore } from "@/store/tableStore";

import { RestaurantTable } from "@/types/table";

export default function TablesPage() {
  const tables = useTableStore((state) => state.tables);

  const [selectedTable, setSelectedTable] =
    useState<RestaurantTable | null>(null);

  const [sheetOpen, setSheetOpen] = useState(false);

  const [newTableOpen, setNewTableOpen] =
    useState(false);

  function handleOpenTable(table: RestaurantTable) {
    setSelectedTable(table);

    setSheetOpen(true);
  }

  return (
    <div className="space-y-8">

      <TableHeader />

      <div className="flex justify-end">

        <button
          onClick={() => setNewTableOpen(true)}
          className="
            rounded-xl
            bg-orange-500
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          + Nova Mesa
        </button>

      </div>

      <TableStats />

      <TableGrid
        tables={tables}
        onSelect={handleOpenTable}
      />

      <TableSheet
        table={selectedTable}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />

      <NewTableSheet
        open={newTableOpen}
        onOpenChange={setNewTableOpen}
      />

    </div>
  );
}