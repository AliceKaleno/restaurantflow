import { UtensilsCrossed } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-orange-500 p-2 text-white">
        <UtensilsCrossed size={22} />
      </div>

      <div>
        <h1 className="font-bold text-slate-900">
          RestaurantFlow
        </h1>

        <p className="text-xs text-slate-500">
          Restaurant Management
        </p>
      </div>
    </div>
  );
}