import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

export default function Dashboard() {
  return (
    <ProtectedRoute>
    <Layout>
      <DashboardPage />
    </Layout>
    </ProtectedRoute>
  );
}