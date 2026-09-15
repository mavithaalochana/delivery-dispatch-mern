import React from "react";
import { Pencil, ArrowUpDown } from "lucide-react";
import { orders, statusStyles, initials } from "../data/orders";

function PageButton({ label, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`min-w-[28px] rounded-md px-2 py-1 text-[12px] font-medium ${
        active
          ? "bg-orange-500 text-white"
          : disabled
          ? "text-slate-300 cursor-not-allowed"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

export default function OrderTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[12px] text-slate-500">
              <th className="w-10 py-3 pl-4">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="w-10 py-3">Action</th>
              <th className="py-3 pr-4">Sale ID</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4">Recipient</th>
              <th className="py-3 pr-4">Delivery Address</th>
              <th className="py-3 pr-4">Courier / Fleet</th>
              <th className="py-3 pr-4">Category</th>
              <th className="py-3 pr-4 text-right">
                <span className="inline-flex items-center gap-1 justify-end w-full">
                  Target Window <ArrowUpDown className="h-3 w-3" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="py-3 pl-4">
                  <input type="checkbox" className="rounded border-slate-300" />
                </td>
                <td className="py-3 text-slate-400">
                  <Pencil className="h-4 w-4" />
                </td>
                <td className="py-3 pr-4 font-medium text-orange-600">{o.id}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${statusStyles[o.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {o.status}
                  </span>
                </td>
                <td className="py-3 pr-4 font-medium text-slate-800">{o.recipient}</td>
                <td className="py-3 pr-4 text-slate-600">{o.address}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                      {o.unassigned ? "--" : initials(o.courier)}
                    </div>
                    <div className="leading-tight">
                      <div className={o.unassigned ? "text-slate-400" : "text-slate-800"}>{o.courier}</div>
                      <div className={`text-[11px] ${o.unassigned ? "text-orange-600 underline" : "text-slate-500"}`}>
                        {o.fleet}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-4 text-slate-600">{o.category}</td>
                <td className="py-3 pr-4 text-right">
                  <div className="font-medium text-slate-800">{o.target}</div>
                  <div className="text-[11px] text-slate-500">{o.note}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-[12px] text-slate-500">
        <div className="flex items-center gap-2">
          <span>Showing 1 to 8 of 38 orders</span>
          <span className="mx-1">·</span>
          <span>Rows per page:</span>
          <span className="rounded border border-slate-200 px-2 py-0.5 text-slate-700">8</span>
        </div>
        <div className="flex items-center gap-1">
          <PageButton label="Prev" disabled />
          <PageButton label="1" active />
          <PageButton label="2" />
          <PageButton label="3" />
          <span className="px-1">...</span>
          <PageButton label="5" />
          <PageButton label="Next" />
        </div>
      </div>
    </div>
  );
}