"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import VentureShowcaseSection from "@/components/VentureShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import ReachOutSection from "@/components/ReachOutSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Hero Section with Interactive Telemetry Console */}
      <HeroSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Featured Work / Projects Showcase */}
      <FeaturedWorkSection />

      {/* Capabilities & What We Do */}
      <ServicesSection />

      {/* Website Development Packages (From Flyer: Landing, Business, Premium) */}
      <PackagesSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Flagship Venture Stage: Meet Aspirev */}
      <VentureShowcaseSection />

      {/* Our 4-Stage Methodological Process */}
      <ProcessSection />

      {/* About the Studio / Philosophy */}
      <AboutSection />

      {/* Ideas & Perspectives / Thought Leadership */}
      <InsightsSection />

      {/* Interactive Mad-Libs Intake Section (Solvance Style) */}
      <ReachOutSection />

      {/* High-Impact Curved CTA Banner */}
      <CtaBannerSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Site Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}
