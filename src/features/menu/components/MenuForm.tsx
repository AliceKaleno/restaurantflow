"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/shared/form/FormInput";
import FormTextarea from "@/components/shared/form/FormTextarea";
import FormSelect from "@/components/shared/form/FormSelect";
import FormSwitch from "@/components/shared/form/FormSwitch";
import ImageUpload from "@/components/shared/upload/ImageUpload";

import { useMenuStore } from "@/store/menuStore";

import {
  menuSchema,
  MenuFormData,
} from "../schemas/menu.schema";

import { toast } from "sonner";

export default function MenuForm() {
  const addItem = useMenuStore((state) => state.addItem);
  const updateItem = useMenuStore((state) => state.updateItem);

  const editingItem = useMenuStore(
    (state) => state.editingItem
  );

  const setEditingItem = useMenuStore(
    (state) => state.setEditingItem
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<MenuFormData>({
    resolver: zodResolver(menuSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      category: "Pizza",
      price: 0,
      available: true,
      image: "",
    },
  });

  const image = watch("image");

  useEffect(() => {
    if (editingItem) {
      reset({
        name: editingItem.name,
        description: editingItem.description,
        category: editingItem.category,
        price: editingItem.price,
        available: editingItem.available,
        image: editingItem.image,
      });
    } else {
      reset({
        name: "",
        description: "",
        category: "Pizza",
        price: 0,
        available: true,
        image: "",
      });
    }
  }, [editingItem, reset]);

  function onSubmit(data: MenuFormData) {
    if (editingItem) {
      updateItem(editingItem.id, data);

      toast.success("Prato atualizado com sucesso!");
    } else {
      addItem({
        id: crypto.randomUUID(),
        ...data,
      });

      toast.success("Prato cadastrado com sucesso!");
    }

    setEditingItem(null);

    reset({
      name: "",
      description: "",
      category: "Pizza",
      price: 0,
      available: true,
      image: "",
    });
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
                value: "Pizza",
                label: "🍕 Pizza",
              },
              {
                value: "Hambúrguer",
                label: "🍔 Hambúrguer",
              },
              {
                value: "Bebida",
                label: "🥤 Bebida",
              },
              {
                value: "Salada",
                label: "🥗 Salada",
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

      <ImageUpload
        value={image}
        onImageChange={(image) =>
          setValue("image", image || "", {
            shouldValidate: true,
          })
        }
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
          onClick={() => {
            setEditingItem(null);

            reset({
              name: "",
              description: "",
              category: "Pizza",
              price: 0,
              available: true,
              image: "",
            });
          }}
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
          {editingItem
            ? "Atualizar Prato"
            : "Salvar Prato"}
        </button>
      </div>
    </form>
  );
}