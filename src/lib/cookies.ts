export const COOKIE_CONSENT_KEY = "twolight-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookieConsent = {
  version: number;
  analytics: boolean;
  updatedAt: string;
};

export type ConsentStatus = "unknown" | "pending" | "set";

export function parseConsent(raw: string | null): CookieConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  return parseConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
}

export function writeConsent(consent: CookieConsent): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("twolight-consent-change"));
}

export function subscribeConsent(callback: () => void): () => void {
  window.addEventListener("twolight-consent-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("twolight-consent-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export function getConsentSnapshot(): CookieConsent | null {
  return readConsent();
}

export function getConsentServerSnapshot(): CookieConsent | null {
  return null;
}

export function hasAnalyticsConsent(consent: CookieConsent | null): boolean {
  return consent?.analytics === true;
}

export function acceptAllConsent(): CookieConsent {
  return {
    version: COOKIE_CONSENT_VERSION,
    analytics: true,
    updatedAt: new Date().toISOString(),
  };
}

export function rejectOptionalConsent(): CookieConsent {
  return {
    version: COOKIE_CONSENT_VERSION,
    analytics: false,
    updatedAt: new Date().toISOString(),
  };
}
