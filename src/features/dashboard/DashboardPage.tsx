import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardChart from "@/components/dashboard/DashboardChart";
import RecentOrders from "@/components/dashboard/RecentOrders";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Bem-vinda de volta 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Confira o desempenho do restaurante hoje.
        </p>
      </div>

      <DashboardCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>

        <RecentOrders />
      </div>
    </div>
  );
}