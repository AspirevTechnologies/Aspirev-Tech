"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Layout,
  Terminal,
  Sparkles,
  Smartphone,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  deliverables: string[];
  techStack: string[];
}

const services: ServiceItem[] = [
  {
    id: "web-dev",
    icon: <Globe className="w-5 h-5 text-white" />,
    title: "Web Applications & Platforms",
    description:
      "Modern full-stack web applications, custom booking systems, client portals, and high-conversion landing pages built for speed and sales.",
    actionText: "Explore Web Solutions",
    deliverables: [
      "Custom Full-Stack Web Applications & Portals",
      "Interactive Booking & Payment Gateways",
      "High-Converting Landing Pages & Business Sites",
      "Sub-Second Core Web Vitals (>95) & Edge CDN",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    id: "mobile-apps",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    title: "Mobile Applications (iOS & Android)",
    description:
      "Cross-platform and native-feel mobile applications designed for fluid 60fps performance, offline data synchronization, and intuitive UX.",
    actionText: "Explore Mobile Apps",
    deliverables: [
      "Cross-Platform iOS & Android Apps (React Native / Expo)",
      "Offline-First Data Sync & Local Storage",
      "Push Notifications & Native Device Integrations",
      "App Store & Google Play Store Submission",
    ],
    techStack: ["React Native", "Expo", "iOS / Android", "Mobile APIs"],
  },
  {
    id: "software",
    icon: <Terminal className="w-5 h-5 text-white" />,
    title: "Custom Software & Cloud Systems",
    description:
      "Scalable backend architectures, admin management dashboards, multi-tenant workflows, and secure API microservices.",
    actionText: "Explore Custom Software",
    deliverables: [
      "Multi-tenant SaaS & Internal Operations Dashboards",
      "Role-Based Access Control (RBAC) & Enterprise Security",
      "High-Reliability REST & WebSocket Services",
      "PostgreSQL, Redis & Cloud Edge Infrastructure",
    ],
    techStack: ["Node.js", "PostgreSQL", "Docker", "AWS / Vercel"],
  },
  {
    id: "ml-solutions",
    icon: <Cpu className="w-5 h-5 text-white" />,
    title: "ML-Based Systems & Practical AI",
    description:
      "Custom machine learning models, predictive scoring, intelligent data extraction, and deterministic LLM agents that solve real operational bottlenecks.",
    actionText: "Explore ML & AI Systems",
    deliverables: [
      "Custom Machine Learning (ML) Pipelines & Scoring",
      "Predictive Analytics & Classification Models",
      "Deterministic LLM Agents & Vector RAG Pipelines",
      "Automated Document Parsing & NLP Intelligence",
    ],
    techStack: ["Python / PyTorch", "Scikit-Learn", "FastAPI", "Vector DBs / RAG"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-[#1A3E38] via-[#22564C] to-[#347A6D] text-white relative overflow-hidden">
      {/* Background Subtle Organic Sage Curves & Radial Glows (Solvance Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(163, 229, 212, 0.25) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(163, 229, 212, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Decorative Organic Arcs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="700" r="450" stroke="#A3E5D4" strokeWidth="1.5" />
        <circle cx="600" cy="700" r="580" stroke="#A3E5D4" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Centered with Bracketed Eyebrow Tag */}
        <div className="max-w-[720px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-[#A3E5D4] text-xs font-mono font-medium tracking-wide mb-4 shadow-2xs backdrop-blur-xs">
            <span>[ Quick Access Categories ]</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-[-0.03em] text-white mb-4">
            Find What You Need Faster
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed text-[#D2EAE3] max-w-[580px] mx-auto font-normal">
            Whether launching a bespoke digital flagship or deploying fault-tolerant software, explore our primary capability domains.
          </p>
        </div>

        {/* 2x2 Solvance-Style Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-white text-[#10221E] rounded-3xl p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              <div>
                {/* Circular Dark Green Icon Badge (Exact Solvance Style) */}
                <div className="w-12 h-12 rounded-full bg-[#1A3E38] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-[1.35rem] text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-[#4A5D57] mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables Pill List */}
                <div className="space-y-2 mb-6 pt-1">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#2A443D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3E38] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#DDD9CE] hover:border-[#1A3E38]/30 text-[0.6875rem] font-mono text-[#526E65] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Button: Forest Green Pill CTA (Solvance Style) */}
              <div className="pt-4 border-t border-[#EFECE6]">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-medium text-xs sm:text-sm shadow-sm hover:shadow transition-all duration-150 group/btn cursor-pointer"
                >
                  <span>{service.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
