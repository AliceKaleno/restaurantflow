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

import { Table2 } from "lucide-react";

import { useTableStore } from "@/store/tableStore";

import { createTable } from "../services/createTable";

interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;
}

export default function NewTableSheet({
  open,
  onOpenChange,
}: Props) {
  const addTable = useTableStore(
    (state) => state.addTable
  );

  const [number, setNumber] = useState("");

  const [seats, setSeats] = useState("");

  function handleCancel() {
    setNumber("");
    setSeats("");

    onOpenChange(false);
  }

  function handleSave() {
    if (!number) {
      alert("Informe o número da mesa.");
      return;
    }

    if (!seats) {
      alert("Informe a quantidade de lugares.");
      return;
    }

    addTable(
      createTable({
        number: Number(number),
        seats: Number(seats),
      })
    );

    handleCancel();
  }

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent className="flex flex-col">

        <SheetHeader className="items-center text-center">

          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">

            <Table2
              className="text-orange-500"
              size={26}
            />

          </div>

          <SheetTitle>
            Nova Mesa
          </SheetTitle>

          <SheetDescription>
            Cadastre uma nova mesa.
          </SheetDescription>

        </SheetHeader>

        <div className="mt-8 flex-1 space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Número da mesa
            </label>

            <input
              type="number"
              value={number}
              onChange={(e) =>
                setNumber(e.target.value)
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
              Lugares
            </label>

            <input
              type="number"
              value={seats}
              onChange={(e) =>
                setSeats(e.target.value)
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
            Salvar Mesa
          </button>

        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}