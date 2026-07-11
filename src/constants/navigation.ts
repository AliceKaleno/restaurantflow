import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingBag,
  Users,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Mesas",
    href: "/tables",
    icon: UtensilsCrossed,
  },
  {
    title: "Pedidos",
    href: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Clientes",
    href: "/customers",
    icon: Users,
  },
];