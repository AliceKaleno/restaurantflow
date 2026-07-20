"use client";

import KitchenHeader from "@/components/kitchen/KitchenHeader";
import KitchenList from "@/components/kitchen/KitchenList";

export default function KitchenPage() {
  return (
    <div className="space-y-8">
      <KitchenHeader />

      <KitchenList />
    </div>
  );
}