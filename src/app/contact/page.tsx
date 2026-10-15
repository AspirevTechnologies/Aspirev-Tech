"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebars from "@/components/contact/ContactSidebars";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      {/* Dark Navbar with active indicator on Contact */}
      <Navbar
        activePage="contact"
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Contact Hero Header with 4 Confidence Badges */}
      <ContactHero />

      {/* Main Contact Section: Form (Left) & Sidebars (Right) */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Interactive Project Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Next Steps, Studio Direct & Expectations */}
            <div className="lg:col-span-5">
              <ContactSidebars />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}
