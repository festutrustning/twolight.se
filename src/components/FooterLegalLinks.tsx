"use client";

import { CookieSettingsButton } from "@/components/cookie-consent/CookieBanner";

export function FooterLegalLinks() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
      <CookieSettingsButton />
    </div>
  );
}
