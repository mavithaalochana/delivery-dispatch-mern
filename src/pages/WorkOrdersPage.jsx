import React from "react";
import WorkOrdersHeader from "../components/WorkOrdersHeader";
import WorkOrdersFilterPills from "../components/WorkOrdersFilterPills";
import WorkOrdersToolbar from "../components/WorkOrdersToolbar";
import WorkOrdersTable from "../components/WorkOrdersTable";

export default function WorkOrdersPage() {
  return (
    <>
      <WorkOrdersHeader />
      <WorkOrdersFilterPills />
      <WorkOrdersToolbar />
      <WorkOrdersTable />
    </>
  );
}