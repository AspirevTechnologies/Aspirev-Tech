"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import WorkHero from "@/components/work/WorkHero";
import WorkProjectsGrid from "@/components/work/WorkProjectsGrid";
import WorkMethodologySection from "@/components/work/WorkMethodologySection";
import LiveFoundationAssetsBanner from "@/components/work/LiveFoundationAssetsBanner";
import PortfolioIntegrityBanner from "@/components/work/PortfolioIntegrityBanner";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

export default function WorkPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Navbar with active "Work" indicator */}
      <Navbar
        activePage="work"
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Hero Section */}
      <WorkHero />

      {/* 6 Selected Projects Grid with Multi-Filter System */}
      <WorkProjectsGrid onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Execution Methodology Section (01 Context, 02 Direction, 03 Verified) */}
      <WorkMethodologySection />

      {/* System Artifacts Dark Stage */}
      <LiveFoundationAssetsBanner />

      {/* Portfolio Transparency & Integrity Policy */}
      <PortfolioIntegrityBanner
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
