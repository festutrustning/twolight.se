/**
 * Verifierade Festutrustning-destinationer (source of truth).
 * Alla outbound-länkar till festutrustning.se ska gå via denna registry.
 *
 * Verifierat mot festutrustning.se/sitemap.xml — 2026-08-19
 */
export const FESTUTRUSTNING_DESTINATIONS = {
  uplights: {
    url: "https://festutrustning.se/produkter/omgivningsbelysning-10-pack-uplights",
    label: "Omgivningsbelysning - 10 Pack (Uplights)",
  },
  haze: {
    url: "https://festutrustning.se/produkter/stor-haze",
    label: "Stor haze",
  },
  effectLighting: {
    url: "https://festutrustning.se/produkter/eventpaket-pro-ljus-allt-du-behover-for-riktig-showkansla",
    label: "Eventpaket Pro Ljus – Allt du behöver för riktig showkänsla",
  },
} as const;

export type FestutrustningLinkKey = keyof typeof FESTUTRUSTNING_DESTINATIONS;

export function getFestutrustningUrl(key: FestutrustningLinkKey): string {
  return FESTUTRUSTNING_DESTINATIONS[key].url;
}

export function getAllFestutrustningUrls(): string[] {
  return Object.values(FESTUTRUSTNING_DESTINATIONS).map((d) => d.url);
}
