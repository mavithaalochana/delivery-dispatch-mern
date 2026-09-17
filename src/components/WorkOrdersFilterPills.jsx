import React from "react";
import { filterPills } from "../data/workorders";

export default function WorkOrdersFilterPills() {
  return (
    <div className="flex flex-wrap gap-2.5 mb-4">
      {filterPills.map((pill) => (
        <div
          key={pill.name}
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[13px]"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${pill.color}`} />
          <span className="text-slate-700 font-medium">{pill.name}</span>
          <span className="text-slate-400">{pill.count}</span>
        </div>
      ))}
    </div>
  );
}