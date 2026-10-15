"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Layers,
  Compass,
  FileText,
  Target,
  Lock,
  Globe,
  Activity,
} from "lucide-react";

export default function VentureShowcaseSection() {
  const [displayMode, setDisplayMode] = useState<"preview" | "radar">("preview");
  const [activeTab, setActiveTab] = useState<"audit" | "gaps" | "queue">("audit");

  const chips = [
    "AI-powered evaluation",
    "Real-world feedback",
    "Career roadmaps",
    "Skill-gap insights",
    "Adaptive interview",
    "Application tracking",
    "Portfolio builder",
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white text-[#10221E] relative overflow-hidden border-b border-[#EFECE6]">
      {/* Subtle radial emerald backdrop glow on white */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#E7F3EF]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Venture Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Stage Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-[0.75rem] font-mono font-medium tracking-wide mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38] animate-pulse" />
              <span>[ Flagship Venture · In-House Venture Studio ]</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.15] tracking-[-0.025em] text-[#10221E] mb-4">
              Meet Aspirev - career development, with more direction.
            </h2>

            {/* Body */}
            <p className="font-body text-base leading-relaxed text-[#4A5D57] mb-6 max-w-[540px]">
              Career preparation can feel fragmented. Aspirev brings important parts of the journey together, helping students and job seekers work on their resumes, explore career roadmaps, identify skill gaps, and organize applications.
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-[520px]">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF9F5] hover:bg-[#E7F3EF] border border-[#E5E0D5] hover:border-[#CFE4D8] text-[#1A3E38] text-[0.8125rem] font-ui font-medium transition-all duration-150 cursor-default shadow-2xs"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Primary Action Button */}
            <a
              href="https://aspirev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3E38]"
            >
              <span>Explore Aspirev Platform</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Right Column: High-Fidelity Interactive Dashboard UI & Live Browser Preview */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-3xl bg-[#102E27] text-white border border-[#2D6B60] p-4 sm:p-5 shadow-2xl backdrop-blur-md transition-all">
              {/* Window Bar with Mode Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 font-mono text-[0.6875rem] text-[#A3E5D4]/80">
                    aspirev.com // v2.4.0
                  </span>
                </div>

                {/* Switch between Live Browser Scroll and Radar HUD */}
                <div className="flex items-center gap-1 bg-[#0A221D] p-1 rounded-full border border-[#A3E5D4]/20 text-xs">
                  <button
                    onClick={() => setDisplayMode("preview")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-ui text-xs font-medium transition-all cursor-pointer ${
                      displayMode === "preview"
                        ? "bg-[#A3E5D4] text-[#0A221D] font-bold shadow-xs"
                        : "text-[#D2EAE3]/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Website</span>
                  </button>
                  <button
                    onClick={() => setDisplayMode("radar")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-ui text-xs font-medium transition-all cursor-pointer ${
                      displayMode === "radar"
                        ? "bg-[#A3E5D4] text-[#0A221D] font-bold shadow-xs"
                        : "text-[#D2EAE3]/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>Radar HUD</span>
                  </button>
                </div>
              </div>

              {/* Mode 1: Live Interactive Scrollable Website Viewport */}
              {displayMode === "preview" && (
                <div className="rounded-2xl border border-[#A3E5D4]/20 overflow-hidden bg-[#071714] shadow-inner">
                  {/* Browser Address Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-[#0A221D] border-b border-[#A3E5D4]/20 text-[0.625rem] font-mono text-[#D2EAE3]/70">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-[#A3E5D4] shrink-0" />
                      <span className="truncate text-[#D2EAE3]">https://aspirev.com</span>
                    </div>
                    <span className="text-[#A3E5D4] font-semibold shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4] animate-pulse" />
                      Live Platform
                    </span>
                  </div>

                  {/* Scrollable Landing Page Viewport Container */}
                  <div className="relative h-72 sm:h-80 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                    <img
                      src="/aspirevown.png"
                      alt="Aspirev Live Platform Website Architecture"
                      className="w-full h-auto block"
                      loading="lazy"
                    />

                    {/* Scroll prompt overlay */}
                    <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                      <span className="px-3.5 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                        ↕ Scroll window to view full website
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mode 2: Radar HUD & ATS Telemetry */}
              {displayMode === "radar" && (
                <div>

                  {/* Target & Score Header Card */}
                  <div className="bg-[#0A221D] rounded-2xl border border-[#A3E5D4]/20 p-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[0.6875rem] font-mono font-semibold uppercase tracking-wider text-[#A3E5D4] mb-0.5">
                        Target Role Benchmark
                      </div>
                      <div className="font-display text-[1.125rem] font-bold text-white">
                        Senior Frontend Engineer
                      </div>
                      <div className="text-[0.75rem] text-[#D2EAE3]/70 mt-0.5">
                        Analyzed against 1,420 tier-1 engineering job specs
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center bg-[#1A3E38]/70 px-4 py-2 rounded-2xl border border-[#A3E5D4]/30">
                      <div className="text-right">
                        <div className="text-[0.6875rem] text-[#D2EAE3]/70 uppercase font-mono">
                          ATS Score
                        </div>
                        <div className="text-[1.375rem] font-bold font-display text-[#A3E5D4] leading-none mt-0.5">
                          94 <span className="text-[0.8125rem] text-white/50">/ 100</span>
                        </div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A3E5D4] animate-ping-slow" />
                    </div>
                  </div>

                  {/* Interactive Tabs */}
                  <div className="flex items-center gap-2 border-b border-[#A3E5D4]/15 pb-2.5 mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("audit")}
                      className={`px-3 py-1 rounded-full font-ui text-[0.8125rem] font-medium transition-colors cursor-pointer ${activeTab === "audit"
                          ? "bg-[#A3E5D4] text-[#0A221D] font-bold shadow-xs"
                          : "text-[#D2EAE3]/70 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      System Audit ✓
                    </button>
                    <button
                      onClick={() => setActiveTab("gaps")}
                      className={`px-3 py-1 rounded-full font-ui text-[0.8125rem] font-medium transition-colors cursor-pointer ${activeTab === "gaps"
                          ? "bg-[#A3E5D4] text-[#0A221D] font-bold shadow-xs"
                          : "text-[#D2EAE3]/70 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      Skill Gaps (2)
                    </button>
                    <button
                      onClick={() => setActiveTab("queue")}
                      className={`px-3 py-1 rounded-full font-ui text-[0.8125rem] font-medium transition-colors cursor-pointer ${activeTab === "queue"
                          ? "bg-[#A3E5D4] text-[#0A221D] font-bold shadow-xs"
                          : "text-[#D2EAE3]/70 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      Distribution Queue
                    </button>
                  </div>

                  {/* Tab Content Display */}
                  <div className="min-h-[130px]">
                    {activeTab === "audit" && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <div className="flex items-center gap-2.5 text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#A3E5D4]" />
                            <span>ATS Semantic Syntax & Parsing Reliability</span>
                          </div>
                          <span className="font-mono text-[#A3E5D4] font-semibold text-[0.75rem]">98% Verified</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <div className="flex items-center gap-2.5 text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#A3E5D4]" />
                            <span>Action Verb Impact & Measurable Metrics</span>
                          </div>
                          <span className="font-mono text-[#A3E5D4] font-semibold text-[0.75rem]">92% Dense</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <div className="flex items-center gap-2.5 text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#A3E5D4]" />
                            <span>Architecture & Systems Engineering Coverage</span>
                          </div>
                          <span className="font-mono text-[#A3E5D4] font-semibold text-[0.75rem]">Complete</span>
                        </div>
                      </div>
                    )}

                    {activeTab === "gaps" && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#F59E0B]/30 flex items-center justify-between text-[0.8125rem]">
                          <div className="flex items-center gap-2.5 text-white/90">
                            <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                            <span>React Server Components streaming patterns</span>
                          </div>
                          <span className="text-[0.6875rem] font-mono px-2 py-0.5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B]">
                            High Impact
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <div className="flex items-center gap-2.5 text-white/90">
                            <AlertCircle className="w-4 h-4 text-[#A3E5D4]" />
                            <span>WebGL / Three.js Canvas Shader experience</span>
                          </div>
                          <span className="text-[0.6875rem] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#D2EAE3]">
                            Nice to Have
                          </span>
                        </div>
                      </div>
                    )}

                    {activeTab === "queue" && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <span className="font-medium text-white">Stripe — Staff Frontend Architect</span>
                          <span className="font-mono text-[0.6875rem] text-[#A3E5D4] bg-[#1A3E38] px-2.5 py-0.5 rounded-full border border-[#A3E5D4]/30">
                            Interview Invite
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#0A221D]/80 border border-[#A3E5D4]/15 flex items-center justify-between text-[0.8125rem]">
                          <span className="font-medium text-white">Linear — Lead Systems Engineer</span>
                          <span className="font-mono text-[0.6875rem] text-[#D2EAE3] bg-white/10 px-2.5 py-0.5 rounded-full">
                            In Review (Stage 2)
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Pipeline Progress Bar */}
                  <div className="mt-4 pt-3.5 border-t border-[#A3E5D4]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[0.75rem] text-[#D2EAE3]/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A3E5D4]" />
                      <span>
                        Active Pipeline:{" "}
                        <strong className="text-white">8 applications submitted</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#A3E5D4] font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>1 interview invite received</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
