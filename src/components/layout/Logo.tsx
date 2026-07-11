import { UtensilsCrossed } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-md">
        <UtensilsCrossed size={24} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          RestaurantFlow
        </h1>

        <p className="text-xs text-slate-500">
          Restaurant Management
        </p>
      </div>
    </div>
  );
}