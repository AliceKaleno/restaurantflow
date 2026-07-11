import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UtensilsCrossed,
  BarChart3,
  Settings,
  BookOpen,
  CalendarDays,
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
    label: "Cardápio",
    href: "/menu",
    icon: BookOpen,
  },
  {
    label: "Clientes",
    href: "/customers",
    icon: Users,
  },
  {
    label: "Reservas",
    href: "/reservations",
    icon: CalendarDays,
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