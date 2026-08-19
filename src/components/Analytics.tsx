"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { getGaMeasurementId, trackEvent } from "@/lib/analytics";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

export function Analytics() {
  const pathname = usePathname();
  const gaId = getGaMeasurementId();
  const { analyticsAllowed, isReady } = useCookieConsent();

  useEffect(() => {
    if (!pathname || !isReady || !analyticsAllowed) return;
    trackEvent({
      name: "page_view",
      params: {
        page_path: pathname,
        page_title: document.title,
      },
    });
  }, [pathname, analyticsAllowed, isReady]);

  if (!gaId || !analyticsAllowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
