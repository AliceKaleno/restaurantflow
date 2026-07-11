import { LucideIcon } from "lucide-react";

import AppCard from "./AppCard";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <AppCard className="flex items-center justify-between p-6">

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {value}
        </h2>
      </div>

      <div className="rounded-xl bg-orange-100 p-4">
        <Icon
          size={28}
          className="text-orange-500"
        />
      </div>

    </AppCard>
  );
}