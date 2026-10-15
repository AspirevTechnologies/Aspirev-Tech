import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aspirev Product Studio | Build with purpose. Create what matters.",
  description:
    "We design and build human-centric digital experiences, intelligent software, and technology products that solve real problems.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Product Studio",
    "Digital Experiences",
    "Custom Software",
    "AI Solutions",
    "UI/UX Design",
    "Venture Studio",
    "Aspirev",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#10221E] font-body antialiased selection:bg-[#E7F3EF] selection:text-[#1A3E38]">
        {children}
      </body>
    </html>
  );
}
