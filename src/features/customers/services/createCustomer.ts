import { Customer } from "@/types/customer";

interface CreateCustomerData {
  name: string;
  email: string;
  phone: string;
}

export function createCustomer({
  name,
  email,
  phone,
}: CreateCustomerData): Customer {
  return {
    id: crypto.randomUUID(),

    name,

    email,

    phone,

    totalOrders: 0,

    totalSpent: 0,

    lastVisit: "",

    status: "Novo",

    createdAt: new Date().toISOString(),
  };
}