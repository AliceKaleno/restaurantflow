"use client";

import AppCard from "@/components/shared/AppCard";
import { OrderItem } from "@/types/order";
import { formatCurrency } from "@/utils/formatCurrency";

interface OrderSummaryProps {
  items: OrderItem[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = items.reduce(
    (total, item) => total + item.menuItem.price * item.quantity,
    0
  );

  const total = subtotal; // troque aqui se depois quiser somar taxa de entrega, desconto, etc.

  return (
    <AppCard>

      <h2 className="text-xl font-semibold">
        Resumo
      </h2>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">

          <span>Subtotal</span>

          <strong>{formatCurrency(subtotal)}</strong>

        </div>

        <div className="flex justify-between">

          <span>Total</span>

          <strong className="text-xl text-orange-500">
            {formatCurrency(total)}
          </strong>

        </div>

      </div>

    </AppCard>
  );
}