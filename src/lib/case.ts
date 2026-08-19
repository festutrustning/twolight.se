import type { OutboundTarget } from "./site";

/**
 * Case study datamodell — INGA publicerade case utan verkligt innehåll.
 * Använd denna struktur när riktiga produktioner dokumenteras.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  eventType: "brollop" | "foretagsevent" | "konferens" | "produktlansering" | "fest";
  venue?: string;
  date?: string;
  summary: string;
  lightingApproach: string;
  beforeDescription: string;
  afterDescription: string;
  techniques: string[];
  images: { src: string; alt: string; caption?: string }[];
  relatedTopics: string[];
  published: boolean;
};

/** Tom lista — inga fabricerade case */
export const CASES: CaseStudy[] = [];

export function getPublishedCases(): CaseStudy[] {
  return CASES.filter((c) => c.published);
}

export type OutboundHandoff = {
  target: OutboundTarget;
  url: string;
  linkText: string;
  context: string;
};

/** Dokumenterade cross-property länkar i MVP */
export const DOCUMENTED_HANDOFFS: OutboundHandoff[] = [
  {
    target: "festutrustning",
    url: "https://festutrustning.se/hyra-uplights",
    linkText: "Se uplights hos Festutrustning",
    context: "/ljussattning-brollop/ — efter bröllopsguide om uplights",
  },
  {
    target: "festutrustning",
    url: "https://festutrustning.se/hyra-uplights",
    linkText: "Hyra uplights — Festutrustning",
    context: "/uplights/ — efter uplights-guide",
  },
  {
    target: "festutrustning",
    url: "https://festutrustning.se/hyra-effektljus",
    linkText: "Se effektljus — Festutrustning",
    context: "/effektljus/ — efter effektljus-guide",
  },
  {
    target: "festutrustning",
    url: "https://festutrustning.se/hyra-haze",
    linkText: "Hyra haze — Festutrustning",
    context: "/haze/ — efter haze-guide",
  },
  {
    target: "skaneevent",
    url: "https://skaneevent.se/eventteknik",
    linkText: "Läs mer hos Skåne Event",
    context: "/ljussattning-foretagsevent/ — B2B produktionshandoff",
  },
];
