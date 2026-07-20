"use client";

import { OrderStatus } from "@/types/order";

interface Props {
  value: OrderStatus | "Todos";
  onChange: (status: OrderStatus | "Todos") => void;
  counts: Record<OrderStatus | "Todos", number>;
}

const filters: (OrderStatus | "Todos")[] = [
  "Todos",
  "Pendente",
  "Preparando",
  "Pronto",
  "Entregue",
  "Cancelado",
];

export default function OrdersFilter({
  value,
  onChange,
  counts,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((status) => {
        const active = value === status;

        return (
          <button
            key={status}
            onClick={() => onChange(status)}
            className={`
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              ${
                active
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-500"
              }
            `}
          >
            {status} ({counts[status]})
          </button>
        );
      })}
    </div>
  );
}