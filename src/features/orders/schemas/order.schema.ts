import { z } from "zod";

export const orderSchema = z.object({
  customer: z
    .string()
    .min(3, "Informe o nome do cliente."),

  table: z
    .number()
    .int()
    .positive()
    .optional(),

  items: z
    .array(
      z.object({
        menuItemId: z.string(),

        quantity: z
          .number()
          .int()
          .min(1, "A quantidade deve ser maior que zero."),
      })
    )
    .min(1, "Adicione pelo menos um prato ao pedido."),

  status: z.enum([
    "Pendente",
    "Preparando",
    "Pronto",
    "Entregue",
    "Cancelado",
  ]),

  paymentMethod: z.enum([
    "Dinheiro",
    "Cartão",
    "PIX",
  ]),

  observation: z.string().optional(),

  total: z
    .number()
    .nonnegative(),
});

export type OrderFormData = z.infer<typeof orderSchema>;