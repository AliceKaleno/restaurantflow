"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/shared/form/FormInput";
import FormTextarea from "@/components/shared/form/FormTextarea";
import FormSelect from "@/components/shared/form/FormSelect";
import FormSwitch from "@/components/shared/form/FormSwitch";

import {
  menuSchema,
  MenuFormData,
} from "../schemas/menu.schema";

export default function MenuForm() {
  const {
    register,
    control,
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
      <FormInput
        label="🍽️ Nome do prato"
        placeholder="Ex.: Pizza Calabresa"
        registration={register("name")}
        error={errors.name}
      />

      <FormTextarea
        label="📝 Descrição"
        placeholder="Descreva o prato..."
        registration={register("description")}
        error={errors.description}
      />

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <FormSelect
            label="🏷️ Categoria"
            placeholder="Selecione uma categoria"
            field={field}
            error={errors.category}
            options={[
              {
                value: "pizza",
                label: "🍕 Pizza",
              },
              {
                value: "burger",
                label: "🍔 Hambúrguer",
              },
              {
                value: "drink",
                label: "🥤 Bebida",
              },
              {
                value: "dessert",
                label: "🍰 Sobremesa",
              },
            ]}
          />
        )}
      />

      <FormInput
        label="💰 Preço"
        type="number"
        placeholder="0,00"
        registration={register("price", {
          valueAsNumber: true,
        })}
        error={errors.price}
      />

      <Controller
        control={control}
        name="available"
        render={({ field }) => (
          <FormSwitch
            label="Disponível"
            field={field}
          />
        )}
      />

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className="
            rounded-xl
            bg-orange-500
            px-6
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
      </div>
    </form>
  );
}