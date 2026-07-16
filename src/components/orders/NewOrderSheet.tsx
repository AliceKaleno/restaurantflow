"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import CustomerSection from "./form/CustomerSection";
import TableSection from "./form/TableSection";
import MenuItemsSection from "./form/MenuItemsSection";
import SummarySection from "./form/SummarySection";

import { useMenuStore } from "@/store/menuStore";

import { OrderItem } from "@/types/order";
import { MenuItem } from "@/types/menu";

import { ClipboardList } from "lucide-react";

import { createOrder } from "@/services/orders/createOrder";
import { useOrderStore } from "@/store/orderStore";

export default function NewOrderSheet() {
  const [customer, setCustomer] = useState("");

  const [table, setTable] = useState("");

  const menu = useMenuStore((state) => state.items);

  const addOrder = useOrderStore((state) => state.addOrder);

  const [items, setItems] = useState<OrderItem[]>([]);

  function handleAddItem(menuItem: MenuItem) {
    setItems((current) => {
      const existing = current.find((item) => item.menuItem.id === menuItem.id);

      if (existing) {
        return current.map((item) =>
          item.menuItem.id === menuItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...current,
        {
          id: crypto.randomUUID(),
          menuItem,
          quantity: 1,
        },
      ];
    });
  }

  function handleRemoveItem(menuItemId: string | number) {
    setItems((current) => {
      const existing = current.find((item) => item.menuItem.id === menuItemId);

      if (!existing) return current;

      if (existing.quantity === 1) {
        return current.filter((item) => item.menuItem.id !== menuItemId);
      }

      return current.map((item) =>
        item.menuItem.id === menuItemId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    });
  }

  function handleCancel() {
    setCustomer("");
    setTable("");
    setItems([]);
  }

  function handleSaveOrder() {
    if (!customer.trim()) {
      alert("Informe o nome do cliente.");
      return;
    }

    if (items.length === 0) {
      alert("Adicione pelo menos um prato.");
      return;
    }

    const order = createOrder({
      customerName: customer,
      table,
      items,
    });

    addOrder(order);

    handleCancel();
  }

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            className="
              rounded-xl
              bg-orange-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
          >
            + Novo Pedido
          </button>
        }
      />

      <SheetContent
        className="
          flex
          h-full
          flex-col
          overflow-hidden
        "
      >
        <SheetHeader className="items-center text-center">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <ClipboardList className="text-orange-500" size={26} />
          </div>

          <SheetTitle>Novo Pedido</SheetTitle>

          <SheetDescription>
            Cadastre um novo pedido para o restaurante.
          </SheetDescription>
        </SheetHeader>

        <div
          className="
            flex-1
            space-y-6
            overflow-y-auto
            p-4
          "
        >
          <CustomerSection value={customer} onChange={setCustomer} />

          <TableSection value={table} onChange={setTable} />

          <MenuItemsSection
            menu={menu}
            items={items}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />

          <SummarySection
            items={items}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />
        </div>

        <SheetFooter
          className="
            flex
            flex-row
            gap-3
            border-t
            p-4
          "
        >
          <button
            onClick={handleCancel}
            className="
              flex-1
              rounded-xl
              border
              border-slate-300
              py-3
              font-semibold
              transition
              hover:bg-slate-100
            "
          >
            Cancelar
          </button>

          <button
            onClick={handleSaveOrder}
            className="
              flex-1
              rounded-xl
              bg-orange-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
          >
            Salvar Pedido
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}