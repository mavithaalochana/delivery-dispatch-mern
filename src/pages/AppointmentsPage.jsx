import React from "react";
import AppointmentsHeader from "../components/AppointmentsHeader";
import AppointmentsToolbar from "../components/AppointmentsToolbar";
import AppointmentsTable from "../components/AppointmentsTable";
import AppointmentsBottomStats from "../components/AppointmentsBottomStats";

export default function AppointmentsPage() {
  return (
    <>
      <AppointmentsHeader />
      <AppointmentsToolbar />
      <AppointmentsTable />
      <AppointmentsBottomStats />
    </>
  );
}