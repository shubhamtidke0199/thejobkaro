import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { RelatedSchemesSection } from "@/components/features/schemes/RelatedSchemesSection";
import { SchemeAboutSection } from "@/components/features/schemes/SchemeAboutSection";
import { SchemeApplicationGuideSection } from "@/components/features/schemes/SchemeApplicationGuideSection";
import { SchemeBenefitsSection } from "@/components/features/schemes/SchemeBenefitsSection";
import { SchemeBreadcrumbs } from "@/components/features/schemes/SchemeBreadcrumbs";
import { SchemeDetailHeader } from "@/components/features/schemes/SchemeDetailHeader";
import { SchemeDocumentsSection } from "@/components/features/schemes/SchemeDocumentsSection";
import { SchemeEligibilitySection } from "@/components/features/schemes/SchemeEligibilitySection";
import { SchemeHelpSupportSection } from "@/components/features/schemes/SchemeHelpSupportSection";
import { SchemeQuickFactsSection } from "@/components/features/schemes/SchemeQuickFactsSection";
import { SponsoredSchemeDetailCard } from "@/components/features/schemes/SponsoredSchemeDetailCard";
import {
  getSchemeDetail,
  getSchemeDetailSlugs,
} from "@/data/scheme-details";

interface SchemeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getSchemeDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SchemeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getSchemeDetail(slug);

  if (!scheme) {
    return { title: "Scheme Not Found | JobKaro" };
  }

  return {
    title: `${scheme.title} | JobKaro`,
    description: scheme.summary,
  };
}

export default async function SchemeDetailPage({
  params,
}: SchemeDetailPageProps) {
  const { slug } = await params;
  const scheme = getSchemeDetail(slug);

  if (!scheme) {
    notFound();
  }

  return (
    <>
      <Navbar activeHref="/schemes" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <SchemeBreadcrumbs title={scheme.title} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-8">
              <SchemeDetailHeader scheme={scheme} />
              <SchemeQuickFactsSection facts={scheme.quickFacts} />
              <SchemeAboutSection paragraphs={scheme.about} />
              <SchemeEligibilitySection items={scheme.eligibility} />
              <SchemeBenefitsSection benefits={scheme.benefits} />
              <SchemeDocumentsSection documents={scheme.documents} />
              <SchemeApplicationGuideSection steps={scheme.applicationSteps} />
            </div>

            <aside className="flex flex-col gap-6 lg:col-span-4">
              <div className="sticky top-20 space-y-6">
                <RelatedSchemesSection />
                <SchemeHelpSupportSection />
                <SponsoredSchemeDetailCard />
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/schemes" />
    </>
  );
}
