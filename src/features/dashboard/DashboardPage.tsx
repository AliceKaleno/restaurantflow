import DashboardCard from "@/components/dashboard/DashboardCard";

import {
  ShoppingCart,
  DollarSign,
  Users,
  Utensils,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Bem-vinda de volta 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Confira o desempenho do restaurante hoje.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Pedidos"
          value="24"
          icon={ShoppingCart}
        />

        <DashboardCard
          title="Receita"
          value="R$ 3.250"
          icon={DollarSign}
        />

        <DashboardCard
          title="Clientes"
          value="143"
          icon={Users}
        />

        <DashboardCard
          title="Mesas"
          value="18"
          icon={Utensils}
        />

      </div>

    </div>
  );
}