"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/products/ProductsHero";
import FlagshipPlatformSection from "@/components/products/FlagshipPlatformSection";
import EngineeredCapabilitiesSection from "@/components/products/EngineeredCapabilitiesSection";
import WhyWeBuildSection from "@/components/products/WhyWeBuildSection";
import StudioPipelineSection from "@/components/products/StudioPipelineSection";
import ProductsCtaSection from "@/components/products/ProductsCtaSection";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

export default function ProductsPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Navbar with active "Products" indicator */}
      <Navbar
        activePage="products"
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Hero Section */}
      <ProductsHero onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Flagship Venture Platform: Meet Aspirev */}
      <FlagshipPlatformSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* 6 Engineered Platform Capabilities */}
      <EngineeredCapabilitiesSection
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Internal Lab Philosophy: Why We Build Our Own Products */}
      <WhyWeBuildSection />

      {/* Studio Pipeline & R&D Explorations */}
      <StudioPipelineSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Joint Venture & Project CTA Banner */}
      <ProductsCtaSection onOpenInquiry={() => setInquiryModalOpen(true)} />

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
