"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { getGaMeasurementId, trackEvent } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();
  const gaId = getGaMeasurementId();

  useEffect(() => {
    if (!pathname) return;
    trackEvent({
      name: "page_view",
      params: {
        page_path: pathname,
        page_title: document.title,
      },
    });
  }, [pathname]);

  if (!gaId) return null;

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
