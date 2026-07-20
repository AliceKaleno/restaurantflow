"use client";

import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;

  icon: LucideIcon;

  selected: boolean;

  onClick: () => void;
}

export default function RoleCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: RoleCardProps) {
  const Icon = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full rounded-2xl border p-5 text-left transition-all duration-200",
        selected
          ? "border-orange-500 bg-orange-50 shadow-md"
          : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
            <Icon size={22} className="text-orange-500" />
          </div>

          <h3 className="font-semibold text-slate-900">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <CheckCircle2
          size={22}
          className={cn(
            "transition",
            selected ? "text-orange-500" : "text-slate-300"
          )}
        />
      </div>
    </button>
  );
}