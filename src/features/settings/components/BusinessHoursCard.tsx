"use client";

import { Clock3 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BusinessHoursCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">

          <Clock3
            size={22}
            className="text-orange-500"
          />

        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Horário de Funcionamento
          </h2>

          <p className="text-sm text-slate-500">
            Defina o horário do restaurante.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        <div className="grid grid-cols-2 gap-4">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Abre às
            </label>

            <Input
              type="time"
              defaultValue="08:00"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Fecha às
            </label>

            <Input
              type="time"
              defaultValue="22:00"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Dias de funcionamento
          </label>

          <div className="flex flex-wrap gap-2">

            {[
              "Seg",
              "Ter",
              "Qua",
              "Qui",
              "Sex",
              "Sáb",
              "Dom",
            ].map((day) => (
              <button
                key={day}
                type="button"
                className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-100"
              >
                {day}
              </button>
            ))}

          </div>

        </div>

      </div>

      <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600">

        Salvar horários

      </Button>

    </section>
  );
}