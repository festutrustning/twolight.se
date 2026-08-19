"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  acceptAllConsent,
  hasAnalyticsConsent,
  readConsent,
  rejectOptionalConsent,
  subscribeConsent,
  writeConsent,
  type CookieConsent,
} from "@/lib/cookies";

type CookieConsentContextValue = {
  consent: CookieConsent | null;
  isReady: boolean;
  showBanner: boolean;
  analyticsAllowed: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (analytics: boolean) => void;
  openSettings: () => void;
  closeSettings: () => void;
  settingsOpen: boolean;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setIsReady(true);
    return subscribeConsent(() => setConsent(readConsent()));
  }, []);

  const persist = useCallback((next: CookieConsent) => {
    writeConsent(next);
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist(acceptAllConsent()), [persist]);
  const rejectOptional = useCallback(() => persist(rejectOptionalConsent()), [persist]);

  const savePreferences = useCallback(
    (analytics: boolean) => {
      persist({
        version: 1,
        analytics,
        updatedAt: new Date().toISOString(),
      });
    },
    [persist]
  );

  const value = useMemo(
    () => ({
      consent,
      isReady,
      showBanner: isReady && consent === null,
      analyticsAllowed: isReady && hasAnalyticsConsent(consent),
      acceptAll,
      rejectOptional,
      savePreferences,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
      settingsOpen,
    }),
    [consent, isReady, acceptAll, rejectOptional, savePreferences, settingsOpen]
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
