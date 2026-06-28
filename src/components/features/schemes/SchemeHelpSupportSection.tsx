import { Button } from "@/components/ui/Button";
import { SCHEME_HELP_CONTACTS } from "@/data/scheme-details";

export function SchemeHelpSupportSection() {
  return (
    <section className="rounded-2xl bg-inverse-surface p-6 text-inverse-on-surface md:p-8">
      <h3 className="mb-6 font-sans text-xl font-semibold">Help & Support</h3>
      <div className="space-y-6">
        {SCHEME_HELP_CONTACTS.map((contact) => {
          const Icon = contact.icon;
          return (
            <div key={contact.type} className="flex items-start gap-4">
              <Icon className="size-6 text-primary-fixed" aria-hidden="true" />
              <div>
                <p className="mb-1 font-bold">{contact.title}</p>
                <p className="text-sm text-surface-variant">{contact.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Button className="mt-4 w-full py-3 font-bold">Chat with Assistant</Button>
    </section>
  );
}
