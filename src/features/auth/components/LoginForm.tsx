"use client";

import { useState } from "react";

import { Mail, Lock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAuthStore } from "@/store/authStore";

export default function LoginForm() {
  const login = useAuthStore(
    (state) => state.login
  );

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    login({
      id: crypto.randomUUID(),

      name:
        email === "admin@restaurantflow.com"
          ? "Administrador"
          : "Funcionário",

      email,

      role:
        email === "admin@restaurantflow.com"
          ? "Administrador"
          : "Funcionário",
    });

    console.log("Login realizado.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label className="font-medium">
          E-mail
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            className="h-14 pl-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-medium">
            Senha
          </label>

          <button
            type="button"
            className="text-sm font-medium text-orange-500 hover:underline"
          >
            Esqueci a senha
          </button>
        </div>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            type="password"
            placeholder="********"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="h-14 pl-11"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="h-14 w-full rounded-xl bg-orange-500 text-lg hover:bg-orange-600"
      >
        Entrar no sistema
      </Button>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="mb-3 font-semibold text-slate-600">
          Acesso Demo
        </p>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium">
              Administrador
            </p>

            <p>admin@restaurantflow.com</p>

            <p>123456</p>
          </div>

          <div>
            <p className="font-medium">
              Funcionário
            </p>

            <p>funcionario@restaurantflow.com</p>

            <p>123456</p>
          </div>
        </div>
      </div>
    </form>
  );
}