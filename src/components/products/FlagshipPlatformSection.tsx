"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Lock,
  Globe,
  Sliders,
  Activity,
} from "lucide-react";

interface FlagshipPlatformSectionProps {
  onOpenInquiry: () => void;
}

export default function FlagshipPlatformSection({
  onOpenInquiry,
}: FlagshipPlatformSectionProps) {
  const [viewMode, setViewMode] = useState<"preview" | "console">("preview");

  return (
    <section id="aspirev-platform" className="py-12 md:py-16 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Access Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
              <span className="font-mono text-xs font-medium text-[#1A3E38]">
                [ Flagship Venture Platform · Mohamed Nazik ]
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
              Meet Aspirev — career intelligence, with more direction.
            </h2>
            <p className="font-body text-base text-[#3E534D]">
              Career preparation has been fragmented. Aspirev brings important parts of the journey together, helping students and job seekers work on their resumes, explore career roadmaps, identify skill gaps, and organize applications.
            </p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] transition-all cursor-pointer"
            >
              <span>Access Aspirev (Early Access)</span>
              <ArrowUpRight className="w-4 h-4 text-[#A3E5D4]" />
            </button>
            <a
              href="https://aspirev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-3.5 py-2 rounded-full bg-[#FAF9F5] hover:bg-[#E7F3EF] border border-[#E5E0D5] text-xs font-mono text-[#1A3E38] font-semibold transition-colors"
            >
              https://aspirev.com ↗
            </a>
          </div>
        </div>

        {/* Full-Width Interactive Dark Stage Product Console Mockup */}
        <div className="rounded-3xl bg-[#102E27] text-white border border-[#2D6B60] p-4 sm:p-6 shadow-xl overflow-hidden">
          {/* Window Bar with Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-4 border-b border-[#2D6B60]/60 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-[#D2EAE3]">
                aspirev-platform // {viewMode === "preview" ? "live-production-capture" : "candidate-radar-hud"} // v2.4.0
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Interactive View Switcher */}
              <div className="flex items-center gap-1 bg-[#0A221D] p-1 rounded-full border border-[#2D6B60] text-xs">
                <button
                  onClick={() => setViewMode("preview")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-ui text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === "preview"
                      ? "bg-[#1A3E38] text-white font-semibold shadow-xs"
                      : "text-[#D2EAE3] hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#A3E5D4]" />
                  <span>Live Website</span>
                </button>
                <button
                  onClick={() => setViewMode("console")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-ui text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === "console"
                      ? "bg-[#1A3E38] text-white font-semibold shadow-xs"
                      : "text-[#D2EAE3] hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-[#A3E5D4]" />
                  <span>Radar Console</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 bg-[#0A221D] px-2.5 py-1 rounded-full border border-[#2D6B60] font-mono text-[#A3E5D4] text-xs">
                <span>Match:</span>
                <strong className="text-white font-bold">92 / 100</strong>
              </div>
            </div>
          </div>

          {/* Mode 1: Live Interactive Scrollable Website Viewport */}
          {viewMode === "preview" && (
            <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-inner">
              {/* Browser Address Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#0A221D] border-b border-[#2D6B60]/40 text-[0.625rem] font-mono text-[#D2EAE3]">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-[#A3E5D4] shrink-0" />
                  <span className="truncate text-[#D2EAE3]">https://aspirev.com</span>
                </div>
                <span className="text-[#A3E5D4] font-semibold shrink-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  200 OK Live Platform
                </span>
              </div>

              {/* Scrollable Landing Page Viewport Container */}
              <div className="relative h-80 sm:h-96 lg:h-[480px] overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                <img
                  src="/aspirevown.png"
                  alt="Aspirev Live Platform Website Architecture"
                  className="w-full h-auto block"
                  loading="lazy"
                />

                {/* Scroll prompt overlay */}
                <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                    ↕ Scroll window to view full website
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: 3-Column Console Interior Grid */}
          {viewMode === "console" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Column 1: Vector Resumé ATS Score */}
                <div className="bg-[#0A221D] rounded-2xl border border-[#2D6B60]/60 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="font-mono text-xs font-semibold text-[#A3E5D4] uppercase tracking-wider">
                        Vector Resumé ATS Score
                      </span>
                      <span className="text-[0.625rem] font-mono bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] px-2 py-0.5 rounded-full">
                        High Match
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <div className="font-display font-bold text-3xl text-white leading-none">
                        92
                      </div>
                      <span className="text-[#D2EAE3]/70 font-mono text-sm">/ 100</span>
                      <span className="text-xs text-[#10B981] font-semibold ml-auto">
                        Top 2% Percentile
                      </span>
                    </div>

                    {/* Keyword progress */}
                    <div className="mb-4 space-y-1">
                      <div className="flex justify-between text-xs text-[#D2EAE3]">
                        <span>Evaluated Keyword Density</span>
                        <span className="text-white font-mono">91%</span>
                      </div>
                      <div className="w-full bg-[#05110E] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#10B981] h-full w-[91%]" />
                      </div>
                    </div>

                    {/* Section Breakdown checklist */}
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>React 19 / Next.js Core</span>
                        </div>
                        <span className="text-[#10B981] font-mono text-[0.6875rem]">98%</span>
                      </div>

                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>State Architecture (Zustand)</span>
                        </div>
                        <span className="text-[#10B981] font-mono text-[0.6875rem]">94%</span>
                      </div>

                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>Performance & Core Web Vitals</span>
                        </div>
                        <span className="text-[#10B981] font-mono text-[0.6875rem]">96%</span>
                      </div>

                      <div className="p-2 rounded-xl bg-[#05110E] border border-rose-900/40 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-300">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                          <span>Rust / WebAssembly Backend</span>
                        </div>
                        <span className="text-rose-400 font-mono text-[0.6875rem]">Gap (38%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-[#2D6B60]/40 text-[0.625rem] text-[#D2EAE3]/70 font-mono">
                    Model: Transformer v4.2 · 24,190 Specs Indexed
                  </div>
                </div>

                {/* Column 2: Milestone Roadmap Execution */}
                <div className="bg-[#0A221D] rounded-2xl border border-[#2D6B60]/60 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="font-mono text-xs font-semibold text-[#A3E5D4] uppercase tracking-wider">
                        Milestone Roadmap Execution
                      </span>
                      <span className="text-[0.625rem] font-mono text-[#A3E5D4] bg-[#1A3E38] border border-[#2D6B60] px-2 py-0.5 rounded-full">
                        Track: Staff Track
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Milestone 1 */}
                      <div className="p-2.5 rounded-xl bg-[#05110E] border border-emerald-900/40">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-xs text-white">
                            Milestone 1: Dynamic State Isolation
                          </span>
                          <span className="text-[0.625rem] text-[#10B981] font-mono">Completed ✓</span>
                        </div>
                        <p className="text-xs text-[#D2EAE3]/70 leading-relaxed">
                          Decoupled single-state stores, reactive data caching, and server actions.
                        </p>
                      </div>

                      {/* Milestone 2 */}
                      <div className="p-2.5 rounded-xl bg-[#05110E] border border-[#2D6B60] shadow-2xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-xs text-[#A3E5D4]">
                            Milestone 2: High-Throughput WebGL
                          </span>
                          <span className="text-[0.625rem] text-[#A3E5D4] font-mono">In Progress (68%)</span>
                        </div>
                        <p className="text-xs text-[#D2EAE3]/80 leading-relaxed mb-2">
                          Custom shader acceleration, canvas pipeline, and sub-16ms render loops.
                        </p>
                        <div className="w-full bg-[#102E27] h-1 rounded-full overflow-hidden">
                          <div className="bg-[#10B981] h-full w-[68%]" />
                        </div>
                      </div>

                      {/* Milestone 3 */}
                      <div className="p-2.5 rounded-xl bg-[#05110E]/40 border border-[#2D6B60]/40 opacity-70">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-xs text-white">
                            Milestone 3: Enterprise CI/CD
                          </span>
                          <span className="text-[0.625rem] text-[#D2EAE3]/60 font-mono">Upcoming</span>
                        </div>
                        <p className="text-xs text-[#D2EAE3]/60 leading-relaxed">
                          Docker edge staging, isolated preview PR branches, and distributed tests.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-[#2D6B60]/40 text-[0.625rem] text-[#D2EAE3]/70 font-mono flex justify-between">
                    <span>Prerequisites: 12 completed</span>
                    <span className="text-amber-400">2 pending validation</span>
                  </div>
                </div>

                {/* Column 3: Pipeline & Distribution Queue */}
                <div className="bg-[#0A221D] rounded-2xl border border-[#2D6B60]/60 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="font-mono text-xs font-semibold text-[#A3E5D4] uppercase tracking-wider">
                        Pipeline & Distribution
                      </span>
                      <span className="text-[0.625rem] font-mono text-[#10B981] bg-[#1A3E38] border border-[#2D6B60] px-2 py-0.5 rounded-full">
                        4 Open
                      </span>
                    </div>

                    {/* Upcoming Interview Card */}
                    <div className="p-3 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 mb-2.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[0.625rem] font-mono font-semibold text-[#A3E5D4] uppercase">
                        <Calendar className="w-3 h-3" />
                        <span>Upcoming Event</span>
                      </div>
                      <div className="font-semibold text-xs text-white">
                        Linear — Systems Architect
                      </div>
                      <div className="text-[0.6875rem] text-[#D2EAE3]/70">
                        Tomorrow, 10:00 AM EST · Round 2 Technical
                      </div>
                    </div>

                    {/* Applications list */}
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <span>Stripe — Staff Frontend</span>
                        <span className="text-[0.6875rem] text-[#D2EAE3]/70 font-mono">Applied (3d ago)</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <span>Vercel — Platform Engineer</span>
                        <span className="text-[0.6875rem] text-[#A3E5D4] font-mono">Reviewing</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#05110E] border border-[#2D6B60]/40 flex items-center justify-between">
                        <span>Notion — Product Architect</span>
                        <span className="text-[0.6875rem] text-[#10B981] font-mono">Invite Received</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-[#2D6B60]/40">
                    <button
                      onClick={onOpenInquiry}
                      className="w-full py-2.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white text-xs font-ui font-semibold transition-all cursor-pointer shadow-xs"
                    >
                      View Full Pipeline Console →
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-5 pt-3.5 border-t border-[#2D6B60]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#D2EAE3]">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>SOC-2 Encrypted Environment // Automated Resume-Parser Engine v2.4</span>
                </div>
                <div className="flex items-center gap-4 text-[#D2EAE3]/80">
                  <span>Throughput: 98.4%</span>
                  <span className="text-[#A3E5D4]">Latency: 112ms</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
