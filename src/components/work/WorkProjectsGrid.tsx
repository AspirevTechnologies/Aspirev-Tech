"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Lock, ExternalLink, Sparkles } from "lucide-react";

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
  isLive?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "aspirev-career",
    categoryKeys: ["all", "saas", "venture"],
    mockupBadge: "LIVE FLAGSHIP PLATFORM",
    mockupHeader: "www.aspirev.com // Career Intelligence OS",
    url: "https://www.aspirev.com",
    previewImage: "/aspirevown.webp",
    client: "Aspirev Technologies · Live Platform",
    tags: ["Live Platform", "BERT & LLM Models", "Career Roadmaps", "ATS Resume Engine", "In-Build Portfolio"],
    title: "Aspirev — AI Career Intelligence Platform",
    description:
      "Our live, company-developed flagship platform helping students and job seekers accelerate their careers. Engineered with BERT and LLMs, featuring automated AI Career Roadmaps, an interactive Job Application Tracker, deep Resume Analysis with ATS scoring, and an In-Build Portfolio Creator.",
    deliverablesText:
      "BERT & LLM Scoring Models, AI Career Roadmap Matrix, Kanban Application Tracker, ATS Resume Analyzer, In-Build Portfolio Creator",
    techStack: ["Next.js", "BERT / LLMs", "Python", "Tailwind CSS", "MongoDB / Cloud"],
    actionText: "Launch Live Platform (www.aspirev.com)",
    isLive: true,
  },
  {
    id: "eascca",
    categoryKeys: ["all", "hospitality", "client", "saas"],
    mockupBadge: "LIVE DEPLOYMENT · AI VISION",
    mockupHeader: "hotel360-mu.vercel.app // Wedding Sanctuary OS",
    url: "https://hotel360-mu.vercel.app/",
    previewImage: "/EASCCA.webp",
    client: "EASCCA Convention Centre",
    tags: ["Live Deployment", "Azure Computer Vision", "Sentiment Analysis", "A+ Performance"],
    title: "EASCCA Grand Convention Centre & Wedding OS",
    description:
      "Enterprise wedding sanctuary and convention management suite. Integrates Azure Computer Vision to analyze Instagram and Pinterest inspiration photos and automatically match the closest decor, stage themes, and hall setups from the database. Powered by NLP sentiment analysis on inquiries, 4 dedicated role-based dashboards (Admin, Manager, Decorator, Videographer), and DSA priority queue booking architecture that eliminates race conditions and double-bookings. Rigorously verified with A+ performance and enterprise security ratings.",
    deliverablesText:
      "Azure Vision Inspiration Matcher, 4 Dedicated Role Dashboards (Admin/Manager/Decorator/Videographer), DSA Concurrency Queue Engine, NLP Sentiment Intelligence Suite",
    techStack: ["Next.js", "Node.js", "MongoDB", "Azure Computer Vision", "Sentiment NLP", "DSA Queues"],
    actionText: "Visit Live Wedding OS",
    isLive: true,
  },
  {
    id: "airi-galle",
    categoryKeys: ["all", "hospitality", "client"],
    mockupBadge: "LIVE CLIENT DEPLOYMENT",
    mockupHeader: "airi-bunquet-hall.vercel.app // Galle Venue",
    url: "https://airi-bunquet-hall-d02pzwfkz-naziks-projects-8a3b46ec.vercel.app/",
    previewImage: "/Airi.webp",
    client: "Airi Banquet Hall, Galle",
    tags: ["Live Deployment", "Luxury Hospitality", "Web Platform"],
    title: "Airi Banquet Hall & Events — Galle",
    description:
      "A bespoke, high-conversion digital presence engineered for Galle's premier coastal wedding venue and banquet hall suites, featuring direct event booking inquiries and interactive hall showcase.",
    deliverablesText:
      "Custom Web Architecture, Interactive Event Spaces Gallery, Direct Booking Request Engine",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    actionText: "Visit Live Banquet Site",
    isLive: true,
  },
  {
    id: "dental-hub",
    categoryKeys: ["all", "healthcare", "client"],
    mockupBadge: "LIVE CLIENT DEPLOYMENT",
    mockupHeader: "the-dentalhub.vercel.app // Clinical System",
    url: "https://the-dentalhub-dkq4k4n82-naziks-projects-8a3b46ec.vercel.app/",
    previewImage: "/dentalhub.webp",
    client: "Dental Hub Healthcare",
    tags: ["Live Deployment", "Healthcare Portal", "Clinical Management"],
    title: "Dental Hub Multi-Speciality Clinic",
    description:
      "A clinical digital platform engineered for patient trust, specialist doctor appointment bookings, clear treatment education, and digital intake management.",
    deliverablesText:
      "Patient Booking Flow, Treatment Information Architecture, Clinical Brand Suite",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Twilio SMS"],
    actionText: "Visit Live Clinic Site",
    isLive: true,
  },
  {
    id: "dr-malinda",
    categoryKeys: ["all", "healthcare", "client"],
    mockupBadge: "LIVE CLIENT DEPLOYMENT",
    mockupHeader: "dr-malinda-dental.vercel.app // Dental Surgery",
    url: "https://dr-malinda-dental.vercel.app/",
    previewImage: "/malinda.webp",
    client: "Dr. Malinda Ekanayake Practice",
    tags: ["Live Deployment", "Surgical Practice", "Patient Intake"],
    title: "Dr. Malinda Ekanayake Dental Surgery",
    description:
      "Authoritative medical practice portal for premier dental surgery, patient education, oral care treatments, and digital consultation intake.",
    deliverablesText:
      "Custom Practice Website, Patient Testimonials Showcase, Intake Consultation Form",
    techStack: ["React", "Tailwind CSS", "Headless CMS", "Calendly API"],
    actionText: "Visit Live Dental Practice",
    isLive: true,
  },
  {
    id: "valetxpress",
    categoryKeys: ["all", "operations", "client"],
    mockupBadge: "LIVE CLIENT DEPLOYMENT",
    mockupHeader: "valetxpro.vercel.app // Mobile Valeting Notts",
    url: "https://valetxpro.vercel.app/",
    previewImage: "/valetxpress.webp",
    client: "ValetXpress Notts, UK",
    tags: ["Live Deployment", "Mobile Car Valeting", "Fleet Logistics", "Booking System"],
    title: "ValetXpress Notts — Mobile Car Valeting Across Nottingham",
    description:
      "High-velocity digital booking and service presentation application for mobile vehicle valeting, professional ceramic coating, paint correction, and automated customer booking intake across Nottingham.",
    deliverablesText:
      "Mobile Service Booking Engine, Dynamic Package Selector, Responsive Gallery, WhatsApp & Direct Lead Integration",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    actionText: "Visit Live Valeting Site",
    isLive: true,
  },
];

