"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Users } from "lucide-react";

import { createCustomer } from "../services/createCustomer";

import { useCustomerStore } from "@/store/customerStore";

interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;
}

export default function NewCustomerSheet({
  open,
  onOpenChange,
}: Props) {
  const addCustomer = useCustomerStore(
    (state) => state.addCustomer
  );

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  function handleCancel() {
    setName("");
    setEmail("");
    setPhone("");

    onOpenChange(false);
  }

  function handleSave() {
    if (!name.trim()) {
      alert("Informe o nome do cliente.");
      return;
    }

    if (!phone.trim()) {
      alert("Informe o telefone.");
      return;
    }

    const customer = createCustomer({
      name,
      email,
      phone,
    });

    addCustomer(customer);

    handleCancel();
  }

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        className="flex flex-col"
      >
        <SheetHeader className="items-center text-center">

          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">

            <Users
              className="text-orange-500"
              size={26}
            />

          </div>

          <SheetTitle>
            Novo Cliente
          </SheetTitle>

          <SheetDescription>
            Cadastre um novo cliente.
          </SheetDescription>

        </SheetHeader>

        <div className="mt-6 flex-1 space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Nome
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                focus:border-orange-500
              "
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                focus:border-orange-500
              "
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Telefone
            </label>

            <input
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                focus:border-orange-500
              "
            />

          </div>

        </div>

        <SheetFooter className="flex flex-row gap-3">

          <button
            onClick={handleCancel}
            className="
              flex-1
              rounded-xl
              border
              py-3
              font-semibold
            "
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="
              flex-1
              rounded-xl
              bg-orange-500
              py-3
              font-semibold
              text-white
            "
          >
            Salvar Cliente
          </button>

        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}