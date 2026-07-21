"use client";

import { MonitorCog } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Switch from "@/components/ui/switch";

import { useSettingsStore } from "@/store/settingsStore";

export default function SystemSettingsCard() {
  const {
    acceptReservations,
    showUnavailableDishes,
    soundNotifications,
    autoRefresh,
    setSystemSettings,
  } = useSettingsStore();

  function handleSave() {
    toast.success(
      "Preferências salvas com sucesso!"
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">

          <MonitorCog
            size={22}
            className="text-orange-500"
          />

        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Sistema
          </h2>

          <p className="text-sm text-slate-500">
            Preferências da aplicação.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <SettingItem
          title="Aceitar novas reservas"
          checked={acceptReservations}
          onChange={(checked) =>
            setSystemSettings({
              acceptReservations: checked,
            })
          }
        />

        <SettingItem
          title="Exibir pratos indisponíveis"
          checked={showUnavailableDishes}
          onChange={(checked) =>
            setSystemSettings({
              showUnavailableDishes: checked,
            })
          }
        />

        <SettingItem
          title="Notificações sonoras"
          checked={soundNotifications}
          onChange={(checked) =>
            setSystemSettings({
              soundNotifications: checked,
            })
          }
        />

        <SettingItem
          title="Atualização automática"
          checked={autoRefresh}
          onChange={(checked) =>
            setSystemSettings({
              autoRefresh: checked,
            })
          }
        />

      </div>

      <Button
        onClick={handleSave}
        className="mt-8 w-full bg-orange-500 hover:bg-orange-600"
      >
        Salvar Preferências
      </Button>

    </section>
  );
}

interface SettingItemProps {
  title: string;

  checked: boolean;

  onChange: (
    checked: boolean
  ) => void;
}

function SettingItem({
  title,
  checked,
  onChange,
}: SettingItemProps) {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h3 className="font-medium text-slate-800">
          {title}
        </h3>

      </div>

      <Switch
        checked={checked}
        onChange={onChange}
      />

    </div>
  );
}