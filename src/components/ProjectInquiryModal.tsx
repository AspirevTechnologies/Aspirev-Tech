"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
}: ProjectInquiryModalProps) {
  const [selectedService, setSelectedService] = useState("website");
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");
  const [selectedBudget, setSelectedBudget] = useState("LKR 12k - 50k");
  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [customMin, setCustomMin] = useState("");
  const [customMax, setCustomMax] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const lkrBudgetRanges = [
    "LKR 8k - 12k",
    "LKR 12k - 50k",
    "LKR 50k - 80k",
    "LKR 80k+",
    "Custom Range",
  ];

  const usdBudgetRanges = [
    "$80 - $100",
    "$100 - $150",
    "$150 - $300",
    "$300 - $600",
    "$600 - $1,000",
    "$1,000+",
    "Custom Range",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeline: "1-2 months",
    details: "",
  });

  const [resultStatus, setResultStatus] = useState<{
    emailSent?: boolean;
    isConfigured?: boolean;
    message?: string;
  }>({});

  if (!isOpen) return null;

  const effectiveBudget = isCustomBudget
    ? `${currency}: ${customMin ? customMin.trim() : "0"} - ${customMax ? customMax.trim() : "Custom"}`
    : `${currency}: ${selectedBudget}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedService,
          budget: effectiveBudget,
          details: formData.details,
          source: "Project Inquiry Modal",
        }),
      });
      const data = await res.json();
      setResultStatus(data);
      setSubmitted(true);
    } catch (err) {
      console.error("Modal submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappInquiryUrl = `https://wa.me/94787844914?text=${encodeURIComponent(
    `Hi Mohamed Nazik! Project Inquiry from Aspirev Modal:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${selectedService}\nBudget: ${effectiveBudget}\nDetails: ${formData.details}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A221D]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-[#E5E0D5] shadow-2xl z-10 my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E5E0D5] bg-[#FAF9F5]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-[0.6875rem] font-mono font-medium tracking-wide mb-1.5">
              <Sparkles className="w-3 h-3 text-[#1A3E38]" />
              <span>[ Project Discovery · Studio Intake ]</span>
            </div>
            <h3 className="font-display font-bold text-[1.25rem] text-[#10221E]">
              Start a Project with Aspirev
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#4A5D57] hover:text-[#10221E] hover:bg-[#E7F3EF] border border-transparent hover:border-[#CFE4D8] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3E38]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-[1.5rem] text-[#10221E] mb-2">
              Message Received
            </h4>
            <p className="font-body text-[0.9375rem] text-[#4A5D57] max-w-[420px] mb-4">
              Thank you, <strong className="text-[#10221E]">{formData.name || "partner"}</strong>. Our lead architect will review your project requirements and respond to{" "}
              <strong className="text-[#1A3E38]">{formData.email || "your email"}</strong> within 24 hours.
            </p>

            {resultStatus.emailSent ? (
              <div className="mb-6 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
                ✓ Dispatched to hello.aspirev@gmail.com
              </div>
            ) : (
              <div className="mb-6 px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-mono text-[#526E65]">
                ✓ Recorded in data/inquiries.json
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-ui font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Send via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#1A3E38] text-white font-ui font-semibold text-xs hover:bg-[#13332E] transition-colors cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Service Scope selector */}
            <div>
              <label className="block font-ui text-[0.8125rem] font-semibold text-[#10221E] mb-2">
                What are you looking to build?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: "website", label: "Website" },
                  { id: "mobile-apps", label: "Mobile App" },
                  { id: "web-dev", label: "Web Application" },
                  { id: "software", label: "Custom Software" },
                  { id: "ai-solutions", label: "AI / ML Systems" },
                  { id: "ui-ux", label: "UI/UX Design" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedService(item.label)}
                    className={`px-3 py-2 rounded-xl text-[0.75rem] font-ui font-medium border text-center transition-all cursor-pointer ${
                      selectedService === item.label
                        ? "bg-[#1A3E38] border-[#1A3E38] text-white shadow-xs font-semibold"
                        : "bg-white border-[#E5E0D5] text-[#3E534D] hover:bg-[#F8FAF9] hover:border-[#CFE4D8]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Approximate Budget with Currency Switcher & Custom Range */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-ui text-[0.8125rem] font-semibold text-[#10221E]">
                  Estimated Project Budget
                </label>
                <div className="inline-flex items-center p-0.5 rounded-full bg-[#FAF9F5] border border-[#DDD9CE] text-[0.6875rem] font-mono shadow-2xs">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency("LKR");
                      if (!isCustomBudget) {
                        setSelectedBudget("LKR 12k - 50k");
                      }
                    }}
                    className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                      currency === "LKR"
                        ? "bg-[#1A3E38] text-white shadow-2xs"
                        : "text-[#526E65] hover:text-[#10221E]"
                    }`}
                  >
                    LKR (රු)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency("USD");
                      if (!isCustomBudget) {
                        setSelectedBudget("$150 - $300");
                      }
                    }}
                    className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                      currency === "USD"
                        ? "bg-[#1A3E38] text-white shadow-2xs"
                        : "text-[#526E65] hover:text-[#10221E]"
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {(currency === "LKR" ? lkrBudgetRanges : usdBudgetRanges).map((range) => {
                  const isSelected =
                    range === "Custom Range"
                      ? isCustomBudget
                      : !isCustomBudget && selectedBudget === range;
                  return (
                    <button
                      key={range}
                      type="button"
                      onClick={() => {
                        if (range === "Custom Range") {
                          setIsCustomBudget(true);
                        } else {
                          setIsCustomBudget(false);
                          setSelectedBudget(range);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-full text-[0.75rem] font-ui font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#1A3E38] border-[#1A3E38] text-white shadow-xs font-semibold"
                          : "bg-white border-[#E5E0D5] text-[#3E534D] hover:bg-[#F8FAF9] hover:border-[#CFE4D8]"
                      }`}
                    >
                      {range === "Custom Range" ? "✎ Custom Range" : range}
                    </button>
                  );
                })}
              </div>

              {/* Custom Range: Two inputs [ Min — Max ] */}
              {isCustomBudget && (
                <div className="mt-2.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#DDD9CE] animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[0.75rem] font-ui font-semibold text-[#10221E]">
                      Enter Custom Budget ({currency === "LKR" ? "LKR රු" : "USD $"}):
                    </span>
                    <span className="text-[0.625rem] font-mono text-[#526E65]">
                      [ Min &mdash; Max Range ]
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-[#526E65]">
                        {currency === "LKR" ? "රු" : "$"}
                      </span>
                      <input
                        type="text"
                        placeholder={currency === "LKR" ? "From (e.g. 15,000)" : "From (e.g. 250)"}
                        value={customMin}
                        onChange={(e) => setCustomMin(e.target.value)}
                        className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-mono text-xs text-[#10221E] placeholder:text-[#9AA8A3]"
                      />
                    </div>

                    <span className="text-[#526E65] font-bold text-xs px-0.5">&mdash;</span>

                    <div className="relative flex-1">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-[#526E65]">
                        {currency === "LKR" ? "රු" : "$"}
                      </span>
                      <input
                        type="text"
                        placeholder={currency === "LKR" ? "To (e.g. 45,000)" : "To (e.g. 500)"}
                        value={customMax}
                        onChange={(e) => setCustomMax(e.target.value)}
                        className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-mono text-xs text-[#10221E] placeholder:text-[#9AA8A3]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Inputs: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-ui text-[0.8125rem] font-medium text-[#10221E] mb-1">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-3 focus:ring-[#1A3E38]/15 font-body text-[0.875rem] text-[#10221E]"
                />
              </div>

              <div>
                <label className="block font-ui text-[0.8125rem] font-medium text-[#10221E] mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-3 focus:ring-[#1A3E38]/15 font-body text-[0.875rem] text-[#10221E]"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block font-ui text-[0.8125rem] font-medium text-[#10221E] mb-1">
                Tell us about your project or goals
              </label>
              <textarea
                rows={3}
                placeholder="Give us a brief overview of your product, timelines, and primary challenges..."
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-3 focus:ring-[#1A3E38]/15 font-body text-[0.875rem] text-[#10221E] resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E0D5]">
              <div className="flex flex-col">
                <span className="text-[0.75rem] font-mono text-[#526E65]">
                  [ Strict confidentiality · Under NDA ]
                </span>
                <a
                  href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.6875rem] font-mono text-emerald-700 hover:underline mt-0.5"
                >
                  Or WhatsApp directly: +94 78 784 4914 →
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-[0.875rem] shadow-sm transition-all disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3E38]"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
