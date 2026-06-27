import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Clock,
  MapPin,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { PrivateJob, SponsoredJobListing } from "@/types/private-jobs";

import { BookmarkButton } from "./BookmarkButton";
import { privateJobDetailHref } from "./privateJobDetailHref";

interface SponsoredJobCardProps {
  job: SponsoredJobListing;
}

export function SponsoredJobCard({ job }: SponsoredJobCardProps) {
  const detailHref = privateJobDetailHref(job.detailSlug);

  return (
    <article className="bento-card relative overflow-hidden rounded-xl border border-outline-variant bg-inverse-surface p-4 text-inverse-on-surface">
      <span className="absolute top-0 right-0 bg-primary px-3 py-1 font-mono text-label-sm tracking-widest text-on-primary uppercase">
        Sponsored
      </span>
      <div className="flex flex-col items-start gap-4 md:flex-row">
        {detailHref ? (
          <Link
            href={detailHref}
            className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white transition-opacity hover:opacity-90"
          >
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </Link>
        ) : (
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {detailHref ? (
              <Link href={detailHref}>
                <h3 className="font-sans text-headline-md font-semibold text-primary-fixed transition-opacity hover:opacity-90">
                  {job.title}
                </h3>
              </Link>
            ) : (
              <h3 className="font-sans text-headline-md font-semibold text-primary-fixed">
                {job.title}
              </h3>
            )}
            {job.badge && (
              <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-label-sm text-primary-fixed">
                {job.badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-surface-variant">
            <span className="flex items-center gap-1.5">
              <Building2 className="size-5" aria-hidden="true" />
              {job.company}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-5" aria-hidden="true" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Wallet className="size-5" aria-hidden="true" />
              {job.salary}
            </span>
          </div>
          {detailHref ? (
            <Link
              href={detailHref}
              className="line-clamp-2 block max-w-2xl text-surface-variant/80 transition-opacity hover:opacity-90"
            >
              {job.description}
            </Link>
          ) : (
            <p className="line-clamp-2 max-w-2xl text-surface-variant/80">
              {job.description}
            </p>
          )}
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto md:flex-col">
          <Button variant="accent" className="w-full px-4 py-2.5 md:w-32">
            Apply Now
          </Button>
          <BookmarkButton className="border border-surface-variant/30 text-surface-variant hover:bg-surface-variant/10" />
        </div>
      </div>
    </article>
  );
}

interface PrivateJobCardProps {
  job: PrivateJob;
}

export function PrivateJobCard({ job }: PrivateJobCardProps) {
  const detailHref = privateJobDetailHref(job.detailSlug);

  return (
    <article className="bento-card rounded-xl border border-outline-variant bg-surface-container-lowest p-4">
      <div className="flex flex-col items-start gap-4 md:flex-row">
        {detailHref ? (
          <Link
            href={detailHref}
            className="size-14 shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-opacity hover:opacity-90"
          >
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </Link>
        ) : (
          <div className="size-14 shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              {detailHref ? (
                <Link href={detailHref}>
                  <h3 className="font-sans text-headline-md font-semibold transition-colors hover:text-primary">
                    {job.title}
                  </h3>
                </Link>
              ) : (
                <h3 className="font-sans text-headline-md font-semibold text-on-surface">
                  {job.title}
                </h3>
              )}
              <p className="mt-0.5 font-medium text-secondary">{job.company}</p>
            </div>
            {job.deadline ? (
              <div className="flex shrink-0 items-center gap-1 rounded-full bg-error-container px-3 py-1 font-mono text-label-sm text-on-error-container">
                <Clock className="size-3.5" aria-hidden="true" />
                {job.deadline}
              </div>
            ) : (
              <span className="shrink-0 font-mono text-label-sm text-outline">
                {job.postedAt}
              </span>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-5" aria-hidden="true" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="size-5" aria-hidden="true" />
              {job.jobType}
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Wallet className="size-5" aria-hidden="true" />
              {job.salary}
            </span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <li key={skill}>
                <span className="rounded bg-surface-container px-2 py-1 font-label text-label-sm text-on-surface-variant">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <BookmarkButton
          initialBookmarked={job.bookmarked}
          className="md:self-start"
        />
      </div>
    </article>
  );
}
