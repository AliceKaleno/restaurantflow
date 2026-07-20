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
import { getDashboardStats } from "@/services/dashboard/dashboardStats";

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

  const stats = getDashboardStats(items);

  const data = {
    labels: stats.categoryData.map(
      (item) => item.category
    ),

    datasets: [
      {
        label: "Quantidade de pratos",

        data: stats.categoryData.map(
          (item) => item.total
        ),

        borderColor: "#f97316",

        backgroundColor: "#fb923c",

        pointBackgroundColor: "#ea580c",

        pointRadius: 6,

        borderWidth: 3,

        tension: 0.35,

        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold">
        Pratos por categoria
      </h2>

      <div className="h-72">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}