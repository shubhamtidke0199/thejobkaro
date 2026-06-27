import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import type { RecommendedInternship } from "@/types/internships";
import { RECOMMENDED_INTERNSHIPS } from "@/data/internships";

interface RecommendedInternshipCardProps {
  internship: RecommendedInternship;
}

function RecommendedInternshipCard({
  internship,
}: RecommendedInternshipCardProps) {
  return (
    <article
      className={`bento-card rounded-xl p-6 ${
        internship.featured
          ? "border border-primary/20 bg-primary-container/10"
          : "border border-outline-variant bg-surface-container-lowest"
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-lg border border-outline-variant bg-white p-2">
          <Image
            src={internship.logo}
            alt={internship.logoAlt}
            width={32}
            height={32}
            className="size-full object-contain"
          />
        </div>
        <span
          className={`rounded px-2 py-1 font-mono text-label-sm ${
            internship.featured
              ? "bg-primary/10 text-primary"
              : "bg-secondary/10 text-secondary"
          }`}
        >
          {internship.matchScore}% Match
        </span>
      </div>
      <h3 className="mb-1 font-bold text-on-surface">{internship.title}</h3>
      <p className="mb-4 text-base text-secondary">
        {internship.company} · {internship.location}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-primary">{internship.stipend}</span>
        <button
          type="button"
          className="font-label text-label-sm text-primary hover:underline"
        >
          Details
        </button>
      </div>
    </article>
  );
}

export function RecommendedInternshipsSection() {
  return (
    <section aria-labelledby="recommended-internships-heading" className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2
          id="recommended-internships-heading"
          className="flex items-center gap-2 font-sans text-headline-md font-semibold"
        >
          <Sparkles className="size-6 text-primary" aria-hidden="true" />
          Internships for You
        </h2>
        <Link
          href="#"
          className="font-label text-label-sm text-primary hover:underline"
        >
          View all matches
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {RECOMMENDED_INTERNSHIPS.map((internship) => (
          <RecommendedInternshipCard
            key={internship.id}
            internship={internship}
          />
        ))}
      </div>
    </section>
  );
}
