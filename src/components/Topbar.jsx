import React from "react";
import { Search, Bell, Printer, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex items-center gap-3 sm:gap-4 border-b border-slate-200 bg-white px-4 sm:px-6 py-3">
      <button className="md:hidden text-slate-600 shrink-0" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 max-w-xl min-w-0">
        <Search className="h-4 w-4 text-slate-400 shrink-0" />
        <span className="hidden sm:block text-slate-400 text-[13px] flex-1 truncate">
          Search products, SKUs, suppliers, or orders...
        </span>
        <span className="hidden sm:inline text-[11px] text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 shrink-0">
          ⌘K
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] text-emerald-700 font-medium shrink-0">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Register #01 · Online
      </div>

      <button className="text-slate-500 hover:text-slate-700 shrink-0">
        <Bell className="h-5 w-5" />
      </button>
      <button className="hidden sm:block text-slate-500 hover:text-slate-700 shrink-0">
        <Printer className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2 border-l border-slate-200 pl-3 sm:pl-4 shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
          EV
        </div>
        <div className="leading-tight hidden sm:block">
          <div className="text-[13px] font-medium text-slate-800">Elena Vance</div>
          <div className="text-[11px] text-slate-500">Store Manager</div>
        </div>
      </div>
    </header>
  );
}