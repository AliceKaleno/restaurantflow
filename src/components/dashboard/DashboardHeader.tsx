"use client";

import { CalendarDays, Sparkles } from "lucide-react";

export default function DashboardHeader() {
  // Futuramente virá do Auth
  const user = {
    name: "Visitante",
  };

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Bom dia"
      : hour < 18
      ? "Boa tarde"
      : "Boa noite";

  const today = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {greeting},{" "}
          <span className="text-orange-500">
            {user.name}
          </span>{" "}
          👋
        </h1>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <CalendarDays size={18} />

          <span className="capitalize">
            {today}
          </span>
        </div>

        <p className="mt-4 max-w-xl text-slate-600">
          Confira um resumo do desempenho do seu restaurante e acompanhe
          as principais informações do cardápio.
        </p>
      </div>

      <div
        className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-green-50
          px-5
          py-4
          text-green-700
        "
      >
        <Sparkles size={22} />

        <div>
          <p className="font-semibold">
            Sistema online
          </p>

          <span className="text-sm">
            Dados atualizados em tempo real
          </span>
        </div>
      </div>
    </section>
  );
}