"use client";

import Link from "next/link";
import { useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

function SettingsPanel({
  initialAnalytics,
  onSave,
  onCancel,
}: {
  initialAnalytics: boolean;
  onSave: (analytics: boolean) => void;
  onCancel: () => void;
}) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialAnalytics);

  return (
    <div className="mt-4 rounded-sm border border-white/10 bg-[#111118] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#f5f0e8]">Analys &amp; statistik</p>
          <p className="mt-1 text-xs leading-relaxed text-[#9a958d]">
            Hjälper oss förstå sidvisningar, guider och outbound-klick. Google Analytics.
          </p>
        </div>
        <label className="flex shrink-0 items-center gap-2 text-xs text-[#9a958d]">
          <input
            type="checkbox"
            checked={analyticsEnabled}
            onChange={(e) => setAnalyticsEnabled(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-transparent accent-[#e8b86d]"
          />
          Tillåt
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onSave(analyticsEnabled)}
          className="rounded-sm border border-[#e8b86d]/40 bg-[#e8b86d]/10 px-4 py-2 text-xs tracking-wide text-[#e8b86d] hover:bg-[#e8b86d]/20"
        >
          Spara val
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-sm border border-white/10 px-4 py-2 text-xs tracking-wide text-[#9a958d] hover:text-[#f5f0e8]"
        >
          Avbryt
        </button>
      </div>
    </div>
  );
}

export function CookieBanner() {
  const {
    showBanner,
    settingsOpen,
    consent,
    acceptAll,
    rejectOptional,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  if (!showBanner && !settingsOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-[#0c0c12]/95 p-6 backdrop-blur-md md:p-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p id="cookie-consent-title" className="text-sm font-medium text-[#f5f0e8]">
            Cookies på twolight.se
          </p>
          <p id="cookie-consent-desc" className="mt-2 text-sm leading-relaxed text-[#9a958d]">
            Vi använder cookies för att mäta trafik och förstå hur sidan används.
            Nödvändiga cookies sparar ditt val. Analyscookies (Google Analytics) laddas
            endast om du godkänner dem.{" "}
            <Link href="/integritet" className="text-[#e8b86d] underline-offset-2 hover:underline">
              Läs mer
            </Link>
          </p>

          {settingsOpen && (
            <SettingsPanel
              key={consent?.updatedAt ?? "initial"}
              initialAnalytics={consent?.analytics ?? true}
              onSave={savePreferences}
              onCancel={closeSettings}
            />
          )}
        </div>

        {!settingsOpen && (
          <div className="flex flex-wrap gap-3 md:shrink-0">
            <button
              type="button"
              onClick={openSettings}
              className="rounded-sm border border-white/10 px-5 py-2.5 text-sm text-[#9a958d] transition-colors hover:border-white/20 hover:text-[#f5f0e8]"
            >
              Anpassa
            </button>
            <button
              type="button"
              onClick={rejectOptional}
              className="rounded-sm border border-white/10 px-5 py-2.5 text-sm text-[#9a958d] transition-colors hover:border-white/20 hover:text-[#f5f0e8]"
            >
              Endast nödvändiga
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-sm border border-[#e8b86d]/40 bg-[#e8b86d]/10 px-5 py-2.5 text-sm text-[#e8b86d] transition-colors hover:bg-[#e8b86d]/20"
            >
              Acceptera alla
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className="text-sm text-[#9a958d] transition-colors hover:text-[#e8b86d]"
    >
      Cookieinställningar
    </button>
  );
}
