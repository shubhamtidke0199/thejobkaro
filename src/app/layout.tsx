import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk, Inter } from "next/font/google";

import { BRAND_LOGO_SRC } from "@/constants/images";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "JobKaro | Accelerating Professional Growth",
  description:
    "Find jobs, results, scholarships, and opportunities — all in one place. Your career operating system for government exams, private roles, and more.",
  icons: {
    icon: BRAND_LOGO_SRC,
    apple: BRAND_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-body text-on-surface">
        {children}
      </body>
    </html>
  );
}
