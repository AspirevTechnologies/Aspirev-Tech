"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import OriginMissionSection from "@/components/about/OriginMissionSection";
import CraftStandardsSection from "@/components/about/CraftStandardsSection";
import FounderSection from "@/components/about/FounderSection";
import ProcessSection from "@/components/ProcessSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

export default function AboutPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Navbar with active "About" indicator */}
      <Navbar
        activePage="about"
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Hero Section */}
      <AboutHero />

      {/* Origin & Mission with Dual-Engine Model Card */}
      <OriginMissionSection />

      {/* Core Values & Craft Standards (5/6 Principles) */}
      <CraftStandardsSection />

      {/* Founder-Led & Hands-On Leadership */}
      <FounderSection />

      {/* Collaboration Methodology (01 Discovery, 02 Architecture, 03 Sprint, 04 Handover) */}
      <ProcessSection />

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
