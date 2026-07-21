import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import ReportsPage from "@/features/reports/pages/ReportsPage";

export default function Reports() {
  return (
    <ProtectedRoute>
      <Layout>
        <ReportsPage />
      </Layout>
    </ProtectedRoute>
  );
}