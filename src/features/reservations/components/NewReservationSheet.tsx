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

import { CalendarDays } from "lucide-react";

import { useCustomerStore } from "@/store/customerStore";
import { useTableStore } from "@/store/tableStore";
import { useReservationStore } from "@/store/reservationStore";

import { createReservation } from "../services/createReservation";

interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;
}

export default function NewReservationSheet({
  open,
  onOpenChange,
}: Props) {
  const customers = useCustomerStore((state) => state.customers);

  const tables = useTableStore((state) => state.tables);

  const addReservation = useReservationStore(
    (state) => state.addReservation
  );

  const updateTable = useTableStore((state) => state.updateTable);

  const [customerId, setCustomerId] = useState("");

  const [tableId, setTableId] = useState("");

  const [people, setPeople] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const availableTables = tables.filter(
    (table) => table.status === "Livre"
  );

  function handleCancel() {
    setCustomerId("");
    setTableId("");
    setPeople("");
    setDate("");
    setTime("");

    onOpenChange(false);
  }

  function handleSave() {
    if (!customerId || !tableId || !people || !date || !time) {
      alert("Preencha todos os campos.");
      return;
    }

    const customer = customers.find(
      (customer) => customer.id === customerId
    );

    const table = tables.find((table) => table.id === tableId);

    if (!customer || !table) return;

    addReservation(
      createReservation({
        customerId,

        customerName: customer.name,

        tableId,

        tableNumber: table.number,

        people: Number(people),

        date,

        time,
      })
    );

    updateTable(table.id, {
      status: "Reservada",
      reservationTime: time,
    });

    handleCancel();
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader className="items-center text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <CalendarDays className="text-orange-500" size={26} />
          </div>

          <SheetTitle>Nova Reserva</SheetTitle>

          <SheetDescription>
            Cadastre uma nova reserva.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex-1 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Cliente
            </label>

            <select
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="">Selecione um cliente</option>

              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Mesa
            </label>

            <select
              value={tableId}
              onChange={(e) => setTableId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="">Selecione uma mesa</option>

              {availableTables.map((table) => (
                <option key={table.id} value={table.id}>
                  Mesa {table.number} • {table.seats} lugares
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Pessoas
            </label>

            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Data
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Hora
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <SheetFooter className="flex flex-row gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 rounded-xl border py-3 font-semibold"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="flex-1 rounded-xl bg-orange-500 py-3 font-semibold text-white"
          >
            Salvar Reserva
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}