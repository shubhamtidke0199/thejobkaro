import type { Metadata } from "next";

import { ResultsHubContent } from "@/components/features/results/ResultsHubContent";
import { ResultsHubHeader } from "@/components/features/results/ResultsHubHeader";
import { ResultsSearchBar } from "@/components/features/results/ResultsSearchBar";
import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Results & Admit Card Hub | JobKaro",
  description:
    "Your centralized portal for verified government results, final merit lists, and upcoming exam hall tickets.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar activeHref="/results" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <ResultsHubHeader />
          <ResultsSearchBar />
          <ResultsHubContent />
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/results" />
    </>
  );
}
