"use client";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import { navigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Sidebar() {
  const role = useAuthStore(
    (state) => state.user?.role
  );

  const menu = navigation.filter((item) =>
    role ? item.roles.includes(role) : false
  );

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-6">

      <Logo />

      <nav className="mt-10 space-y-2">
        {menu.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>

    </aside>
  );
}