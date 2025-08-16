import React, { useState } from "react";
import Layout from "./components/Layout";
import DashboardPage from "./Pages/Dashboardpage";
import ProfilePage from "./Pages/ProfilePage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import OrderPage from "./Pages/OrderPage";
import ProductPage from "./Pages/ProductPage";
import SalesReportPage from "./Pages/SalesReportPage";
import MessagePage from "./Pages/MessagePage";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard": return <DashboardPage />;
      case "Profile": return <ProfilePage />;
      case "Leaderboard": return <LeaderboardPage />;
      case "Order": return <OrderPage />;
      case "Product": return <ProductPage />;
      case "Sales Report": return <SalesReportPage />;
      case "Message": return <MessagePage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