interface WorkProjectsGridProps {
  onOpenInquiry: () => void;
}

export default function WorkProjectsGrid({ onOpenInquiry }: WorkProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Works", count: 6 },
    { id: "venture", label: "Live Flagship", count: 1 },
    { id: "hospitality", label: "Hospitality & Venues", count: 2 },
    { id: "healthcare", label: "Healthcare & Clinics", count: 2 },
    { id: "operations", label: "Logistics & Mobility", count: 1 },
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
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${isActive
                  ? "bg-[#1A3E38] text-white shadow-xs"
                  : "bg-white text-[#3E534D] hover:text-[#10221E] border border-[#E5E0D5] hover:bg-[#E7F3EF]"
                  }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span
                    className={`ml-1 text-[0.6875rem] px-2 py-0.2 rounded-full font-mono font-semibold ${isActive ? "bg-white/20 text-white" : "bg-[#E7F3EF] text-[#1A3E38]"
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
                      <span className={`truncate ${project.isLive ? "text-[#A3E5D4] font-semibold" : "text-[#D2EAE3]/80"}`}>
                        {project.url}
                      </span>
                    </div>
                    {project.isLive ? (
                      <span className="text-[#10B981] font-semibold shrink-0 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Live Website · 200 OK
                      </span>
                    ) : (
                      <span className="text-[#A3E5D4]/80 font-medium shrink-0 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]" />
                        Recent Project · Production Build
                      </span>
                    )}
                  </div>

                  {/* Scrollable Landing Page Viewport Container */}
                  <div className="relative h-64 sm:h-72 overflow-y-auto overflow-x-hidden bg-[#05110E] scrollbar-thin scrollbar-thumb-[#1A3E38] hover:scrollbar-thumb-[#A3E5D4] select-none">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} Full Page Architecture Preview`}
                      className="w-full h-auto block"
                      loading="lazy"
                      decoding="async"
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
                  {project.isLive ? (
                    <>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui text-xs font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#A3E5D4]" />
                        <span>{project.actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A3E5D4]" />
                      </a>
                      <button
                        onClick={onOpenInquiry}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#E7F3EF] hover:bg-[#D7EAE4] text-[#1A3E38] font-ui text-xs font-medium border border-[#CFE4D8] transition-colors cursor-pointer"
                      >
                        <span>Discuss Scope</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={onOpenInquiry}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui text-xs font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <span>Inquire About Similar Build</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A3E5D4]" />
                      </button>
                      <span className="inline-flex items-center gap-1 text-[0.6875rem] font-mono text-[#526E65] px-2.5 py-1 rounded bg-[#F4F1EA] border border-[#E8E4D9]">
                        <Lock className="w-3 h-3 text-[#1A3E38]" /> Staging Architecture Preview
                      </span>
                    </>
                  )}
                </div>
                <span className="text-xs font-mono text-[#526E65]">
                  Scrollable Viewport Preview
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
