import React from "react";
import { FaDollarSign, FaShoppingCart, FaBoxOpen, FaUserPlus } from "react-icons/fa";

const TodaySales = () => {
  const data = [
    {
      icon: <FaDollarSign />,
      iconColor: "text-green-400",
      totalSales: "$5k",
      h3: "Total Sale",
      text: "+10% from yesterday",
      textColor: "text-green-400",
    },
    {
      icon: <FaShoppingCart />,
      iconColor: "text-blue-400",
      totalSales: 500,
      h3: "Total Order",
      text: "+8% from yesterday",
      textColor: "text-blue-400",
    },
    {
      icon: <FaBoxOpen />,
      iconColor: "text-yellow-400",
      totalSales: 9,
      h3: "Product Sold",
      text: "+2% from yesterday",
      textColor: "text-yellow-400",
    },
    {
      icon: <FaUserPlus />,
      iconColor: "text-pink-400",
      totalSales: 12,
      h3: "New Customer",
      text: "+3% from yesterday",
      textColor: "text-pink-400",
    },
  ];

  return (
    <div className="bg-[#21222D] p-4 md:py-15 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-1">Today's Sales</h2>
      <p className="text-[#A0A0A0] font-semibold text-[15px] mb-4">Sales Summary</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
        {data.map((item, index) => (
          <div key={index} className="bg-[#2A2C3D] p-4 rounded-lg shadow">
            <div className={`text-2xl mb-2 ${item.iconColor}`}>{item.icon}</div>
            <p className="text-white text-lg font-bold">{item.totalSales}</p>
            <p className="text-gray-400 text-sm">{item.h3}</p>
            <p className={`${item.textColor} text-sm mt-1`}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySales;
