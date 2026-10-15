"use client";

import React from "react";
import { Search, Compass, Code2, Rocket } from "lucide-react";

interface PhaseItem {
  number: string;
  title: string;
  description: string;
  timeline: string;
  icon: React.ReactNode;
}

const phases: PhaseItem[] = [
  {
    number: "01",
    title: "Discovery & Scope",
    description:
      "Requirements gathering, technical feasibility assessments, and defined milestone planning.",
    timeline: "Week 1: Scoping Sprint",
    icon: <Search className="w-4 h-4 text-[#1A3E38]" />,
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Baseline wireframing, production UI specifications, and scalable system schema.",
    timeline: "Week 2: Dev Prototype",
    icon: <Compass className="w-4 h-4 text-[#1A3E38]" />,
  },
  {
    number: "03",
    title: "Sprint Execution",
    description:
      "Continuous delivery, regular milestone demos, automated CI/CD, and rigorous testing.",
    timeline: "Weeks 3-8: Weekly Sprints",
    icon: <Code2 className="w-4 h-4 text-[#1A3E38]" />,
  },
  {
    number: "04",
    title: "Deployment & Handover",
    description:
      "Production launch, documentation, and handover or ongoing SLA support.",
    timeline: "Sprint 8+: Ongoing Partnership",
    icon: <Rocket className="w-4 h-4 text-[#1A3E38]" />,
  },
];

export default function EngagementModelSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[680px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
            <span className="font-mono text-xs font-medium text-[#1A3E38]">
              [ Collaboration Process · Sprint Milestones ]
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
            A predictable, transparent engagement model.
          </h2>
          <p className="font-body text-base text-[#3E534D]">
            We work as your dedicated technical partner from discovery through post-launch refinement.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="group bg-white hover:bg-[#FAF9F5] rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-[#1A3E38] leading-none">
                    {phase.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {phase.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                  {phase.description}
                </p>
              </div>

              {/* Timeline badge */}
              <div className="mt-5 pt-3.5 border-t border-[#EFECE6]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-xs font-mono font-medium text-[#1A3E38]">
                  {phase.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
