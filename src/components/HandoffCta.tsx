"use client";

import type { HandoffCta } from "@/lib/content";
import { getFestutrustningUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type HandoffCtaProps = {
  handoff: HandoffCta;
  pagePath: string;
};

function resolveHandoffUrl(handoff: HandoffCta): string {
  if (handoff.target === "festutrustning") {
    return getFestutrustningUrl(handoff.festutrustningLink);
  }
  return handoff.linkUrl;
}

export function HandoffCtaBlock({ handoff, pagePath }: HandoffCtaProps) {
  const linkUrl = resolveHandoffUrl(handoff);
  const eventName =
    handoff.target === "festutrustning"
      ? "outbound_click_festutrustning"
      : "outbound_click_skaneevent";

  return (
    <aside className="mt-16 rounded-sm border border-[#e8b86d]/20 bg-[#111118] p-8">
      <h2 className="font-display text-xl text-[#f5f0e8]">{handoff.heading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#9a958d]">{handoff.body}</p>
      <a
        href={linkUrl}
        rel="noopener noreferrer"
        target="_blank"
        onClick={() =>
          trackEvent({
            name: eventName,
            params: {
              link_url: linkUrl,
              link_text: handoff.linkText,
              page_path: pagePath,
            },
          })
        }
        className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[#e8b86d] transition-colors hover:text-[#f5d092]"
      >
        {handoff.linkText}
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
