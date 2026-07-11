import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import {
  LayoutDashboard,
  Utensils,
  ClipboardList,
  BookOpen,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-6">

      <Logo />

      <nav className="mt-10 space-y-2">

        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="/"
          active
        />

        <SidebarItem
          icon={Utensils}
          label="Mesas"
          href="/tables"
        />

        <SidebarItem
          icon={ClipboardList}
          label="Pedidos"
          href="/orders"
        />

        <SidebarItem
          icon={BookOpen}
          label="Cardápio"
          href="/menu"
        />

        <SidebarItem
          icon={Users}
          label="Clientes"
          href="/customers"
        />

        <SidebarItem
          icon={CalendarDays}
          label="Reservas"
          href="/reservations"
        />

        <SidebarItem
          icon={BarChart3}
          label="Relatórios"
          href="/reports"
        />

        <SidebarItem
          icon={Settings}
          label="Configurações"
          href="/settings"
        />

      </nav>

    </aside>
  );
}