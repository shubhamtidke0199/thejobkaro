import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ScholarshipSectionHeaderProps {
  title: string;
  linkLabel: string;
  linkHref?: string;
  accentClassName?: string;
}

export function ScholarshipSectionHeader({
  title,
  linkLabel,
  linkHref = "#",
  accentClassName = "border-primary-container",
}: ScholarshipSectionHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2
        className={`border-l-[6px] pl-6 font-sans text-2xl font-semibold text-on-surface md:text-3xl ${accentClassName}`}
      >
        {title}
      </h2>
      <Link
        href={linkHref}
        className="group flex items-center gap-2 font-label text-label-sm font-bold text-primary"
      >
        {linkLabel}
        <ArrowRight
          className="size-5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
