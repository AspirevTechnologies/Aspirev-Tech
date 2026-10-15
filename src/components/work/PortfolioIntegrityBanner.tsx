"use client";

import React from "react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

interface PortfolioIntegrityBannerProps {
  onOpenInquiry: () => void;
}

export default function PortfolioIntegrityBanner({
  onOpenInquiry,
}: PortfolioIntegrityBannerProps) {
  return (
    <section className="py-10 bg-white border-t border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F5] rounded-3xl border border-[#E5E0D5] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#10221E] mb-0.5">
                Portfolio Transparency & Provenance Policy
              </h4>
              <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57] max-w-[780px]">
                All portfolio items are accurately labeled as commissioned client solutions, internal venture products, or exploratory technical concepts. We do not misrepresent concept studies as client work.
              </p>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#E7F3EF] border border-[#E5E0D5] hover:border-[#CFE4D8] text-[#10221E] font-ui text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <span>Custom Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1A3E38]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
