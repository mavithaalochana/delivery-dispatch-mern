import React from "react";
import { TrendingUp, ArrowLeftRight, Cloud } from "lucide-react";

export default function StoreLocationsBottomStats() {
  return (
    <div className="grid gap-4 mt-5 lg:grid-cols-3">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Total Store Network Revenue
          </span>
          <TrendingUp className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">$412,800.00</div>
        <div className="text-[12px] text-emerald-600 font-medium mb-2">↑ +14.2% vs. prior month MTD</div>
        <svg viewBox="0 0 200 50" className="w-full h-10" preserveAspectRatio="none">
          <path
            d="M0,38 C20,32 30,15 50,20 C70,25 80,10 100,15 C120,20 130,30 150,22 C165,16 175,8 200,12"
            fill="none"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Inter-Store Transfers
          </span>
          <ArrowLeftRight className="h-4 w-4 text-orange-500" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">3 Pending Requests</div>
        <p className="text-[12px] text-slate-500 mb-3">
          2 outgoing from #LOC-02 Depot · 1 incoming to #LOC-04 Station
        </p>
        <div className="flex items-center justify-between">
          <a href="#" className="text-[12px] font-medium text-orange-600 hover:underline">
            Review Transfer Orders →
          </a>
          <span className="rounded-full bg-orange-50 text-orange-700 text-[11px] font-medium px-2 py-0.5">
            Action Required
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Network Health & POS Sync
          </span>
          <Cloud className="h-4 w-4 text-slate-500" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">
          99.98% <span className="text-[13px] font-medium text-emerald-600">Uptime SLA</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-100 mb-2">
          <div className="h-1.5 w-[99%] rounded-full bg-emerald-500" />
        </div>
        <div className="flex items-center justify-between text-[12px] text-slate-500">
          <span>Latency: 18ms</span>
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 13 of 13 Lanes Online
          </span>
        </div>
      </div>
    </div>
  );
}