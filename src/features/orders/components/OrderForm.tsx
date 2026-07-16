"use client";

import { useState } from "react";

import OrderItems from "./OrderItems";
import OrderSummary from "./OrderSummary";

import { OrderItem } from "@/types/order";

export default function OrderForm() {
  const [items, setItems] = useState<OrderItem[]>([]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">

      <div className="lg:col-span-2">
        <OrderItems
          items={items}
          setItems={setItems}
        />
      </div>

      <OrderSummary
        items={items}
      />

    </div>
  );
}