"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: () => void;
  activePage?: "services" | "packages" | "work" | "products" | "about" | "insights" | "contact" | "home";
}

export default function Navbar({ onOpenInquiry, activePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services", key: "services" },
    { name: "Packages", href: "/#packages", key: "packages" },
    { name: "Work", href: "/work", key: "work" },
    { name: "Products", href: "/products", key: "products" },
    { name: "About", href: "/about", key: "about" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      {/* Solvance Floating Pill Island Bar */}
      <div
        className={`pointer-events-auto max-w-[1160px] w-full rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-[#1A3E38]/95 backdrop-blur-md border border-[#2D6B60] shadow-[0_12px_40px_rgba(26,62,56,0.35)]"
            : "bg-[#1A3E38]/90 backdrop-blur-sm border border-[#2D6B60]/80 shadow-[0_8px_30px_rgba(26,62,56,0.22)]"
        }`}
      >
        {/* Company Logo (aspirev.png) */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E5D4] rounded-full py-1 px-1"
        >
          <div className="relative flex items-center">
            <Image
              src="/aspirev.png"
              alt="Aspirev Product Studio"
              width={130}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#13332E]/80 p-1 rounded-full border border-[#25574D]">
          {navLinks.map((link) => {
            const isActive = activePage === link.key;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-ui text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E5D4] ${
                  isActive
                    ? "bg-[#2D6B60] text-white font-semibold shadow-xs border border-[#3C8578]/50"
                    : "text-[#D2EAE3] hover:text-white hover:bg-[#204941]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Solvance Cream Pill + WhatsApp */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#13332E] hover:bg-[#204941] text-[#A3E5D4] border border-[#2D6B60] font-ui text-xs font-semibold transition-all hover:scale-105"
            title="Chat directly on WhatsApp (+94 78 784 4914)"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] font-ui font-bold text-xs sm:text-sm shadow-[0_2px_12px_rgba(235,230,216,0.25)] hover:shadow-[0_4px_16px_rgba(235,230,216,0.4)] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EBE6D8]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#1A3E38]" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-[#A3E5D4] hover:bg-[#204941] border border-[#2D6B60] transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-white hover:bg-[#204941] border border-[#2D6B60] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E5D4]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Floating Emerald Container) */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto absolute top-16 left-4 right-4 p-4 bg-[#1A3E38] rounded-3xl border border-[#2D6B60] shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-ui text-sm py-2 px-3 rounded-full transition-colors ${
                activePage === link.key
                  ? "text-white font-semibold bg-[#2D6B60] border border-[#3C8578]/50"
                  : "font-medium text-[#D2EAE3] hover:text-white hover:bg-[#204941]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#25574D] flex flex-col gap-2">
            <a
              href="https://wa.me/94787844914?text=Hi%20Aspirev%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#13332E] border border-[#2D6B60] text-[#A3E5D4] font-ui font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Chat on WhatsApp (+94 78 784 4914)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#EBE6D8] hover:bg-[#F4F1EA] text-[#1A3E38] font-ui font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#1A3E38]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
