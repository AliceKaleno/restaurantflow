import { z } from "zod";

export const menuSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve possuir pelo menos 3 caracteres."),

  description: z
    .string()
    .min(10, "A descrição deve possuir pelo menos 10 caracteres."),

  category: z
  .string()
  .min(1, "Selecione uma categoria."),

  price: z
    .number({
      error: "Informe um preço válido.",
    })
    .positive("O preço deve ser maior que zero."),

  available: z.boolean(),
});

export type MenuFormData = z.infer<typeof menuSchema>;