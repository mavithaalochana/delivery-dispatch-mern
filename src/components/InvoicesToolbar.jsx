import React, { useState } from "react";
import { Users, Truck, Search, Download, FileText, SlidersHorizontal } from "lucide-react";

export default function InvoicesToolbar() {
  const [activeType, setActiveType] = useState("receivable");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 mb-4">
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveType("receivable")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium ${
              activeType === "receivable" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600"
            }`}
          >
            <Users className="h-4 w-4" />
            Customer Invoices (Receivable)
            <span
              className={`rounded-full px-1.5 text-[11px] ${
                activeType === "receivable" ? "bg-white/20" : "bg-slate-200 text-slate-600"
              }`}
            >
              27
            </span>
          </button>
          <button
            onClick={() => setActiveType("payable")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium ${
              activeType === "payable" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600"
            }`}
          >
            <Truck className="h-4 w-4" />
            Supplier Invoices (Payable)
            <span
              className={`rounded-full px-1.5 text-[11px] ${
                activeType === "payable" ? "bg-white/20" : "bg-slate-200 text-slate-600"
              }`}
            >
              11
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Ledger sync: 4m ago
          </span>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 hover:bg-slate-50">
            <Download className="h-3.5 w-3.5" /> CSV
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 hover:bg-slate-50">
            <FileText className="h-3.5 w-3.5" /> Aging Statement
          </button>
          <button className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50">
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <div className="flex flex-1 min-w-[200px] items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
          <Search className="h-4 w-4 text-slate-400" />
          <span className="text-slate-400 text-[13px]">Search invoice #, customer name, tax ID...</span>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-600">
          All Aging Buckets
        </button>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-600">
          Unpaid, Partially Paid, Overdue
        </button>
        <button className="rounded-lg bg-slate-800 px-4 py-2 text-[13px] font-medium text-white">Search</button>
      </div>
    </div>
  );
}