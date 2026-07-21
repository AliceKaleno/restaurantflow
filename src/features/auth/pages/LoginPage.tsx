import AuthHero from "../components/AuthHero";
import LoginForm from "../components/LoginForm";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Hero */}

      <div className="hidden lg:block">
        <AuthHero
          title="Gerencie seu restaurante com "
          highlight="inteligência."
          description="Controle pedidos, mesas, clientes e reservas em uma única plataforma moderna."
        />
      </div>

      {/* Login */}

      <section className="flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <p className="text-orange-500 font-semibold">Bem-vindo 👋</p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Faça login
            </h1>

            <p className="mt-3 text-slate-500">
              Entre para acessar o RestaurantFlow.
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center text-sm text-slate-500">
            <Link
              href="/register"
              className="
        ml-2
        font-semibold
        text-orange-500
        hover:underline
    "
            >
              Criar conta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
