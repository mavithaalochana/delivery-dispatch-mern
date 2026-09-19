import React from "react";
import { agingBuckets } from "../data/invoices";

export default function AgingBuckets() {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-4">
      {agingBuckets.map((b) => (
        <div key={b.label} className={`rounded-xl border bg-white p-4 ${b.borderColor}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{b.label}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${b.badgeColor}`}>{b.badge}</span>
          </div>
          <div className={`text-xl font-bold mb-1 ${b.amountColor || "text-slate-900"}`}>{b.amount}</div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
            <span>{b.count}</span>
            <span>{b.percent}</span>
          </div>
          <div className="h-1 w-full rounded-full bg-slate-100">
            <div className={`h-1 rounded-full ${b.barColor}`} style={{ width: b.barWidth }} />
          </div>
        </div>
      ))}
    </div>
  );
}