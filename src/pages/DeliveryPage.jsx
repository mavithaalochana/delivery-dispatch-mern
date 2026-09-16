import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import ActionsBar from "../components/ActionsBar";
import OrderTabs from "../components/OrderTabs";
import OrderTable from "../components/OrderTable";
import BottomStats from "../components/BottomStats";

export default function DeliveryPage() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <>
      <PageHeader />
      <ActionsBar />
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <OrderTable />
      <BottomStats />
    </>
  );
}