"use client";

import AppCard from "@/components/shared/AppCard";

import { Order } from "@/types/order";

import { getOrderItemsDescription } from "@/features/orders/services/orderSummary";

import { getOrderStatusStyle } from "@/utils/orderStatus";
import { formatCurrency } from "@/utils/formatCurrency";

import { useOrderStore } from "@/store/orderStore";

import OrderStatusAction from "./OrderStatusAction";

import { useTableStore } from "@/store/tableStore";
interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  const style = getOrderStatusStyle(order.status);
  const Icon = style.icon;

  const updateStatus = useOrderStore((state) => state.updateStatus);

  const updateTable = useTableStore((state) => state.updateTable);

  return (
    <AppCard
      className="
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              ${style.bg}
            `}
          >
            <Icon size={24} className={style.text} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-bold">#{order.id.slice(0, 5)}</h2>

              <span className="text-slate-400">•</span>

              <span className="text-slate-500">
                {order.tableNumber ? `Mesa ${order.tableNumber}` : "Delivery"}
              </span>
            </div>

            <h3 className="mt-1 text-xl font-semibold">{order.customerName}</h3>

            <p className="mt-2 text-sm text-slate-500">
              {getOrderItemsDescription(order)}
            </p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold text-slate-900">
            {formatCurrency(order.total)}
          </h2>

          <span
            className={`
              mt-3
              inline-flex
              rounded-full
              px-3
              py-1
              text-sm
              font-medium
              ${style.bg}
              ${style.text}
            `}
          >
            {order.status}
          </span>
        </div>
      </div>

      <OrderStatusAction
        status={order.status}
        onChange={(status) => {
          updateStatus(order.id, status);

          if (status === "Entregue" || status === "Cancelado") {
            updateTable(order.tableId!,{
              status: "Livre",
              reservationTime: undefined,
            });
          }
        }}
      />
    </AppCard>
  );
}
