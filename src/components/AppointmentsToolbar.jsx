import React, { useState } from "react";
import { Search, List, Calendar, ChevronLeft, ChevronRight, Plus, CalendarDays } from "lucide-react";

export default function AppointmentsToolbar() {
  const [view, setView] = useState("List View");

  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-4">
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 min-w-[220px]">
        <Search className="h-4 w-4 text-slate-400" />
      </div>

      <button className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-[13px] font-medium text-white">
        <Search className="h-4 w-4" />
        Search
      </button>

      <div className="flex rounded-lg border border-slate-200 bg-white p-1">
        {["List View", "Calendar View"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium ${
              view === v ? "bg-slate-100 text-slate-900" : "text-slate-500"
            }`}
          >
            {v === "List View" ? <List className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
            {v}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
        <ChevronLeft className="h-4 w-4 text-slate-400 cursor-pointer" />
        <span className="flex items-center gap-1.5 text-[13px] font-medium text-slate-800">
          <CalendarDays className="h-4 w-4 text-slate-500" />
          Today · Thursday, Oct 24, 2024
        </span>
        <ChevronRight className="h-4 w-4 text-slate-400 cursor-pointer" />
      </div>

      <button className="ml-auto flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2.5 text-[13px] font-medium text-white hover:bg-orange-700">
        <Plus className="h-4 w-4" />
        New Appointment
      </button>
    </div>
  );
}