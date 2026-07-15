"use client";

import { ClipboardList } from "lucide-react";

export default function EmptyOrders() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-slate-300
        py-20
      "
    >
      <ClipboardList
        size={48}
        className="text-slate-400"
      />

      <h2 className="mt-5 text-xl font-semibold">
        Nenhum pedido encontrado
      </h2>

      <p className="mt-2 text-slate-500">
        Clique em Novo Pedido para começar.
      </p>
    </div>
  );
}