import React from "react";
import TodaySales from "../components/Dashboard/TodaySales";
import TopProducts from "../components/Dashboard/TopProducts";
import Earnings from "../components/Dashboard/Earnings";
import VisitorInsights from "../components/Dashboard/VisitorInsights";
import LevelChart from "../components/Dashboard/LevelChart";
import CustomerFulfillment from "../components/Dashboard/CustomerFulfillment";

const DashboardPage = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-6 h-full">
      {/* প্রথম সারি: TodaySales (col-span-8) এবং LevelChart (col-span-4) */}
      <div className="col-span-12 md:col-span-8  ">
        <TodaySales />
      </div>
      <div className="col-span-12 md:col-span-4">
        <LevelChart />
      </div>

      {/* দ্বিতীয় সারি: TopProducts (col-8), CustomerFulfillment (col-4) */}
      <div className="col-span-12 md:col-span-8">
        <TopProducts />
      </div>
      <div className="col-span-12 md:col-span-4">
        <CustomerFulfillment />
      </div>

      {/* তৃতীয় সারি: Earnings (col-4), VisitorInsights (col-8) */}
      <div className="col-span-12 md:col-span-4">
        <Earnings />
      </div>
      <div className="col-span-12 md:col-span-8">
        <VisitorInsights />
      </div>
    </div>
  );
};

export default DashboardPage;