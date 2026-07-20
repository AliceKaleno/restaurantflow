"use client";

import AppCard from "@/components/shared/AppCard";

import { useOrderStore } from "@/store/orderStore";

import { formatCurrency } from "@/utils/formatCurrency";

export default function RecentOrdersTable() {
  const history = useOrderStore(
    (state) => state.history
  );

  const recentOrders = history.slice(0, 8);

  return (
    <AppCard>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Últimos pedidos
          </h2>

          <p className="text-sm text-slate-500">
            Pedidos concluídos recentemente
          </p>

        </div>

      </div>

      {recentOrders.length === 0 ? (
        <div className="py-12 text-center text-slate-500">
          Nenhum pedido finalizado ainda.
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="pb-3 font-semibold">
                  Cliente
                </th>

                <th className="pb-3 font-semibold">
                  Mesa
                </th>

                <th className="pb-3 font-semibold">
                  Total
                </th>

                <th className="pb-3 font-semibold">
                  Data
                </th>

                <th className="pb-3 font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {recentOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-slate-100"
                >

                  <td className="py-4 font-medium">
                    {order.customerName}
                  </td>

                  <td className="py-4">
                    {order.table || "-"}
                  </td>

                  <td className="py-4">
                    {formatCurrency(order.total)}
                  </td>

                  <td className="py-4">
                    {new Date(
                      order.completedAt ??
                        order.createdAt
                    ).toLocaleDateString("pt-BR")}
                  </td>

                  <td className="py-4">

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${
                          order.status === "Entregue"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </AppCard>
  );
}