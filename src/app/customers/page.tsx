import Layout from "@/components/layout/Layout";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">
          Clientes
        </h1>

        <p className="text-slate-500">
          Gerencie todos os clientes do seu restaurante.
        </p>
      </div>
    </Layout>
  );
}