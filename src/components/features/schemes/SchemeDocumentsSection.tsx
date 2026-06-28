import { FileText, IdCard, Presentation, Receipt } from "lucide-react";

import { detailCardClassName } from "@/components/features/schemes/detailCardClassName";

const documentIcons = [FileText, IdCard, Presentation, Receipt];

interface SchemeDocumentsSectionProps {
  documents: string[];
}

export function SchemeDocumentsSection({ documents }: SchemeDocumentsSectionProps) {
  return (
    <section className="rounded-2xl bg-surface-container-low p-6 md:p-8">
      <h2 className="mb-6 font-sans text-xl font-semibold text-on-surface">
        Required Documents
      </h2>
      <ul className="space-y-3">
        {documents.map((document, index) => {
          const Icon = documentIcons[index % documentIcons.length];
          return (
            <li
              key={document}
              className={`${detailCardClassName} flex items-center gap-3 p-3`}
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <span className="text-on-surface">{document}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
