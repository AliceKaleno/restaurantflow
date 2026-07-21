import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";

import CustomersPage from "@/features/customers/pages/CustomersPage";

export default function Customers() {
  return (
    <ProtectedRoute>
    <Layout>
      <CustomersPage />
    </Layout>
    </ProtectedRoute>
  );
}