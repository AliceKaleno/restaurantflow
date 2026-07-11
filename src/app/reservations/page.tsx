import Layout from "@/components/layout/Layout";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">
          Reservas
        </h1>

        <p className="text-slate-500">
          Gerencie todos as reservas do restaurante.
        </p>
      </div>
    </Layout>
  );
}