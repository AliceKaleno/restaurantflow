import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";

import ReservationsPage from "@/features/reservations/pages/ReservationsPage";

export default function Reservations() {
  return (
    <ProtectedRoute>
    <Layout>
      <ReservationsPage />
    </Layout>
    </ProtectedRoute>
  );
}