"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, ArrowRight, MessageSquare } from "lucide-react";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    city: "",
    details: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultStatus, setResultStatus] = useState<{
    emailSent?: boolean;
    isConfigured?: boolean;
    message?: string;
  }>({});

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
          job: formData.job,
          city: formData.city,
          details: formData.details,
          source: "Interactive Mad-Libs Intake",
        }),
      });
      const data = await res.json();
      setResultStatus(data);
      setSubmitted(true);
    } catch (err) {
      console.error("Inquiry submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/94787844914?text=${encodeURIComponent(
    `Hi Mohamed Nazik! I just submitted an inquiry on the Aspirev website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.job || "N/A"}\nLocation: ${formData.city || "N/A"}\nMessage: ${formData.details}`
  )}`;

  const directMailtoUrl = `mailto:hello.aspirev@gmail.com?subject=${encodeURIComponent(
    `[Inquiry] ${formData.name} - Project Discussion`
  )}&body=${encodeURIComponent(
    `Hi Mohamed,\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.job || "N/A"}\nLocation: ${formData.city || "N/A"}\n\nProject Details:\n${formData.details}`
  )}`;

  return (
    <section id="contact-inline" className="py-16 md:py-24 bg-white border-b border-[#EFECE6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3E38]" />
              <span>[ Contact Us ]</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.15] tracking-[-0.03em] text-[#10221E] mb-4">
              Reach Out Your Way
            </h2>

            <p className="font-body text-base leading-relaxed text-[#4A5D57] mb-8 max-w-[420px]">
              Have more specific questions or a project scope ready? Fill out the interactive intake or schedule a discovery conversation directly.
            </p>

            {/* Direct contact pills */}
            <div className="space-y-3 w-full">
              <a
                href="mailto:hello.aspirev@gmail.com"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#E7F3EF] border border-[#E5E0D5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#DDD9CE] flex items-center justify-center text-[#1A3E38]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#526E65]">Direct Email</div>
                    <div className="font-ui font-semibold text-sm text-[#10221E] group-hover:text-[#1A3E38]">
                      hello.aspirev@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526E65] group-hover:translate-x-1 group-hover:text-[#1A3E38] transition-all" />
              </a>

              <a
                href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#E7F3EF] border border-[#E5E0D5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <span className="font-bold text-xs">WA</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#526E65]">Instant WhatsApp</div>
                    <div className="font-ui font-semibold text-sm text-[#10221E] group-hover:text-emerald-700">
                      +94 78 784 4914
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526E65] group-hover:translate-x-1 group-hover:text-emerald-700 transition-all" />
              </a>

              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-mono text-[#526E65] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Response SLA: Within 24 hours · Founder review by Mohamed Nazik</span>
              </div>
            </div>
          </div>

          {/* Right Column: Solvance Interactive Mad-Libs Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl bg-[#FAF9F5] border border-[#E5E0D5] p-5 sm:p-9 shadow-xs">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#10221E] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="font-body text-sm text-[#4A5D57] max-w-[460px] mb-4">
                    Thank you, <strong className="text-[#10221E]">{formData.name || "friend"}</strong>. Our lead architect will review your project requirements and respond to{" "}
                    <strong className="text-[#1A3E38]">{formData.email}</strong> shortly.
                  </p>

                  {/* Real-world delivery status info */}
                  {resultStatus.emailSent ? (
                    <div className="mb-6 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>✓ Dispatched directly to hello.aspirev@gmail.com</span>
                    </div>
                  ) : (
                    <div className="mb-6 px-4 py-2.5 rounded-2xl bg-white border border-[#E5E0D5] text-xs font-mono text-[#526E65] max-w-[480px]">
                      <span className="text-[#1A3E38] font-semibold block mb-0.5">✓ Lead recorded in system repository (data/inquiries.json)</span>
                      <span>Want instant review? Click below to send an immediate copy straight to WhatsApp or open in Gmail.</span>
                    </div>
                  )}

                  {/* Quick-action buttons: WhatsApp copy + Direct Email + Reset */}
                  <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-ui font-semibold text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <span>Send Instant Copy on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={directMailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#1A3E38] border border-[#DDD9CE] font-ui font-semibold text-xs sm:text-sm shadow-2xs transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1A3E38]" />
                      <span>Open in Gmail</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-ui font-semibold text-[#526E65] hover:text-[#1A3E38] underline transition-colors cursor-pointer mt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Interactive Mad Libs Text block */}
                  <div className="font-display text-base sm:text-2xl text-[#10221E] leading-[2.2] sm:leading-[2.4]">
                    <span>Hi! I&apos;m </span>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="inline-block px-3 py-1 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm sm:text-base text-[#10221E] placeholder:text-[#9AA8A3] shadow-2xs mx-1 align-middle min-w-[110px] sm:min-w-[160px] max-w-full"
                    />
                    <span> a </span>
                    <input
                      required
                      type="text"
                      placeholder="Your Role / Company"
                      value={formData.job}
                      onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                      className="inline-block px-3 py-1 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm sm:text-base text-[#10221E] placeholder:text-[#9AA8A3] shadow-2xs mx-1 align-middle min-w-[120px] sm:min-w-[180px] max-w-full"
                    />
                    <span> from </span>
                    <input
                      type="text"
                      placeholder="City or Country"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="inline-block px-3 py-1 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm sm:text-base text-[#10221E] placeholder:text-[#9AA8A3] shadow-2xs mx-1 align-middle min-w-[110px] sm:min-w-[150px] max-w-full"
                    />
                    <span> that need help.</span>
                    <br className="hidden sm:inline" />
                    <span> I have a project inquiry:</span>
                  </div>

                  {/* Textarea for details */}
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="State your questions, requirements, or timeline here..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#9AA8A3] shadow-2xs resize-none"
                    />
                  </div>

                  {/* Closing line with Email input */}
                  <div className="font-display text-base sm:text-xl text-[#10221E] leading-loose flex flex-wrap items-center gap-2">
                    <span>You can reach me at</span>
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-[#DDD9CE] focus:outline-none focus:border-[#1A3E38] focus:ring-2 focus:ring-[#1A3E38]/15 font-body text-sm text-[#10221E] placeholder:text-[#9AA8A3] shadow-2xs min-w-[200px] sm:min-w-[240px] max-w-full"
                    />
                    <span>to get things started.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1A3E38] hover:bg-[#13332E] text-white font-ui font-semibold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
