"use client";

import React from "react";
import { Check, Clock, Sparkles, MessageCircle, ShieldCheck, Zap, Award, TrendingUp, ArrowRight } from "lucide-react";

interface PackagePlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  deliveryDays: string;
  description: string;
  features: string[];
  idealFor: string;
  whatsappMessage: string;
}

const packages: PackagePlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    tagline: "One Page. Big Impact.",
    deliveryDays: "5 – 7 Working Days",
    description:
      "A simple and highly effective one-page website designed to introduce your business, build instant trust, and attract paying customers.",
    idealFor: "Local businesses, clinics, event spaces, single-product launches & campaign promos",
    whatsappMessage: "Hi Aspirev! I am interested in the Landing Page Package (5-7 days delivery).",
    features: [
      "Custom-designed, responsive one-page website",
      "Business introduction & key service highlights",
      "Interactive photo & project gallery",
      "Contact details & Google Maps location embed",
      "Direct WhatsApp contact button integration",
      "Customer inquiry & lead capture form",
      "Basic on-page SEO (meta titles, keywords, headings)",
      "Up to 2 rounds of design revisions",
      "Production deployment & SSL security configuration",
    ],
  },
  {
    id: "business-website",
    name: "Business Website",
    tagline: "More Pages. More Possibilities.",
    badge: "★ Recommended",
    isPopular: true,
    deliveryDays: "7 – 12 Working Days",
    description:
      "A complete multi-page website to showcase your full service menu, team, case studies, and brand story. Perfect for growing businesses wanting a dominant online presence.",
    idealFor: "Established companies, multi-specialty practices, corporate service providers & hospitality",
    whatsappMessage: "Hi Aspirev! I would like to discuss the Business Website Package (up to 5 pages).",
    features: [
      "Up to 5 custom pages (Home, About, Services, Gallery, Contact)",
      "Bespoke layout design & brand identity integration",
      "Dedicated deep-dive service description pages",
      "Enhanced lead inquiry & qualification form",
      "Social media feeds & channel integrations",
      "Full on-page SEO (titles, descriptions, structured schema)",
      "Basic analytics setup (Google Analytics / Telemetry)",
      "Up to 3 rounds of design & content revisions",
      "Performance optimization for sub-second mobile loads",
    ],
  },
  {
    id: "premium-website",
    name: "Premium Website",
    tagline: "More Features. Greater Impact.",
    badge: "Enterprise Grade",
    deliveryDays: "10 – 18 Working Days",
    description:
      "A tailor-engineered web platform with custom functionality, richer interactions, and bespoke architecture engineered for market leadership.",
    idealFor: "High-growth startups, luxury brands, complex service businesses & international clients",
    whatsappMessage: "Hi Aspirev! I want to explore the Premium Website Package with advanced features.",
    features: [
      "Up to 8 custom architected pages",
      "Advanced custom UI/UX design & design system tokens",
      "Interactive filtering galleries & multi-category service portals",
      "Custom micro-interactions & fluid animations",
      "Multi-step inquiry workflows & appointment booking logic",
      "High-velocity image & asset CDN optimization (100 Core Web Vitals)",
      "Complete technical SEO, sitemap, OpenGraph & analytics setup",
      "Up to 3 rounds of comprehensive revisions",
      "Priority 30-day post-launch technical hypercare",
    ],
  },
];

interface PackagesSectionProps {
  onOpenInquiry?: () => void;
}

