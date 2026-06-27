import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="bento-card-gradient group rounded-xl border border-outline-variant p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <Icon
        className="mb-4 size-8 text-primary transition-transform group-hover:scale-110"
        aria-hidden="true"
      />
      <h3 className="mb-1 text-base font-bold text-on-surface">{title}</h3>
      <p className="font-label text-sm text-secondary">{description}</p>
    </Link>
  );
}
