import React from "react";

const SidebarItem = ({ label, Icon, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer px-4 py-2 rounded-lg transition
        ${active ? "bg-blue-500 text-white" : "hover:bg-blue-800"}`}
    >
      <Icon className="text-xl" />
      <span className="hidden md:inline">{label}</span>
    </li>
  );
};

export default SidebarItem;
