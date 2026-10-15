"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layout,
  Terminal,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ServicesHeroProps {
  onOpenInquiry: () => void;
}

export default function ServicesHero({ onOpenInquiry }: ServicesHeroProps) {
  const jumpLinks = [
    {
      id: "web-design",
      label: "Web Apps & Sites",
      icon: <Globe className="w-3.5 h-3.5 text-[#1A3E38]" />,
    },
    {
      id: "custom-software",
      label: "Mobile Apps (iOS/Android)",
      icon: <Terminal className="w-3.5 h-3.5 text-[#1A3E38]" />,
    },
    {
      id: "product-design",
      label: "UI/UX & Mobile Design",
      icon: <Layout className="w-3.5 h-3.5 text-[#1A3E38]" />,
    },
    {
      id: "ai-solutions",
      label: "ML-Based Systems & AI",
      icon: <Sparkles className="w-3.5 h-3.5 text-[#1A3E38]" />,
    },
  ];

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
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-xs font-medium text-[#1A3E38]">
            [ Core Capabilities · Web, Mobile & Practical AI ]
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] max-w-[840px] mb-3.5">
          Digital solutions designed around real needs.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg leading-relaxed text-[#3E534D] max-w-[680px] mb-6">
          Whether you need a high-converting website, cross-platform mobile application, booking engine, or practical ML-based system, we engineer digital products with speed, clarity, and verified performance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-7">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#E7F3EF] text-[#10221E] border border-[#E5E0D5] font-ui font-semibold text-xs sm:text-sm shadow-2xs hover:-translate-y-0.5 transition-all duration-150"
          >
            <span>View Recent Deployments</span>
            <ArrowUpRight className="w-4 h-4 text-[#526E65]" />
          </Link>
        </div>

        {/* Trust Badges Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <Zap className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">100/100 Lighthouse</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">Deterministic Types</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">48-Hour Scoping</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <Sparkles className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
            <span className="font-mono text-xs text-[#10221E]">Founder-Led Guild</span>
          </div>
        </div>

        {/* Jump to Capability Navigation Chips */}
        <div className="pt-4 border-t border-[#E8E4D9]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            <span className="font-mono text-[0.6875rem] font-semibold text-[#526E65] uppercase tracking-wider shrink-0">
              Jump to Capability:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {jumpLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#E7F3EF] border border-[#E5E0D5] hover:border-[#CFE4D8] text-[#10221E] font-ui text-xs font-medium transition-all shadow-2xs"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
