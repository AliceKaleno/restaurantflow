"use client";

import { useOrderStore } from "@/store/orderStore";

import HistoryCard from "./HistoryCard";

export default function HistorySection() {
  const history = useOrderStore(
    (state) => state.history
  );

  if (history.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Histórico
        </h2>

        <p className="text-slate-500">
          Pedidos finalizados e cancelados.
        </p>

      </div>

      <div className="space-y-4">

        {history.map((order) => (

          <HistoryCard
            key={order.id}
            order={order}
          />

        ))}

      </div>

    </section>
  );
}