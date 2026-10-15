"use client";

import React, { useState } from "react";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  categoryKeys: string[];
  mockupBadge: string;
  mockupHeader: string;
  url: string;
  previewImage: string;
  client: string;
  tags: string[];
  title: string;
  description: string;
  deliverablesText: string;
  techStack: string[];
  actionText: string;
}

const projects: ProjectItem[] = [
  {
    id: "airi-galle",
    categoryKeys: ["all", "hospitality", "client"],
    mockupBadge: "LUXURY HOSPITALITY",
    mockupHeader: "Airi Banquet Hall & Event Suites // Galle",
    url: "https://airibanquet.com",
    previewImage: "/Airi.png",
    client: "Airi Banquet Hall",
    tags: ["Client Project", "Luxury Hospitality", "Web Platform"],
    title: "Airi Banquet Hall & Events — Galle",
    description:
      "A bespoke, high-conversion digital presence engineered for Galle's premier coastal wedding venue and banquet hall suites, featuring direct event booking inquiries and interactive hall showcase.",
    deliverablesText:
      "Custom Web Architecture, Interactive Event Spaces Gallery, Direct Booking Request Engine",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    actionText: "View Live Project",
  },
  {
    id: "dental-hub",
    categoryKeys: ["all", "healthcare", "client"],
    mockupBadge: "HEALTHCARE PORTAL",
    mockupHeader: "Dental Hub Multi-Speciality Practice // v2.0",
    url: "https://dentalhub.lk",
    previewImage: "/dentalhub.png",
    client: "Dental Hub Healthcare",
    tags: ["Client Project", "Healthcare Portal", "Clinical Management"],
    title: "Dental Hub Multi-Speciality Clinic",
    description:
      "A clinical digital platform engineered for patient trust, specialist doctor appointment bookings, clear treatment education, and digital intake management.",
    deliverablesText:
      "Patient Booking Flow, Treatment Information Architecture, Clinical Brand Suite",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Twilio SMS"],
    actionText: "View Live Project",
  },
  {
    id: "dr-malinda",
    categoryKeys: ["all", "healthcare", "client"],
    mockupBadge: "SURGICAL PRACTICE",
    mockupHeader: "Dr. Malinda Ekanayake Dental Practice // Colombo",
    url: "https://drmalindaekanayake.com",
    previewImage: "/malinda.png",
    client: "Dr. Malinda Ekanayake Practice",
    tags: ["Client Project", "Surgical Practice", "Patient Intake"],
    title: "Dr. Malinda Ekanayake Dental Surgery",
    description:
      "Authoritative medical practice portal for premier dental surgery, patient education, oral care treatments, and digital consultation intake.",
    deliverablesText:
      "Custom Practice Website, Patient Testimonials Showcase, Intake Consultation Form",
    techStack: ["React", "Tailwind CSS", "Headless CMS", "Calendly API"],
    actionText: "View Live Project",
  },
  {
    id: "valetxpress",
    categoryKeys: ["all", "operations", "client"],
    mockupBadge: "FLEET & MOBILITY",
    mockupHeader: "ValetXpress On-Demand Mobility Dispatch // v3.4",
    url: "https://valetxpress.lk",
    previewImage: "/valetxpress.png",
    client: "ValetXpress Mobility",
    tags: ["Client Project", "Fleet Management", "Mobility Logistics"],
    title: "ValetXpress Concierge & Fleet Mobility",
    description:
      "High-velocity digital dispatch application for on-demand vehicle valet services, digital ticketing, SMS check-ins, and multi-venue hospitality logistics.",
    deliverablesText:
      "Real-Time Ticket Dispatch, Venue Check-in Engine, Stripe Payment Integration",
    techStack: ["React", "Node.js", "WebSockets", "Google Maps API"],
    actionText: "View Live Project",
  },
  {
    id: "aspirev-career",
    categoryKeys: ["all", "saas", "venture"],
    mockupBadge: "STUDIO VENTURE",
    mockupHeader: "Aspirev Career Intelligence Hub // AI Model v2.4",
    url: "https://aspirev.com",
    previewImage: "/aspirevown.png",
    client: "In-House Lab Venture",
    tags: ["Internal Venture", "AI Vector Engine", "SaaS Platform"],
    title: "Aspirev Career Intelligence Flagship",
    description:
      "All-in-one AI career intelligence platform consolidating resume ATS analytics, milestone skill roadmaps, delta gap computations, and candidate application tracking.",
    deliverablesText:
      "Vector Resume Parser, Interactive Roadmap Matrix, Kanban Tracking Portal",
    techStack: ["Next.js", "Tailwind CSS", "Python / NLP", "Supabase"],
    actionText: "Visit Venture Platform",
  },
];

