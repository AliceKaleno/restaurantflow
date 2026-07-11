import Layout from "@/components/layout/Layout";
import MenuGrid from "@/features/menu/components/MenuGrid";
import MenuHeader from "@/features/menu/components/MenuHeader";

export default function MenuPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <MenuHeader />

        <MenuGrid />
      </div>
    </Layout>
  );
}