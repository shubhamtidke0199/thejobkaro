import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { GovernmentJobActionsSidebar } from "@/components/features/government-jobs/GovernmentJobActionsSidebar";
import { GovernmentJobBreadcrumbs } from "@/components/features/government-jobs/GovernmentJobBreadcrumbs";
import { GovernmentJobDetailHeader } from "@/components/features/government-jobs/GovernmentJobDetailHeader";
import {
  GovernmentJobEligibilitySection,
  GovernmentJobOverviewSection,
} from "@/components/features/government-jobs/GovernmentJobOverviewSection";
import { GovernmentJobImportantDatesSection } from "@/components/features/government-jobs/GovernmentJobImportantDatesSection";
import {
  GovernmentJobFaqSection,
  GovernmentJobSelectionProcessSection,
} from "@/components/features/government-jobs/GovernmentJobSelectionProcessSection";
import { RelatedOpportunitiesSection } from "@/components/features/government-jobs/RelatedOpportunitiesSection";
import { SponsoredStudyCard } from "@/components/features/government-jobs/SponsoredStudyCard";
import {
  getGovernmentJobDetail,
  getGovernmentJobDetailSlugs,
} from "@/data/government-job-details";

interface GovernmentJobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getGovernmentJobDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GovernmentJobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getGovernmentJobDetail(slug);

  if (!job) {
    return { title: "Job Not Found | JobKaro" };
  }

  return {
    title: `${job.title} | JobKaro`,
    description: job.overview,
  };
}

export default async function GovernmentJobDetailPage({
  params,
}: GovernmentJobDetailPageProps) {
  const { slug } = await params;
  const job = getGovernmentJobDetail(slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar activeHref="/government-jobs" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <GovernmentJobBreadcrumbs title={job.title} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <GovernmentJobDetailHeader job={job} />
              <GovernmentJobOverviewSection
                overview={job.overview}
                stats={job.stats}
              />
              <GovernmentJobEligibilitySection eligibility={job.eligibility} />
              <GovernmentJobImportantDatesSection dates={job.importantDates} />
              <GovernmentJobSelectionProcessSection steps={job.selectionProcess} />
              <GovernmentJobFaqSection faqs={job.faqs} />
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-20 space-y-8">
                <GovernmentJobActionsSidebar application={job.application} />
                <RelatedOpportunitiesSection />
                <SponsoredStudyCard />
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/government-jobs" />
    </>
  );
}
