import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { PrivateJobDetail } from "@/types/private-jobs";

import { detailCardClassName } from "./detailCardClassName";

interface PrivateJobCompanyCardProps {
  company: PrivateJobDetail["companyProfile"];
}

export function PrivateJobCompanyCard({ company }: PrivateJobCompanyCardProps) {
  return (
    <section
      aria-labelledby="company-heading"
      className={`${detailCardClassName} p-6`}
    >
      <h2
        id="company-heading"
        className="mb-4 font-sans text-headline-md font-semibold"
      >
        About {company.name}
      </h2>
      <p className="mb-6 leading-relaxed text-on-surface-variant">
        {company.description}
      </p>
      <dl className="space-y-3">
        <div className="flex items-center justify-between border-b border-outline-variant py-2">
          <dt className="font-label text-label-sm text-secondary">
            Company Size
          </dt>
          <dd className="font-label text-label-sm font-bold">{company.size}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant py-2">
          <dt className="font-label text-label-sm text-secondary">Industry</dt>
          <dd className="font-label text-label-sm font-bold">
            {company.industry}
          </dd>
        </div>
        <div className="flex items-center justify-between py-2">
          <dt className="font-label text-label-sm text-secondary">Website</dt>
          <dd>
            <Link
              href={company.websiteUrl}
              className="font-label text-label-sm font-bold text-primary hover:underline"
            >
              {company.websiteLabel}
            </Link>
          </dd>
        </div>
      </dl>
    </section>
  );
}

interface PrivateJobHiringManagerCardProps {
  manager: PrivateJobDetail["hiringManager"];
}

export function PrivateJobHiringManagerCard({
  manager,
}: PrivateJobHiringManagerCardProps) {
  return (
    <section
      aria-labelledby="hiring-manager-heading"
      className={`${detailCardClassName} p-6`}
    >
      <h2
        id="hiring-manager-heading"
        className="mb-4 font-sans text-headline-md font-semibold"
      >
        Hiring Manager
      </h2>
      <div className="flex items-center gap-4">
        <div className="size-14 overflow-hidden rounded-full border-2 border-primary-container p-0.5">
          <Image
            src={manager.avatar}
            alt={manager.avatarAlt}
            width={56}
            height={56}
            className="size-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{manager.name}</h3>
          <p className="font-label text-label-sm text-secondary">
            {manager.title}
          </p>
        </div>
      </div>
      <Button
        variant="outline-primary"
        className="mt-6 w-full border-primary/20 bg-primary/5 py-2.5 hover:bg-primary/10"
      >
        Message {manager.name.split(" ")[0]}
      </Button>
    </section>
  );
}
