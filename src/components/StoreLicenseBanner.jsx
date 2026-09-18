import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function StoreLicenseBanner() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4 mb-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 shrink-0">
          <BookOpen className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[14px] font-semibold text-slate-900">Multi-Store Enterprise License</span>
            <span className="rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5">
              TIER 3 CLOUD
            </span>
          </div>
          <p className="text-[13px] text-slate-600 max-w-xl">
            Your plan includes 8 store branch activations (5 active, 3 available licenses). Need more multi-lane
            terminals? Contact Account Executive.
          </p>
        </div>
      </div>
      <a href="#" className="flex items-center gap-1 text-[13px] font-medium text-orange-600 hover:underline whitespace-nowrap">
        Manage Subscription & Licenses <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}