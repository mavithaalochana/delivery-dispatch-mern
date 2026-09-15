import React from "react";
import { tabs } from "../data/navigation";

export default function OrderTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
              isActive
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab.dot && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
            {tab.name}
            <span
              className={`rounded-full px-1.5 text-[11px] ${
                isActive ? "bg-white/20" : "bg-slate-100 text-slate-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}