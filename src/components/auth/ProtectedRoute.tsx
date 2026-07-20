"use client";

import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <>{children}</>;
}