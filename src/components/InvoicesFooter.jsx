import React from "react";

export default function InvoicesFooter() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white mt-4 px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-medium text-slate-600">TOTAL OUTSTANDING RECEIVABLES:</span>
          <span className="text-xl font-bold text-orange-600">$73,110.00</span>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-slate-500">
          <span>Rows per page:</span>
          <span className="rounded border border-slate-200 px-2 py-1 text-slate-700">25</span>
          <span>Showing 1-6 of 27</span>
          <div className="flex items-center gap-1">
            <button className="rounded-md bg-orange-600 text-white px-2 py-1 text-[12px] font-medium">1</button>
            <button className="rounded-md text-slate-600 hover:bg-slate-100 px-2 py-1 text-[12px]">2</button>
          </div>
        </div>
      </div>
      <div className="mt-2 text-[12px] text-slate-500">
        Selected: 0 items ($0.00) · Weighted Avg Days to Pay: 34.2 Days
      </div>
    </div>
  );
}