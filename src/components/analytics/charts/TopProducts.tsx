"use client";

import {
  Bar,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import AppCard from "@/components/shared/AppCard";

import { useOrderStore } from "@/store/orderStore";

import { getTopProducts } from "@/features/reports/services/getTopProducts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function TopProducts() {
  const history = useOrderStore(
    (state) => state.history
  );

  const products = getTopProducts(history);

  const data = {
    labels: products.map(
      (item) => item.name
    ),

    datasets: [
      {
        label: "Quantidade",

        data: products.map(
          (item) => item.quantity
        ),

        backgroundColor: "#f97316",

        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    indexAxis: "y" as const,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <AppCard>

      <h2 className="mb-6 text-xl font-bold">
        Produtos mais vendidos
      </h2>

      <div className="h-72">

        <Bar
          data={data}
          options={options}
        />

      </div>

    </AppCard>
  );
}