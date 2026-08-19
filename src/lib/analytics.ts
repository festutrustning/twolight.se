export type AnalyticsEvent =
  | { name: "page_view"; params: { page_path: string; page_title: string } }
  | {
      name: "outbound_click_festutrustning";
      params: { link_url: string; link_text: string; page_path: string };
    }
  | {
      name: "outbound_click_skaneevent";
      params: { link_url: string; link_text: string; page_path: string };
    }
  | {
      name: "cta_click";
      params: { cta_id: string; page_path: string };
    }
  | {
      name: "guide_engagement";
      params: { section_id: string; page_path: string };
    };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  const payload = { ...event.params, event: event.name };

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event.params);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event.name, event.params);
  }
}

export function getGaMeasurementId(): string | undefined {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
}
