import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DeliveryPage from "./pages/DeliveryPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import WorkOrdersPage from "./pages/WorkOrdersPage";
import StoreLocationsPage from "./pages/StoreLocationsPage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-slate-800 text-sm">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-1 flex-col overflow-y-auto min-w-0">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 px-4 sm:px-6 py-5">
            <Routes>
              <Route path="/" element={<DeliveryPage />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/work-orders" element={<WorkOrdersPage />} />
              <Route path="/store-locations" element={<StoreLocationsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}