"use client";

import Image from "next/image";

import AppCard from "@/components/shared/AppCard";
import Badge from "@/components/ui/badge";

import { useMenuStore } from "@/store/menuStore";
import { formatCurrency } from "@/utils/formatCurrency";

export default function LatestMenuItems() {
  const items = useMenuStore((state) => state.items);

  const latestItems = [...items].slice(0, 5);

  return (
    <AppCard>
      <h2 className="mb-5 text-lg font-semibold">
        Últimos pratos cadastrados
      </h2>

      <div className="space-y-4">
        {latestItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl bg-slate-50 p-3"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-500">
                {formatCurrency(item.price)}
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
        ))}
      </div>
    </AppCard>
  );
}