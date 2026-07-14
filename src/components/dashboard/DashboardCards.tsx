"use client";

import {
  UtensilsCrossed,
  CircleCheckBig,
  CircleX,
  DollarSign,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

import { useMenuStore } from "@/store/menuStore";
import { formatCurrency } from "@/utils/formatCurrency";

export default function DashboardCards() {
  const items = useMenuStore((state) => state.items);

  const totalPratos = items.length;

  const disponiveis = items.filter(
    (item) => item.available
  ).length;

  const indisponiveis =
    totalPratos - disponiveis;

  const precoMedio =
    totalPratos === 0
      ? 0
      : items.reduce(
          (acc, item) => acc + item.price,
          0
        ) / totalPratos;

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Pratos"
        value={String(totalPratos)}
        icon={UtensilsCrossed}
      />

      <DashboardCard
        title="Preço Médio"
        value={formatCurrency(precoMedio)}
        icon={DollarSign}
      />

      <DashboardCard
        title="Disponíveis"
        value={String(disponiveis)}
        icon={CircleCheckBig}
      />

      <DashboardCard
        title="Indisponíveis"
        value={String(indisponiveis)}
        icon={CircleX}
      />
    </section>
  );
}