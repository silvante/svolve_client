"use client";

import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { RevenueByDay } from "@/app/types/User";
import { useState } from "react";
import { BarChart3, LineChart } from "lucide-react";

export default function RvDayChart({ data }: { data: RevenueByDay[] }) {
  console.log(data);
  const [chartType, setChartType] = useState("line");

  const labels = data.map((rbd) => rbd.day);
  const revenues = data.map((rbd) => rbd.total);
  console.log(revenues);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Daily revenue",
        data: revenues,
        borderColor: "#7f22fe",
        backgroundColor: "#7f22fe",
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Revenues of last 30 days" },
    },
  };

  return (
    <div className="p-8 rounded-2xl border border-gray-300 shadow-md w-full border-b-3 border-b-violet-600">
      <div className="flex gap-4">
        <button
          onClick={() => setChartType("line")}
          className="border-gray-300 border rounded-lg py-2 px-4 flex gap-2 text_color hover:bg-gray-950/5 cursor-pointer"
        >
          <LineChart /> Line
        </button>
        <button
          onClick={() => setChartType("bar")}
          className="border-gray-300 border rounded-lg py-2 px-4 flex gap-2 text_color hover:bg-gray-950/5 cursor-pointer"
        >
          <BarChart3 /> Bar
        </button>
      </div>
      <div className="w-full h-[400px]">
        {chartType === "line" && (
          <Line options={options} data={chartData} className="w-full h-full" />
        )}
        {chartType === "bar" && (
          <Bar options={options} data={chartData} className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
