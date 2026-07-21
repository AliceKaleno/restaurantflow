"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ClipboardList } from "lucide-react";

import CustomerSection from "./form/CustomerSection";
import TableSection from "./form/TableSection";
import MenuItemsSection from "./form/MenuItemsSection";
import SummarySection from "./form/SummarySection";

import { useMenuStore } from "@/store/menuStore";
import { useOrderStore } from "@/store/orderStore";

import { MenuItem } from "@/types/menu";
import { OrderItem } from "@/types/order";

import { createOrder } from "@/services/orders/createOrder";

import { PaymentMethod } from "@/types/order";

import PaymentSection from "./form/PaymentSection";

import { useTableStore } from "@/store/tableStore";

export default function NewOrderSheet() {
  const [customer, setCustomer] = useState("");

  const [table, setTable] = useState("");

  const [items, setItems] = useState<OrderItem[]>([]);

  const menu = useMenuStore((state) => state.items);

  const addOrder = useOrderStore((state) => state.addOrder);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("PIX");

  const tables = useTableStore((state) => state.tables);

  const updateTable = useTableStore((state) => state.updateTable);

  const selectedTable = tables.find((t) => t.id === table);

  function handleAddItem(menuItem: MenuItem) {
    setItems((current) => {
      const existing = current.find(
        (item) => item.menuItemId === String(menuItem.id),
      );

      if (existing) {
        return current.map((item) =>
          item.menuItemId === String(menuItem.id)
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
          menuItemId: String(menuItem.id),
          name: menuItem.name,
          price: menuItem.price,
          quantity: 1,
        },
      ];
    });
  }

  function handleIncreaseItem(menuItemId: string) {
    setItems((current) =>
      current.map((item) =>
        item.menuItemId === menuItemId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function handleRemoveItem(menuItemId: string | number) {
    setItems((current) => {
      const existing = current.find((item) => item.menuItemId === menuItemId);

      if (!existing) return current;

      if (existing.quantity === 1) {
        return current.filter((item) => item.menuItemId !== menuItemId);
      }

      return current.map((item) =>
        item.menuItemId === menuItemId
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

    if (!table || !selectedTable) {
      alert("Selecione uma mesa.");
      return;
    }

    const order = createOrder({
      customerId: crypto.randomUUID(),

      customerName: customer,

      tableId: selectedTable.id,

      tableNumber: selectedTable.number,

      paymentMethod,

      items,
    });

    addOrder(order);

    updateTable(selectedTable.id, {
      status: "Ocupada",
    });

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
          <div
            className="
              mb-2
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-orange-100
            "
          >
            <ClipboardList size={26} className="text-orange-500" />
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

          <PaymentSection value={paymentMethod} onChange={setPaymentMethod} />

          <MenuItemsSection
            menu={menu}
            items={items}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />

          <SummarySection
            items={items}
            onAdd={handleIncreaseItem}
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