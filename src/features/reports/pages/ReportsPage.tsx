import ReportsHeader from "../components/ReportsHeader";
import ReportsCards from "../components/ReportsCards";
import ReportsCharts from "../components/ReportsCharts";
import RecentOrdersTable from "../components/RecentOrdersTable";

export default function ReportsPage() {
  return (
    <div className="space-y-8">

      <ReportsHeader />

      <ReportsCards />

      <ReportsCharts />

      <RecentOrdersTable />

    </div>
  );
}