"use client";

import { RestaurantTable } from "@/types/table";

import TableCard from "./TableCard";

interface Props {
  tables: RestaurantTable[];

  onSelect: (table: RestaurantTable) => void;
}

export default function TableGrid({
  tables,
  onSelect,
}: Props) {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {tables.map((table) => (
        <TableCard
          key={table.id}
          table={table}
          onClick={() => onSelect(table)}
        />
      ))}
    </section>
  );
}