import type { Metadata } from "next";
import { SITE } from "./site";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageSeo): Metadata {
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const fullTitle =
    path === "/" ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: fullTitle,
      description,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
