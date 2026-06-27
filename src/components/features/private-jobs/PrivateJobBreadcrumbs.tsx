import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PrivateJobBreadcrumbsProps {
  title: string;
}

export function PrivateJobBreadcrumbs({ title }: PrivateJobBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap font-label text-label-sm"
    >
      <Link href="/" className="text-secondary hover:text-primary">
        Home
      </Link>
      <ChevronRight className="size-4 text-secondary" aria-hidden="true" />
      <Link href="/private-jobs" className="text-secondary hover:text-primary">
        Private Jobs
      </Link>
      <ChevronRight className="size-4 text-secondary" aria-hidden="true" />
      <span className="font-bold text-on-surface">{title}</span>
    </nav>
  );
}
