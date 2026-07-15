import { LucideIcon, Clock, Zap, CheckCircle, Truck, XCircle, ClipboardList } from "lucide-react";

interface OrderStatusStyle {
  icon: LucideIcon;
  bg: string;
  text: string;
}

export function getOrderStatusStyle(status: string): OrderStatusStyle {
  switch (status) {
    case "Pendente":
      return {
        icon: Clock,
        bg: "bg-slate-100",
        text: "text-slate-600",
      };
    case "Em preparo":
      return {
        icon: Zap,
        bg: "bg-yellow-100",
        text: "text-yellow-700",
      };
    case "Pronto":
      return {
        icon: CheckCircle,
        bg: "bg-green-100",
        text: "text-green-700",
      };
    case "Entregue":
      return {
        icon: Truck,
        bg: "bg-blue-100",
        text: "text-blue-700",
      };
    case "Cancelado":
      return {
        icon: XCircle,
        bg: "bg-red-100",
        text: "text-red-700",
      };
    default:
      return {
        icon: ClipboardList,
        bg: "bg-slate-100",
        text: "text-slate-600",
      };
  }
}