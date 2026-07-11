import TablesGrid from "@/components/tables/TablesGrid";
import Layout from "@/components/layout/Layout";

export default function TablesPage() {
  return (
    <Layout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            Gestão de Mesas
          </h1>

          <p className="text-slate-500">
            Acompanhe o status das mesas em tempo real.
          </p>
        </div>

        <TablesGrid />

      </div>
    </Layout>
  );
}