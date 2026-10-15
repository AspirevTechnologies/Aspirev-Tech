"use client";

import React from "react";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

interface CtaBannerSectionProps {
  onOpenInquiry: () => void;
}

export default function CtaBannerSection({ onOpenInquiry }: CtaBannerSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Solvance Curved Hero Banner Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#1A3E38] via-[#22564C] to-[#2D6B60] text-white p-8 sm:p-14 lg:p-16 border border-[#2D6B60] shadow-[0_20px_60px_rgba(26,62,56,0.35)] overflow-hidden text-center">
          {/* Subtle Radial Glows inside Banner */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#22564C] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#A3E5D4]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Decorative Subtle Organic Arc Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="500" cy="500" r="350" stroke="#A3E5D4" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="450" stroke="#A3E5D4" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="500" cy="500" r="550" stroke="#A3E5D4" strokeWidth="1.5" />
          </svg>

          <div className="max-w-[720px] mx-auto flex flex-col items-center relative z-10">
            {/* Subtle Accent Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-[#A3E5D4] text-[0.75rem] font-mono font-medium tracking-wide mb-5 shadow-2xs backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4] animate-pulse" />
              <span>[ Open for Q4 & 2027 Partnerships ]</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.12] tracking-[-0.03em] text-white mb-4">
              Have an idea worth building? Let&apos;s engineer it.
            </h2>

            {/* Subtitle */}
            <p className="font-body text-[1rem] sm:text-[1.0625rem] leading-[1.65] text-[#D2EAE3] max-w-[540px] mb-8 font-normal">
              Tell us what you&apos;re working on. Direct access to founding engineers, clean maintainable architectures, and zero corporate fluff.
            </p>

            {/* Action Buttons: Solvance Cream Pill + Sage Outline */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] font-ui font-bold text-sm shadow-[0_4px_20px_rgba(235,230,216,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E5D4]"
              >
                <MessageSquare className="w-4 h-4 text-[#1A3E38]" />
                <span>Talk to Us About Your Project</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-[#1A3E38]" />
              </button>

              <a
                href="mailto:hello.aspirev@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#A3E5D4]/40 hover:border-[#A3E5D4] text-[#D2EAE3] hover:text-white font-ui font-medium text-sm hover:bg-[#204941] transition-all"
              >
                <span>Email Us Directly</span>
              </a>
            </div>

            {/* Micro Guarantees in Bracketed Solvance Style */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-[#A3E5D4]/90">
              <span>[ ✓ Zero lock-in ]</span>
              <span>[ ✓ 100% IP ownership ]</span>
              <span>[ ✓ 48-Hour discovery sprint ]</span>
              <span>[ ✓ Direct engineer contact ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
