"use client";

import { Building2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSettingsStore } from "@/store/settingsStore";

export default function RestaurantSettingsCard() {
  const {
    restaurantName,
    phone,
    email,
    address,
    setRestaurantInfo,
  } = useSettingsStore();

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">

          <Building2
            size={22}
            className="text-orange-500"
          />

        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Restaurante
          </h2>

          <p className="text-sm text-slate-500">
            Informações principais.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        <Input
          value={restaurantName}
          placeholder="Nome do restaurante"
          onChange={(event) =>
            setRestaurantInfo({
              restaurantName:
                event.target.value,
            })
          }
        />

        <Input
          value={phone}
          placeholder="Telefone"
          onChange={(event) =>
            setRestaurantInfo({
              phone: event.target.value,
            })
          }
        />

        <Input
          value={email}
          placeholder="Email"
          onChange={(event) =>
            setRestaurantInfo({
              email: event.target.value,
            })
          }
        />

        <Input
          value={address}
          placeholder="Endereço"
          onChange={(event) =>
            setRestaurantInfo({
              address: event.target.value,
            })
          }
        />

      </div>

      <Button
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600"
      >
        Salvar alterações
      </Button>

    </section>
  );
}