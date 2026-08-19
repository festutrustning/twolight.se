import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date("2026-08-19"),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}
