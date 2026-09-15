import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PageHeader from "./components/PageHeader";
import ActionsBar from "./components/ActionsBar";
import OrderTabs from "./components/OrderTabs";
import OrderTable from "./components/OrderTable";
import BottomStats from "./components/BottomStats";

export default function App() {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-slate-800 text-sm">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-y-auto min-w-0">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 px-4 sm:px-6 py-5">
          <PageHeader />
          <ActionsBar />
          <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <OrderTable />
          <BottomStats />
        </main>
      </div>
    </div>
  );
}