import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  // ডায়নামিক ডাটা
  const percentage = 80;

  const Data1 = {
    h1: "Earnings",
    p: "Total Expense",
    amount: 6078.76,
    text: "Profit is 48% More than last Month",
  };

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#A7DED9", "#2B2B36"],
        borderWidth: 0,
        cutout: "65%",
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="w-full bg-[#1e293b] p-4 rounded-xl text-white">
      {/* ডাটাগুলো chart-এর উপরে */}
      <div className="text-left mb-4 w-[]">
        <h1 className="text-lg font-bold">{Data1.h1}</h1>
        <p className="text-sm">{Data1.p}</p>
        <p className="text-xl font-bold mt-1">${Data1.amount.toLocaleString()}</p>
        <p className="text-xs mt-1">{Data1.text}</p>
      </div>

      {/* Chart */}
      <div className="relative w-full h-[174px]">
        <Doughnut data={data} options={options} />
        {/* Percentage overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-[25px] font-bold mt-10">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
