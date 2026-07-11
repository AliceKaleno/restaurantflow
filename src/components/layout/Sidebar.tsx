import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-6">

      <Logo />

      <nav className="mt-10 space-y-2">

      </nav>

    </aside>
  );
}