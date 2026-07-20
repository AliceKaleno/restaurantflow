import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AppCardProps = ComponentProps<"div">;

export default function AppCard({
  children,
  className,
  ...props
}: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}