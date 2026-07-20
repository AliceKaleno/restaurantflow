"use client";

import {
  Doughnut,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import AppCard from "@/components/shared/AppCard";

import { useOrderStore } from "@/store/orderStore";

import { getOrdersByStatus } from "@/features/reports/services/getOrdersByStatus";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function OrdersByStatus() {

  const orders = useOrderStore(
    (state) => state.orders
  );

  const history = useOrderStore(
    (state) => state.history
  );

  const status = getOrdersByStatus([
    ...orders,
    ...history,
  ]);

  const data = {

    labels: [

      "Pendente",

      "Preparando",

      "Pronto",

      "Entregue",

      "Cancelado",

    ],

    datasets: [

      {

        data: [

          status.pendente,

          status.preparando,

          status.pronto,

          status.entregue,

          status.cancelado,

        ],

        backgroundColor: [

          "#f97316",

          "#3b82f6",

          "#a855f7",

          "#22c55e",

          "#ef4444",

        ],

        borderWidth: 0,

      },

    ],

  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {

        position: "bottom" as const,

      },

    },

  };

  return (

    <AppCard>

      <h2 className="mb-6 text-xl font-bold">

        Pedidos por Status

      </h2>

      <div className="h-72">

        <Doughnut

          data={data}

          options={options}

        />

      </div>

    </AppCard>

  );

}