import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import OrdersPage from "@/features/orders/pages/OrdersPage";

export default function Orders() {
  return (
    <ProtectedRoute>
    <Layout>
      <OrdersPage />
    </Layout>
    </ProtectedRoute>
  );
}