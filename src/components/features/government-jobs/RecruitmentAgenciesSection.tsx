import Image from "next/image";
import Link from "next/link";

import { RECRUITMENT_AGENCIES } from "@/data/government-jobs";

export function RecruitmentAgenciesSection() {
  return (
    <section aria-labelledby="agencies-heading">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2
            id="agencies-heading"
            className="font-sans text-headline-md font-semibold text-on-background"
          >
            Recruitment Agencies
          </h2>
          <p className="text-secondary">
            Top central and state boards currently hiring.
          </p>
        </div>
        <Link
          href="#"
          className="font-label text-label-sm font-bold text-primary hover:underline"
        >
          View All Boards
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {RECRUITMENT_AGENCIES.map((agency) => (
          <article
            key={agency.name}
            className="bento-card rounded-xl border border-outline-variant bg-white p-5 text-center"
          >
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-xl bg-surface-container-low">
              <Image
                src={agency.logo}
                alt={agency.logoAlt}
                width={40}
                height={40}
                className="size-10 object-contain"
              />
            </div>
            <h3 className="font-bold text-on-background">{agency.name}</h3>
            <span className="mt-2 inline-block rounded bg-secondary-container px-2 py-1 font-mono text-xs text-on-secondary-container">
              {agency.activeCount} Active
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