interface WorkProjectsGridProps {
  onOpenInquiry: () => void;
}

export default function WorkProjectsGrid({ onOpenInquiry }: WorkProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Works", count: 5 },
    { id: "healthcare", label: "Healthcare & Clinics", count: 2 },
    { id: "hospitality", label: "Hospitality & Venues", count: 1 },
    { id: "operations", label: "Logistics & Mobility", count: 1 },
    { id: "venture", label: "Studio Ventures", count: 1 },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryKeys.includes(activeFilter));

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10 border-b border-[#E8E4D9] pb-5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#1A3E38] text-white shadow-xs"
                    : "bg-white text-[#3E534D] hover:text-[#10221E] border border-[#E5E0D5] hover:bg-[#E7F3EF]"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span
                    className={`ml-1 text-[0.6875rem] px-2 py-0.2 rounded-full font-mono font-semibold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E7F3EF] text-[#1A3E38]"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Scrollable Browser Window Mockup Frame */}
                <div className="rounded-2xl border border-[#2D6B60] overflow-hidden bg-[#071714] shadow-md mb-4">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-[#0A221D] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-mono text-[0.625rem] text-[#D2EAE3] truncate max-w-[170px] sm:max-w-[220px]">
                        {project.mockupHeader}
                      </span>
                    </div>
                    <span className="text-[0.625rem] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#1A3E38] text-[#A3E5D4] border border-[#2D6B60] shadow-2xs">
                      {project.mockupBadge}
                    </span>
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#0A221D] border-b border-white/10 text-[0.625rem] font-mono text-[#D2EAE3]">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-[#A3E5D4] shrink-0" />
                      <span className="truncate text-[#D2EAE3]">{project.url}</span>
                    </div>
                    <span className="text-[#A3E5D4] font-semibold shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      200 OK
                    </span>
                  </div>

                  {/* Scrollable Landing Page Viewport Container */}
                  <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} Full Page Architecture Preview`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />

                    {/* Scroll prompt overlay */}
                    <div className="sticky bottom-2 left-0 right-0 flex justify-center pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[#0A221D]/90 backdrop-blur-sm text-[#D2EAE3] text-[0.625rem] font-ui font-medium shadow-md border border-[#A3E5D4]/30">
                        ↕ Scroll window to view full website
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Tags & Client */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                  <span className="px-3 py-0.5 rounded-full bg-[#1A3E38] text-white text-xs font-mono font-medium">
                    {project.client}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-0.5 rounded-full bg-[#E7F3EF] text-[#1A3E38] text-xs font-mono font-medium border border-[#CFE4D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-3.5">
                  {project.description}
                </p>

                {/* Deliverables Callout Box */}
                <div className="mb-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
                  <div className="text-[0.6875rem] font-mono font-semibold text-[#1A3E38] uppercase tracking-wider mb-0.5">
                    Deliverables:
                  </div>
                  <div className="text-xs text-[#3E534D]">
                    {project.deliverablesText}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#E8E4D9] text-xs font-mono text-[#2A443D] hover:border-[#1A3E38]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-3.5 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui text-xs font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span>{project.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A3E5D4]" />
                  </a>
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#E7F3EF] hover:bg-[#D7EAE4] text-[#1A3E38] font-ui text-xs font-medium border border-[#CFE4D8] transition-colors cursor-pointer"
                  >
                    <span>Discuss Scope</span>
                  </button>
                </div>
                <span className="text-xs font-mono text-[#526E65]">
                  Interactive Viewport
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
