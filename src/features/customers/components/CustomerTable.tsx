"use client";

import { Customer } from "@/types/customer";

import CustomerRow from "./CustomerRow";

interface CustomerTableProps {
  customers: Customer[];

  onView: (customer: Customer) => void;

  onEdit: (customer: Customer) => void;

  onDelete: (customer: Customer) => void;
}

export default function CustomerTable({
  customers,
  onView,
  onEdit,
  onDelete,
}: CustomerTableProps) {
  if (customers.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-300
          bg-white
          py-20
          text-center
        "
      >
        <h3 className="text-lg font-semibold">
          Nenhum cliente cadastrado
        </h3>

        <p className="mt-2 text-slate-500">
          Clique em <strong>+ Novo Cliente</strong> para começar.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Cliente
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Contato
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Pedidos
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Total Gasto
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Última Visita
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <CustomerRow
                key={customer.id}
                customer={customer}
                onView={() => onView(customer)}
                onEdit={() => onEdit(customer)}
                onDelete={() => onDelete(customer)}
              />

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}