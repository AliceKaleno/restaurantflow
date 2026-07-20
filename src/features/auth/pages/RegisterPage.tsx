import Link from "next/link";

import AuthHero from "../components/AuthHero";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">

      {/* Cadastro */}

      <section className="flex items-center justify-center bg-white px-8 py-12">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <p className="font-semibold text-orange-500">
              Crie sua conta 🚀
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Comece agora
            </h1>

            <p className="mt-3 text-slate-500">
              Cadastre-se para acessar o RestaurantFlow.
            </p>

          </div>

          <RegisterForm />

          <div className="mt-8 text-center text-sm text-slate-500">

            Já possui uma conta?

            <Link
              href="/login"
              className="ml-2 font-semibold text-orange-500 hover:underline"
            >
              Fazer login
            </Link>

          </div>

        </div>

      </section>

      {/* Hero */}

      <div className="hidden lg:block">

        <AuthHero
          title="Organize seu restaurante de forma "
          highlight="inteligente."
          description="Cadastre sua equipe, acompanhe métricas e tenha controle completo do seu negócio."
        />

      </div>

    </main>
  );
}