import React from "react";
import { Pencil, CreditCard, CheckCircle2 } from "lucide-react";
import { workOrders, statusStyles, initials } from "../data/workorders";

function PageButton({ label, active }) {
  return (
    <button
      className={`min-w-[28px] rounded-md px-2 py-1 text-[12px] font-medium ${
        active ? "bg-orange-600 text-white" : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

export default function WorkOrdersTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[12px] text-slate-500">
              <th className="w-10 py-3 pl-4">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="py-3 pr-4">Action</th>
              <th className="py-3 pr-4">Edit</th>
              <th className="py-3 pr-4">WO ID</th>
              <th className="py-3 pr-4">Sale ID</th>
              <th className="py-3 pr-4">Logged Date</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4">Technician</th>
              <th className="py-3 pr-4">Est. Completion</th>
              <th className="py-3 pr-4">Customer</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map((w) => (
              <tr key={w.woId} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="py-3 pl-4">
                  <input type="checkbox" className="rounded border-slate-300" />
                </td>
                <td className="py-3 pr-4">
                  {w.action === "collect" ? (
                    <button className="flex items-center gap-1.5 rounded-md bg-emerald-700 px-2.5 py-1.5 text-[11px] font-medium text-white">
                      <CreditCard className="h-3 w-3" />
                      Collect
                    </button>
                  ) : (
                    <button className="flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-500">
                      <CheckCircle2 className="h-3 w-3" />
                      Settled
                    </button>
                  )}
                </td>
                <td className="py-3 pr-4 text-slate-400">
                  <Pencil className="h-4 w-4" />
                </td>
                <td className="py-3 pr-4 font-medium text-orange-600">{w.woId}</td>
                <td className="py-3 pr-4 text-slate-600">{w.saleId}</td>
                <td className="py-3 pr-4 text-slate-600">{w.loggedDate}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${statusStyles[w.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {w.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                      {initials(w.technician)}
                    </div>
                    <span className="font-medium text-slate-800">{w.technician}</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={
                      w.completionNote === "red"
                        ? "text-red-600 font-medium"
                        : w.completionNote === "green"
                        ? "text-emerald-600 font-medium"
                        : "text-slate-700"
                    }
                  >
                    {w.completion}
                  </span>
                </td>
                <td className="py-3 pr-4 text-slate-800 font-medium">{w.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-[12px] text-slate-500">
        <div className="flex items-center gap-2">
          <span>Showing 1-7 of 52 work orders</span>
          <span className="mx-1">·</span>
          <span>Per page:</span>
          <span className="rounded border border-slate-200 px-2 py-0.5 text-slate-700">7</span>
        </div>
        <div className="flex items-center gap-1">
          <PageButton label="‹" />
          <PageButton label="1" active />
          <PageButton label="2" />
          <PageButton label="3" />
          <span className="px-1">...</span>
          <PageButton label="8" />
          <PageButton label="›" />
          <PageButton label="»" />
        </div>
      </div>
    </div>
  );
}