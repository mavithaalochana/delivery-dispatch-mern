import React from "react";
import { Search, Scan, Filter, Calendar, Settings, Plus } from "lucide-react";

function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
      {icon}
      {label}
    </button>
  );
}

export default function ActionsBar() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-4">
       <div className="flex flex-1 min-w-[220px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
        <Search className="h-4 w-4 text-slate-400" />
        <span className="text-slate-400 text-[13px] flex-1">Search delivery address, recipient, Sale ID, or courier...</span>
        <Scan className="h-4 w-4 text-slate-400" />
        <span className="text-[11px] text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">⌘F</span>
      </div>
      <ActionButton icon={<Filter className="h-4 w-4" />} label="Filter" />
      <ActionButton icon={<Calendar className="h-4 w-4" />} label="Dispatch / Calendar" />
      <ActionButton icon={<Settings className="h-4 w-4" />} />
      <button className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2.5 text-[13px] font-medium text-white hover:bg-orange-600">
        <Plus className="h-4 w-4" />
        New Delivery
      </button>
    </div>
  );
}