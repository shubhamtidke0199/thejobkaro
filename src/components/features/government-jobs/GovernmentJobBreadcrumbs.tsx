import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GovernmentJobBreadcrumbsProps {
  title: string;
}

export function GovernmentJobBreadcrumbs({
  title,
}: GovernmentJobBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex items-center gap-2 font-label text-label-sm text-secondary"
    >
      <Link href="/" className="hover:text-primary">
        Home
      </Link>
      <ChevronRight className="size-4" aria-hidden="true" />
      <Link href="/government-jobs" className="hover:text-primary">
        Govt Jobs
      </Link>
      <ChevronRight className="size-4" aria-hidden="true" />
      <span className="text-on-surface">{title}</span>
    </nav>
  );
}
