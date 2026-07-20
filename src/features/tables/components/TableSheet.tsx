"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

import { RestaurantTable, TableStatus } from "@/types/table";

interface Props {
  table: RestaurantTable | null;

  open: boolean;

  onOpenChange: (open: boolean) => void;
}

export default function TableSheet({
  table,
  open,
  onOpenChange,
}: Props) {
  if (!table) return null;

  function renderStatusIcon(status: TableStatus) {
    switch (status) {
      case "Livre":
        return (
          <CheckCircle2
            className="text-emerald-500"
            size={24}
          />
        );

      case "Ocupada":
        return (
          <Clock3
            className="text-orange-500"
            size={24}
          />
        );

      case "Reservada":
        return (
          <CalendarDays
            className="text-blue-500"
            size={24}
          />
        );
    }
  }

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent>

        <SheetHeader>

          <div className="mb-3">
            {renderStatusIcon(table.status)}
          </div>

          <SheetTitle>
            Mesa {table.number}
          </SheetTitle>

          <SheetDescription>
            Informações da mesa.
          </SheetDescription>

        </SheetHeader>

        <div className="mt-8 space-y-6">

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Status
            </span>

            <strong>
              {table.status}
            </strong>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Lugares
            </span>

            <div className="flex items-center gap-2">

              <Users size={18} />

              {table.seats}

            </div>

          </div>

          {table.orderId && (

            <div className="flex items-center justify-between">

              <span className="text-slate-500">
                Pedido
              </span>

              <strong>
                #{table.orderId}
              </strong>

            </div>

          )}

          {table.reservationTime && (

            <div className="flex items-center justify-between">

              <span className="text-slate-500">
                Reserva
              </span>

              <strong>
                {table.reservationTime}
              </strong>

            </div>

          )}

        </div>

      </SheetContent>
    </Sheet>
  );
}