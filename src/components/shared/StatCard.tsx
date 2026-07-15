import { LucideIcon } from "lucide-react";

import AppCard from "./AppCard";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: "orange" | "green" | "blue" | "red";
}

const colors = {
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-500",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-500",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-500",
  },
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "orange",
}: StatCardProps) {
  const current = colors[color];

  return (
    <AppCard className="flex items-center justify-between p-6">
      <div>
        <p className="text-sm text-slate-500">{title}</p>

        <h2 className="mt-2 text-3xl font-bold">{value}</h2>
      </div>

      <div className={`rounded-xl p-4 ${current.bg}`}>
        <Icon size={28} className={current.text} />
      </div>
    </AppCard>
  );
}