"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  Globe,
  Layers,
} from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  // Live Studio Deliverables data modeled in the Solvance transaction card style
  const liveDeliverables = [
    {
      id: "airi",
      name: "Airi Banquet Hall & Events",
      sub: "Coastal Luxury Hospitality · Galle",
      badge: "+ 100/100",
      badgeLabel: "Lighthouse",
      icon: <Globe className="w-4 h-4 text-[#1A3E38]" />,
      url: "https://airibanquet.com",
    },
    {
      id: "dentalhub",
      name: "Dental Hub Multi-Speciality",
      sub: "Clinical Web Portal · Colombo",
      badge: "200 OK",
      badgeLabel: "Live Intake",
      icon: <Activity className="w-4 h-4 text-[#1A3E38]" />,
      url: "https://dentalhub.lk",
    },
    {
      id: "valetxpress",
      name: "ValetXpress Fleet Concierge",
      sub: "Mobility Dispatch Engine · Colombo",
      badge: "12.4ms",
      badgeLabel: "API SLA",
      icon: <Zap className="w-4 h-4 text-[#1A3E38]" />,
      url: "https://valetxpress.lk",
    },
  ];

  // Curated, perfectly centered face-cropped portraits of the senior guild
  const floatingAvatars = [
    {
      name: "Mohamed Nazik",
      role: "Founder & Lead Architect",
      image: "/founder.jpg",
      posClass: "-left-16 xl:-left-24 top-6",
      animClass: "animate-bounce-slow",
    },
    {
      name: "Sophia Lin",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=256&h=256&q=85",
      posClass: "-left-28 xl:-left-36 top-36",
      animClass: "animate-float-delayed",
    },
    {
      name: "Marcus Chen",
      role: "Senior Systems Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=256&h=256&q=85",
      posClass: "-left-14 xl:-left-20 bottom-8",
      animClass: "animate-float-reverse",
    },
    {
      name: "Aria Patel",
      role: "AI & Workflow Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=256&h=256&q=85",
      posClass: "-right-16 xl:-right-24 top-6",
      animClass: "animate-bounce-slow",
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Technical Strategist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=256&h=256&q=85",
      posClass: "-right-28 xl:-right-36 top-36",
      animClass: "animate-float-delayed",
    },
    {
      name: "Devon Vance",
      role: "Cloud Infrastructure Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=256&h=256&q=85",
      posClass: "-right-14 xl:-right-20 bottom-8",
      animClass: "animate-float-reverse",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle Warm Canvas Arc Gradients in Solvance Finance Style */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(26, 62, 56, 0.06) 0%, transparent 60%), radial-gradient(circle at 12% 50%, rgba(26, 62, 56, 0.03) 0%, transparent 40%), radial-gradient(circle at 88% 50%, rgba(26, 62, 56, 0.03) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* HERO HEADER AREA WITH FLOATING TEAM AVATARS                                */}
        {/* ========================================================================= */}
        <div className="relative max-w-[900px] mx-auto text-center mb-14 sm:mb-16">
          {/* Floating Senior Guild Avatars (Clean, border-free discs, centered faces) */}
          {floatingAvatars.map((avatar, idx) => (
            <div
              key={idx}
              className={`hidden lg:flex absolute ${avatar.posClass} items-center justify-center ${avatar.animClass} z-20`}
            >
              <div className="relative group/avatar cursor-pointer">
                {/* Clean, pure circular avatar portrait without thick background boundary */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] ring-1 ring-[#1A3E38]/10 hover:scale-110 transition-transform duration-300 bg-[#FAF9F5]">
                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                {/* Verified active guild member beacon */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white shadow-xs" />

                {/* Tooltip on hover */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                  <span className="px-2.5 py-1 rounded-full bg-[#10221E] text-white text-[0.625rem] font-mono shadow-md border border-white/10">
                    {avatar.name} · {avatar.role}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Solvance-Style Bracketed Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              [ Digital Experiences · Intelligent Software · Purpose-Built ]
            </span>
          </div>

          {/* Main Headline (Brand Promise) */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.08] tracking-[-0.035em] text-[#10221E] mb-6">
            Build with purpose. <br className="hidden sm:inline" />
            <span className="text-[#1A3E38]">Create what matters.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-[#3E534D] max-w-[700px] mx-auto mb-9 font-normal">
            We design and develop digital experiences, intelligent software, and technology products that solve real problems. From high-converting business landing pages to custom web applications - engineered with verifiable speed, security, and performance.
          </p>

          {/* Action Buttons: Forest Green Pill CTA + Warm Outline Pill + WhatsApp Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-sm sm:text-base shadow-[0_6px_20px_rgba(26,62,56,0.3)] hover:shadow-[0_10px_28px_rgba(26,62,56,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#A3E5D4]" />
            </button>

            <a
              href="#packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] font-ui font-bold text-sm sm:text-base shadow-xs hover:-translate-y-0.5 transition-all duration-150"
            >
              <span>Explore Website Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#1A3E38]" />
            </a>

            <a
              href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 font-ui font-semibold text-sm sm:text-base shadow-xs hover:-translate-y-0.5 transition-all duration-150"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp: +94 78 784 4914</span>
            </a>
          </div>

          {/* Social Proof Credential Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-ui text-[#526E65] pt-1">
            <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#E5E0D5] shadow-2xs">
              <span className="text-[#F59E0B]">★★★★★</span>
              <span className="font-bold text-[#10221E]">5.0</span>
              <span className="text-[#6B8078]">Guild Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#E5E0D5] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span className="font-medium text-[#10221E]">100% Production Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#E5E0D5] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span className="font-medium text-[#10221E]">Direct Senior Lead Access</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SIGNATURE 3-COLUMN MEDIA SET (Solvance Finance Pattern)                     */}
        {/* Left: Meeting photo | Center: Live Deliverables Card | Right: Laptop Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-7 items-stretch max-w-[1160px] mx-auto">
          {/* Column 1: Collaboration Meeting Photo (4 cols) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden bg-[#FAF9F5] border border-[#E5E0D5] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group h-72 md:h-auto min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Aspirev Technology Strategy Session"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft gradient bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A221D]/90 via-[#0A221D]/30 to-transparent" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1A3E38] font-mono text-[0.6875rem] font-semibold border border-[#CFE4D8] shadow-xs">
                [ Senior Guild Discovery ]
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-display font-bold text-sm">Direct Founder Engagement</div>
              <div className="text-[0.6875rem] text-[#D2EAE3] mt-0.5">Zero account managers. Direct senior engineer partnership.</div>
            </div>
          </div>

          {/* Column 2: Live Studio Deliverables (Transactions Card Style - 4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-[#E5E0D5] p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#EFECE6]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <h3 className="font-display font-bold text-sm text-[#10221E]">
                    Live Deliverables
                  </h3>
                </div>
                <Link
                  href="/work"
                  className="font-ui text-xs font-semibold text-[#1A3E38] hover:text-[#13332E] hover:underline"
                >
                  Explore all →
                </Link>
              </div>

              {/* 3 Live Project Transaction Rows */}
              <div className="space-y-2.5">
                {liveDeliverables.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-2.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#E7F3EF] border border-[#E5E0D5] transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#DDD9CE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                        {item.icon}
                      </div>
                      <div className="truncate">
                        <div className="font-display font-semibold text-xs text-[#10221E] truncate group-hover:text-[#1A3E38]">
                          {item.name}
                        </div>
                        <div className="text-[0.6875rem] text-[#526E65] truncate">
                          {item.sub}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-2">
                      <span className="inline-block font-mono text-xs font-bold text-[#1A3E38] bg-[#E7F3EF] border border-[#CFE4D8] px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="mt-4 pt-3.5 border-t border-[#EFECE6] flex items-center justify-between text-[0.6875rem] font-ui text-[#526E65]">
              <span className="flex items-center gap-1.5 text-[#1A3E38] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38]" />
                Zero-Breakdown SLA
              </span>
              <span className="font-mono">100% Production Uptime</span>
            </div>
          </div>

          {/* Column 3: Hands-on Tech / Analytics Photo (4 cols) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden bg-[#FAF9F5] border border-[#E5E0D5] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group h-72 md:h-auto min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Aspirev Production System Engineering"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft gradient bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A221D]/90 via-[#0A221D]/30 to-transparent" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1A3E38] font-mono text-[0.6875rem] font-semibold border border-[#CFE4D8] shadow-xs">
                [ Production Engineering ]
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-display font-bold text-sm">High-Precision Code Delivery</div>
              <div className="text-[0.6875rem] text-[#D2EAE3] mt-0.5">Next.js 16, TypeScript, Tailwind & Core Web Vitals.</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLVANCE-STYLE BRACKETED VALUE CHIPS STRIP                                 */}
        {/* ========================================================================= */}
        <div className="mt-14 pt-6 border-t border-[#E8E4D9] flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs font-mono text-[#4A5D57]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38]" />
            <span className="font-medium text-[#10221E]">[ ✓ In-House Senior Architecture Guild ]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38]" />
            <span className="font-medium text-[#10221E]">[ ✓ 100% IP & Source Code Ownership ]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38]" />
            <span className="font-medium text-[#10221E]">[ ✓ Transparent Milestone-Based Sprints ]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38]" />
            <span className="font-medium text-[#10221E]">[ ✓ 48-Hour Rapid Architecture Audit ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
