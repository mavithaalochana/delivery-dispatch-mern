import React from "react";
import { Pencil, MoreVertical, MapPin } from "lucide-react";
import { locations, initials } from "../data/storeLocations";

export default function StoreLocationsTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[12px] text-slate-500">
              <th className="w-10 py-3 pl-4">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="py-3 pr-4">Actions</th>
              <th className="py-3 pr-4">Location ID</th>
              <th className="py-3 pr-4">Store Branch Name</th>
              <th className="py-3 pr-4">Physical Address</th>
              <th className="py-3 pr-4">Branch Manager</th>
              <th className="py-3 pr-4">Direct Contact</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 align-top">
                <td className="py-4 pl-4">
                  <input type="checkbox" className="rounded border-slate-300" />
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Pencil className="h-4 w-4" />
                    <MoreVertical className="h-4 w-4" />
                  </div>
                </td>
                <td className="py-4 pr-4 font-medium text-slate-700">{loc.id}</td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-900">{loc.name}</span>
                    <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${loc.tagColor}`}>{loc.tag}</span>
                  </div>
                  <div className="text-[12px] text-slate-500">{loc.subLabel}</div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <MapPin className="h-3.5 w-3.5 mt-0.5 text-orange-500 shrink-0" />
                    <div>
                      <div>{loc.address}</div>
                      <div className="text-[12px] text-slate-500">{loc.city}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 shrink-0">
                      {initials(loc.manager)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{loc.manager}</div>
                      <div className="text-[12px] text-slate-500">{loc.role}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-slate-700">
                  <div>{loc.phone}</div>
                  <div className="text-[12px] text-slate-500 truncate max-w-[110px]">{loc.email}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-[12px] text-slate-500">
        <span>Showing 5 of 5 activated branch locations</span>
        <div className="flex items-center gap-2">
          <button className="text-slate-300 cursor-not-allowed px-2 py-1">Previous</button>
          <button className="rounded-md bg-orange-600 text-white px-2.5 py-1 font-medium">1</button>
          <button className="text-slate-600 hover:bg-slate-100 rounded-md px-2 py-1">Next</button>
        </div>
      </div>
    </div>
  );
}