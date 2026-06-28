import { Download, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { SchemeDetail } from "@/types/schemes";

const tagStyles = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  neutral: "bg-surface-container-highest text-on-surface-variant",
};

interface SchemeDetailHeaderProps {
  scheme: SchemeDetail;
}

export function SchemeDetailHeader({ scheme }: SchemeDetailHeaderProps) {
  return (
    <section className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {scheme.tags.map((tag) => (
            <span
              key={tag.label}
              className={`flex items-center gap-1 rounded-full px-3 py-1 font-label text-label-sm ${tagStyles[tag.variant]}`}
            >
              {tag.variant === "primary" ? (
                <Star className="size-4 fill-current" aria-hidden="true" />
              ) : null}
              {tag.label}
            </span>
          ))}
        </div>
        <h1 className="mb-4 font-sans text-3xl leading-tight font-bold text-on-surface md:text-5xl">
          {scheme.title}
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant">
          {scheme.summary}
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button className="px-8 py-3 font-bold shadow-sm">Apply Now</Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-primary"
        >
          <Download className="size-5" aria-hidden="true" />
          Guidelines
        </Button>
      </div>
    </section>
  );
}
