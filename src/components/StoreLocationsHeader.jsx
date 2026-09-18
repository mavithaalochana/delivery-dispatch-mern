import React from "react";
import { ChevronRight, Download, Plus } from "lucide-react";

export default function StoreLocationsHeader() {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-1 text-[12px] text-slate-500 mb-1">
        <span>Organization</span>
        <ChevronRight className="h-3 w-3" />
        <span>Multi-Store Network</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-orange-600 font-medium">Store Locations</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Store Locations & Branch Network</h1>
          <p className="text-[13px] text-slate-500 mt-1">
            Centralized register topology, branch inventory routing, and regional terminal diagnostics.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="flex items-center gap-1.5 text-[12px] text-emerald-700 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            5 ACTIVE LOCATIONS · ALL REGISTERS SYNCED
          </span>
          <div className="flex gap-2.5">
            <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
              <Download className="h-4 w-4" />
              Export Audit Log
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-[13px] font-medium text-white hover:bg-orange-700">
              <Plus className="h-4 w-4" />
              New Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}