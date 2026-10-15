"use client";

import React from "react";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function ContactSidebars() {
  return (
    <div className="space-y-6">
      {/* Card 1: What Happens Next? */}
      <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-7 shadow-xs">
        <h3 className="font-display font-bold text-lg text-[#10221E] mb-5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#1A3E38]" />
          <span>What happens next?</span>
        </h3>

        <div className="space-y-5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#E8E4D9]">
          {/* Step 1 */}
          <div className="relative pl-8">
            <div className="absolute left-2 top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1A3E38] shrink-0" />
            <span className="font-mono text-[0.6875rem] font-semibold text-[#1A3E38] uppercase tracking-wider block mb-0.5">
              01 / Context Review
            </span>
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              Architectural Assessment
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              We analyze your requirements, technical feasibility, and architectural constraints within 48 hours.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8">
            <div className="absolute left-2 top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1A3E38] shrink-0" />
            <span className="font-mono text-[0.6875rem] font-semibold text-[#1A3E38] uppercase tracking-wider block mb-0.5">
              02 / Discovery Alignment
            </span>
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              Engineering Discovery Session
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              A focused technical discovery call with Mohamed Nazik, founder and lead architect — zero sales intermediaries.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8">
            <div className="absolute left-2 top-0.5 w-3.5 h-3.5 rounded-full bg-[#1A3E38] border-2 border-[#1A3E38] shrink-0" />
            <span className="font-mono text-[0.6875rem] font-semibold text-[#1A3E38] uppercase tracking-wider block mb-0.5">
              03 / Transparent Proposal
            </span>
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              Milestones & Production Plan
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              Clear scope breakdown, timeline milestones, sprint blocks, and transparent delivery architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Studio Direct (Dark Stage) */}
      <div className="bg-[#102E27] text-white rounded-3xl border border-[#2D6B60] p-6 sm:p-7 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-mono text-[0.6875rem] font-semibold text-[#A3E5D4] uppercase tracking-wider block mb-0.5">
              [ Studio Direct ]
            </span>
            <h3 className="font-display font-bold text-lg text-white">
              Direct Communication
            </h3>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#0A221D] border border-[#2D6B60] flex items-center justify-center font-mono text-sm text-[#A3E5D4]">
            @
          </span>
        </div>

        {/* Email & WhatsApp boxes */}
        <div className="space-y-2.5 mb-5">
          <a
            href="mailto:hello.aspirev@gmail.com"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A221D] hover:bg-[#13332E] border border-[#2D6B60] transition-colors group"
          >
            <div>
              <div className="text-[0.6875rem] font-ui text-[#D2EAE3]">
                Project Inquiries & Founder Contact
              </div>
              <div className="font-mono text-xs text-[#A3E5D4] group-hover:underline">
                hello.aspirev@gmail.com
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A3E5D4] group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A221D] hover:bg-[#13332E] border border-[#2D6B60] transition-colors group"
          >
            <div>
              <div className="text-[0.6875rem] font-ui text-[#D2EAE3]">
                Instant WhatsApp Chat
              </div>
              <div className="font-mono text-xs text-emerald-400 font-semibold group-hover:underline">
                +94 78 784 4914
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Location & Time Windows */}
        <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-ui text-[#D2EAE3]">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#A3E5D4] shrink-0 mt-0.5" />
            <span>Primary Studio Hub: Colombo, Sri Lanka (UTC+5:30) & Global Remote</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#A3E5D4] shrink-0 mt-0.5" />
            <span>Engagement Windows: Monday – Friday, 9:00 AM – 6:00 PM IST</span>
          </div>
        </div>
      </div>

      {/* Card 3: Honest Expectations (FAQ) */}
      <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-7 shadow-xs space-y-4">
        <h3 className="font-display font-bold text-lg text-[#10221E] flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#1A3E38]" />
          <span>Honest Expectations</span>
        </h3>

        <div className="space-y-3.5">
          <div>
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              Do you take on fixed-fee or retainer projects?
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              We structure work into milestone-based sprints and transparent project deliverables. No bloated recurring retainers without measurable code and design output.
            </p>
          </div>

          <div className="pt-3 border-t border-[#EFECE6]">
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              Can you sign an NDA before we share sensitive details?
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              Yes. We are happy to execute a standard mutual NDA prior to discussing proprietary architecture or datasets.
            </p>
          </div>

          <div className="pt-3 border-t border-[#EFECE6]">
            <h4 className="font-display font-semibold text-sm text-[#10221E] mb-1">
              What if my project is in early ideation?
            </h4>
            <p className="font-body text-xs sm:text-[0.8125rem] leading-relaxed text-[#4A5D57]">
              We offer rapid technical feasibility audits and wireframe prototyping sprints to help de-risk ideas before full production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
