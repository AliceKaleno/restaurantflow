"use client";

import AppCard from "@/components/shared/AppCard";

import { useMenuStore } from "@/store/menuStore";
import { getDashboardStats } from "@/services/dashboard/dashboardStats";

import {
  Crown,
  BadgeDollarSign,
  Salad,
} from "lucide-react";

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
            <p className="text-sm text-slate-500">
              Categoria mais popular
            </p>

            <h3 className="mt-1 text-xl font-bold">
              {stats.categoriaMaisPopular}
            </h3>
          </div>
        </div>
      </AppCard>

      <AppCard>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-green-100 p-3">
            <BadgeDollarSign className="text-green-600" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Prato mais caro
            </p>

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
          <div className="rounded-xl bg-blue-100 p-3">
            <Salad className="text-blue-600" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Prato mais barato
            </p>

            <h3 className="mt-1 font-semibold">
              {stats.pratoMaisBarato?.name ?? "-"}
            </h3>

            <span className="text-sm text-slate-500">
              {stats.pratoMaisBarato
                ? formatCurrency(stats.pratoMaisBarato.price)
                : "-"}
            </span>
          </div>
        </div>
      </AppCard>
    </section>
  );
}