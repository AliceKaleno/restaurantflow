"use client";

import {
  CheckCircle2,
  Clock3,
  CalendarClock,
} from "lucide-react";

import StatCard from "@/components/shared/statistics/StatCard";

import { useTableStore } from "@/store/tableStore";

export default function TableStats() {
  const tables = useTableStore(
    (state) => state.tables
  );

  const livres = tables.filter(
    (table) => table.status === "Livre"
  ).length;

  const ocupadas = tables.filter(
    (table) => table.status === "Ocupada"
  ).length;

  const reservadas = tables.filter(
    (table) => table.status === "Reservada"
  ).length;

  return (
    <section className="grid gap-6 md:grid-cols-3">

      <StatCard
        title="Mesas Livres"
        value={String(livres)}
        icon={CheckCircle2}
        color="green"
      />

      <StatCard
        title="Mesas Ocupadas"
        value={String(ocupadas)}
        icon={Clock3}
        color="orange"
      />

      <StatCard
        title="Reservadas"
        value={String(reservadas)}
        icon={CalendarClock}
        color="blue"
      />

    </section>
  );
}