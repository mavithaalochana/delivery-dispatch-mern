import React from "react";
import { LogOut, X } from "lucide-react";
import { sidebarSections } from "../data/navigation";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile dark overlay - click කලොත් sidebar close වෙනවා */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 text-slate-300 transition-transform duration-200 md:static md:z-auto md:w-60 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between px-5 py-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <span className="rounded-md border border-orange-500/40 bg-orange-500/10 px-2 py-0.5 text-[11px] font-semibold text-orange-400">
                POS
              </span>
            </div>
            <div className="text-[13px] text-slate-300">
              Store Suite <span className="text-slate-500">•</span> ApexPOS
            </div>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {sidebarSections.map((section) => (
            <div key={section.label} className="mb-4">
              <div className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                {section.label}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                      item.active
                        ? "bg-orange-500 text-white font-medium"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 border-t border-slate-800 px-4 py-4">
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
              EV
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
          </div>
          <div className="leading-tight flex-1">
            <div className="text-white text-[13px] font-medium">Elena Vance</div>
            <div className="text-[11px] text-slate-400">Store Manager</div>
          </div>
          <button className="text-slate-400 hover:text-white" title="Log out">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  );
}