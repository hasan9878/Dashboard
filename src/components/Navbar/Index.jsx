import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";

const Navbar = () => {
  const [notifications, setNotifications] = useState(3); 

  return (
    <nav className="w-full bg-gray-900 text-white flex items-center justify-between px-8 py-3 shadow-md">
      {/* Left: Search */}
      <div className="flex items-center mt-5 gap-2 bg-gray-800 px-3 py-1 rounded-md">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full md:w-80 h-10"
        />
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-4 relative">
        {/* Notification */}
        <div className="relative">
          <FiBell className="text-2xl cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* Profile */}
        <div>
          <img
            src="src/assets/react.svg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
