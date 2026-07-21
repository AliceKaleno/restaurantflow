import Layout from "@/components/layout/Layout";

import SettingsPage from "@/features/settings/pages/SettingsPage";

import RoleGuard from "@/components/auth/RoleGuard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Settings() {
  return (
    
    <Layout>
      <ProtectedRoute>
      <RoleGuard
        allowed={["Administrador"]}
      >

        <SettingsPage />

      </RoleGuard>
    </ProtectedRoute>
    </Layout>
  );
}