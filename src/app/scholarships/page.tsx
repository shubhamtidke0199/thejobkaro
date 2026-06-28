import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { GovernmentScholarshipsSection } from "@/components/features/scholarships/GovernmentScholarshipsSection";
import { InternationalScholarshipsSection } from "@/components/features/scholarships/InternationalScholarshipsSection";
import { ScholarshipsFilterBar } from "@/components/features/scholarships/ScholarshipsFilterBar";
import { ScholarshipsHero } from "@/components/features/scholarships/ScholarshipsHero";
import { ScholarshipsRecommendedSection } from "@/components/features/scholarships/ScholarshipsRecommendedSection";
import { ScholarshipsSubscribeSection } from "@/components/features/scholarships/ScholarshipsSubscribeSection";

export const metadata: Metadata = {
  title: "Scholarships | JobKaro - Accelerate Your Future",
  description:
    "Discover curated scholarships tailored to your academic excellence and financial needs. Merit-based, need-based, government, and international opportunities.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <Navbar activeHref="/scholarships" />
      <main className="pb-20 md:pb-0">
        <ScholarshipsHero />
        <ScholarshipsFilterBar />
        <Container className="space-y-20 py-12">
          <ScholarshipsRecommendedSection />
          <GovernmentScholarshipsSection />
          <InternationalScholarshipsSection />
          <ScholarshipsSubscribeSection />
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/scholarships" />
    </>
  );
}
