"use client";

import AppCard from "@/components/shared/AppCard";
import Badge from "@/components/ui/badge";

import { useMenuStore } from "@/store/menuStore";
import { formatCurrency } from "@/utils/formatCurrency";

export default function RecentOrders() {
  const items = useMenuStore((state) => state.items);

  const recentItems = [...items].slice(0, 5);

  return (
    <AppCard>
      <h2 className="mb-5 text-lg font-semibold">
        Últimos pratos cadastrados
      </h2>

      <div className="space-y-4">
        {recentItems.length === 0 ? (
          <p className="text-sm text-slate-500">
            Nenhum prato cadastrado.
          </p>
        ) : (
          recentItems.map((item) => (
            <div
              key={item.id}
              className="
                rounded-xl
                border
                border-slate-200
                p-4
                transition
                hover:border-orange-300
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.category}
                  </p>
                </div>

                <Badge
                  variant={
                    item.available
                      ? "success"
                      : "danger"
                  }
                >
                  {item.available
                    ? "Disponível"
                    : "Indisponível"}
                </Badge>
              </div>

              <div className="mt-3 flex justify-end">
                <strong className="text-orange-600">
                  {formatCurrency(item.price)}
                </strong>
              </div>
            </div>
          ))
        )}
      </div>
    </AppCard>
  );
}