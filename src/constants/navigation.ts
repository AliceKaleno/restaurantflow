import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UtensilsCrossed,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Mesas",
    href: "/tables",
    icon: UtensilsCrossed,
  },
  {
    label: "Pedidos",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    label: "Clientes",
    href: "/customers",
    icon: Users,
  },
  {
    label: "Relatórios",
    href: "/reports",
    icon: BarChart3,
  },
  {
    label: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];