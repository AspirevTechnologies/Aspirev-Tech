"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users2, ShieldCheck, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder & Studio Engineering Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E0D5] bg-[#0A221D] shadow-xs hover:shadow-xl transition-all duration-300">
              {/* Studio Workspace Visual Representation with Authentic Founder Photo */}
              <div className="relative min-h-[460px] sm:min-h-[500px] overflow-hidden flex flex-col justify-between p-5 sm:p-6 group">
                {/* Authentic Founder Photo Background with Top-Center Alignment */}
                <img
                  src="/founder.jpg"
                  alt="Mohamed Nazik - Founder & Lead Engineer at Aspirev Technologies"
                  className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.05] brightness-90 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Forest Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A221D] via-[#0A221D]/75 to-[#0A221D]/35" />

                {/* Studio floating badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A221D]/85 backdrop-blur-md border border-[#A3E5D4]/40 text-[0.75rem] font-ui font-semibold text-[#A3E5D4] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Founder-Led Engineering</span>
                  </div>
                  <span className="font-mono text-[0.6875rem] text-[#D2EAE3] bg-[#0A221D]/80 px-2.5 py-0.5 rounded-full border border-white/10">
                    Mohamed Nazik
                  </span>
                </div>

                {/* Center Visual Element: Code & Design Confluence */}
                <div className="relative z-10 my-auto py-2">
                  <div className="bg-[#0A221D]/90 backdrop-blur-md text-white p-3.5 rounded-2xl border border-[#A3E5D4]/20 shadow-xl font-mono text-[0.75rem] leading-relaxed">
                    <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10 text-[#D2EAE3]/70 text-[0.6875rem]">
                      <Cpu className="w-3.5 h-3.5 text-[#A3E5D4]" />
                      <span>mohamed-nazik // architecture.ts</span>
                    </div>
                    <div className="text-[#A3E5D4]">
                      <span className="text-[#F59E0B]">const</span> engineeringStandard = {"{"}
                    </div>
                    <div className="pl-4 text-white/90">
                      lead: <span className="text-[#A3E5D4]">&quot;Mohamed Nazik&quot;</span>,
                    </div>
                    <div className="pl-4 text-white/90">
                      architecture: <span className="text-[#A3E5D4]">&quot;Deterministic & Typed&quot;</span>,
                    </div>
                    <div className="pl-4 text-white/90">
                      execution: <span className="text-[#A3E5D4]">&quot;Production-Grade Vitals&quot;</span>,
                    </div>
                    <div className="text-[#A3E5D4]">{"};"}</div>
                  </div>
                </div>

                {/* Bottom stats inside card */}
                <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-1">
                  <div className="bg-[#0A221D]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#A3E5D4]/20 text-white">
                    <div className="font-display font-bold text-[1.125rem] text-white">Direct Access</div>
                    <div className="text-[0.6875rem] font-ui text-[#D2EAE3]/80">Zero Middlemen</div>
                  </div>
                  <div className="bg-[#0A221D]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#A3E5D4]/20 text-white">
                    <div className="font-display font-bold text-[1.125rem] text-[#A3E5D4]">100%</div>
                    <div className="text-[0.6875rem] font-ui text-[#D2EAE3]/80">IP & Code Ownership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Philosophy Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-3">
              <span>[ Founder-Led Engineering Studio · Mohamed Nazik ]</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-4">
              A software studio that values craft, clarity, and purpose.
            </h2>

            <p className="font-body text-sm sm:text-base leading-relaxed text-[#3E534D] mb-4">
              Founded by <strong>Mohamed Nazik</strong>, Aspirev Technologies helps businesses turn real-world challenges into high-performing websites, mobile applications, custom web portals, booking engines, and practical ML-based systems. We combine modern development velocity with disciplined software engineering-ensuring every deliverable is thoroughly verified, resilient, and production-ready.
            </p>

            <p className="font-body text-xs sm:text-sm leading-relaxed text-[#526E65] mb-6">
              Whether building a fast-loading landing page for a Sri Lankan business or engineering custom software for international clients, we provide verifiable proofs for <strong>speed, security, and performance</strong> tailored to your budget.
            </p>

            {/* 3 Core Pillars Checklist */}
            <div className="space-y-4 mb-8 w-full">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center shrink-0 mt-0.5 text-[#1A3E38]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38]" />
                </div>
                <div>
                  <strong className="font-display font-semibold text-sm sm:text-base text-[#10221E] block">
                    Engineering Rigor & Verification (Beyond Blind &ldquo;Vibe Coding&rdquo;)
                  </strong>
                  <span className="font-body text-xs sm:text-sm text-[#4A5D57] leading-relaxed">
                    While the industry rapidly embraces AI &ldquo;vibe coding&rdquo; for exploration, we never ship unchecked code. We leverage modern velocity tools while upholding strict human verification: deterministic typing, edge-case hardening, security headers, and guaranteed sub-second mobile loads.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center shrink-0 mt-0.5 text-[#1A3E38]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38]" />
                </div>
                <div>
                  <strong className="font-display font-semibold text-sm sm:text-base text-[#10221E] block">
                    Verifiable Proofs: Security, Speed & Performance
                  </strong>
                  <span className="font-body text-xs sm:text-sm text-[#4A5D57] leading-relaxed">
                    At handover, you receive complete Lighthouse audit proofs, SSL verification, security headers, and guaranteed 3-week post-launch support.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center shrink-0 mt-0.5 text-[#1A3E38]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38]" />
                </div>
                <div>
                  <strong className="font-display font-semibold text-sm sm:text-base text-[#10221E] block">
                    Direct Founder Partnership
                  </strong>
                  <span className="font-body text-xs sm:text-sm text-[#4A5D57] leading-relaxed">
                    No middlemen or junior account managers. You collaborate directly with Mohamed Nazik from initial architecture to live production deployment.
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Link to About Page */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#F2EFE9] text-[#1A3E38] border border-[#DDD9CE] hover:border-[#1A3E38] font-ui text-sm font-semibold shadow-xs hover:shadow-sm transition-all group"
            >
              <span>Learn More About Our Team & Philosophy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
