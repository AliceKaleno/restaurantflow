"use client";

import AppCard from "@/components/shared/AppCard";

import { Order } from "@/features/orders/types/order";

import {
  getOrderItemsDescription,
  getOrderTotal,
} from "@/features/orders/services/orderSummary";

import { getOrderStatusStyle } from "@/utils/orderStatus";
import { formatCurrency } from "@/utils/formatCurrency";

interface Props {
  order: Order;
}

export default function OrderCard({
  order,
}: Props) {
  const style = getOrderStatusStyle(order.status);
  const Icon = style.icon;

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
            <Icon
              size={24}
              className={style.text}
            />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-bold">
                #{order.id.slice(0, 5)}
              </h2>

              <span className="text-slate-400">
                •
              </span>

              <span className="text-slate-500">
                {order.table || "Delivery"}
              </span>
            </div>

            <h3 className="mt-1 text-xl font-semibold">
              {order.customerName}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {getOrderItemsDescription(order)}
            </p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold text-slate-900">
            {formatCurrency(getOrderTotal(order))}
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
    </AppCard>
  );
}