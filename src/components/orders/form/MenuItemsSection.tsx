"use client";

import { Plus } from "lucide-react";

import { MenuItem } from "@/types/menu";
import { OrderItem } from "@/types/order";

import { useMemo, useState } from "react";

interface Props {
  menu: MenuItem[];
  items: OrderItem[];
  onAdd: (menuItem: MenuItem) => void;
  onRemove: (menuItemId: string) => void;
}

export default function MenuItemsSection({ menu, items, onAdd }: Props) {
  const [search, setSearch] = useState("");

  const availableItems = useMemo(() => {
    return menu
      .filter(
        (item) => !items.some((orderItem) => orderItem.menuItem.id === item.id),
      )
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [menu, items, search]);

  return (
    <div
      className="
        flex
        min-h-0
        flex-1
        flex-col
        space-y-4
      "
    >
      <div>
        <label className="font-medium">Adicionar pratos</label>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar prato..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-orange-500
        "
      />

      <div
        className="
    max-h-56
    space-y-3
    overflow-y-auto
    pr-2
  "
      >
        <div className="space-y-3 pb-6">
          {availableItems.length === 0 ? (
            <div
              className="
              rounded-xl
              border
              border-dashed
              p-6
              text-center
              text-slate-500
            "
            >
              Todos os pratos já foram adicionados ao pedido.
            </div>
          ) : (
            availableItems.map((item) => (
              <div
                key={item.id}
                className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                p-3
                transition
                hover:border-orange-300
                hover:bg-orange-50/40
              "
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>

                  <p className="text-sm text-slate-500">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => onAdd(item)}
                  className="
                  rounded-full
                  bg-orange-500
                  p-2
                  text-white
                  transition
                  hover:bg-orange-600
                "
                >
                  <Plus size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
