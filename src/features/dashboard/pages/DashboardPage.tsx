import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardChart from "@/components/dashboard/DashboardChart";
import LatestMenuItems from "@/components/dashboard/LatestMenuItems";

import DashboardHeader from "@/components/dashboard/DashboardHeader";

import DashboardInsights from "@/components/dashboard/DashboardInsights";

import DashboardOperationalCards from "@/components/operational/DashboardOperationalCards";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardOperationalCards />

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
