"use client";

import React from "react";
import { Sliders, Box, Code } from "lucide-react";

export default function LiveFoundationAssetsBanner() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#102E27] text-white p-6 sm:p-8 md:p-10 border border-[#2D6B60] shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#A3E5D4]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-semibold text-[#A3E5D4] uppercase tracking-wider block mb-1.5">
                [ System Artifacts · Reusable Code ]
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                Live Foundation Assets
              </h3>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#D2EAE3]">
                Every build produces tangible, reusable design systems, deterministic types, and modular code repositories.
              </p>
            </div>

            {/* Right 3 Artifact Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Card 1 */}
              <div className="p-4 rounded-2xl bg-[#0A221D] border border-[#A3E5D4]/20 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#1A3E38] border border-[#2D6B60] text-[#A3E5D4] flex items-center justify-center mb-3">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Design Tokens
                  </h4>
                  <p className="font-body text-xs text-[#D2EAE3]/80 leading-relaxed">
                    CSS variables & semantic tokens for typography, spacing, and color palettes.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl bg-[#0A221D] border border-[#A3E5D4]/20 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#1A3E38] border border-[#2D6B60] text-[#A3E5D4] flex items-center justify-center mb-3">
                    <Box className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Interactive Prototypes
                  </h4>
                  <p className="font-body text-xs text-[#D2EAE3]/80 leading-relaxed">
                    Clickable, high-fidelity flows tested for real user adoption before dev.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-2xl bg-[#0A221D] border border-[#A3E5D4]/20 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#1A3E38] border border-[#2D6B60] text-[#A3E5D4] flex items-center justify-center mb-3">
                    <Code className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Component Library
                  </h4>
                  <p className="font-body text-xs text-[#D2EAE3]/80 leading-relaxed">
                    Typed Next.js 16 components benchmarked for sub-second mobile loads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
