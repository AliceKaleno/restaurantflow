import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-6">

      <Logo />

      <nav className="mt-10 space-y-2">
        {navigation.map((item) => (
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