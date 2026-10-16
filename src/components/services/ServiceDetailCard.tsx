"use client";

import React from "react";
import {
  ArrowRight,
  AlertCircle,
  Users,
  Layers,
  Sparkles,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";

export interface ServiceDetailData {
  id: string;
  badgeNumber: string;
  title: string;
  problemText: string;
  deliverables: string[];
  suitableForText: string;
  buttonText: string;
  mockupType: "web" | "design" | "software" | "ai";
}

interface ServiceDetailCardProps {
  service: ServiceDetailData;
  onOpenInquiry: () => void;
}

export default function ServiceDetailCard({
  service,
  onOpenInquiry,
}: ServiceDetailCardProps) {
  return (
    <div
      id={service.id}
      className="scroll-mt-24 bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Side: Information Architecture */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Top Category Badge */}
          <span className="font-mono text-xs font-semibold text-[#1A3E38] bg-[#E7F3EF] px-3 py-1 rounded-full border border-[#CFE4D8] mb-3 inline-block">
            {service.badgeNumber}
          </span>

          {/* Service Title */}
          <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[1.625rem] tracking-tight text-[#10221E] mb-3">
            {service.title}
          </h2>

          {/* The Problem We Solve For Box */}
          <div className="w-full bg-[#FAF9F5] rounded-2xl border border-[#E8E4D9] p-3.5 sm:p-4 mb-4">
            <div className="flex items-center gap-1.5 text-[0.6875rem] font-mono font-semibold text-[#1A3E38] uppercase tracking-wider mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span>The Problem We Solve For</span>
            </div>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#3E534D]">
              {service.problemText}
            </p>
          </div>

          {/* Typical Deliverables */}
          <div className="w-full mb-4">
            <div className="flex items-center gap-1.5 font-ui text-xs font-semibold text-[#10221E] uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span>Typical Deliverables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#2A443D] bg-[#FAF9F5] border border-[#E5E0D5] px-2.5 py-1.5 rounded-xl hover:bg-[#E7F3EF]/60 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E38] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div className="w-full mb-5 pt-3 border-t border-[#EFECE6] flex items-start gap-2">
            <Users className="w-3.5 h-3.5 text-[#1A3E38] shrink-0 mt-0.5" />
            <div className="text-xs text-[#526E65] leading-relaxed">
              <strong className="text-[#10221E] font-semibold font-ui">Suitable for: </strong>
              {service.suitableForText}
            </div>
          </div>

          {/* Action CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(26,62,56,0.2)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.3)] transition-all duration-150 cursor-pointer"
          >
            <span>{service.buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Side: High-Precision Mockup Viewport */}
        <div className="lg:col-span-6 w-full">
          {/* Mockup 1: Web Design & Development (Real Live Browser Window with Airi.webp) */}
          {service.mockupType === "web" && (
            <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-md">
              <div className="flex items-center justify-between px-3 sm:px-3.5 py-2.5 bg-[#0A221D] border-b border-white/10 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-1 sm:ml-2 font-mono text-[0.625rem] text-[#D2EAE3] truncate max-w-[130px] sm:max-w-[160px]">
                    airi-bunquet-hall.vercel.app
                  </span>
                </div>
                {/* 100/100 Lighthouse Metric Pill */}
                <span className="text-[0.625rem] font-mono font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] shadow-2xs flex items-center gap-1 shrink-0">
                  <Zap className="w-3 h-3 text-[#A3E5D4]" />
                  100/100 Lighthouse
                </span>
              </div>

              {/* Scrollable Viewport with Airi.webp */}
              <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                <img
                  src="/Airi.webp"
                  alt="Airi Banquet Hall Architecture Preview"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                    ↕ Scroll window to view full design
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Mockup: Interface & Portal Architecture (Clinical Architecture with dentalhub.webp) */}
          {service.mockupType === "design" && (
            <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-md">
              <div className="flex items-center justify-between px-3 sm:px-3.5 py-2.5 bg-[#0A221D] border-b border-white/10 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-1 sm:ml-2 font-mono text-[0.625rem] text-[#D2EAE3] truncate max-w-[130px] sm:max-w-[170px]">
                    the-dentalhub.vercel.app
                  </span>
                </div>
                <span className="text-[0.625rem] font-mono font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] shadow-2xs flex items-center gap-1 shrink-0">
                  <Layers className="w-3 h-3 text-[#A3E5D4]" />
                  WCAG AAA
                </span>
              </div>

              {/* Scrollable Viewport with dentalhub.webp */}
              <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                <img
                  src="/dentalhub.webp"
                  alt="Dental Hub Clinical Design System Preview"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                    ↕ Scroll window to inspect design system
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Mockup 3: Web Applications & Custom Software (Fleet Dispatch Suite with valetxpress.webp) */}
          {service.mockupType === "software" && (
            <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-md">
              <div className="flex items-center justify-between px-3 sm:px-3.5 py-2.5 bg-[#0A221D] border-b border-white/10 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-1 sm:ml-2 font-mono text-[0.625rem] text-[#D2EAE3] truncate max-w-[130px] sm:max-w-[170px]">
                    valetxpro.vercel.app
                  </span>
                </div>
                <span className="text-[0.625rem] font-mono font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] shadow-2xs flex items-center gap-1 shrink-0">
                  <Zap className="w-3 h-3 text-[#A3E5D4]" />
                  12.4ms SLA
                </span>
              </div>

              {/* Scrollable Viewport with valetxpress.webp */}
              <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                <img
                  src="/valetxpress.webp"
                  alt="ValetXpress Fleet Mobility Dispatch Application"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                    ↕ Scroll window to inspect software application
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Mockup 4: AI & Intelligent Solutions (Vector Engine Platform with aspirevown.webp) */}
          {service.mockupType === "ai" && (
            <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-md">
              <div className="flex items-center justify-between px-3 sm:px-3.5 py-2.5 bg-[#0A221D] border-b border-white/10 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-1 sm:ml-2 font-mono text-[0.625rem] text-[#D2EAE3] truncate max-w-[130px] sm:max-w-[170px]">
                    aspirev.com
                  </span>
                </div>
                <span className="text-[0.625rem] font-mono font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] shadow-2xs flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3 h-3 text-[#A3E5D4]" />
                  98.4% ATS Match
                </span>
              </div>

              {/* Scrollable Viewport with aspirevown.webp */}
              <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                <img
                  src="/aspirevown.webp"
                  alt="Aspirev AI Career Intelligence Platform"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                    ↕ Scroll window to inspect AI platform
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
