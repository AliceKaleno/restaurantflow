"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  menuSchema,
  MenuFormData,
} from "../schemas/menu.schema";

export default function MenuForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MenuFormData>({
    resolver: zodResolver(menuSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      available: true,
    },
  });

  function onSubmit(data: MenuFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Nome */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Nome
        </label>

        <input
          {...register("name")}
          className="w-full rounded-xl border p-3"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Descrição */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Descrição
        </label>

        <textarea
          {...register("description")}
          className="min-h-32 w-full rounded-xl border p-3"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Botão */}

      <button
        type="submit"
        disabled={!isValid}
        className="
          w-full
          rounded-xl
          bg-orange-500
          py-3
          font-semibold
          text-white
          transition
          hover:bg-orange-600
          disabled:cursor-not-allowed
          disabled:bg-slate-300
        "
      >
        Salvar Prato
      </button>
    </form>
  );
}