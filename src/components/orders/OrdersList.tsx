"use client";

import { useOrderStore } from "@/store/orderStore";

import EmptyOrders from "./EmptyOrders";
import OrderCard from "./OrderCard";

import { useState } from "react";

import OrdersFilter from "./OrdersFilters";

import { OrderStatus } from "@/types/order";

export default function OrdersList() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  const [statusFilter, setStatusFilter] =
  useState<OrderStatus | "Todos">("Todos");

  const filteredOrders =
  statusFilter === "Todos"
    ? orders
    : orders.filter(
        (order) => order.status === statusFilter
      );

   const counts = {
  Todos: orders.length,

  Pendente: orders.filter(
    (o) => o.status === "Pendente"
  ).length,

  Preparando: orders.filter(
    (o) => o.status === "Preparando"
  ).length,

  Pronto: orders.filter(
    (o) => o.status === "Pronto"
  ).length,

  Entregue: orders.filter(
    (o) => o.status === "Entregue"
  ).length,

  Cancelado: orders.filter(
    (o) => o.status === "Cancelado"
  ).length,
};   

  if (orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
  <div className="space-y-6">

    <OrdersFilter
      value={statusFilter}
      onChange={setStatusFilter}
      counts={counts}
    />

    <div className="space-y-5">
      {filteredOrders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>

  </div>
);
}