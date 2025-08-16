import React from "react";
import SidebarItem from "./SidebarItem";
import { HiHome, HiUser, HiChartBar, HiShoppingCart, HiCube, HiPresentationChartLine, HiChat } from "react-icons/hi";

const menuItems = [
  { label: "Dashboard", icon: HiHome },
  { label: "Profile", icon: HiUser },
  { label: "Leaderboard", icon: HiChartBar },
  { label: "Order", icon: HiShoppingCart },
  { label: "Product", icon: HiCube },
  { label: "Sales Report", icon: HiPresentationChartLine },
  { label: "Message", icon: HiChat },
];

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="bg-[#1e293b] p-4 w-20 md:w-64 flex flex-col sticky top-0 h-screen">
      <h1 className="text-2xl font-bold mb-6 hidden md:block">My Dashboard</h1>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            Icon={item.icon}
            active={activePage === item.label}
            onClick={() => setActivePage(item.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