export default function PackagesSection({ onOpenInquiry }: PackagesSectionProps) {
  const whatsappNumber = "94787844914";

  return (
    <section id="packages" className="py-16 md:py-24 bg-white border-b border-[#E8E4D9] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(26, 62, 56, 0.05) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(26, 62, 56, 0.03) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#1A3E38]" />
            <span>[ Website Development Packages · Your Vision, Our Code ]</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#10221E] mb-4">
            Choose the perfect plan for your business.
          </h2>

          <p className="font-body text-sm sm:text-base leading-relaxed text-[#3E534D]">
            From simple, high-converting business landing pages to powerful web applications. We build modern, fast, and scalable solutions that help you grow online - tailored for both local Sri Lankan enterprises and international clients.
          </p>
        </div>

        {/* 3-Column Pricing / Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-12">
          {packages.map((pkg) => {
            const isFeatured = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${isFeatured
                  ? "bg-[#1A3E38] text-white p-7 sm:p-8 shadow-[0_16px_40px_rgba(26,62,56,0.28)] border-2 border-[#2D6B60] lg:-translate-y-2"
                  : "bg-white text-[#10221E] p-7 sm:p-8 border border-[#E5E0D5] hover:border-[#1A3E38]/40 shadow-xs hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                {/* Header Tag / Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${isFeatured
                        ? "bg-[#EBE6D8] text-[#1A3E38]"
                        : "bg-[#E7F3EF] text-[#1A3E38] border border-[#CFE4D8]"
                        }`}
                    >
                      {pkg.badge || "Core Package"}
                    </span>

                    {/* Timeline Badge */}
                    <div
                      className={`flex items-center gap-1.5 text-xs font-mono ${isFeatured ? "text-[#D2EAE3]" : "text-[#526E65]"
                        }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.deliveryDays}</span>
                    </div>
                  </div>

                  {/* Package Title & Tagline */}
                  <h3
                    className={`font-display font-bold text-2xl sm:text-3xl tracking-tight mb-1 ${isFeatured ? "text-white" : "text-[#10221E]"
                      }`}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    className={`font-display text-sm font-semibold mb-4 ${isFeatured ? "text-[#A3E5D4]" : "text-[#1A3E38]"
                      }`}
                  >
                    {pkg.tagline}
                  </div>

                  {/* Description */}
                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 pb-6 border-b ${isFeatured
                      ? "text-[#D2EAE3] border-white/15"
                      : "text-[#4A5D57] border-[#EFECE6]"
                      }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Ideal For Callout */}
                  <div
                    className={`p-3 rounded-2xl text-xs font-ui mb-6 ${isFeatured
                      ? "bg-[#13332E] border border-[#2D6B60] text-[#D2EAE3]"
                      : "bg-[#FAF9F5] border border-[#E8E4D9] text-[#4A5D57]"
                      }`}
                  >
                    <span className="font-semibold block mb-0.5 text-[#10B981]">
                      Best suited for:
                    </span>
                    <span>{pkg.idealFor}</span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div
                      className={`text-xs font-mono uppercase tracking-wider font-semibold ${isFeatured ? "text-[#A3E5D4]" : "text-[#1A3E38]"
                        }`}
                    >
                      What&apos;s Included:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isFeatured
                            ? "bg-[#2D6B60] text-[#A3E5D4]"
                            : "bg-[#E7F3EF] text-[#1A3E38] border border-[#CFE4D8]"
                            }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span
                          className={`font-body text-xs sm:text-sm leading-relaxed ${isFeatured ? "text-white/95" : "text-[#3E534D]"
                            }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-dashed space-y-2.5">
                  {/* WhatsApp Quick Link */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      pkg.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-ui font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer ${isFeatured
                      ? "bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-[#1A3E38] hover:bg-[#13332E] text-white hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  {/* Project Inquiry Modal Trigger */}
                  {onOpenInquiry && (
                    <button
                      onClick={onOpenInquiry}
                      className={`w-full py-2 text-center text-xs font-ui font-semibold transition-colors cursor-pointer ${isFeatured
                        ? "text-[#D2EAE3] hover:text-white"
                        : "text-[#526E65] hover:text-[#10221E]"
                        }`}
                    >
                      Or submit written requirements →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* FREE REVISIONS GUARANTEE BANNER (From Flyer)                             */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1A3E38] via-[#22564C] to-[#1A3E38] p-6 sm:p-8 text-white shadow-lg border border-[#2D6B60] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBE6D8] text-[#1A3E38] flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-6 h-6 text-[#1A3E38]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#13332E] text-[#A3E5D4] text-[0.6875rem] font-mono font-medium mb-1 border border-[#2D6B60]">
                  <span>100% Client Assurance Guarantee</span>
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Free Revisions for 3 Weeks!
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#D2EAE3] leading-relaxed mt-1 max-w-[620px]">
                  After your website is delivered, you can request changes to existing pages for free within 3 weeks. Your satisfaction and business growth are our highest priority.
                </p>
                <div className="text-[0.6875rem] font-mono text-white/60 mt-1">
                  *Applies to existing page content, styling & adjustments. Major scope changes or new pages quoted transparently.
                </div>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] font-ui font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>+94 78 784 4914</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Trust Value Pillars Strip (From Flyer Footer) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <div className="w-9 h-9 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center shrink-0 shadow-2xs">
              <Zap className="w-4 h-4 text-[#1A3E38]" />
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-[#10221E]">Fast Delivery</div>
              <div className="text-[0.6875rem] text-[#526E65]">On-schedule turnaround</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <div className="w-9 h-9 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#1A3E38]" />
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-[#10221E]">Quality Work</div>
              <div className="text-[0.6875rem] text-[#526E65]">Clean, production-grade code</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <div className="w-9 h-9 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-4 h-4 text-[#1A3E38]" />
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-[#10221E]">Client Satisfaction</div>
              <div className="text-[0.6875rem] text-[#526E65]">3-week free revision window</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4D9]">
            <div className="w-9 h-9 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center shrink-0 shadow-2xs">
              <TrendingUp className="w-4 h-4 text-[#1A3E38]" />
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-[#10221E]">Your Growth</div>
              <div className="text-[0.6875rem] text-[#526E65]">Our absolute priority</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
