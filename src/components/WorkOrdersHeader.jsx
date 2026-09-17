import React from "react";
import { ChevronRight, Table2, Download } from "lucide-react";

export default function WorkOrdersHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
      <div>
        <div className="flex items-center gap-1 text-[12px] text-slate-500 mb-1">
          <span>Service Desk</span>
          <ChevronRight className="h-3 w-3" />
          <span>Maintenance</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-700 font-medium">Work Orders</span>
        </div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-semibold text-slate-900">Work Orders</h1>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live Sync Active
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
          <Table2 className="h-4 w-4" />
          Table Density
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
        <div className="text-right">
          <div className="text-[15px] font-semibold text-slate-900">52 ACTIVE</div>
          <div className="text-[11px] text-slate-500">Queue Load 94%</div>
        </div>
      </div>
    </div>
  );
}