import { Button } from "@/components/ui/Button";
import type { GovernmentScholarship } from "@/types/scholarships";

interface GovernmentScholarshipRowProps {
  scholarship: GovernmentScholarship;
}

export function GovernmentScholarshipRow({
  scholarship,
}: GovernmentScholarshipRowProps) {
  const Icon = scholarship.icon;

  return (
    <article className="group flex cursor-pointer flex-col items-center gap-6 rounded-2xl border border-outline-variant bg-white p-5 shadow-sm transition-all hover:bg-surface-container-low md:flex-row">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-outline-variant bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="size-8 fill-current" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h4 className="text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
            {scholarship.title}
          </h4>
          <div className="rounded-lg bg-surface-container-highest px-3 py-1 text-[11px] font-bold tracking-wide text-on-surface-variant">
            {scholarship.closingLabel}
          </div>
        </div>
        <p className="text-sm font-medium text-secondary">
          {scholarship.organization}
        </p>
      </div>
      <div className="flex w-full flex-wrap items-center gap-6 border-t border-outline-variant pt-4 md:w-auto md:border-t-0 md:border-l md:pt-0 md:pl-6">
        <div className="min-w-[120px]">
          <p className="mb-0.5 text-[10px] font-bold tracking-wider text-outline uppercase">
            Amount
          </p>
          <p className="text-sm font-bold text-on-surface">{scholarship.amount}</p>
        </div>
        <div className="min-w-[120px]">
          <p className="mb-0.5 text-[10px] font-bold tracking-wider text-outline uppercase">
            Level
          </p>
          <p className="text-sm font-bold text-on-surface">{scholarship.level}</p>
        </div>
        <Button className="hidden px-6 py-2 text-xs font-bold md:inline-flex">
          Quick Apply
        </Button>
      </div>
    </article>
  );
}
