import {
  Building2,
  Clock3,
  MonitorCog,
  UserRound,
} from "lucide-react";

import RestaurantSettingsCard from "../components/RestaurantSettingsCard";
import BusinessHoursCard from "../components/BusinessHoursCard";
import SystemSettingsCard from "../components/SystemSettingsCard";
import AccountSettingsCard from "../components/AccountSettingsCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Configurações
        </h1>

        <p className="mt-2 text-slate-500">
          Gerencie informações do restaurante e preferências do sistema.
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-6 lg:grid-cols-2">

        <RestaurantSettingsCard />

        <BusinessHoursCard />

        <SystemSettingsCard />

        <AccountSettingsCard />

      </div>

    </div>
  );
}