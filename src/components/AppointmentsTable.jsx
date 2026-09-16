import React from "react";
import { Pencil } from "lucide-react";
import { appointments, categoryStyles, statusStyles, initials } from "../data/appointments";

function PageButton({ label, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`min-w-[28px] rounded-md px-2 py-1 text-[12px] font-medium ${
        active
          ? "bg-orange-600 text-white"
          : disabled
          ? "text-slate-300 cursor-not-allowed"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

export default function AppointmentsTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[12px] text-slate-500">
              <th className="w-10 py-3 pl-4">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="py-3 pr-4">ID</th>
              <th className="py-3 pr-4">Service Category</th>
              <th className="py-3 pr-4">Client Details</th>
              <th className="py-3 pr-4">Assigned Specialist</th>
              <th className="py-3 pr-4">Time Slot</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 align-top">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-300" />
                    <Pencil className="h-4 w-4 text-slate-400" />
                  </div>
                </td>
                <td className="py-4 pr-4 font-medium text-slate-800">{a.id}</td>
                <td className="py-4 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${categoryStyles[a.category]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {a.category}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 shrink-0">
                      {initials(a.clientName)}
                    </div>
                    <div className="leading-tight">
                      <div className="font-medium text-slate-800">{a.clientName}</div>
                      <div className="text-[11px] text-slate-500">{a.clientContact}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 shrink-0">
                      {initials(a.specialist)}
                    </div>
                    <div className="leading-tight">
                      <div className="font-medium text-slate-800">{a.specialist}</div>
                      <div className="text-[11px] text-slate-500">{a.specialistRole}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-1.5">
                    <span className="rounded border border-slate-200 px-1.5 py-0.5 text-[11px] font-medium text-slate-700">
                      {a.timeStart}
                    </span>
                    <span className="text-slate-400">→</span>
                    <span className="rounded border border-slate-200 px-1.5 py-0.5 text-[11px] font-medium text-slate-700">
                      {a.timeEnd}
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">{a.location}</div>
                </td>
                <td className="py-4 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${statusStyles[a.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-[12px] text-slate-500">
        <div className="flex items-center gap-2">
          <span>Showing 1 – 5 of 12 appointments scheduled today</span>
          <span className="mx-1">·</span>
          <span>Rows per page:</span>
          <span className="rounded border border-slate-200 px-2 py-0.5 text-slate-700">5</span>
        </div>
        <div className="flex items-center gap-1">
          <PageButton label="← Previous" disabled />
          <PageButton label="1" active />
          <PageButton label="2" />
          <PageButton label="3" />
          <PageButton label="Next →" />
        </div>
      </div>
    </div>
  );
}