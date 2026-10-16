"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Lock, Sparkles, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  tags: string[];
  description: string;
  badge: string;
  footerStatus: string;
  url: string;
  previewImage: string;
  category: "all" | "venture" | "hospitality" | "healthcare" | "operations";
  isLive?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "aspirev-career",
    title: "Aspirev — AI Career Intelligence Platform",
    client: "Aspirev Technologies · Live Platform",
    tags: ["BERT & LLM Models", "Career Roadmaps", "ATS Resume Engine", "In-Build Portfolio"],
    description:
      "Our live, company-developed flagship platform helping students and job seekers accelerate their careers. Features BERT and LLM scoring, automated AI Career Roadmaps, a Kanban Application Tracker, ATS Resume Analysis, and an In-Build Portfolio Creator.",
    badge: "Live Flagship Platform",
    footerStatus: "Live Platform · www.aspirev.com",
    url: "https://www.aspirev.com",
    previewImage: "/aspirevown.png",
    category: "venture",
    isLive: true,
  },
  {
    id: "eascca",
    title: "EASCCA Grand Convention & Event Sanctuary",
    client: "EASCCA Convention Centre",
    tags: ["Azure Computer Vision", "Multi-Role Dashboards", "A+ Performance"],
    description:
      "Enterprise wedding sanctuary and convention platform featuring Azure Computer Vision for Pinterest/Instagram decor recommendation, NLP sentiment analysis, 4 specialized dashboards (Admin, Manager, Decorator, Videographer), and DSA booking queues with A+ verified security and speed.",
    badge: "Recent Client Project",
    footerStatus: "Staging Architecture · A+ Audited",
    url: "preview.internal/eascca-convention-os",
    previewImage: "/EASCCA.png",
    category: "hospitality",
    isLive: false,
  },
  {
    id: "airi-galle",
    title: "Airi Banquet Hall & Events",
    client: "Airi Banquet Hall, Galle",
    tags: ["Luxury Hospitality", "Event Space Booking"],
    description:
      "A bespoke high-conversion digital presence for Galle's premier coastal wedding venue and banquet hall, featuring real-time event booking inquiries and interactive hall showcase.",
    badge: "Recent Client Project",
    footerStatus: "Recent Client Platform",
    url: "preview.internal/airi-banquet-galle",
    previewImage: "/Airi.png",
    category: "hospitality",
    isLive: false,
  },
  {
    id: "dental-hub",
    title: "Dental Hub Multi-Speciality Clinic",
    client: "Dental Hub Healthcare",
    tags: ["Healthcare Web Portal", "Patient Consultation"],
    description:
      "A clinical digital platform engineered for patient trust, specialist doctor appointment bookings, clear treatment education, and digital intake management.",
    badge: "Recent Client Project",
    footerStatus: "Recent Clinical System",
    url: "preview.internal/dentalhub-clinic",
    previewImage: "/dentalhub.png",
    category: "healthcare",
    isLive: false,
  },
  {
    id: "dr-malinda",
    title: "Dr. Malinda Ekanayake Dental Surgery",
    client: "Dr. Malinda Ekanayake Practice",
    tags: ["Surgical Practice", "Specialist Healthcare"],
    description:
      "Modern patient-first healthcare presence showcasing restorative treatments, digital smile design galleries, and friction-free direct appointment scheduling.",
    badge: "Recent Client Project",
    footerStatus: "Recent Healthcare System",
    url: "preview.internal/dr-malinda-dental",
    previewImage: "/malinda.png",
    category: "healthcare",
    isLive: false,
  },
  {
    id: "valetxpress",
    title: "ValetXpress Concierge & Fleet Mobility",
    client: "ValetXpress Mobility",
    tags: ["Fleet Management", "Mobility Logistics"],
    description:
      "High-velocity digital dispatch application for on-demand vehicle valet services, digital ticketing, SMS check-ins, and multi-venue hospitality logistics.",
    badge: "Recent Client Project",
    footerStatus: "Fleet Dispatch Architecture",
    url: "preview.internal/valetxpress-mobility",
    previewImage: "/valetxpress.png",
    category: "operations",
    isLive: false,
  },
];

export default function FeaturedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-14 md:py-20 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-5">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-3">
              <span>[ Recent Projects · Live Flagship: www.aspirev.com ]</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E]">
              Good ideas deserve thoughtful execution.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base leading-relaxed text-[#3E534D] max-w-[420px]">
            Scroll inside any browser frame below to interactively explore our live flagship platform and verified client project architectures.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Works (6)" },
            { id: "venture", label: "Live Flagship (1)" },
            { id: "hospitality", label: "Hospitality & Venues" },
            { id: "healthcare", label: "Healthcare & Clinics" },
            { id: "operations", label: "Operations & Mobility" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full font-ui text-xs font-medium transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3E38] ${
                activeFilter === filter.id
                  ? "bg-[#1A3E38] text-white shadow-sm border border-[#1A3E38]"
                  : "bg-white text-[#3E534D] hover:text-[#10221E] border border-[#DDD9CE] hover:bg-[#F2EFE9]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Scrollable Browser Window Mockup Frame */}
                <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-xs mb-5">
                  {/* Browser Window Titlebar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A221D] border-b border-[#2D6B60]/40">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#05110E] border border-[#2D6B60]/60 text-[0.625rem] font-mono text-[#D2EAE3] max-w-[220px] truncate shadow-2xs">
                      <Lock className="w-2.5 h-2.5 text-[#A3E5D4] shrink-0" />
                      <span>{project.url}</span>
                    </div>
                    {project.isLive ? (
                      <span className="text-[0.625rem] font-ui font-medium text-[#A3E5D4] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Live Platform
                      </span>
                    ) : (
                      <span className="text-[0.625rem] font-ui font-medium text-[#D2EAE3]/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]/70" />
                        Recent Project
                      </span>
                    )}
                  </div>

                  {/* Scrollable Viewport Frame */}
                  <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                    {/* Real 1920px Full Page Screenshot */}
                    <img
                      src={project.previewImage}
                      alt={`${project.title} Full Website Capture`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />

                    {/* Scroll prompt overlay */}
                    <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                      <span className="px-3.5 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-sm border border-[#A3E5D4]/30">
                        ↕ Scroll window to view full website
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags & Client */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#1A3E38] text-white text-xs font-ui font-medium">
                    {project.client}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#E7F3EF] text-[#1A3E38] text-xs font-ui font-medium border border-[#CFE4D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-5">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EFECE6]">
                {project.isLive ? (
                  <div className="flex items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-ui text-xs sm:text-sm font-semibold text-[#1A3E38] hover:text-[#13332E] group/link transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#2A7E68]" />
                      <span>Launch Live Platform (www.aspirev.com)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-[#2A7E68]" />
                    </a>
                  </div>
                ) : (
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 font-ui text-xs sm:text-sm font-semibold text-[#1A3E38] hover:text-[#13332E] group/link transition-colors"
                  >
                    <span>Explore Case Study & Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
                <span className="font-mono text-xs text-[#526E65] font-medium">
                  {project.footerStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Link */}
        <div className="text-center pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-[#F2EFE9] text-[#1A3E38] border border-[#DDD9CE] hover:border-[#1A3E38] font-ui text-sm font-semibold shadow-xs hover:shadow-sm transition-all group"
          >
            <span>View All Production Works & Methodologies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
