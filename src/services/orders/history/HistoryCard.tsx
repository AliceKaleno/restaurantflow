"use client";

import { Clock3 } from "lucide-react";

import AppCard from "@/components/shared/AppCard";

import { Order } from "@/types/order";

import {
  getOrderItemsDescription,
  getOrderTotal,
} from "@/features/orders/services/orderSummary";

import { formatCurrency } from "@/utils/formatCurrency";

export default function HistoryCard({
  order,
}: {
  order: Order;
}) {

  return (

    <AppCard>

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-bold">
            {order.customerName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {getOrderItemsDescription(order)}
          </p>

        </div>

        <div className="text-right">

          <strong>
            {formatCurrency(
              getOrderTotal(order)
            )}
          </strong>

          <p className="mt-1 text-sm text-slate-500">
            {order.status}
          </p>

        </div>

      </div>

      <div
        className="
          mt-4
          flex
          items-center
          gap-2
          text-sm
          text-slate-400
        "
      >

        <Clock3 size={15} />

        {new Date(
          order.completedAt ??
          order.createdAt
        ).toLocaleString("pt-BR")}

      </div>

    </AppCard>

  );

}