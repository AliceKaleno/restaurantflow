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

import { getPeakHours } from "@/features/reports/services/getPeakHours";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function PeakHours() {

  const history = useOrderStore(
    (state) => state.history
  );

  const peakHours = getPeakHours(history);

  const data = {

    labels: peakHours.map(
      (item) => item.hour
    ),

    datasets: [

      {

        label: "Pedidos",

        data: peakHours.map(
          (item) => item.total
        ),

        backgroundColor: "#3b82f6",

        borderRadius: 10,

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

    <AppCard>

      <h2 className="mb-6 text-xl font-bold">

        Horários de Pico

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