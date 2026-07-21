"use client";

import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import { useAuthStore } from "@/store/authStore";

import { Bell, Search, Sun } from "lucide-react";

export default function Header() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const currentUser = user ?? {
    name: "Administrador",
    role: "Administrador",
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

        <p className="text-sm text-slate-500">Bem-vinda de volta 👋</p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Pesquisar..."
            className="w-72 rounded-xl border border-slate-200 py-2 pl-10 pr-4 outline-none transition focus:border-orange-500"
          />
        </div>

        <button className="rounded-xl p-2 transition hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <button className="rounded-xl p-2 transition hover:bg-slate-100">
          <Sun size={22} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-semibold">{currentUser.name}</p>

            <span className="text-sm text-slate-500">{currentUser.role}</span>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="
    flex
    items-center
    gap-2
    rounded-xl
    border
    border-red-200
    px-4
    py-2
    text-red-500
    transition
    hover:bg-red-50
  "
        >
          <LogOut size={18} />

          <span>Sair</span>
        </button>
      </div>
    </header>
  );
}
