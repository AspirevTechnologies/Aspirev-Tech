"use client";

import React from "react";
import { Search, Code2, CheckCircle2 } from "lucide-react";

interface MethodologyItem {
  number: string;
  title: string;
  description: string;
  deliverableBadge: string;
  icon: React.ReactNode;
}

const steps: MethodologyItem[] = [
  {
    number: "01",
    title: "Context & Constraints",
    description:
      "We isolate core customer bottlenecks, data fidelities, and technical constraints before drafting a single interface component.",
    deliverableBadge: "Deliverable: Feasibility Audit",
    icon: <Search className="w-4 h-4 text-[#1A3E38]" />,
  },
  {
    number: "02",
    title: "Direction & Engineering",
    description:
      "Mathematical design systems pair with strict type-safety, reactive data pipelines, and decoupled API architectures.",
    deliverableBadge: "Deliverable: Production System",
    icon: <Code2 className="w-4 h-4 text-[#1A3E38]" />,
  },
  {
    number: "03",
    title: "Verified Deliverables",
    description:
      "Every deliverable ships with documented maintenance, production test coverage, and transparent training systems.",
    deliverableBadge: "Deliverable: Handover & SLA",
    icon: <CheckCircle2 className="w-4 h-4 text-[#1A3E38]" />,
  },
];

export default function WorkMethodologySection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
            <span className="font-mono text-xs font-medium text-[#1A3E38]">
              [ Execution Methodology · Engineering Discipline ]
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
            How We Dissect & Deliver Every Project
          </h2>
          <p className="font-body text-base text-[#3E534D]">
            Whether designing an internal prototype or deploying a mission-critical web application, we follow an uncompromising execution methodology.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white hover:bg-[#FAF9F5] rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-[#1A3E38] leading-none">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57]">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#EFECE6]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-xs font-mono font-medium text-[#1A3E38]">
                  {step.deliverableBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
