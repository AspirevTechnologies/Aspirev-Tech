"use client";

import React from "react";
import { Clock, ShieldCheck, UserCheck, Sparkles } from "lucide-react";

export default function ContactHero() {
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
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-xs font-medium text-[#1A3E38]">
            [ Start a Project · Direct Founding Partner Contact ]
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] max-w-[820px] mb-3.5">
          Tell us what you&apos;re building.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg leading-relaxed text-[#3E534D] max-w-[620px] mb-7">
          Share a little about your idea, challenge, or upcoming project. We&apos;ll use it to understand what you need and determine the next step.
        </p>

        {/* 4 Confidence & Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] text-xs font-ui text-[#10221E] shadow-2xs">
            <Clock className="w-4 h-4 text-[#1A3E38] shrink-0" />
            <div>
              <div className="font-semibold text-[#10221E]">48-Hour Response</div>
              <div className="text-[0.6875rem] text-[#526E65]">Guaranteed SLA</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] text-xs font-ui text-[#10221E] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#1A3E38] shrink-0" />
            <div>
              <div className="font-semibold text-[#10221E]">Mutual NDA</div>
              <div className="text-[0.6875rem] text-[#526E65]">Strict Protection</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] text-xs font-ui text-[#10221E] shadow-2xs">
            <UserCheck className="w-4 h-4 text-[#1A3E38] shrink-0" />
            <div>
              <div className="font-semibold text-[#10221E]">Direct Senior</div>
              <div className="text-[0.6875rem] text-[#526E65]">Lead Architects</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] text-xs font-ui text-[#10221E] shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#1A3E38] shrink-0" />
            <div>
              <div className="font-semibold text-[#10221E]">Zero Obligation</div>
              <div className="text-[0.6875rem] text-[#526E65]">Transparent Scoping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
