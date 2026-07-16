"use client";

import { Dispatch, SetStateAction } from "react";

import { useMenuStore } from "@/store/menuStore";
import { OrderItem } from "@/types/order";

interface OrderItemsProps {
  items: OrderItem[];
  setItems: Dispatch<SetStateAction<OrderItem[]>>;
}

export default function OrderItems({ items, setItems }: OrderItemsProps) {
  const menu = useMenuStore(
    (state) => state.items
  );

  function handleAdd(menuItemId: string | number) {
    const menuItem = menu.find((item) => item.id === menuItemId);

    if (!menuItem) return;

    setItems((old) => {
      const existing = old.find(
        (orderItem) => orderItem.menuItem.id === menuItemId
      );

      if (existing) {
        return old.map((orderItem) =>
          orderItem.menuItem.id === menuItemId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }

      return [
        ...old,
        {
          id: crypto.randomUUID(),
          menuItem,
          quantity: 1,
          
        },
      ];
    });
  }

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold">
        Cardápio
      </h2>

      {menu.map((item) => (

        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border p-4"
        >

          <div>

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-sm text-slate-500">
              R$ {item.price.toFixed(2)}
            </p>

          </div>

          <button
            onClick={() => handleAdd(item.id)}
            className="
              rounded-lg
              bg-orange-500
              px-4
              py-2
              text-white
            "
          >
            Adicionar
          </button>

        </div>

      ))}

    </div>
  );
}