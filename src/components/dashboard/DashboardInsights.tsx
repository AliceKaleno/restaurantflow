"use client";

import AppCard from "@/components/shared/AppCard";

import { useMenuStore } from "@/store/menuStore";
import { getDashboardStats } from "@/services/dashboard/dashboardStats";

import { Crown, BadgeDollarSign, Salad, TrendingUp } from "lucide-react";

import { formatCurrency } from "@/utils/formatCurrency";

export default function DashboardInsights() {
  const items = useMenuStore((state) => state.items);

  const stats = getDashboardStats(items);

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <AppCard>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-100 p-3">
            <Crown className="text-orange-500" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Categoria mais popular</p>

            <h3 className="mt-1 text-xl font-bold">
              {stats.categoriaMaisPopular?.nome ?? "-"}
            </h3>

            <span className="text-sm text-slate-500">
              {stats.categoriaMaisPopular
                ? `${stats.categoriaMaisPopular.quantidade} prato${stats.categoriaMaisPopular.quantidade > 1 ? "s" : ""}`
                : "-"}
            </span>
          </div>
        </div>
      </AppCard>

      <AppCard>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-green-100 p-3">
            <BadgeDollarSign className="text-green-600" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Prato mais caro</p>

            <h3 className="mt-1 font-semibold">
              {stats.pratoMaisCaro?.name ?? "-"}
            </h3>

            <span className="text-sm text-slate-500">
              {stats.pratoMaisCaro
                ? formatCurrency(stats.pratoMaisCaro.price)
                : "-"}
            </span>
          </div>
        </div>
      </AppCard>

      <AppCard>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-purple-100 p-3">
            <TrendingUp className="text-purple-600" />
          </div>

          <div>
            <p className="text-sm text-slate-500">Preço médio</p>

            <h3 className="mt-1 font-semibold">
              {formatCurrency(stats.precoMedio)}
            </h3>

            <span className="text-sm text-slate-500">Média do cardápio</span>
          </div>
        </div>
      </AppCard>
    </section>
  );
}
