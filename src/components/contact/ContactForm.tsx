"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";

export default function ContactForm() {
  const [projectType, setProjectType] = useState<string>("Website");
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");
  const [budgetRange, setBudgetRange] = useState<string>("LKR 12k - 50k");
  const [isCustomBudget, setIsCustomBudget] = useState<boolean>(false);
  const [customMin, setCustomMin] = useState<string>("");
  const [customMax, setCustomMax] = useState<string>("");
  const [contactMethod, setContactMethod] = useState<string>("Email Discussion");
  const [agreePolicy, setAgreePolicy] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const projectTypes = [
    "Website",
    "Mobile App",
    "Web Application",
    "Custom Software",
    "AI / ML Systems",
    "UI/UX Design",
    "Other",
  ];

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

  const contactMethods = [
    "Email Discussion",
    "Google Meet Call",
    "Async WhatsApp",
  ];

  const [resultStatus, setResultStatus] = useState<{
    emailSent?: boolean;
    isConfigured?: boolean;
    message?: string;
  }>({});

  const effectiveBudget = isCustomBudget
    ? `${currency}: ${customMin ? customMin.trim() : "0"} - ${customMax ? customMax.trim() : "Custom"}`
    : `${currency}: ${budgetRange}`;

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
          company: formData.company,
          service: projectType,
          budget: effectiveBudget,
          details: formData.description,
          contactMethod,
          source: "Contact Page Dedicated Form",
        }),
      });
      const data = await res.json();
      setResultStatus(data);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/94787844914?text=${encodeURIComponent(
    `Hi Mohamed Nazik! Project inquiry from Contact Page:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nType: ${projectType}\nBudget: ${effectiveBudget}\nMethod: ${contactMethod}\n\nBrief:\n${formData.description}`
  )}`;

  return (
    <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-7 lg:p-8 shadow-xs">
      <div className="mb-6">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10221E] mb-1">
          Project Inquiry Details
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#3E534D]">
          Directly routed to Mohamed Nazik & our product engineering guild.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#E7F3EF] text-[#1A3E38] flex items-center justify-center mb-4 border border-[#CFE4D8]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#10221E] mb-2">
            Inquiry Dispatched Successfully
          </h3>
          <p className="font-body text-sm text-[#3E534D] max-w-[440px] mb-4">
            Thank you, <strong className="text-[#10221E]">{formData.name || "friend"}</strong>. Our lead architect will review your technical requirements and respond to{" "}
            <strong className="text-[#1A3E38]">{formData.email || "your email address"}</strong> within 48 hours.
          </p>

          {resultStatus.emailSent ? (
            <div className="mb-6 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
              ✓ Email delivered to hello.aspirev@gmail.com
            </div>
          ) : (
            <div className="mb-6 px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-mono text-[#526E65]">
              ✓ Inquiry recorded in data/inquiries.json
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-ui font-semibold text-xs transition-colors shadow-sm"
            >
              <span>Send Instant Copy via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-xs transition-all cursor-pointer shadow-xs"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-ui text-xs font-semibold text-[#10221E] mb-1.5">
                Full Name <span className="text-[#1A3E38]">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Alex Mercer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E0D5] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#526E65]/50 transition-colors"
              />
            </div>

            <div>
              <label className="block font-ui text-xs font-semibold text-[#10221E] mb-1.5">
                Work Email <span className="text-[#1A3E38]">*</span>
              </label>
              <input
                required
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E0D5] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#526E65]/50 transition-colors"
              />
            </div>
          </div>

          {/* Business or Organization */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-ui text-xs font-semibold text-[#10221E]">
                Business or Organization
              </label>
              <span className="text-[0.6875rem] text-[#526E65] font-ui">Optional</span>
            </div>
            <input
              type="text"
              placeholder="e.g. Acme Health or Early Stage Venture"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E0D5] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#526E65]/50 transition-colors"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block font-ui text-xs font-semibold text-[#10221E] mb-1.5">
              Project Type <span className="text-[#1A3E38]">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => {
                const isSelected = projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-3.5 py-1.5 rounded-full font-ui text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1A3E38] border-[#1A3E38] text-white shadow-xs"
                        : "bg-[#FAF9F5] border-[#E8E4D9] text-[#3E534D] hover:border-[#CFE4D8] hover:text-[#10221E] hover:bg-white"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Budget Range with LKR (Default) & USD Switcher + Custom Inputs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-ui text-xs font-semibold text-[#10221E]">
                Estimated Budget Range <span className="text-[#1A3E38]">*</span>
              </label>

              {/* Currency Selector Pill (LKR default, USD for international clients) */}
              <div className="inline-flex items-center p-0.5 rounded-full bg-[#FAF9F5] border border-[#DDD9CE] text-[0.6875rem] font-mono shadow-2xs">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("LKR");
                    if (!isCustomBudget) {
                      setBudgetRange("LKR 12k - 50k");
                    }
                  }}
                  className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
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
                      setBudgetRange("$150 - $300");
                    }
                  }}
                  className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
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
                    : !isCustomBudget && budgetRange === range;
                return (
                  <button
                    key={range}
                    type="button"
                    onClick={() => {
                      if (range === "Custom Range") {
                        setIsCustomBudget(true);
                      } else {
                        setIsCustomBudget(false);
                        setBudgetRange(range);
                      }
                    }}
                    className={`py-1.5 px-3 rounded-full font-ui text-xs font-medium border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#E7F3EF] border-[#CFE4D8] text-[#1A3E38] shadow-xs font-semibold ring-1 ring-[#1A3E38]/20"
                        : "bg-[#FAF9F5] border-[#E8E4D9] text-[#3E534D] hover:border-[#CFE4D8] hover:text-[#10221E] hover:bg-white"
                    }`}
                  >
                    {range === "Custom Range" ? "✎ Custom Range" : range}
                  </button>
                );
              })}
            </div>

            {/* Custom Range: Two input boxes [ From — To ] */}
            {isCustomBudget && (
              <div className="mt-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#DDD9CE] animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-ui font-semibold text-[#10221E]">
                    Enter Custom Budget ({currency === "LKR" ? "LKR රු" : "USD $"}):
                  </span>
                  <span className="text-[0.6875rem] font-mono text-[#526E65]">
                    [ Min &mdash; Max Range ]
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-[#526E65]">
                      {currency === "LKR" ? "රු" : "$"}
                    </span>
                    <input
                      type="text"
                      placeholder={currency === "LKR" ? "From (e.g. 15,000)" : "From (e.g. 250)"}
                      value={customMin}
                      onChange={(e) => setCustomMin(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-mono text-xs sm:text-sm text-[#10221E] placeholder:text-[#9AA8A3]"
                    />
                  </div>

                  <span className="text-[#526E65] font-bold text-sm px-1">&mdash;</span>

                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-[#526E65]">
                      {currency === "LKR" ? "රු" : "$"}
                    </span>
                    <input
                      type="text"
                      placeholder={currency === "LKR" ? "To (e.g. 45,000)" : "To (e.g. 500)"}
                      value={customMax}
                      onChange={(e) => setCustomMax(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-mono text-xs sm:text-sm text-[#10221E] placeholder:text-[#9AA8A3]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Description / Brief */}
          <div>
            <label className="block font-ui text-xs font-semibold text-[#10221E] mb-1.5">
              Project Description / Brief <span className="text-[#1A3E38]">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your objectives, current timeline, existing tech stack, and what success looks like..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E0D5] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#526E65]/50 resize-none transition-colors"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block font-ui text-xs font-semibold text-[#10221E] mb-1.5">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {contactMethods.map((method) => {
                const isSelected = contactMethod === method;
                return (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setContactMethod(method)}
                    className={`flex items-center gap-2 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#E7F3EF] border-[#CFE4D8] text-[#1A3E38] font-semibold"
                        : "bg-[#FAF9F5] border-[#E8E4D9] text-[#3E534D] hover:border-[#CFE4D8] hover:text-[#10221E] hover:bg-white"
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#1A3E38] bg-[#1A3E38]"
                          : "border-[#CFE4D8] bg-white"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                    <span className="font-ui text-xs font-medium">{method}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="privacy-policy"
              type="checkbox"
              checked={agreePolicy}
              onChange={(e) => setAgreePolicy(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-[#1A3E38] focus:ring-[#1A3E38]/20 border-[#E5E0D5]"
            />
            <label
              htmlFor="privacy-policy"
              className="font-body text-xs leading-relaxed text-[#526E65] cursor-pointer"
            >
              I agree to the privacy policy and consent to Aspirev reviewing project details under strict confidentiality.
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || !agreePolicy}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] disabled:opacity-50 text-white font-ui font-semibold text-sm shadow-[0_4px_16px_rgba(26,62,56,0.25)] hover:shadow-[0_8px_24px_rgba(26,62,56,0.35)] transition-all cursor-pointer"
            >
              {loading ? (
                <span>Dispatching Inquiry...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-[#526E65] font-ui text-center mt-2.5">
              <Lock className="w-3.5 h-3.5 text-[#1A3E38]" />
              <span>We respect your inbox. Strict confidentiality guaranteed.</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
