"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { UserRole } from "@/types/user";
import { useAuthStore } from "@/store/authStore";

interface RoleGuardProps {
  allowed: UserRole[];

  children: ReactNode;
}

export default function RoleGuard({
  allowed,
  children,
}: RoleGuardProps) {
  const router = useRouter();

  const user = useAuthStore(
    (state) => state.user
  );

  useEffect(() => {
    if (!user) return;

    if (!allowed.includes(user.role)) {
      router.replace("/dashboard");
    }
  }, [allowed, router, user]);

  if (!user) return null;

  if (!allowed.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}