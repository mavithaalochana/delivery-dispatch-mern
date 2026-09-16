import React from "react";
import { Coffee, Users2, Radio, Plus } from "lucide-react";

function Bar({ label, sub, percent, color }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center justify-between text-[12px]">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-slate-500">{sub}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
        <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function CardShell({ icon, title, badge, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[13px] font-semibold text-slate-800">{title}</span>
        </div>
        {badge}
      </div>
      {children}
    </div>
  );
}

export default function AppointmentsBottomStats() {
  return (
    <div className="grid gap-4 mt-5 lg:grid-cols-3">
      <CardShell
        icon={<Coffee className="h-4 w-4 text-orange-500" />}
        title="Service Bay Utilization"
        badge={<span className="rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium px-2 py-0.5">78% Opt</span>}
      >
        <Bar label="Bay 01 (Commercial Repair)" sub="Available 11:30 AM" percent={40} color="bg-emerald-500" />
        <Bar label="Bay 02 (Diagnostics & Testing)" sub="Occupied (#APT-8041)" percent={90} color="bg-orange-500" />
        <Bar label="Cupping Lab / Sensory Suite" sub="Ready for 11:00 AM" percent={20} color="bg-slate-400" />
        <div className="mt-3 flex items-center justify-between text-[12px] text-slate-500">
          <span>Water Filtration System:</span>
          <span className="text-emerald-600 font-medium">Normal (3.2 bar) ✓</span>
        </div>
      </CardShell>

      <CardShell
        icon={<Users2 className="h-4 w-4 text-orange-500" />}
        title="Lounge Check-in Queue"
        badge={<span className="rounded-full bg-orange-50 text-orange-700 text-[11px] font-medium px-2 py-0.5">4 Waiting</span>}
      >
        <div className="space-y-2.5 mb-3">
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
            <div className="text-[12px]">
              <span className="font-medium text-slate-800">Sarah Jenkins</span>
              <div className="text-slate-500">Arrived 09:22 AM · Coffee Served</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0" />
            <div className="text-[12px]">
              <span className="font-medium text-slate-800">David Miller +5</span>
              <div className="text-slate-500">Arrived 10:48 AM · Prepping Tasting</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
            <div className="text-[12px]">
              <span className="font-medium text-slate-800">Walk-in Tech Inquiry</span>
              <div className="text-slate-500">Triage with Marcus</div>
            </div>
          </div>
        </div>
        <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200 py-2 text-[12px] font-medium text-slate-700 hover:bg-slate-100">
          <Plus className="h-3.5 w-3.5" />
          Manual Client Check-In
        </button>
      </CardShell>

      <CardShell
        icon={<Radio className="h-4 w-4 text-orange-500" />}
        title="Tech Dispatch Broadcast"
        badge={<span className="text-[11px] text-slate-500">OCT-24</span>}
      >
        <div className="space-y-3">
          <div className="border-l-2 border-emerald-500 pl-3 text-[12px]">
            <div className="font-medium text-slate-800">Mobile Van 01 (South Bay)</div>
            <div className="text-slate-500">2 On-Site Audits completed · Return ETA 02:30 PM</div>
          </div>
          <div className="border-l-2 border-red-500 pl-3 text-[12px]">
            <div className="font-medium text-slate-800">Parts Inventory Alert</div>
            <div className="text-slate-500">Silicone gaskets (E61 group) refilled from stock #882</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-[12px] text-slate-500">
          <span>Hardware sync status</span>
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Apex Cloud Synced
          </span>
        </div>
      </CardShell>
    </div>
  );
}