import { Order } from "@/features/orders/types/order";

export const initialOrders: Order[] = [
  {
    id: crypto.randomUUID(),
    customer: "João Silva",
    table: 3,
    items: [
      {
        menuItemId: "1",
        quantity: 2,
      },
    ],
    status: "Pendente",
    paymentMethod: "PIX",
    total: 98,
    createdAt: "2026-07-14T18:10:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Maria Oliveira",
    table: 8,
    items: [
      {
        menuItemId: "2",
        quantity: 1,
      },
    ],
    status: "Preparando",
    paymentMethod: "Cartão",
    total: 45,
    createdAt: "2026-07-14T18:20:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Carlos Henrique",
    items: [
      {
        menuItemId: "3",
        quantity: 4,
      },
    ],
    status: "Pronto",
    paymentMethod: "Dinheiro",
    total: 120,
    createdAt: "2026-07-14T18:35:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Ana Paula",
    table: 6,
    items: [
      {
        menuItemId: "4",
        quantity: 2,
      },
    ],
    status: "Entregue",
    paymentMethod: "PIX",
    total: 64,
    createdAt: "2026-07-14T17:50:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Lucas Souza",
    items: [
      {
        menuItemId: "2",
        quantity: 3,
      },
    ],
    status: "Cancelado",
    paymentMethod: "Cartão",
    total: 96,
    createdAt: "2026-07-14T16:15:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Fernanda Lima",
    table: 12,
    items: [
      {
        menuItemId: "1",
        quantity: 1,
      },
    ],
    status: "Preparando",
    paymentMethod: "PIX",
    total: 52,
    createdAt: "2026-07-14T18:45:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Rafael Gomes",
    table: 5,
    items: [
      {
        menuItemId: "4",
        quantity: 2,
      },
    ],
    status: "Pendente",
    paymentMethod: "Dinheiro",
    total: 74,
    createdAt: "2026-07-14T18:52:00",
  },

  {
    id: crypto.randomUUID(),
    customer: "Juliana Costa",
    items: [
      {
        menuItemId: "3",
        quantity: 1,
      },
    ],
    status: "Entregue",
    paymentMethod: "Cartão",
    total: 38,
    createdAt: "2026-07-14T17:20:00",
  },
];