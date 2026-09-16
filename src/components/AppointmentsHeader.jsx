import React from "react";
import { ChevronRight, CalendarCheck, UserCheck, Users } from "lucide-react";

function StatCard({ label, value, icon }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 min-w-[150px]">
      {icon}
      <div>
        <div className="text-[11px] text-slate-500">{label}</div>
        <div className="text-[15px] font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

export default function AppointmentsHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
      <div>
        <div className="flex items-center gap-1 text-[12px] text-slate-500 mb-1">
          <span>Operations Hub</span>
          <ChevronRight className="h-3 w-3" />
          <span>Store Schedule</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-700 font-medium">Appointments</span>
        </div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-semibold text-slate-900">Appointments & Service Dispatch</h1>
          <span className="rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-1">
            STORE #104
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <StatCard label="Today's Total" value="12 Bookings" icon={<CalendarCheck className="h-4 w-4 text-orange-500" />} />
        <StatCard label="Checked-In" value="4 In Lounge" icon={<UserCheck className="h-4 w-4 text-emerald-500" />} />
        <StatCard label="Staff On Duty" value="5 Baristas · Techs" icon={<Users className="h-4 w-4 text-slate-500" />} />
      </div>
    </div>
  );
}