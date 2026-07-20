"use client";

import { Customer } from "@/types/customer";

import CustomerActions from "./CustomerActions";
import CustomerStatus from "./CustomerStatus";

interface CustomerRowProps {
  customer: Customer;

  onView: () => void;

  onEdit: () => void;

  onDelete: () => void;
}

export default function CustomerRow({
  customer,
  onView,
  onEdit,
  onDelete,
}: CustomerRowProps) {
  const initials = customer.name
    .split(" ")
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50">

      <td className="px-6 py-4">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-orange-100
              font-semibold
              text-orange-600
            "
          >
            {initials}
          </div>

          <div>

            <p className="font-semibold text-slate-900">
              {customer.name}
            </p>

            <p className="text-sm text-slate-500">
              Cliente desde{" "}
              {new Date(customer.createdAt).toLocaleDateString("pt-BR")}
            </p>

          </div>

        </div>

      </td>

      <td className="px-6 py-4">

        <div className="space-y-1">

          <p className="text-sm">
            {customer.email}
          </p>

          <p className="text-sm text-slate-500">
            {customer.phone}
          </p>

        </div>

      </td>

      <td className="px-6 py-4 text-center">
        {customer.totalOrders}
      </td>

      <td className="px-6 py-4 text-center">
        {customer.totalSpent.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>

      <td className="px-6 py-4 text-center">

        {customer.lastVisit
          ? new Date(customer.lastVisit).toLocaleDateString("pt-BR")
          : "-"}

      </td>

      <td className="px-6 py-4 text-center">

        <CustomerStatus
          status={customer.status}
        />

      </td>

      <td className="px-6 py-4 text-center">

        <CustomerActions
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </td>

    </tr>
  );
}