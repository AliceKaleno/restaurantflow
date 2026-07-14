"use client";

import {
  UtensilsCrossed,
  DollarSign,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

import { useMenuStore } from "@/store/menuStore";
import { getDashboardStats } from "@/services/dashboard/dashboardStats";
import { formatCurrency } from "@/utils/formatCurrency";

export default function DashboardCards() {
  const items = useMenuStore((state) => state.items);

  const stats = getDashboardStats(items);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Pratos"
        value={String(stats.totalPratos)}
        icon={UtensilsCrossed}
      />

      <DashboardCard
        title="Preço Médio"
        value={formatCurrency(stats.precoMedio)}
        icon={DollarSign}
      />

      <DashboardCard
        title="Disponíveis"
        value={String(stats.disponiveis)}
        icon={CheckCircle2}
      />

      <DashboardCard
        title="Indisponíveis"
        value={String(stats.indisponiveis)}
        icon={XCircle}
      />
    </section>
  );
}