import React from "react";
import { Send, Mail, Pencil, Download } from "lucide-react";
import { invoices, statusStyles, initials, avatarColors } from "../data/invoices";

export default function InvoicesTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] text-slate-500 uppercase tracking-wide">
              <th className="w-10 py-3 pl-4">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="py-3 pr-4">Invoice #</th>
              <th className="py-3 pr-4">Customer / Client</th>
              <th className="py-3 pr-4">Terms</th>
              <th className="py-3 pr-4">Issue Date</th>
              <th className="py-3 pr-4">Due Date</th>
              <th className="py-3 pr-4 text-right">Total Amount</th>
              <th className="py-3 pr-4 text-right">Balance Due</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4 text-right">Quick Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={inv.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 align-top">
                <td className="py-4 pl-4">
                  <input type="checkbox" className="rounded border-slate-300" />
                </td>
                <td className="py-4 pr-4 font-medium text-orange-600">{inv.id}</td>
                <td className="py-4 pr-4">
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-semibold shrink-0 ${avatarColors[i % avatarColors.length]}`}
                    >
                      {initials(inv.customer)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{inv.customer}</div>
                      <div className="text-[11px] text-slate-500">{inv.sub}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-slate-600">{inv.terms}</td>
                <td className="py-4 pr-4 text-slate-600">{inv.issueDate}</td>
                <td className="py-4 pr-4">
                  <div className={`font-medium ${inv.dueColor}`}>{inv.dueDate}</div>
                  <div className={`text-[11px] ${inv.dueColor}`}>{inv.dueNote}</div>
                </td>
                <td className="py-4 pr-4 text-right font-medium text-slate-800">{inv.totalAmount}</td>
                <td className="py-4 pr-4 text-right">
                  <div className={`font-semibold ${inv.balanceColor}`}>{inv.balanceDue}</div>
                  <div className="text-[11px] text-slate-500">{inv.balanceNote}</div>
                </td>
                <td className="py-4 pr-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium whitespace-nowrap ${statusStyles[inv.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {inv.status}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center justify-end gap-2 text-slate-400">
                    {inv.action === "send" ? (
                      <Send className="h-4 w-4 cursor-pointer hover:text-slate-700" />
                    ) : (
                      <Mail className="h-4 w-4 cursor-pointer hover:text-slate-700" />
                    )}
                    <Pencil className="h-4 w-4 cursor-pointer hover:text-slate-700" />
                    <Download className="h-4 w-4 cursor-pointer hover:text-slate-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}