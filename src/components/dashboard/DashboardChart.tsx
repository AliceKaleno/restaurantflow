"use client";

import {
  Line,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useMenuStore } from "@/store/menuStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function DashboardChart() {
  const items = useMenuStore((state) => state.items);

  const categorias = [
    "Pizza",
    "Hambúrguer",
    "Bebida",
    "Salada",
  ];

  const quantidade = categorias.map(
    (categoria) =>
      items.filter(
        (item) => item.category === categoria
      ).length
  );

  const data = {
    labels: categorias,

    datasets: [
      {
        label: "Quantidade de pratos",

        data: quantidade,

        borderColor: "#f97316",

        backgroundColor: "#fb923c",

        tension: 0.4,

        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">
        Pratos por categoria
      </h2>

      <Line
        data={data}
        options={options}
      />
    </div>
  );
}