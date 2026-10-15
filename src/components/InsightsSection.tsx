"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Clock, BookOpen } from "lucide-react";

interface ArticleItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
}

const articles: ArticleItem[] = [
  {
    id: "clarity-in-software",
    category: "Design & UI",
    title: "Designing for Clarity in Practical Business Software",
    excerpt:
      "Why reducing interface density and prioritizing cognitive load delivers higher operational velocity than feature-packed enterprise toolkits.",
    readTime: "5 min read",
    date: "Oct 2026",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pragmatic-ai",
    category: "Technology & AI",
    title: "Where Pragmatic AI Actually Solves Problems for Growing Teams",
    excerpt:
      "Separating commercial generation hype from dependable, structured workflows that boost daily operational precision.",
    readTime: "7 min read",
    date: "Sep 2026",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "emerging-markets-ux",
    category: "Product Strategy",
    title: "Why Digital Experiences in Emerging Markets Need Local Empathy",
    excerpt:
      "Contextual bandwidth constraints, mobile-first workflows, and cultural responsiveness in high-velocity tech ecosystems.",
    readTime: "6 min read",
    date: "Aug 2026",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-14 md:py-20 bg-white border-b border-[#E8E4D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] text-[#1A3E38] text-xs font-mono font-medium tracking-wide mb-3">
              <span>[ Ideas & Perspectives · Engineering Essays ]</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#10221E]">
              Thoughts on design, software, and what comes next.
            </h2>
          </div>
          <a
            href="#insights"
            className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-[#1A3E38] hover:text-[#13332E] group transition-colors self-start sm:self-end shrink-0"
          >
            <span>Explore All Essays</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Articles Grid with Editorial Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between bg-white rounded-3xl border border-[#E5E0D5] hover:border-[#1A3E38]/40 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div>
                {/* Editorial Header Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#FAF9F5] border border-[#E5E0D5] shadow-2xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#1A3E38]/90 backdrop-blur-xs text-white text-[0.6875rem] font-ui font-medium border border-white/20 shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-display font-bold text-[1.125rem] leading-[1.35] text-[#10221E] group-hover:text-[#1A3E38] transition-colors mb-2.5">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#4A5D57] mb-5">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EFECE6] font-mono text-xs text-[#526E65]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1A3E38]" />
                  <span>{article.readTime} · {article.date}</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#E7F3EF] border border-[#CFE4D8] flex items-center justify-center text-[#1A3E38] group-hover:bg-[#1A3E38] group-hover:text-white transition-all shadow-2xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
