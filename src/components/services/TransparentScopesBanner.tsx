"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface TransparentScopesBannerProps {
  onOpenInquiry: () => void;
}

export default function TransparentScopesBanner({
  onOpenInquiry,
}: TransparentScopesBannerProps) {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F5] rounded-3xl border border-[#E5E0D5] p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-[760px]">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span>[ Transparent Scopes · Zero Hidden Retainers ]</span>
            </div>

            {/* Headline */}
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-2">
              Honest scopes, deterministic milestones, zero hidden retainers.
            </h3>

            {/* Paragraph */}
            <p className="font-body text-sm leading-relaxed text-[#4A5D57]">
              We tailor every engagement to specific project requirements rather than enforcing rigid generic packages. We offer fixed-scope sprints for well-defined deliverables and dedicated sprint blocks for evolving products. Request a project discussion to receive a detailed scope breakdown.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] transition-all duration-150 cursor-pointer"
            >
              <span>Request a Project Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
