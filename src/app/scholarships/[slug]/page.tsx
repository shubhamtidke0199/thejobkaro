import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { ScholarshipApplicationProcessSection } from "@/components/features/scholarships/ScholarshipApplicationProcessSection";
import { ScholarshipBenefitsSection } from "@/components/features/scholarships/ScholarshipBenefitsSection";
import { ScholarshipBreadcrumbs } from "@/components/features/scholarships/ScholarshipBreadcrumbs";
import { ScholarshipDetailHeader } from "@/components/features/scholarships/ScholarshipDetailHeader";
import { ScholarshipEligibilitySection } from "@/components/features/scholarships/ScholarshipEligibilitySection";
import { ScholarshipGrantorSection } from "@/components/features/scholarships/ScholarshipGrantorSection";
import { ScholarshipHelpSection } from "@/components/features/scholarships/ScholarshipHelpSection";
import { ScholarshipHighlightsSection } from "@/components/features/scholarships/ScholarshipHighlightsSection";
import { ScholarshipOverviewSection } from "@/components/features/scholarships/ScholarshipOverviewSection";
import { ScholarshipUtilityActions } from "@/components/features/scholarships/ScholarshipUtilityActions";
import { SimilarScholarshipsSection } from "@/components/features/scholarships/SimilarScholarshipsSection";
import {
  getScholarshipDetail,
  getScholarshipDetailSlugs,
} from "@/data/scholarship-details";

interface ScholarshipDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getScholarshipDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ScholarshipDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const scholarship = getScholarshipDetail(slug);

  if (!scholarship) {
    return { title: "Scholarship Not Found | JobKaro" };
  }

  return {
    title: `${scholarship.organization} ${scholarship.title} | JobKaro`,
    description: scholarship.overview,
  };
}

export default async function ScholarshipDetailPage({
  params,
}: ScholarshipDetailPageProps) {
  const { slug } = await params;
  const scholarship = getScholarshipDetail(slug);

  if (!scholarship) {
    notFound();
  }

  return (
    <>
      <Navbar activeHref="/scholarships" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <ScholarshipBreadcrumbs title={scholarship.organization} />

          <ScholarshipDetailHeader scholarship={scholarship} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-8">
              <ScholarshipHighlightsSection highlights={scholarship.highlights} />
              <ScholarshipOverviewSection overview={scholarship.overview} />
              <ScholarshipEligibilitySection items={scholarship.eligibility} />
              <ScholarshipBenefitsSection benefits={scholarship.benefits} />
              <ScholarshipApplicationProcessSection
                steps={scholarship.applicationSteps}
              />
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-20 flex flex-col gap-6">
                <ScholarshipGrantorSection scholarship={scholarship} />
                <ScholarshipUtilityActions />
                <SimilarScholarshipsSection
                  scholarships={scholarship.similarScholarships}
                />
                <ScholarshipHelpSection email={scholarship.supportEmail} />
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/scholarships" />
    </>
  );
}
