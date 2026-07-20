"use client";

import { Users } from "lucide-react";

import { useCustomerStore } from "@/store/customerStore";

export default function CustomerHeader() {
  const customers = useCustomerStore((state) => state.customers);

  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Clientes
        </h1>

        <p className="mt-1 text-slate-500">
          {customers.length} cliente{customers.length !== 1 && "s"} cadastrado
          {customers.length !== 1 && "s"}
        </p>
      </div>

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-orange-100
        "
      >
        <Users
          size={28}
          className="text-orange-500"
        />
      </div>
    </section>
  );
}