import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardChart from "@/components/dashboard/DashboardChart";
import LatestMenuItems from "@/components/dashboard/LatestMenuItems";

import DashboardHeader from "@/components/dashboard/DashboardHeader";

import DashboardInsights from "@/components/dashboard/DashboardInsights";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardCards />

      <DashboardInsights />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>

        <LatestMenuItems />
      </div>
    </div>
  );
}