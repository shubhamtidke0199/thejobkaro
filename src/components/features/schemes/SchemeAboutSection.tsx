import { detailSectionCardClassName } from "@/components/features/schemes/detailCardClassName";

interface SchemeAboutSectionProps {
  paragraphs: string[];
}

export function SchemeAboutSection({ paragraphs }: SchemeAboutSectionProps) {
  return (
    <section className={`${detailSectionCardClassName} p-6 md:p-8`}>
      <h2 className="mb-4 font-sans text-xl font-semibold text-on-surface">
        About the Scheme
      </h2>
      <div className="space-y-4 leading-relaxed text-on-surface-variant">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
