"use client";

import { useTableStore } from "@/store/tableStore";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TableSection({
  value,
  onChange,
}: Props) {
  const tables = useTableStore(
    (state) => state.tables
  );

  const availableTables = tables.filter(
    (table) => table.status === "Livre"
  );

  return (
    <div className="space-y-2">

      <label className="font-medium">
        Mesa
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-orange-500
        "
      >
        <option value="">
          Selecione uma mesa
        </option>

        {availableTables.map((table) => (
          <option
            key={table.id}
            value={table.id}
          >
            Mesa {table.number}
          </option>
        ))}

      </select>

    </div>
  );
}