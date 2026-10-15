"use client";

import React from "react";
import { Search, Compass, Code2, Rocket } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Discover & Scope",
    description:
      "We understand your business model, goals, challenges, and target audience through deep technical and stakeholder architecture interviews.",
    icon: <Search className="w-5 h-5 text-[#1A3E38]" />,
    duration: "Week 1-2",
  },
  {
    number: "02",
    title: "Design System & UX",
    description:
      "We plan the complete experience, structure, and visual direction around the solution with design tokens, wireframes, and interactive prototypes.",
    icon: <Compass className="w-5 h-5 text-[#1A3E38]" />,
    duration: "Week 2-4",
  },
  {
    number: "03",
    title: "Precision Engineering",
    description:
      "We develop the software, validate key interactions, and refine the experience with rigorous CI/CD testing, security, and performance benchmarks.",
    icon: <Code2 className="w-5 h-5 text-[#1A3E38]" />,
    duration: "Week 4-8",
  },
  {
    number: "04",
    title: "Production & Scale",
    description:
      "We execute seamless production deployment, handle telemetry monitoring, and establish ongoing improvements based on growth metrics.",
    icon: <Rocket className="w-5 h-5 text-[#1A3E38]" />,
    duration: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[640px] mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-3">
            <span>[ Our 4-Stage Methodology ]</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E]">
            Thoughtful from the first conversation to launch.
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-11 -right-3 w-6 h-[2px] bg-[#E5E0D5] z-10" />
              )}

              <div>
                {/* Step Number Badge & Icon Disc */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-full bg-[#1A3E38] text-[#A3E5D4] font-mono flex items-center justify-center font-bold text-sm shadow-xs">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                  {step.description}
                </p>
              </div>

              {/* Step Timeline Indicator */}
              <div className="mt-6 pt-4 border-t border-[#EFECE6] flex items-center justify-between text-xs font-mono text-[#526E65]">
                <span>Timeline</span>
                <span className="font-medium px-2.5 py-0.5 rounded-full bg-[#E7F3EF] text-[#1A3E38] border border-[#CFE4D8]">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
