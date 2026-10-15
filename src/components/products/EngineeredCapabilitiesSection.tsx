"use client";

import React from "react";
import {
  FileText,
  Compass,
  CheckCircle2,
  BookOpen,
  Kanban,
  Award,
  ArrowRight,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  icon: React.ReactNode;
}

const capabilities: CapabilityItem[] = [
  {
    id: "ats-analytics",
    title: "ATS Resume Analytics & Vector Matching",
    description:
      "Multi-factor structural parsing, contextual keyword density, and actionable bullet-point rewriting based on direct technical benchmark databases.",
    linkText: "Deterministic grammar & syntax evaluation",
    icon: <FileText className="w-5 h-5 text-[#1A3E38]" />,
  },
  {
    id: "career-roadmaps",
    title: "Interactive Career Roadmaps",
    description:
      "Milestone-based progression tracks from entry-level contributor to staff engineering with explicit prerequisite dependencies and validation tasks.",
    linkText: "Skill tree & prerequisite progression mapping",
    icon: <Compass className="w-5 h-5 text-[#1A3E38]" />,
  },
  {
    id: "skill-gaps",
    title: "Real-Time Skill-Gap Insights",
    description:
      "Real-time delta computation between user profile vectors and market requirements extracted continuously from thousands of live industry job postings.",
    linkText: "Semantic gap ontology calculation",
    icon: <CheckCircle2 className="w-5 h-5 text-[#1A3E38]" />,
  },
  {
    id: "learning-resources",
    title: "Curated Learning Resources",
    description:
      "High-signal documentation, open-source repositories, and structured modules tied directly to identified skill gaps, eliminating irrelevant tutorials.",
    linkText: "High-signal open-source codebase references",
    icon: <BookOpen className="w-5 h-5 text-[#1A3E38]" />,
  },
  {
    id: "tracking-workspace",
    title: "Application Tracking Workspace",
    description:
      "Visual kanban board managing the active pipeline from first application to interview rounds, salary negotiation, and final contract signing.",
    linkText: "End-to-end job pipeline management",
    icon: <Kanban className="w-5 h-5 text-[#1A3E38]" />,
  },
  {
    id: "portfolio-builder",
    title: "Portfolio & Proof-of-Work Builder",
    description:
      "Clean digital showcase highlighting verified GitHub repositories, architecture case studies, and code contributions that recruiters can instantly verify.",
    linkText: "Tamper-resistant project proof",
    icon: <Award className="w-5 h-5 text-[#1A3E38]" />,
  },
];

interface EngineeredCapabilitiesSectionProps {
  onOpenInquiry: () => void;
}

export default function EngineeredCapabilitiesSection({
  onOpenInquiry,
}: EngineeredCapabilitiesSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-[#FAF9F5] border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] mb-3">
            <span className="font-mono text-xs font-medium text-[#1A3E38]">
              [ Platform Architecture · Core Systems ]
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E] mb-2.5">
            Engineered capabilities designed for real-world impact.
          </h2>
          <p className="font-body text-base text-[#3E534D]">
            Built with deterministic engineering, verified vector search, and structured user pipelines.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="group bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Icon box */}
                <div className="w-10 h-10 rounded-2xl bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-2xs">
                  {cap.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-5">
                  {cap.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3.5 border-t border-[#EFECE6]">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold text-[#1A3E38] hover:text-[#13332E] group/link transition-colors cursor-pointer text-left"
                >
                  <span>{cap.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
