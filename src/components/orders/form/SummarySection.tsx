"use client";

import { ClipboardList } from "lucide-react";

import AppCard from "@/components/shared/AppCard";

import { OrderItem } from "@/types/order";
import { MenuItem } from "@/types/menu";

import { formatCurrency } from "@/utils/formatCurrency";

interface Props {
  items: OrderItem[];

  onAdd: (menuItem: MenuItem) => void;

  onRemove: (id: string | number) => void;
}

export default function SummarySection({
  items,
  onAdd,
  onRemove,
}: Props) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0,
  );

  return (
    <AppCard className="p-5">
      <div className="mb-4 flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
          <ClipboardList className="text-orange-500" size={22} />
        </div>

        <h2 className="text-lg font-semibold">Resumo do Pedido</h2>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-sm text-slate-500">
          Nenhum prato adicionado.
        </p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="font-medium">{item.menuItem.name}</p>

                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={() => onRemove(item.menuItem.id)}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-200
                      transition
                      hover:bg-slate-300
                    "
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => onAdd(item.menuItem)}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                      text-white
                      transition
                      hover:bg-orange-600
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              <strong>
                {formatCurrency(item.menuItem.price * item.quantity)}
              </strong>
            </div>
          ))}

          <div className="my-3 border-t" />

          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>

            <span>{formatCurrency(subtotal)}</span>
          </div>

          <div className="flex justify-between text-xl font-bold text-orange-500">
            <span>Total</span>

            <span>{formatCurrency(subtotal)}</span>
          </div>
        </div>
      )}
    </AppCard>
  );
}