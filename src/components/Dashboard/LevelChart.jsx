import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const LevelChart = () => {
  const data = [
    { name: "1", Volume: 40, Service: 24 },
    { name: "2", Volume: 30, Service: 35 },
    { name: "3", Volume: 20, Service: 28 },
    { name: "4", Volume: 27, Service: 22 },
    { name: "5", Volume: 18, Service: 30 },
    { name: "6", Volume: 35, Service: 20 },
  ];

  const colors = {
    Volume: "#A9DFD8",
    Service: "#2B2B36",
  };

  return (
    <div className="bg-[#21222D] p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Level</h2>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            barGap={4}
          >
            <CartesianGrid
              horizontal={false}
              vertical={true}
              stroke="rgba(255,255,255,0.1)"
              strokeDasharray="3 3"
            />

            {/* Vertical line in the middle */}
            <ReferenceLine x={2.5} stroke="#ffffff" strokeWidth={1} />

            <XAxis dataKey="name" tick={false} />
            <Bar
              dataKey="Volume"
              stackId="a"
              fill={colors.Volume}
              radius={[0, 0, 0, 0]}
              barSize={30}
            />
            <Bar
              dataKey="Service"
              stackId="a"
              fill={colors.Service}
              radius={[6, 6, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6 mt-2 text-sm text-gray-300">
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: colors.Volume }}
          ></span>
          Volume
        </div>
        <div className="w-[1px] h-[20px] bg-[#FFFFFF2E] flex justify-center items-center "></div>

        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: colors.Service }}
          ></span>
          Service
        </div>
      </div>
    </div>
  );
};

export default LevelChart;
