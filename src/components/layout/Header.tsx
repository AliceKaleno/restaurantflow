import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          placeholder="Pesquisar..."
          className="w-full rounded-xl border border-slate-200 py-2 pl-10 pr-4 outline-none focus:border-orange-500"
        />

      </div>

      <button className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100">

        <Bell size={20} />

      </button>

    </header>
  );
}