"use client";

import { ChefHat } from "lucide-react";

import AppCard from "@/components/shared/AppCard";

export default function KitchenEmpty() {
  return (
    <AppCard className="py-20">

      <div className="flex flex-col items-center gap-5">

        <div className="rounded-full bg-orange-100 p-6">
          <ChefHat
            size={40}
            className="text-orange-500"
          />
        </div>

        <h2 className="text-2xl font-bold">
          Nenhum pedido na cozinha
        </h2>

        <p className="text-slate-500">
          Todos os pedidos já foram preparados.
        </p>

      </div>

    </AppCard>
  );
}