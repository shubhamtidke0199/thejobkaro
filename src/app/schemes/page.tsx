import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { SchemeApplicationProcessSection } from "@/components/features/schemes/SchemeApplicationProcessSection";
import { SchemesGridSection } from "@/components/features/schemes/SchemesGridSection";
import { SchemesHero } from "@/components/features/schemes/SchemesHero";

export const metadata: Metadata = {
  title: "Government Schemes | JobKaro - Welfare & Career Schemes Portal",
  description:
    "Discover verified government initiatives for students, entrepreneurs, farmers, and communities. Find eligibility, benefits, and application guidance.",
};

export default function SchemesPage() {
  return (
    <>
      <Navbar activeHref="/schemes" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <SchemesHero />
          <SchemesGridSection />
          <SchemeApplicationProcessSection />
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/schemes" />
    </>
  );
}
