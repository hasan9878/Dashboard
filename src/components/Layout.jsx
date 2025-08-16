import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Index"; // Navbar import করুন

const Layout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
