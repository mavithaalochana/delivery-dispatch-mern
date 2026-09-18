import React from "react";
import { Map, Maximize2 } from "lucide-react";

export default function StoreFleetMapBanner() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 mt-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 shrink-0">
          <Map className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <div className="text-[14px] font-semibold text-slate-900">Interactive Regional Fleet Map</div>
          <p className="text-[13px] text-slate-500 max-w-xl">
            Display live register telemetry, stock discrepancies, and staff attendance overlaid on physical branch
            coordinates.
          </p>
        </div>
      </div>
      <button className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-200 whitespace-nowrap">
        <Maximize2 className="h-4 w-4" />
        Launch Fullscreen Map
      </button>
    </div>
  );
}