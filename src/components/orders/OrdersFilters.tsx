"use client";

const filters = [
  "Todos",
  "Pendente",
  "Em preparo",
  "Pronto",
  "Entregue",
  "Cancelado",
];

export default function OrdersFilters() {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (

        <button
          key={filter}
          className="
            rounded-full
            bg-slate-100
            px-5
            py-2
            text-sm
            transition
            hover:bg-orange-100
          "
        >
          {filter}
        </button>

      ))}

    </div>
  );
}