"use client";

import { UserRound } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuthStore } from "@/store/authStore";

export default function AccountSettingsCard() {
  const user = useAuthStore((state) => state.user);

  function handleSave() {
    toast.success(
      "Informações atualizadas!"
    );
  }

  function handlePassword() {
    toast.info(
      "Alteração de senha será implementada em breve."
    );
  }

  if (!user) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">

          <UserRound
            size={22}
            className="text-orange-500"
          />

        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Minha Conta
          </h2>

          <p className="text-sm text-slate-500">
            Informações da conta logada.
          </p>

        </div>

      </div>

      {/* Avatar */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">

          {user.name.charAt(0).toUpperCase()}

        </div>

        <div>

          <h3 className="font-semibold">

            {user.name}

          </h3>

          <p className="text-sm text-slate-500">

            {user.role}

          </p>

        </div>

      </div>

      <div className="space-y-4">

        <div>

          <label className="mb-2 block text-sm font-medium">

            Nome

          </label>

          <Input
            value={user.name}
            readOnly
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">

            Email

          </label>

          <Input
            value={user.email}
            readOnly
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">

            Cargo

          </label>

          <Input
            value={user.role}
            readOnly
          />

        </div>

      </div>

      <div className="mt-8 space-y-3">

        <Button
          variant="outline"
          className="w-full"
          onClick={handlePassword}
        >
          Alterar Senha
        </Button>

        <Button
          onClick={handleSave}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Salvar Alterações
        </Button>

      </div>

    </section>
  );
}