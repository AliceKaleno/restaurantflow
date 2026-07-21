"use client";

import { useState } from "react";

import { Lock, Mail, ShieldCheck, UserRound, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import RoleCard from "./RoleCard";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useUsersStore } from "@/store/usersStore";
import { useAuthStore } from "@/store/authStore";

export default function RegisterForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState<"Administrador" | "Funcionário">(
    "Funcionário",
  );

  const router = useRouter();

  const addUser = useUsersStore((state) => state.addUser);

  const emailExists = useUsersStore((state) => state.emailExists);

  const login = useAuthStore((state) => state.login);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    if (emailExists(email)) {
      toast.error("Este e-mail já está cadastrado.");
      return;
    }

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      role,
    };

    addUser(user);

    login(user);

    toast.success("Conta criada com sucesso!");

    router.push("/dashboard");
  }

  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome */}

      <div className="space-y-2">
        <label className="font-medium">Nome</label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="h-14 pl-11"
          />
        </div>
      </div>

      {/* Email */}

      <div className="space-y-2">
        <label className="font-medium">Email</label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@restaurantflow.com"
            className="h-14 pl-11"
          />
        </div>
      </div>

      {/* Senha */}

      <div className="space-y-2">
        <label className="font-medium">Senha</label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="h-14 pl-11"
          />
        </div>
      </div>

      {/* Confirmar */}

      <div className="space-y-2">
        <label className="font-medium">Confirmar senha</label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="h-14 pl-11"
          />
        </div>
      </div>

      {/* Perfil */}

      <div>
        <label className="mb-4 block font-medium">Perfil</label>

        <div className="grid grid-cols-2 gap-4">
          <RoleCard
            icon={ShieldCheck}
            title="Administrador"
            description="Acesso completo."
            selected={role === "Administrador"}
            onClick={() => setRole("Administrador")}
          />

          <RoleCard
            icon={UserRound}
            title="Funcionário"
            description="Acesso limitado."
            selected={role === "Funcionário"}
            onClick={() => setRole("Funcionário")}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="h-14 w-full rounded-xl bg-orange-500 text-lg hover:bg-orange-600"
      >
        Criar Conta
      </Button>
    </form>
  );
}