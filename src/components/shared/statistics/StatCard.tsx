import AppCard from "@/components/shared/AppCard";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;

  color?: "orange" | "green" | "blue" | "red";

  subtitle?: string;
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
  subtitle,
}: StatCardProps) {
  const currentColor = colors[color];

  return (
    <AppCard
      className="
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-xs text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`
            rounded-2xl
            p-4
            ${currentColor.bg}
          `}
        >
          <Icon
            size={28}
            className={currentColor.text}
          />
        </div>
      </div>
    </AppCard>
  );
}