"use client";

import AppCard from "@/components/shared/AppCard";

import { Clock } from "lucide-react";

import { Order } from "@/types/order";

interface Props {
  order: Order;

  onAction: () => void;
}

export default function KitchenCard({
  order,
  onAction,
}: Props) {
  const button = getButtonConfig(order.status);

  return (
    <AppCard
      className="
        space-y-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Mesa {order.table || "-"}
          </h2>

          <p className="text-slate-500">
            {order.customerName}
          </p>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Clock size={18} />

          <span>
            {new Date(order.createdAt).toLocaleTimeString(
              "pt-BR",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <span>
              {item.quantity}x {item.name}
            </span>

            <strong>
              R$ {(item.price * item.quantity).toFixed(2)}
            </strong>
          </div>
        ))}
      </div>

      <button
        onClick={onAction}
        className={`
          w-full
          rounded-xl
          py-3
          font-semibold
          text-white
          transition
          hover:brightness-110
          ${button.color}
        `}
      >
        {button.label}
      </button>
    </AppCard>
  );
}

function getButtonConfig(status: Order["status"]) {
  switch (status) {
    case "Pendente":
      return {
        label: "Iniciar preparo",
        color: "bg-amber-500",
      };

    case "Preparando":
      return {
        label: "Marcar como pronto",
        color: "bg-blue-500",
      };

    case "Pronto":
      return {
        label: "Entregar pedido",
        color: "bg-green-600",
      };

    default:
      return {
        label: "",
        color: "",
      };
  }
}