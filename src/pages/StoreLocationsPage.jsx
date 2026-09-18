import React from "react";
import StoreLocationsHeader from "../components/StoreLocationsHeader";
import StoreLicenseBanner from "../components/StoreLicenseBanner";
import StoreLocationsToolbar from "../components/StoreLocationsToolbar";
import StoreLocationsTable from "../components/StoreLocationsTable";
import StoreLocationsBottomStats from "../components/StoreLocationsBottomStats";
import StoreFleetMapBanner from "../components/StoreFleetMapBanner";

export default function StoreLocationsPage() {
  return (
    <>
      <StoreLocationsHeader />
      <StoreLicenseBanner />
      <StoreLocationsToolbar />
      <StoreLocationsTable />
      <StoreLocationsBottomStats />
      <StoreFleetMapBanner />
    </>
  );
}