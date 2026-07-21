import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UtensilsCrossed,
  BarChart3,
  Settings,
  BookOpen,
  CalendarDays,
  LucideIcon,
} from "lucide-react";

import { UserRole } from "@/types/user";

interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  roles: UserRole[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["Administrador", "Funcionário"],
  },
  {
    label: "Mesas",
    href: "/tables",
    icon: UtensilsCrossed,
    roles: ["Administrador", "Funcionário"],
  },
  {
    label: "Pedidos",
    href: "/orders",
    icon: ShoppingCart,
    roles: ["Administrador", "Funcionário"],
  },
  {
    label: "Cardápio",
    href: "/menu",
    icon: BookOpen,
    roles: ["Administrador"],
  },
  {
    label: "Clientes",
    href: "/customers",
    icon: Users,
    roles: ["Administrador"],
  },
  {
    label: "Reservas",
    href: "/reservations",
    icon: CalendarDays,
    roles: ["Administrador", "Funcionário"],
  },
  {
    label: "Relatórios",
    href: "/reports",
    icon: BarChart3,
    roles: ["Administrador"],
  },
  {
    label: "Configurações",
    href: "/settings",
    icon: Settings,
    roles: ["Administrador"],
  },
];