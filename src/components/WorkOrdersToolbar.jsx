import React from "react";
import { Search, ChevronDown, ListFilter, Plus } from "lucide-react";

export default function WorkOrdersToolbar() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 mb-3">
        <div className="flex flex-1 min-w-[220px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
          <Search className="h-4 w-4 text-slate-400" />
          <span className="text-slate-400 text-[13px]">Search ticket #, customer, serial, machine...</span>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-700">
          All Technicians (4)
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>

        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
          <ListFilter className="h-4 w-4" />
          Saved Views
        </button>

        <button className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2.5 text-[13px] font-medium text-white hover:bg-orange-700">
          <Plus className="h-4 w-4" />
          New Work Order
        </button>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-4">
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700">
          All Priorities
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700">
          All Equipment Units
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </>
  );
}