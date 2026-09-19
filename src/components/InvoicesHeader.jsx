import React from "react";
import { ChevronRight, Clock, FileDown, Plus } from "lucide-react";

export default function InvoicesHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
      <div>
        <div className="flex items-center gap-1 text-[12px] text-slate-500 mb-1">
          <span>Financial & Audit</span>
          <ChevronRight className="h-3 w-3" />
          <span>Accounts Receivable</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-orange-600 font-medium">Aging Invoices</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900">Accounts Receivable & Aging Ledger</h1>
        <p className="text-[13px] text-slate-500 mt-1 max-w-lg">
          Multi-tier aging analysis and customer & supplier invoice ledger. Real-time cash collection velocity.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
          <Clock className="h-4 w-4" />
          Payment Schedule
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
          <FileDown className="h-4 w-4" />
          Aging Statement PDF
        </button>
        <button className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2.5 text-[13px] font-medium text-white hover:bg-orange-700">
          <Plus className="h-4 w-4" />
          New Invoice
        </button>
      </div>
    </div>
  );
}