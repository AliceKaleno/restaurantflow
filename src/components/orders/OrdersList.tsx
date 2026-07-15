"use client";

import { useOrderStore } from "@/store/orderStore";

import EmptyOrders from "./EmptyOrders";
import OrderCard from "./OrderCard";

export default function OrdersList() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  if (orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
    <div className="space-y-5">

      {orders.map((order) => (

        <OrderCard
          key={order.id}
          order={order}
        />

      ))}

    </div>
  );
}