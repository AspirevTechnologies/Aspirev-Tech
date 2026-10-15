"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import { ShieldCheck, Lock, Mail, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A3E38]" />
            <span>[ Legal Readiness · PDPA & GDPR Framework ]</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] mb-3">
            Privacy Policy
          </h1>

          <p className="font-body text-sm sm:text-base text-[#4A5D57] max-w-[680px]">
            How Aspirev Technologies collects, protects, and handles information for our corporate website, client consultations, and business inquiries.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#526E65]">
            <span>Effective Date: 15 October 2026</span>
            <span>·</span>
            <span>Version: 1.0 (Founder Review Draft)</span>
            <span>·</span>
            <span>Contact: hello.aspirev@gmail.com</span>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 font-body text-sm sm:text-base text-[#3E534D] leading-relaxed space-y-8">
          {/* Executive Notice */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F5] border border-[#E5E0D5]">
            <h3 className="font-display font-bold text-base text-[#10221E] mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#1A3E38]" />
              <span>Operator & Legal Context</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5D57]">
              This Privacy Policy explains how <strong>Aspirev Technologies</strong> (&ldquo;Aspirev&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), operated by <strong>Mohamed Nazik</strong> in Sri Lanka, collects, uses, stores, and protects personal information when you visit this website, contact us, or request a service proposal. For privacy inquiries, reach our direct privacy channel at{" "}
              <a href="mailto:hello.aspirev@gmail.com" className="text-[#1A3E38] font-semibold underline">
                hello.aspirev@gmail.com
              </a>.
            </p>
          </div>

          {/* 1. Scope */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              1. Scope of this Policy
            </h2>
            <p className="mb-3">
              This policy governs personal data handled through our corporate website and general business discussions. 
            </p>
            <p className="p-4 rounded-xl bg-[#E7F3EF] border border-[#CFE4D8] text-xs sm:text-sm text-[#1A3E38]">
              <strong>Important Separation:</strong> The company-owned <em>Aspirev Career-Intelligence Product</em> operates under distinct product privacy requirements covering user resume processing, skill gap analysis, and application tracking. Specific client projects are governed by written service statements of work and confidential non-disclosure terms.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">Depending on how you interact with us, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Contact & Inquiry Data:</strong> Your name, email address, business name, phone/WhatsApp number, requested service, and message content.
              </li>
              <li>
                <strong>Project Scope Details:</strong> Business goals, timeline requirements, architectural preferences, and design assets voluntarily submitted for review.
              </li>
              <li>
                <strong>Technical Information:</strong> Standard server access logs including IP address, browser type, referring page, and security event timestamps.
              </li>
              <li>
                <strong>Communication Records:</strong> Written exchanges via email (hello.aspirev@gmail.com), WhatsApp, or scheduled video consultations.
              </li>
            </ul>
            <p className="mt-3 text-xs text-[#526E65] italic">
              *Please do not submit sensitive passwords, credit card numbers, or proprietary medical records through our public contact form.
            </p>
          </div>

          {/* 3. Purpose & Legal Basis */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p className="mb-3">We process your information solely for legitimate business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl border border-[#E5E0D5] bg-[#FAF9F5]">
                <div className="font-semibold text-xs text-[#10221E] mb-1">Proposal & Scoping</div>
                <div className="text-xs text-[#526E65]">To assess feasibility, estimate budgets, and prepare detailed statements of work.</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E0D5] bg-[#FAF9F5]">
                <div className="font-semibold text-xs text-[#10221E] mb-1">Project Execution</div>
                <div className="text-xs text-[#526E65]">To build, test, and hand over agreed websites, custom applications, and booking systems.</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E0D5] bg-[#FAF9F5]">
                <div className="font-semibold text-xs text-[#10221E] mb-1">Security & Integrity</div>
                <div className="text-xs text-[#526E65]">To prevent spam, secure web endpoints, and maintain system availability.</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#E5E0D5] bg-[#FAF9F5]">
                <div className="font-semibold text-xs text-[#10221E] mb-1">Legal & Accounting</div>
                <div className="text-xs text-[#526E65]">To issue invoices, comply with tax requirements, and document project milestones.</div>
              </div>
            </div>
          </div>

          {/* 4. Responsible AI & Data Minimization */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              4. Responsible AI & Data Minimization
            </h2>
            <p className="mb-3">
              We treat client intellectual property and data with strict discipline. When integrating AI or machine-learning capabilities for clients:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>We never use client proprietary data or private materials to train general commercial AI models.</li>
              <li>We select vendors offering explicit zero-retention or enterprise data-protection commitments.</li>
              <li>Human review is prioritized whenever algorithmic workflows interact with decision-critical processes.</li>
            </ul>
          </div>

          {/* 5. Sri Lanka PDPA & International Frameworks */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              5. Legal Compliance & International Transfers
            </h2>
            <p className="mb-3">
              Our data practices are informed by Sri Lanka&apos;s <em>Personal Data Protection Act, No. 9 of 2022</em> (amended by No. 22 of 2025; scheduled provisions from January 2027) and international privacy standards (including GDPR principles for European clients).
            </p>
            <p>
              We do not sell, rent, or trade your personal information. Any data transfers to cloud service providers (such as AWS, Vercel, or Google Workspace) are safeguarded under standard contractual privacy commitments.
            </p>
          </div>

          {/* 6. Retention & Rights */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-3">
              6. Data Retention & Your Rights
            </h2>
            <p className="mb-3">
              General inquiries that do not proceed to a commissioned project are safely deleted or anonymized within 12 months. Client project records are retained only as required by contractual warranty and local tax accounting legislation.
            </p>
            <p className="mb-3">
              You have the right to request access, correction, or deletion of your personal data held in our systems. To exercise these rights, please email us directly with the subject line <strong>&ldquo;Privacy Request&rdquo;</strong>.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-[#1A3E38] text-white">
            <h3 className="font-display font-bold text-lg mb-1">Direct Privacy Contact</h3>
            <p className="text-xs sm:text-sm text-[#D2EAE3] mb-3">
              For any questions regarding this policy or our data practices:
            </p>
            <div className="space-y-1 text-xs font-mono">
              <div>Email: <a href="mailto:hello.aspirev@gmail.com" className="text-[#A3E5D4] underline">hello.aspirev@gmail.com</a></div>
              <div>WhatsApp: +94 78 784 4914</div>
              <div>Operator: Mohamed Nazik, trading as Aspirev Technologies</div>
              <div>Location: Colombo, Sri Lanka</div>
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
