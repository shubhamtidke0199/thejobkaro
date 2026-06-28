import type { SchemeDocument } from "@/types/schemes";

interface SchemeDocumentsSectionProps {
  documents: SchemeDocument[];
}

export function SchemeDocumentsSection({ documents }: SchemeDocumentsSectionProps) {
  return (
    <section className="rounded-2xl bg-surface-container-low p-6 md:p-8">
      <h2 className="mb-6 font-sans text-xl font-semibold text-on-surface">
        Required Documents
      </h2>
      <ul className="space-y-3">
        {documents.map((document) => {
          const Icon = document.icon;
          return (
            <li
              key={document.label}
              className="flex items-center gap-3 rounded-md border border-outline-variant bg-surface-container-lowest p-3"
            >
              <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-on-surface">{document.label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
