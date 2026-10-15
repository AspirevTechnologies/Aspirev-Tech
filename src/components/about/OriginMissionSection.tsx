"use client";

import React from "react";
import { ShieldCheck, Compass, Sparkles, Star } from "lucide-react";

export default function OriginMissionSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Origin Story & Studio Law */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
              <span className="font-mono text-xs font-medium text-[#1A3E38]">
                [ Origin & Mission · Dual-Engine Studio ]
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-4">
              Building software that respects user attention and operational reality.
            </h2>

            <p className="font-body text-base leading-relaxed text-[#3E534D] mb-3">
              We started Aspirev Technologies because we saw a recurring mismatch between modern agency culture and genuine business needs. Far too often, products were burdened with excessive enterprise overhead and fragile prototypes that break under real traffic.
            </p>

            <p className="font-body text-sm leading-relaxed text-[#526E65] mb-5">
              We operate differently: an agile, mathematically rigorous engineering studio where engineers understand product architecture, and every line of code serves a measurable business objective.
            </p>

            {/* The Studio Law Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] relative overflow-hidden w-full">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#1A3E38] uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1A3E38]" />
                <span>The Studio Law</span>
              </div>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#3E534D]">
                We measure our success by system longevity, sub-second performance audits, and direct business ROI, rather than billable project hours.
              </p>
            </div>
          </div>

          {/* Right Column: Mission Card + Dual-Engine Model Card */}
          <div className="lg:col-span-6 space-y-5">
            {/* Mission Card (Light) */}
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E0D5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center font-display font-bold text-[#1A3E38] text-base mb-3.5 shadow-2xs">
                M
              </div>
              <h3 className="font-display font-bold text-xl text-[#10221E] mb-2">
                Our Mission
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                To architect resilient, human-centered digital interfaces and intelligent software that empower businesses and individuals to execute at their highest potential.
              </p>
            </div>

            {/* Dual-Engine Model Card (Dark Forest Solvance Stage) */}
            <div className="p-6 rounded-3xl bg-[#102E27] text-white border border-[#2D6B60] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-full bg-[#1A3E38] border border-[#2D6B60] flex items-center justify-center text-[#A3E5D4]">
                  <Star className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[0.6875rem] font-semibold text-[#A3E5D4] uppercase tracking-wider">
                  Operational Model
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2">
                Dual-Engine Model
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#D2EAE3]">
                We balance client solution engineering with internal venture incubation (like our flagship AI platform at aspirev.com), ensuring we battle-test emerging tech on our own products before recommending it to partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
