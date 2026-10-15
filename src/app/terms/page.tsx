"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import { FileText, ArrowLeft, ShieldCheck, Scale, CheckCircle2, Clock } from "lucide-react";

export default function TermsPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#10221E] flex flex-col font-sans">
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#E7F3EF]/60 to-white border-b border-[#E8E4D9]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#1A3E38] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium mb-3">
            <Scale className="w-3.5 h-3.5 text-[#1A3E38]" />
            <span>[ Commercial Terms & Delivery Integrity ]</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] mb-3">
            Terms & Conditions
          </h1>

          <p className="font-body text-sm sm:text-base text-[#4A5D57] max-w-[680px]">
            General terms governing website access and the commercial standards governing client engineering projects with Aspirev Technologies.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#526E65]">
            <span>Effective Date: 15 October 2026</span>
            <span>·</span>
            <span>Governing Law: Sri Lanka</span>
            <span>·</span>
            <span>Operator: Mohamed Nazik</span>
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 font-body text-sm sm:text-base text-[#3E534D] leading-relaxed space-y-8">
          {/* Section 1: About the Website & Separate Project Agreements */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              1. Website Use & Separate Service Contracts
            </h2>
            <p className="mb-3">
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the <strong>Aspirev Technologies</strong> website. General content on this site is provided for informational and portfolio review purposes.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] text-xs sm:text-sm">
              <strong className="text-[#10221E] block mb-1">Contractual Precedence:</strong>
              Paid design and development engagements are governed by a separate written Statement of Work (SOW) or proposal accepted by both parties. In the event of any conflict between general website copy and an executed project agreement, the project agreement takes legal precedence.
            </div>
          </div>

          {/* Section 2: Intellectual Property & Code Ownership */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              2. Intellectual Property & Code Ownership
            </h2>
            <p className="mb-3">
              We uphold complete transparency regarding intellectual property (under the <em>Sri Lanka Intellectual Property Act No. 36 of 2003</em> and international IP norms):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Client Deliverables:</strong> Upon full payment of agreed milestone fees, 100% of bespoke client code, design layouts, and custom database structures are transferred and assigned to the client.
              </li>
              <li>
                <strong>Client Materials:</strong> The client retains complete ownership of all trademarks, brand assets, imagery, copy, and proprietary business data provided to us.
              </li>
              <li>
                <strong>Pre-Existing Frameworks:</strong> Aspirev retains ownership of pre-existing reusable utility scripts, internal dev tools, and starter templates. Third-party open-source components (e.g. Next.js, React, Tailwind) remain subject to their respective open-source licenses (e.g. MIT, Apache).
              </li>
            </ul>
          </div>

          {/* Section 3: Commercial Delivery & 3-Week Revision Guarantee */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              3. Project Execution & 3-Week Free Revision Window
            </h2>
            <p className="mb-3">
              Our website development packages (Landing Page, Business Website, Premium Website) follow standard milestone-based timelines:
            </p>
            <div className="space-y-3 mb-4">
              <div className="p-3.5 rounded-xl border border-[#CFE4D8] bg-[#E7F3EF]">
                <div className="font-display font-bold text-sm text-[#1A3E38] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3E38]" />
                  <span>3-Week Free Revision Guarantee</span>
                </div>
                <div className="text-xs text-[#3E534D]">
                  Following final handover and live deployment of your website, you are entitled to request revisions and styling refinements on existing agreed pages free of charge for 3 weeks. New out-of-scope pages or architectural overhauls are estimated transparently.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[#E5E0D5] bg-[#FAF9F5] text-xs">
                <span className="font-semibold text-[#10221E] block mb-0.5">Estimated Turnaround Windows:</span>
                Landing Pages (5–7 working days), Business Websites (7–12 working days), Premium Platforms (10–18 working days). Timelines commence upon receipt of initial deposit and required client assets.
              </div>
            </div>
          </div>

          {/* Section 4: Hosting, Domains & Third-Party Dependencies */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              4. Hosting, Domains & Third-Party Services
            </h2>
            <p className="mb-3">
              Clients are assisted in registering and owning their own domains (e.g. via Cloudflare, Namecheap) and hosting infrastructure (e.g. Vercel, AWS) so you maintain perpetual control over your digital assets.
            </p>
            <p>
              Aspirev is not liable for disruptions, billing disputes, or downtime caused solely by external third-party service providers (such as domain registrars, hosting platforms, payment gateways, or third-party AI APIs).
            </p>
          </div>

          {/* Section 5: Engineering Quality Proofs */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              5. Engineering Discipline & Verification Proofs
            </h2>
            <p className="mb-3">
              Unlike teams that rely on uninspected or blind &ldquo;vibe coding&rdquo; without verification, Aspirev guarantees that every delivered software system undergoes structured engineering quality assurance:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Lighthouse Core Web Vitals audit verification for speed and mobile responsiveness.</li>
              <li>Cross-browser testing (Chrome, Safari, Firefox, Edge) across mobile and desktop.</li>
              <li>HTTPS / SSL certificate validation and secure contact form anti-spam protection.</li>
            </ul>
          </div>

          {/* Section 6: Acceptable Use & Governing Law */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              6. Acceptable Use & Governing Jurisdiction
            </h2>
            <p className="mb-3">
              Visitors may not attempt unauthorized access, probe endpoints, scrape content unlawfully, or transmit malicious code through this website.
            </p>
            <p>
              These terms are governed by the laws of <strong>Sri Lanka</strong>, including the <em>Electronic Transactions Act No. 19 of 2006</em>, without prejudice to mandatory statutory consumer protections that may apply in international jurisdictions.
            </p>
          </div>

          {/* Direct Contact */}
          <div className="p-6 rounded-2xl bg-[#1A3E38] text-white">
            <h3 className="font-display font-bold text-lg mb-1">Commercial & Legal Inquiries</h3>
            <p className="text-xs sm:text-sm text-[#D2EAE3] mb-3">
              For contract clarifications, statement of work proposals, or custom enterprise agreements:
            </p>
            <div className="space-y-1 text-xs font-mono">
              <div>Email: <a href="mailto:hello.aspirev@gmail.com" className="text-[#A3E5D4] underline">hello.aspirev@gmail.com</a></div>
              <div>WhatsApp: +94 78 784 4914</div>
              <div>Founder & Lead Architect: Mohamed Nazik</div>
              <div>Brand: Aspirev Technologies · Colombo, Sri Lanka</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}
