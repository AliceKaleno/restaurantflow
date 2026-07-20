"use client";

import { useOrderStore } from "@/store/orderStore";

import KitchenCard from "./KitchenCard";
import KitchenEmpty from "./KitchenEmpty";

import { Order } from "@/types/order";

export default function KitchenList() {
  const orders = useOrderStore((state) => state.orders);

  const updateStatus = useOrderStore((state) => state.updateStatus);

  if (orders.length === 0) {
    return <KitchenEmpty />;
  }

  const pending = orders.filter((o) => o.status === "Pendente");

  const preparing = orders.filter((o) => o.status === "Preparando");

  const ready = orders.filter((o) => o.status === "Pronto");

  return (
    <div
      className="
        grid
        gap-6
        xl:grid-cols-3
      "
    >
      <KitchenColumn
        title="🟡 Pendentes"
        orders={pending}
        onAction={(id) => updateStatus(id, "Preparando")}
        action="start"
      />

      <KitchenColumn
        title="🟠 Em preparo"
        orders={preparing}
        onAction={(id) => updateStatus(id, "Pronto")}
        action="finish"
      />

      <KitchenColumn
        title="🟢 Prontos"
        orders={ready}
        onAction={(id) => updateStatus(id, "Entregue")}
        action="deliver"
      />
    </div>
  );
}

interface ColumnProps {
  title: string;

  orders: Order[];

  onAction: (id: string) => void;

  action: "start" | "finish" | "deliver";
}

function KitchenColumn({ title, orders, onAction, action }: ColumnProps) {
  return (
    <div
      className="
        rounded-2xl
        bg-slate-100
        p-4
      "
    >
      <h2 className="mb-5 text-xl font-bold">{title}</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <KitchenCard
            key={order.id}
            order={order}
            onAction={() => onAction(order.id)}
          />
        ))}

        {orders.length === 0 && (
          <p className="py-10 text-center text-slate-400">Nenhum pedido.</p>
        )}
      </div>
    </div>
  );
}
