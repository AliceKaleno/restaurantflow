"use client";

import {
  DollarSign,
  Wallet,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import StatCard from "@/components/shared/StatCard";

import { useOrderStore } from "@/store/orderStore";

import {
  getTodayRevenue,
  getWeekRevenue,
  getMonthRevenue,
  getAverageTicket,
} from "@/services/analytics/analyticsMetrics";

import { formatCurrency } from "@/utils/formatCurrency";

export default function AnalyticsCards() {
  const history = useOrderStore((state) => state.history);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Receita Hoje"
        value={formatCurrency(getTodayRevenue(history))}
        icon={DollarSign}
        color="green"
      />

      <StatCard
        title="Receita Semana"
        value={formatCurrency(getWeekRevenue(history))}
        icon={TrendingUp}
        color="blue"
      />

      <StatCard
        title="Receita Mês"
        value={formatCurrency(getMonthRevenue(history))}
        icon={ShoppingBag}
        color="orange"
      />

      <StatCard
        title="Ticket Médio"
        value={formatCurrency(getAverageTicket(history))}
        icon={Wallet}
        color="purple"
      />

    </section>
  );
}