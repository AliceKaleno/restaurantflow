"use client";

import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;

  onChange: (checked: boolean) => void;
}

export default function Switch({
  checked,
  onChange,
}: SwitchProps) {
  return (
    <button
      type="button"
      onClick={() =>
        onChange(!checked)
      }
      className={cn(
        "relative h-7 w-12 rounded-full transition-colors",
        checked
          ? "bg-orange-500"
          : "bg-slate-300"
      )}
    >
      <span
        className={cn(
          "absolute top-1 h-5 w-5 rounded-full bg-white transition-all",
          checked
            ? "left-6"
            : "left-1"
        )}
      />
    </button>
  );
}