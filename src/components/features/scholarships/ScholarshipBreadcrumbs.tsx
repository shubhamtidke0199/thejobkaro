import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface ScholarshipBreadcrumbsProps {
  title: string;
}

export function ScholarshipBreadcrumbs({ title }: ScholarshipBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 font-label text-label-sm text-secondary"
    >
      <Link href="/" className="flex items-center gap-1 hover:text-primary">
        <Home className="size-4" aria-hidden="true" />
        Home
      </Link>
      <ChevronRight className="size-4" aria-hidden="true" />
      <Link href="/scholarships" className="hover:text-primary">
        Scholarships
      </Link>
      <ChevronRight className="size-4" aria-hidden="true" />
      <span className="text-on-surface">{title}</span>
    </nav>
  );
}
