"use client";

import React from "react";
import { CheckCircle2, Globe, ShieldCheck, Zap } from "lucide-react";

export default function WorkHero() {
  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 bg-white border-b border-[#E8E4D9]">
      {/* Subtle Warm Canvas Arc Gradients in Solvance Theme */}
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
            [ Production Deployments · Portfolio Showcase ]
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] max-w-[840px] mb-3.5">
          Selected work, built with intention.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg leading-relaxed text-[#3E534D] max-w-[680px] mb-6">
          Explore the digital experiences, client platforms, and software architectures behind our work. Scroll inside any frame to explore the actual live site.
        </p>

        {/* Trust & Provenance Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <Globe className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">5 Live Deployments</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <Zap className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">Sub-Second TTFB</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">100% Client Handover</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">Zero Hypotheticals</span>
          </div>
        </div>

        {/* 3 Status Category Badges */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-mono font-medium text-[#10221E] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1A3E38]" />
            <span>Client Deployments</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-mono font-medium text-[#10221E] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#22564C]" />
            <span>Studio Ventures</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-xs font-mono font-medium text-[#10221E] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Interactive Live Previews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
