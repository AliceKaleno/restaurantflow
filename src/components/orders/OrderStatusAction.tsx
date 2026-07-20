"use client";

import {
  Play,
  Check,
  Truck,
  CheckCheck,
} from "lucide-react";

import { OrderStatus } from "@/types/order";

interface Props {
  status: OrderStatus;
  onChange: (status: OrderStatus) => void;
}

export default function OrderStatusAction({
  status,
  onChange,
}: Props) {
  switch (status) {
    case "Pendente":
      return (
        <button
          onClick={() => onChange("Preparando")}
          className="
            mt-4
            w-full
            rounded-xl
            bg-amber-500
            px-4
            py-3
            font-semibold
            text-white
            transition
            hover:bg-amber-600
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Play size={18} />
            Iniciar preparo
          </div>
        </button>
      );

    case "Preparando":
      return (
        <button
          onClick={() => onChange("Pronto")}
          className="
            mt-4
            w-full
            rounded-xl
            bg-blue-600
            px-4
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Check size={18} />
            Marcar como pronto
          </div>
        </button>
      );

    case "Pronto":
      return (
        <button
          onClick={() => onChange("Entregue")}
          className="
            mt-4
            w-full
            rounded-xl
            bg-green-600
            px-4
            py-3
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Truck size={18} />
            Entregar pedido
          </div>
        </button>
      );

    case "Entregue":
      return (
        <button
          disabled
          className="
            mt-4
            w-full
            cursor-not-allowed
            rounded-xl
            bg-slate-200
            px-4
            py-3
            font-semibold
            text-slate-500
          "
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCheck size={18} />
            Pedido concluído
          </div>
        </button>
      );

    case "Cancelado":
      return (
        <button
          disabled
          className="
            mt-4
            w-full
            cursor-not-allowed
            rounded-xl
            bg-red-100
            px-4
            py-3
            font-semibold
            text-red-600
          "
        >
          Pedido cancelado
        </button>
      );
  }
}