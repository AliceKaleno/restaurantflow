"use client";

import {
  UtensilsCrossed,
  DollarSign,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatCard from "@/components/shared/statistics/StatCard";

import { useMenuStore } from "@/store/menuStore";
import { getDashboardStats } from "@/services/dashboard/dashboardStats";
import { formatCurrency } from "@/utils/formatCurrency";

export default function DashboardCards() {
  const items = useMenuStore((state) => state.items);

  const stats = getDashboardStats(items);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Pratos"
        value={String(stats.totalPratos)}
        icon={UtensilsCrossed}
        color="orange"
      />

      <StatCard
        title="Preço Médio"
        value={formatCurrency(stats.precoMedio)}
        icon={DollarSign}
        color="green"
      />

      <StatCard
        title="Disponíveis"
        value={String(stats.disponiveis)}
        icon={CheckCircle2}
        color="blue"
      />

      <StatCard
        title="Indisponíveis"
        value={String(stats.indisponiveis)}
        icon={XCircle}
        color="red"
      />
    </section>
  );
}