import { SEO_CONTENT, SEO_STATS } from "@/constants/private-jobs";

export function SeoContentBlock() {
  return (
    <section
      aria-labelledby="seo-heading"
      className="mt-8 rounded-2xl border border-outline-variant/50 bg-surface-container-low p-8"
    >
      <h2
        id="seo-heading"
        className="mb-2 font-sans text-headline-md font-semibold text-on-surface"
      >
        Why JobKaro for Private Jobs?
      </h2>
      <p className="text-base leading-relaxed text-secondary">{SEO_CONTENT}</p>
      <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-outline-variant pt-4 md:grid-cols-4">
        {SEO_STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="block font-bold text-primary">{stat.value}</dt>
            <dd className="font-label text-label-sm text-secondary uppercase">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
