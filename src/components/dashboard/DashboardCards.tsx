import {
  ShoppingCart,
  DollarSign,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function DashboardCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <DashboardCard
        title="Pedidos"
        value="128"
        icon={ShoppingCart}
      />

      <DashboardCard
        title="Receita"
        value="R$ 15.420"
        icon={DollarSign}
      />

      <DashboardCard
        title="Clientes"
        value="420"
        icon={Users}
      />

      <DashboardCard
        title="Mesas"
        value="32"
        icon={UtensilsCrossed}
      />

    </section>
  );
}