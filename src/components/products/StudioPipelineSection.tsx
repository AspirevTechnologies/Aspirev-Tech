"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface StudioPipelineSectionProps {
  onOpenInquiry: () => void;
}

export default function StudioPipelineSection({
  onOpenInquiry,
}: StudioPipelineSectionProps) {
  return (
    <section id="studio-pipeline" className="py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Transparency Note */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
              <span className="font-mono text-xs font-medium text-[#1A3E38]">
                [ Studio Pipeline · R&D Explorations ]
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
              What our labs are exploring next.
            </h2>
            <p className="font-body text-base text-[#3E534D]">
              We only build software when there is a genuine problem worth solving. These explorations are in active prototyping and research phases.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] max-w-[420px] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#1A3E38] uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-[#1A3E38]" />
              <span>R&D Transparency Policy</span>
            </div>
            <p className="text-xs leading-relaxed text-[#4A5D57]">
              We do not list speculative ideas as deployed commercial products. All R&D are transparently marked as concept explorations.
            </p>
          </div>
        </div>

        {/* 2 R&D Prototype Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: DocuSynthetic Enterprise */}
          <div className="group bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="px-3 py-0.5 rounded-full bg-[#E7F3EF] text-[#1A3E38] text-xs font-mono font-medium border border-[#CFE4D8]">
                  Active Concept Prototype
                </span>
                <span className="font-mono text-xs text-[#526E65]">
                  Phase 02 / Alpha Testing
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                DocuSynthetic Enterprise
              </h3>

              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-4">
                Deterministic semantic search and citation verification engine for high-volume technical documentation, engineering RFCs, and regulatory compliance protocols.
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-start gap-2 text-xs sm:text-[0.8125rem] text-[#2A443D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38] shrink-0 mt-0.5" />
                  <span>Contextual citations linked to the exact PDF/data layout source</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-[0.8125rem] text-[#2A443D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38] shrink-0 mt-0.5" />
                  <span>Self-hosted on-premise neural embedding pipeline</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="font-mono text-xs text-[#526E65]">
                Prototyping Status: Internal R&D Testing
              </span>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 font-ui text-xs sm:text-sm font-semibold text-[#1A3E38] hover:text-[#13332E] cursor-pointer"
              >
                <span>Live Demo Prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1A3E38]" />
              </button>
            </div>
          </div>

          {/* Card 2: Ops Pulse Telemetry UI */}
          <div className="group bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="px-3 py-0.5 rounded-full bg-[#E7F3EF] text-[#1A3E38] text-xs font-mono font-medium border border-[#CFE4D8]">
                  Phase 01 & Alpha Prototyping
                </span>
                <span className="font-mono text-xs text-[#526E65]">
                  Phase 01 / Pre-Release
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                Ops Pulse Telemetry UI
              </h3>

              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-4">
                Low-overhead operational dashboard kit for regional logistics, vehicle sensor feeds, and fleet management prioritizing zero-breakdown web architectures.
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-start gap-2 text-xs sm:text-[0.8125rem] text-[#2A443D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38] shrink-0 mt-0.5" />
                  <span>Sub-10ms local client offline cache and payload</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-[0.8125rem] text-[#2A443D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38] shrink-0 mt-0.5" />
                  <span>Fault-tolerant cellular WebSocket sync nodes</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="font-mono text-xs text-[#526E65]">
                Prototyping Status: Latency Simulations
              </span>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 font-ui text-xs sm:text-sm font-semibold text-[#1A3E38] hover:text-[#13332E] cursor-pointer"
              >
                <span>Pre-Release Spec Package</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1A3E38]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
