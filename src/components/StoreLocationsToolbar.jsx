import React from "react";
import { Search, MapPin, SlidersHorizontal, List, LayoutGrid } from "lucide-react";

export default function StoreLocationsToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-4">
      <div className="flex flex-1 min-w-[220px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
        <Search className="h-4 w-4 text-slate-400" />
        <span className="text-slate-400 text-[13px]">Search branch name, address, manager, or terminal ID...</span>
      </div>

      <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
        <MapPin className="h-4 w-4" />
        All Regions
      </button>

      <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50">
        <SlidersHorizontal className="h-4 w-4" />
        All Statuses
      </button>

      <div className="flex rounded-lg border border-slate-200 bg-white p-1">
        <button className="rounded-md bg-slate-900 p-1.5 text-white">
          <List className="h-4 w-4" />
        </button>
        <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
          <LayoutGrid className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}