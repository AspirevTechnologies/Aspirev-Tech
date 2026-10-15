"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ProductsHeroProps {
  onOpenInquiry: () => void;
}

export default function ProductsHero({ onOpenInquiry }: ProductsHeroProps) {
  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 bg-white border-b border-[#E8E4D9]">
      {/* Background Architectural Canvas Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(26, 62, 56, 0.06) 0%, transparent 60%), radial-gradient(circle at 12% 50%, rgba(26, 62, 56, 0.03) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-xs font-medium text-[#1A3E38]">
            [ Venture Products · In-House Engineering & R&D ]
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] max-w-[840px] mb-3.5">
          Products built to make a difference.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg leading-relaxed text-[#3E534D] max-w-[660px] mb-6">
          We develop our own technology products around problems worth solving. Aspirev combines practical execution with product vision to give career preparation clarity and direction.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-8 md:mb-10">
          <a
            href="#aspirev-platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            <span>Explore Aspirev Career Intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#studio-pipeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#E7F3EF] text-[#10221E] border border-[#E5E0D5] font-ui font-semibold text-xs sm:text-sm shadow-2xs hover:-translate-y-0.5 transition-all duration-150"
          >
            <span>View Product Roadmap</span>
            <ArrowUpRight className="w-4 h-4 text-[#526E65]" />
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="pt-4 border-t border-[#E8E4D9] flex flex-wrap items-center gap-4 text-xs font-mono text-[#526E65]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="font-medium text-[#10221E]">Ecosystem: Private Beta</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1A3E38]" />
            <span className="font-medium text-[#10221E]">Zero Disruption Deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22564C]" />
            <span className="font-medium text-[#10221E]">Engineering-Led Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
