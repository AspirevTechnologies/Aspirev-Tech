"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello.aspirev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#13332E] text-white pt-16 pb-12 border-t border-[#22524A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#22524A]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E5D4] rounded">
              <Image
                src="/aspirev.png"
                alt="Aspirev Technologies"
                width={130}
                height={36}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="font-body text-xs sm:text-sm leading-relaxed text-[#A7C2BC] max-w-[380px] mb-4">
              Aspirev Technologies designs and develops digital experiences, intelligent software, and technology products that solve real problems.
            </p>

            <div className="text-[0.6875rem] font-mono text-[#D2EAE3]/80 mb-4">
              Build with purpose. Create what matters.
            </div>

            {/* Email & WhatsApp direct pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102E27] border border-[#1E453C] hover:border-[#A3E5D4]/40 transition-colors">
                <a
                  href="mailto:hello.aspirev@gmail.com"
                  className="font-mono text-xs text-[#A3E5D4] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E5D4]"
                >
                  hello.aspirev@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-[#A7C2BC] hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E5D4]"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#A3E5D4]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <a
                href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#102E27] border border-[#1E453C] hover:border-emerald-400 font-mono text-xs text-emerald-400 hover:underline transition-colors"
              >
                <span>WhatsApp: +94 78 784 4914</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D2EAE3] mb-3.5">
              [ Navigation ]
            </h4>
            <ul className="space-y-2 font-ui text-xs">
              <li>
                <Link href="/services" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  Website Packages
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  Production Work & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  Flagship Product (Aspirev)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  About & Founder
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A7C2BC] hover:text-[#A3E5D4] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Standards & Legal Policies */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D2EAE3] mb-3.5">
              [ Engineering & Legal ]
            </h4>
            <ul className="space-y-2 font-ui text-xs text-[#A7C2BC] mb-4">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]" />
                <span>Deterministic Scaled Engineering</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]" />
                <span>Verified Speed, Security & Performance Proofs</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]" />
                <span>100% IP & Source Code Ownership</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E5D4]" />
                <span>Founder Mohamed Nazik · Direct Architect Access</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
              <Link href="/privacy" className="text-[#A3E5D4] hover:underline">
                Privacy Policy
              </Link>
              <span className="text-white/30">·</span>
              <Link href="/terms" className="text-[#A3E5D4] hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-ui text-[#7A9E96]">
          <div>
            © 2026 Aspirev Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A3E5D4] animate-pulse" />
            <span className="font-mono text-xs text-[#7A9E96]">Sri Lanka & Global Remote Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
