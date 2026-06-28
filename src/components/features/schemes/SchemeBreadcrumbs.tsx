import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface SchemeBreadcrumbsProps {
  title: string;
}

export function SchemeBreadcrumbs({ title }: SchemeBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 overflow-x-auto font-label text-label-sm whitespace-nowrap text-on-surface-variant"
    >
      <Link href="/" className="flex items-center gap-1 hover:text-primary">
        <Home className="size-4" aria-hidden="true" />
        Home
      </Link>
      <ChevronRight className="size-4 opacity-50" aria-hidden="true" />
      <Link href="/schemes" className="hover:text-primary">
        Schemes
      </Link>
      <ChevronRight className="size-4 opacity-50" aria-hidden="true" />
      <span className="font-bold text-primary">{title}</span>
    </nav>
  );
}
