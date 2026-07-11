import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
        active
          ? "bg-orange-500 text-white shadow-md"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      <Icon size={20} />

      <span className="font-medium">{label}</span>
    </Link>
  );
}