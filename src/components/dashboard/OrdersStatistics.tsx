"use client";

import {
  DollarSign,
  ShoppingBag,
  Clock3,
  ClipboardList,
} from "lucide-react";

import StatCard from "@/components/shared/statistics/StatCard";

import { useOrderStore } from "@/store/orderStore";

import {
  getTodayRevenue,
  getOrdersCount,
  getAverageTicket,
} from "@/services/dashboard/dashboardMetrics";

import { formatCurrency } from "@/utils/formatCurrency";

export default function OrdersStatistics() {
  const history = useOrderStore((state) => state.history);

  const orders = useOrderStore((state) => state.orders);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Receita Hoje"
        value={formatCurrency(getTodayRevenue(history))}
        icon={DollarSign}
        color="green"
      />

      <StatCard
        title="Pedidos Hoje"
        value={String(getOrdersCount(history))}
        icon={ShoppingBag}
        color="orange"
      />

      <StatCard
        title="Ticket Médio"
        value={formatCurrency(getAverageTicket(history))}
        icon={Clock3}
        color="blue"
      />

      <StatCard
        title="Pedidos Ativos"
        value={String(orders.length)}
        icon={ClipboardList}
        color="red"
      />

    </section>
  );
}