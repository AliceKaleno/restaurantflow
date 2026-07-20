"use client";

import { Search } from "lucide-react";

interface CustomerToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onNewCustomer: () => void;
}

export default function CustomerToolbar({
  search,
  onSearchChange,
  onNewCustomer,
}: CustomerToolbarProps) {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Buscar cliente..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            pl-10
            pr-4
            outline-none
            transition
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-200
          "
        />
      </div>

      <button
        onClick={onNewCustomer}
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
        + Novo Cliente
      </button>
    </section>
  );
}