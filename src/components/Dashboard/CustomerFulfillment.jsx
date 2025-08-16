import {
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
    CategoryScale, // ← এইটা add করুন

  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
    CategoryScale, // ← register করুন

  Title,
  Tooltip,
  Legend,

  Filler
);

const getStoredData = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

const generateRandomData = (count, min = 60, max = 80, decimals = 2) => {
  return Array.from({ length: count }, () =>
    Number((Math.random() * (max - min) + min).toFixed(decimals))
  );
};

const CustomerFulfillment = () => {
  const chartRef = useRef(null);

  const [lastMonth] = useState(() =>
    getStoredData("lastMonth", generateRandomData(8, 40, 80))
  );
  const [thisMonth] = useState(() =>
    getStoredData("thisMonth", generateRandomData(8, 50, 90))
  );

  const [gradients, setGradients] = useState({});

  useEffect(() => {
    localStorage.setItem("lastMonth", JSON.stringify(lastMonth));
    localStorage.setItem("thisMonth", JSON.stringify(thisMonth));
  }, [lastMonth, thisMonth]);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;

    const lastMonthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    lastMonthGradient.addColorStop(0, "rgba(167,139,250,0.8)");
    lastMonthGradient.addColorStop(1, "rgba(167,139,250,0.1)");

    const thisMonthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    thisMonthGradient.addColorStop(0, "rgba(96,165,250,0.8)");
    thisMonthGradient.addColorStop(1, "rgba(96,165,250,0.1)");

    setGradients({
      lastMonth: lastMonthGradient,
      thisMonth: thisMonthGradient,
    });

    // Destroy chart on unmount to prevent "canvas is already in use" error
    return () => {
      if (chart) chart.destroy();
    };
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Last Month",
        data: lastMonth,
        borderColor: "#A78BFA",
        backgroundColor: gradients.lastMonth || "rgba(167,139,250,0.5)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "This Month",
        data: thisMonth,
        borderColor: "#60A5FA",
        backgroundColor: gradients.thisMonth || "rgba(96,165,250,0.5)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#fff" } },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#0f172a",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
      filler: { propagate: false },
    },
    interaction: { intersect: false, mode: "index" },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
    },
  };

  return (
    <div className="w-full h-90 bg-[#1e293b] p-4  rounded-xl">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default CustomerFulfillment;
