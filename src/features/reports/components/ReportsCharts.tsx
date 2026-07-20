import RevenueChart from "@/components/analytics/charts/RevenueChart";
import OrdersByStatusChart from "@/components/analytics/charts/OrdersByStatus";
import TopProductsChart from "@/components/analytics/charts/TopProducts";
import PeakHoursChart from "@/components/analytics/charts/PeakHours";

export default function ReportsCharts() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />

        <OrdersByStatusChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <TopProductsChart />

        <PeakHoursChart />
      </div>
    </>
  );
}