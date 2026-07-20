import { ChefHat } from "lucide-react";

interface AuthHeroProps {
  title: string;
  highlight: string;
  description: string;
}

export default function AuthHero({
  title,
  highlight,
  description,
}: AuthHeroProps) {
  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden bg-slate-950 px-14 py-12 text-white">
      {/* círculos decorativos */}

      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full border border-white/5" />

      <div className="absolute left-24 top-40 h-[480px] w-[480px] rounded-full border border-white/5" />

      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full border border-white/5" />

      {/* Logo */}

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500">
            <ChefHat size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">RestaurantFlow</h1>

            <p className="text-slate-400">Gestão inteligente</p>
          </div>
        </div>
      </div>

      {/* Texto */}

      <div className="relative z-10 max-w-md">
        <h2 className="text-6xl font-extrabold leading-tight">
          {title}

          <span className="text-orange-500">{highlight}</span>
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-400">{description}</p>
      </div>

      {/* Cards */}

      <div className="relative z-10 grid grid-cols-3 gap-5">
        <StatCard title="98%" subtitle="Satisfação" />

        <StatCard title="2.4k" subtitle="Restaurantes" />

        <StatCard title="4.8★" subtitle="Avaliação" />
      </div>

      <p className="relative z-10 text-sm text-slate-500">
        © 2026 RestaurantFlow
      </p>
    </section>
  );
}

interface StatCardProps {
  title: string;
  subtitle: string;
}

function StatCard({ title, subtitle }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-4xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-400">{subtitle}</p>
    </div>
  );
}
