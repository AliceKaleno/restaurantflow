import DashboardCards from "@/components/dashboard/DashboardCards";

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

    </div>
  );
}