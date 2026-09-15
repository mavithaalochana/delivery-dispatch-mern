import React from "react";
import { Clock, Car, MapPin } from "lucide-react";

function BottomCard({ icon, label, value, extra, extraColor, badge, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">{icon}</div>
        <span className="text-[12px] text-slate-500">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-slate-900">{value}</span>
        {extra && (
          <span
            className={`text-[11px] font-medium ${extraColor || "text-slate-500"} ${
              badge ? "rounded-full bg-emerald-50 px-2 py-0.5" : ""
            }`}
          >
            {extra}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default function BottomStats() {
  return (
    <div className="grid gap-4 mt-5 sm:grid-cols-3">
      <BottomCard
        icon={<Clock className="h-5 w-5 text-orange-500" />}
        label="Avg Dispatch Time"
        value="18 mins"
        extra="↓4m vs avg"
        extraColor="text-emerald-600"
      >
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
          <div className="h-1.5 w-3/4 rounded-full bg-emerald-500" />
        </div>
      </BottomCard>

      <BottomCard
        icon={<Car className="h-5 w-5 text-slate-500" />}
        label="Driver Fleet Status"
        value="4 / 5 Active Vans"
        extra="Optimal"
        extraColor="text-emerald-600"
        badge
      >
        <div className="mt-3 flex items-center gap-1.5">
          {[1, 1, 1, 1, 0].map((on, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${on ? "bg-emerald-500" : "bg-slate-200"}`} />
          ))}
          <span className="ml-2 text-[11px] text-slate-500">1 In Reserve</span>
        </div>
      </BottomCard>

      <BottomCard icon={<MapPin className="h-5 w-5 text-orange-500" />} label="Active Zone Coverage" value="Metro Core & West">
        <div className="mt-3 flex items-center justify-between text-[12px]">
          <span className="text-slate-500">Current SLA Fulfillment: 100%</span>
          <a href="#" className="text-orange-600 font-medium hover:underline">
            Live Map →
          </a>
        </div>
      </BottomCard>
    </div>
  );
}