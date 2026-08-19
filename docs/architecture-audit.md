# Architecture Audit — Twolight.se Pre-Build

**Datum:** 2026-08-19

## A. Existing Architecture

| Aspekt | Status |
|--------|--------|
| Repository | Tom vid start — nytt Next.js 16-projekt skapat |
| Befintlig kod | Ingen |
| Deployment config | Ingen (ej deployat) |
| DNS config i repo | Ingen |
| Festutrustning/Skaneevent repos lokalt | Ej tillgängliga — ingen återanvändning av komponenter möjlig |
| Git | Initierat av create-next-app |

## B. Vald Teknisk Stack

| Beslut | Val | Motivering |
|--------|-----|------------|
| Framework | **Next.js 16 (App Router)** | SSG/SSR, Metadata API, sitemap/robots routes |
| Rendering | **Static (SSG)** för content pages | Full HTML till Googlebot, snabb TTFB |
| Styling | **Tailwind CSS v4** | Snabb iteration, dark editorial design |
| Content | **Typed TypeScript content** | Ingen MDX-overhead för MVP; enkel att migrera |
| Images | **CSS gradient placeholders** | Inga fabricerade eventbilder |
| Analytics | **GA4 via gtag** | Standard, custom events för handoff |
| Deployment | **Vercel-ready** (rekommenderat) | Zero-config för Next.js |

## C. Routing Plan

```
/                           → Homepage (brand + topic intro)
/eventbelysning/            → Pillar page
/ljussattning-brollop/      → Guide
/ljussattning-foretagsevent/→ Guide
/uplights/                  → Topic
/scenljus/                  → Topic
/effektljus/                → Topic
/haze/                      → Topic
/guider/                    → Guide index
/case/                      → Förberedd struktur (ej publicerad utan riktiga case)
/sitemap.xml                → Dynamisk sitemap
/robots.txt                 → Dynamisk robots
```

## D. SEO Implementation Plan

- Unique title + meta description per sida via `buildMetadata()`
- Self-referencing canonical på alla sidor
- `index, follow` på publikt innehåll
- OpenGraph + Twitter cards
- JSON-LD: Organization, WebSite, BreadcrumbList, Article (guider)
- Korrekt H1-hierarki (en H1 per sida)
- Internlänkning via related links + topic grid

## E. Performance Plan

- Static generation — ingen client-only SEO
- System fonts + Google Fonts (display + body)
- Lazy loading på below-fold placeholders
- Inga tunga animationer
- Minimal JS bundle (analytics client component endast)

## F. Case Structure (framtida)

Datamodell förberedd i `src/lib/case.ts` — inga publicerade case utan verkligt innehåll.

## G. Historical Domain Findings

Se [historical-domain-audit.md](./historical-domain-audit.md).
