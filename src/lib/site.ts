import {
  FESTUTRUSTNING_DESTINATIONS,
  type FestutrustningLinkKey,
  getFestutrustningUrl,
} from "./festutrustning-links";

export type { FestutrustningLinkKey };

export const SITE = {
  name: "Twolight",
  domain: "twolight.se",
  url: "https://twolight.se",
  tagline: "Ljus förändrar rummet.",
  description:
    "Inspiration och kunskap om ljusdesign för event. Guider om eventbelysning, uplights, scenljus, haze och mer.",
  locale: "sv_SE",
  language: "sv",
} as const;

export const CONTACT = {
  company: "Enta Sverige AB",
  street: "Lockarpsvägen 6B",
  postalCode: "213 76",
  city: "Malmö",
  country: "SE",
  phone: "0766777232",
  phoneDisplay: "076-677 72 32",
  phoneHref: "tel:+46766777232",
  email: "info@festutrustning.se",
  emailHref: "mailto:info@festutrustning.se",
} as const;

export const EXTERNAL = {
  festutrustning: {
    base: "https://festutrustning.se",
    uplights: FESTUTRUSTNING_DESTINATIONS.uplights.url,
    haze: FESTUTRUSTNING_DESTINATIONS.haze.url,
    effectLighting: FESTUTRUSTNING_DESTINATIONS.effectLighting.url,
  },
  skaneevent: {
    base: "https://skaneevent.se",
    eventteknik: "https://skaneevent.se/eventteknik",
    foretagsevent: "https://skaneevent.se/foretagsevent",
  },
} as const;

export { getFestutrustningUrl };

export type OutboundTarget = "festutrustning" | "skaneevent";

export type NavItem = {
  href: string;
  label: string;
};

export const MAIN_NAV: NavItem[] = [
  { href: "/eventbelysning", label: "Eventbelysning" },
  { href: "/uplights", label: "Uplights" },
  { href: "/scenljus", label: "Scenljus" },
  { href: "/guider", label: "Guider" },
];

export const TOPIC_AREAS = [
  {
    href: "/eventbelysning",
    title: "Eventbelysning",
    description: "Grundprinciper för att ljussätta lokaler och scener.",
    gradient: "from-amber-950/80 via-neutral-900 to-neutral-950",
  },
  {
    href: "/uplights",
    title: "Uplights",
    description: "Väggljus som omformar rum, färg och atmosfär.",
    gradient: "from-orange-950/70 via-amber-950/50 to-neutral-950",
  },
  {
    href: "/scenljus",
    title: "Scenljus",
    description: "Frontljus, bakljus och wash för tal, band och shower.",
    gradient: "from-violet-950/60 via-neutral-900 to-neutral-950",
  },
  {
    href: "/ljussattning-brollop",
    title: "Bröllop",
    description: "Från ceremoni till middag — ljus som håller hela dagen.",
    gradient: "from-rose-950/50 via-amber-950/40 to-neutral-950",
  },
  {
    href: "/ljussattning-foretagsevent",
    title: "Företagsevent",
    description: "Från konferensrum till kvällsevent utan att byta lokal.",
    gradient: "from-slate-800/60 via-neutral-900 to-neutral-950",
  },
  {
    href: "/effektljus",
    title: "Effektljus",
    description: "Moving heads, beams och effekter som skapar energi.",
    gradient: "from-fuchsia-950/50 via-violet-950/40 to-neutral-950",
  },
  {
    href: "/haze",
    title: "Haze",
    description: "Varför dimma gör ljus synligt och rummet större.",
    gradient: "from-neutral-800/50 via-neutral-900 to-neutral-950",
  },
] as const;
