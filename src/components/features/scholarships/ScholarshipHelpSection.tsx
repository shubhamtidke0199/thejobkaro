import { Mail, MessageCircle } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";

interface ScholarshipHelpSectionProps {
  email: string;
}

export function ScholarshipHelpSection({ email }: ScholarshipHelpSectionProps) {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-highest p-4 md:p-6">
      <h3 className="mb-2 font-bold">Need Help?</h3>
      <p className="mb-4 font-label text-label-sm text-on-surface-variant">
        Facing issues with application or eligibility? Reach out to our experts.
      </p>
      <div className="flex flex-col gap-2">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 font-label text-label-sm font-bold text-primary"
        >
          <Mail className="size-[18px]" aria-hidden="true" />
          {email}
        </a>
        <button
          type="button"
          className="flex items-center gap-2 font-label text-label-sm font-bold text-primary"
        >
          <MessageCircle className="size-[18px]" aria-hidden="true" />
          Live Chat Support
        </button>
      </div>
    </section>
  );
}
