"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetailCard, {
  ServiceDetailData,
} from "@/components/services/ServiceDetailCard";
import EngagementModelSection from "@/components/services/EngagementModelSection";
import TransparentScopesBanner from "@/components/services/TransparentScopesBanner";
import PackagesSection from "@/components/PackagesSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

const servicesList: ServiceDetailData[] = [
  {
    id: "web-design",
    badgeNumber: "01 / WEB ARCHITECTURE",
    title: "Web Applications & High-Converting Websites",
    problemText:
      "Many business websites fail to clearly communicate value, struggle with slow load speeds, or lack responsive refinement across mobile devices.",
    deliverables: [
      "Custom responsive websites & landing pages",
      "Interactive booking engines & client portals",
      "Next.js & React architectures with sub-second loads",
      "Strict SEO & Core Web Vitals optimization (>95)",
      "Headless CMS & dynamic content integration",
    ],
    suitableForText:
      "Growing B2Bs, professional service firms, founders preparing to launch, and off-the-shelf and physical businesses migrating their presence digital.",
    buttonText: "Discuss Web Work",
    mockupType: "web",
  },
  {
    id: "product-design",
    badgeNumber: "02 / PRODUCT INTERFACES",
    title: "UI/UX & Mobile Interface Design",
    problemText:
      "Complex domain logic often results in cluttered interfaces, user confusion, low retention, and engineering rework due to unvalidated assumptions.",
    deliverables: [
      "User journey mapping & mobile touch wireframes",
      "Design systems & UI component kits",
      "UX audit & heuristic evaluation",
      "Interactive clickable prototypes & user testing",
      "Figma design handoff with token specs",
    ],
    suitableForText:
      "SaaS founders, mobile app teams needing scalable interface architecture, and early-stage ventures preparing for MVP build.",
    buttonText: "Discuss Product Design",
    mockupType: "design",
  },
  {
    id: "custom-software",
    badgeNumber: "03 / FULL STACK & MOBILE ENGINEERING",
    title: "Web Applications & Mobile Apps (iOS/Android)",
    problemText:
      "Off-the-shelf software rarely fits specialized operational workflows, leading to messy spreadsheets, data silos, and administrative bottlenecks.",
    deliverables: [
      "Bespoke full-stack web applications & portals",
      "Cross-platform mobile applications (React Native / iOS / Android)",
      "Role-based client dashboards & operational tools",
      "Relational database & API microservices",
      "Offline sync, push notifications & device APIs",
    ],
    suitableForText:
      "Operations teams, logistics & financial service providers, and businesses digitizing internal workflows, mobile touchpoints, and client-facing portals.",
    buttonText: "Discuss Custom Software & Mobile",
    mockupType: "software",
  },
  {
    id: "ai-solutions",
    badgeNumber: "04 / PRAGMATIC ML & AI AUTOMATION",
    title: "ML-Based Systems & Practical AI",
    problemText:
      "Businesses want to leverage AI but get overwhelmed by hype, unclear ROI, and brittle tools that do not reliably integrate into daily routines.",
    deliverables: [
      "Custom machine learning (ML) models & predictive scoring",
      "Deterministic LLM agents & Vector RAG pipelines",
      "Intelligent document parsing & automated triage",
      "AI-driven internal tools with zero hallucinations",
    ],
    suitableForText:
      "Companies with structured data or repetitive tasks, teams looking to eliminate manual information triage, and platforms adding contextual intelligence.",
    buttonText: "Discuss ML & AI Solutions",
    mockupType: "ai",
  },
];

export default function ServicesPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Navbar with active "Services" indicator */}
      <Navbar
        activePage="services"
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Services Hero Header & Jump Links */}
      <ServicesHero onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* 4 In-Depth Capability Showcase Cards */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          {servicesList.map((service) => (
            <ServiceDetailCard
              key={service.id}
              service={service}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* Engagement Model (01 Discovery, 02 Architecture, 03 Sprint Execution, 04 Deployment) */}
      <EngagementModelSection />

      {/* Website Development Packages (From Flyer: Landing Page, Business, Premium) */}
      <PackagesSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Transparent Scopes & Pricing Callout Banner */}
      <TransparentScopesBanner
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* High-Impact CTA Banner */}
      <CtaBannerSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}
