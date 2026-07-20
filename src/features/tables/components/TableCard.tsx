"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import AppCard from "@/components/shared/AppCard";

import { RestaurantTable } from "@/types/table";

interface Props {
  table: RestaurantTable;

  onClick?: () => void;
}

export default function TableCard({
  table,
  onClick,
}: Props) {
  function renderStatusIcon() {
    switch (table.status) {
      case "Livre":
        return (
          <CheckCircle2
            className="text-emerald-500"
            size={22}
          />
        );

      case "Ocupada":
        return (
          <Clock3
            className="text-orange-500"
            size={22}
          />
        );

      case "Reservada":
        return (
          <CalendarDays
            className="text-blue-500"
            size={22}
          />
        );
    }
  }

  function renderFooter() {
    switch (table.status) {
      case "Livre":
        return (
          <p className="font-medium text-emerald-600">
            Mesa disponível
          </p>
        );

      case "Ocupada":
        return (
          <div className="space-y-1">

            <p className="font-semibold text-orange-600">
              Pedido {table.orderId}
            </p>

            <p className="text-sm text-slate-500">
              Em atendimento
            </p>

          </div>
        );

      case "Reservada":
        return (
          <div className="space-y-1">

            <p className="font-semibold text-blue-600">
              {table.reservationTime}
            </p>

            <p className="text-sm text-slate-500">
              Reserva agendada
            </p>

          </div>
        );
    }
  }

  return (
    <AppCard
      onClick={onClick}
      className="
        cursor-pointer
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Mesa
          </p>

          <h2 className="mt-1 text-4xl font-bold">
            {table.number}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {table.seats} lugares
          </p>

        </div>

        {renderStatusIcon()}

      </div>

      <hr className="my-5" />

      {renderFooter()}

    </AppCard>
  );
}