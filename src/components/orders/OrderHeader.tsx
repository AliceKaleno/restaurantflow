"use client";

import { useOrderStore } from "@/store/orderStore";

import NewOrderSheet from "./NewOrderSheet"

export default function OrdersHeader() {
  const orders = useOrderStore((state) => state.orders);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Pedidos
        </h1>

        <p className="mt-2 text-slate-500">
          {orders.length} pedido{orders.length !== 1 && "s"} cadastrados
        </p>
      </div>

      <NewOrderSheet />
    </div>
  );
}