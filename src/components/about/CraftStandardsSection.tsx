"use client";

import React from "react";
import { Filter, Award, Layout, RefreshCw, MessageSquare } from "lucide-react";

interface PrincipleItem {
  id: string;
  title: string;
  description: string;
  footerText: string;
  icon: React.ReactNode;
}

const principles: PrincipleItem[] = [
  {
    id: "clarity",
    title: "Clarity over unnecessary complexity",
    description:
      "We eliminate bloat, unnecessary microservices, and convoluted user flows in favor of intuitive, dependable solutions.",
    footerText: "Zero-overhead Architecture",
    icon: <Filter className="w-5 h-5 text-[#1A3E38] group-hover:text-white transition-colors" />,
  },
  {
    id: "purpose",
    title: "Useful solutions over tech for its own sake",
    description:
      "We adopt modern tools and tech only when they demonstrably solve concrete operational friction, not to hype trends to customers.",
    footerText: "Technology for Purpose",
    icon: <Award className="w-5 h-5 text-[#1A3E38] group-hover:text-white transition-colors" />,
  },
  {
    id: "design",
    title: "Thoughtful, human-centered design",
    description:
      "Visual aesthetics emerge from typographic precision, intentional spacing, and cognitive clarity, rather than distracting animations.",
    footerText: "Mathematical Hierarchy",
    icon: <Layout className="w-5 h-5 text-[#1A3E38] group-hover:text-white transition-colors" />,
  },
  {
    id: "learning",
    title: "Continuous learning & rigor",
    description:
      "Technology evolves rapidly. We maintain constant hands-on testing, rigorous benchmarking, and continuous refinement.",
    footerText: "Benchmarked Excellence",
    icon: <RefreshCw className="w-5 h-5 text-[#1A3E38] group-hover:text-white transition-colors" />,
  },
  {
    id: "communication",
    title: "Honest, transparent communication",
    description:
      "Direct access to senior builders. No hidden retainer lock-ins, no inflated credentials, and absolute scope transparency. You always know what is being built, why, and at what cost.",
    footerText: "Senior Architect Ownership · Direct WhatsApp & Git Repositories",
    icon: <MessageSquare className="w-5 h-5 text-[#1A3E38] group-hover:text-white transition-colors" />,
  },
];

export default function CraftStandardsSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
            <span className="font-mono text-xs font-medium text-[#1A3E38]">
              [ Core Values & Craft Standards ]
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
            Principles that guide our engineering and design.
          </h2>
          <p className="font-body text-base text-[#3E534D]">
            Preserving our foundational values as defended standards of craft, not marketing statements, we prioritize:
          </p>
        </div>

        {/* 3-Column / 2-Row Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={item.id}
              className={`group bg-white hover:bg-[#FAF9F5] rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Icon box */}
                <div className="w-10 h-10 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center mb-4 group-hover:bg-[#1A3E38] transition-colors shadow-2xs">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-5">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-3.5 border-t border-[#EFECE6]">
                <span className="font-mono text-xs font-semibold text-[#1A3E38]">
                  {item.footerText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
