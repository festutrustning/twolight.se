export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  creditUrl?: string;
};

/** Gratis bilder från Unsplash (Unsplash License) — lagrade lokalt i /public/images */
export const IMAGES = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Publik på konsert med färgstarka scenljus och ljusstrålar",
    width: 1600,
    height: 1067,
    credit: "Unsplash / Nicolás Flor",
    creditUrl: "https://unsplash.com/photos/cP5YX8I_yCQ",
  },
  beforeVenue: {
    src: "/images/before-venue.jpg",
    alt: "Tom konferenssal med neutralt arbetsljus — lokal före ljussättning",
    width: 900,
    height: 601,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/37526070297c",
  },
  afterVenue: {
    src: "/images/after-venue.jpg",
    alt: "Event med dukade bord, dekoration och varm atmosfär — lokal efter ljussättning",
    width: 900,
    height: 601,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/ef04bbd61622",
  },
  eventbelysning: {
    src: "/images/eventbelysning.jpg",
    alt: "Publik på konsert med scenbelysning och ljus över eventlokalen",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/QOajY0MNp8Y",
  },
  uplights: {
    src: "/images/uplights.jpg",
    alt: "Konsert med färgad scenbelysning och ljusstrålar — uplighting och atmosfär",
    width: 1200,
    height: 900,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/7a46d19cd819",
  },
  scenljus: {
    src: "/images/scenljus.jpg",
    alt: "Musiker på scen med färgstarka scenljus och rörligt ljus",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/a3eb161ffa5f",
  },
  brollop: {
    src: "/images/brollop.jpg",
    alt: "Bröllopsdukning med blommor och ljus dekoration i festlokal",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/715cb0215aed",
  },
  foretagsevent: {
    src: "/images/foretagsevent.jpg",
    alt: "Konferens och företagsevent med presentation och publik",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/178a50c2df87",
  },
  effektljus: {
    src: "/images/effektljus.jpg",
    alt: "Utomhusevent med scen och belysning — effektljus och atmosfär",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/f7f57925c3b4",
  },
  haze: {
    src: "/images/haze.jpg",
    alt: "Konsertscen med kraftfull belysning och synliga ljusstrålar i rummet",
    width: 1400,
    height: 933,
    credit: "Unsplash / Howen",
    creditUrl: "https://unsplash.com/photos/bo8XlhXNrE8",
  },
  guider: {
    src: "/images/guider.jpg",
    alt: "Eventproduktion med scen, ljus och teknik för större evenemang",
    width: 1400,
    height: 933,
    credit: "Unsplash",
    creditUrl: "https://unsplash.com/photos/379afb476865",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;

export const PAGE_IMAGES: Record<string, ImageKey> = {
  "/eventbelysning": "eventbelysning",
  "/ljussattning-brollop": "brollop",
  "/ljussattning-foretagsevent": "foretagsevent",
  "/uplights": "uplights",
  "/scenljus": "scenljus",
  "/effektljus": "effektljus",
  "/haze": "haze",
  "/guider": "guider",
};

export const TOPIC_IMAGES: Record<string, ImageKey> = {
  "/eventbelysning": "eventbelysning",
  "/uplights": "uplights",
  "/scenljus": "scenljus",
  "/ljussattning-brollop": "brollop",
  "/ljussattning-foretagsevent": "foretagsevent",
  "/effektljus": "effektljus",
  "/haze": "haze",
};

export function getImage(key: ImageKey): ImageAsset {
  return IMAGES[key];
}

export function getPageImage(path: string): ImageAsset | undefined {
  const key = PAGE_IMAGES[path];
  return key ? IMAGES[key] : undefined;
}
