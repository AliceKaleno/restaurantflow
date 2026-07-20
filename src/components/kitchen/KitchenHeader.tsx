"use client";

import { ChefHat } from "lucide-react";

export default function KitchenHeader() {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-orange-100 p-4">

        <ChefHat
          size={28}
          className="text-orange-500"
        />

      </div>

      <div>

        <h1 className="text-3xl font-bold">
          Cozinha
        </h1>

        <p className="text-slate-500">
          Gerencie os pedidos em preparo.
        </p>

      </div>

    </div>
  );
}