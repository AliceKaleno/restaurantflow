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
  Filler,
} from "chart.js";

import AppCard from "@/components/shared/AppCard";

import { useOrderStore } from "@/store/orderStore";

import { getRevenueLast7Days } from "@/features/reports/services/reportMetrics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export default function RevenueChart() {

  const history = useOrderStore(
    (state) => state.history
  );

  const revenue = getRevenueLast7Days(history);

  const data = {

    labels: revenue.map(
      (item) => item.day
    ),

    datasets: [

      {

        label: "Receita",

        data: revenue.map(
          (item) => item.revenue
        ),

        borderColor: "#f97316",

        backgroundColor: "rgba(249,115,22,.18)",

        pointBackgroundColor: "#ea580c",

        pointRadius: 5,

        borderWidth: 3,

        fill: true,

        tension: .35,

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

      },

    },

  };

  return (

    <AppCard>

      <h2 className="mb-6 text-xl font-bold">

        Receita dos últimos 7 dias

      </h2>

      <div className="h-80">

        <Line

          data={data}

          options={options}

        />

      </div>

    </AppCard>

  );

}