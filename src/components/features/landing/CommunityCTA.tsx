import { Users } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function CommunityCTA() {
  return (
    <div className="rounded-xl bg-primary p-6 text-on-primary">
      <Users className="mb-4 size-10" aria-hidden="true" />
      <h3 className="mb-2 font-sans text-headline-md font-semibold">
        Join 2M+ Aspirants
      </h3>
      <p className="mb-6 font-label text-label-sm opacity-90">
        Get real-time updates on Telegram and WhatsApp instantly.
      </p>
      <div className="flex gap-2">
        <Button variant="surface" className="flex-1 py-2">
          Telegram
        </Button>
        <Button variant="inverse-outline" className="flex-1 py-2">
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
