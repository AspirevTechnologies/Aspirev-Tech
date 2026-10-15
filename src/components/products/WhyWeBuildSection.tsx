"use client";

import React from "react";
import { FlaskConical, Target, ShieldCheck, Cpu } from "lucide-react";

export default function WhyWeBuildSection() {
  const pillars = [
    {
      icon: <FlaskConical className="w-5 h-5 text-[#1A3E38]" />,
      title: "Real-world testing ground",
      description:
        "Our venture products allow us to rigorously test emerging AI models, caching layers, vector stores, and edge architectures under production loads before applying them to client solutions.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#1A3E38]" />,
      title: "True skin in the game",
      description:
        "We navigate the entire product lifecycle from zero to user retention: discovery, UX research, compliance, edge deployments, and user onboarding with real metrics and customer retention stakes.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#1A3E38]" />,
      title: "Pragmatic engineering",
      description:
        "Aspirev products are built around deterministic data extraction, structured heuristics, and verifiable outputs—not generic, unconstrained chatbots that generate hallucinations.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Studio Narrative & Advantage Callout */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
              <span className="font-mono text-xs font-medium text-[#1A3E38]">
                [ Internal Lab Philosophy · Skin In The Game ]
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-3.5">
              Why we build our own products.
            </h2>
            <p className="font-body text-base text-[#3E534D] mb-5 leading-relaxed">
              Many technology studios act purely as service agencies. At Aspirev, we operate an active internal venture lab where we fund, architect, and ship production software from scratch.
            </p>

            {/* The Venture Studio Advantage Callout Box */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9] relative overflow-hidden">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1A3E38] uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1A3E38]" />
                <span>The Venture Studio Advantage</span>
              </div>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                When we build for ourselves, there are no shortcuts or hypothetical assumptions. Everything we ship must withstand production traffic, complex user onboarding, and enterprise security.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Value Pillars */}
          <div className="lg:col-span-7 space-y-3.5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-3xl bg-white hover:bg-[#FAF9F5] border border-[#E5E0D5] hover:border-[#1A3E38]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
