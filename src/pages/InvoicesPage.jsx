import React from "react";
import InvoicesHeader from "../components/InvoicesHeader";
import AgingBuckets from "../components/AgingBuckets";
import InvoicesToolbar from "../components/InvoicesToolbar";
import InvoicesTable from "../components/InvoicesTable";
import InvoicesFooter from "../components/InvoicesFooter";

export default function InvoicesPage() {
  return (
    <>
      <InvoicesHeader />
      <AgingBuckets />
      <InvoicesToolbar />
      <InvoicesTable />
      <InvoicesFooter />
    </>
  );
}