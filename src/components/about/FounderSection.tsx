"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium mb-3">
            <span>[ Founder-Led Engineering · Mohamed Nazik ]</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
            Founder-Led & Hands-On Engineering
          </h2>
          <p className="font-body text-base text-[#3E534D]">
            At Aspirev Technologies, you collaborate directly with the creator building your digital product.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Founder Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            {/* Visual Portrait Box */}
            <div className="w-full sm:w-48 shrink-0 flex flex-col items-center">
              <div className="w-full rounded-2xl bg-[#1A3E38] text-white flex flex-col overflow-hidden shadow-md border border-[#2D6B60]">
                {/* Portrait Header Image */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#0A221D]">
                  <img
                    src="/founder.jpg"
                    alt="Mohamed Nazik - Founder & Lead Architect"
                    className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#0A221D]/90 backdrop-blur-xs text-[#A3E5D4] text-[0.625rem] font-mono border border-white/20">
                      FOUNDER
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse block shadow-xs" />
                  </div>
                </div>

                <div className="p-3 text-center bg-[#1A3E38] border-t border-[#2D6B60]">
                  <div className="font-display font-bold text-sm tracking-tight text-white">
                    Mohamed Nazik
                  </div>
                  <div className="text-[0.6875rem] font-mono text-[#A3E5D4]">
                    Founder & Lead Architect
                  </div>
                </div>
              </div>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F3EF] text-[#1A3E38] text-xs font-ui font-medium border border-[#CFE4D8]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Hands-on Code Owner</span>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl text-[#10221E]">
                    Mohamed Nazik
                  </h3>
                  <span className="text-[0.6875rem] font-mono px-2.5 py-0.5 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38]">
                    Founder & Lead Engineer
                  </span>
                </div>
                <div className="text-xs font-ui font-semibold text-[#526E65] uppercase tracking-wider mb-3">
                  Software Engineering & Machine Learning
                </div>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-3">
                  Full-stack software developer and AI engineer dedicated to building scalable, production-perfect systems. Specialized in high-conversion business landing pages, booking engines, custom web portals, and practical ML-driven features.
                </p>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#10221E] font-medium mb-4">
                  &ldquo;While the industry rapidly adopts AI vibe prototyping, we never ship unverified code. We combine fast discovery with rigorous software engineering—verifying every build with deterministic types, sub-second performance audits, and security proofs tailored to your budget.&rdquo;
                </p>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {[
                    "Next.js & TypeScript Systems",
                    "Custom Web Applications",
                    "Mobile Applications (iOS/Android)",
                    "Booking & Dispatch Engines",
                    "Practical ML & AI Solutions",
                    "Sub-Second Core Web Vitals",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-mono text-[#3E534D]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Reach */}
              <div className="pt-3 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <a
                  href="mailto:hello.aspirev@gmail.com"
                  className="text-[#1A3E38] font-semibold hover:underline"
                >
                  hello.aspirev@gmail.com
                </a>
                <a
                  href="https://wa.me/94787844914?text=Hi%20Mohamed%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  WhatsApp: +94 78 784 4914 →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Philosophy Card */}
          <div className="lg:col-span-5 bg-[#1A3E38] text-white rounded-3xl border border-[#2D6B60] p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#22564C] border border-[#3C8578] text-[#A3E5D4] flex items-center justify-center font-display font-bold text-sm mb-3.5">
                01
              </div>
              <span className="font-mono text-[0.6875rem] font-semibold text-[#A3E5D4] uppercase tracking-wider block mb-1.5">
                Engineering Discipline
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-2.5">
                True Engineering, Not Blind Vibe Coding
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#D2EAE3] mb-5">
                While modern AI workflows accelerate exploration, shipping unchecked code causes breaking bugs and security hazards. Aspirev builds production-grade software engineered with deterministic types, resilient error boundaries, and verified security proofs.
              </p>

              {/* Bullet checks */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E5D4] shrink-0" />
                  <span>100% Core Web Vitals benchmarked</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E5D4] shrink-0" />
                  <span>Verified Security & SSL headers at handover</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E5D4] shrink-0" />
                  <span>Free revisions for 3 weeks post-launch</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E5D4] shrink-0" />
                  <span>Direct founder collaboration on every sprint</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#2D6B60] text-xs font-mono text-[#D2EAE3]/80">
              LEAD ARCHITECT INVOLVEMENT: 100% · DIRECT ENGAGEMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
