# Twolight.se

Inspiration och kunskap om ljusdesign för event.

## Stack

- Next.js 16 (App Router, SSG)
- TypeScript
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 for analytics (optional pre-launch)

## Documentation

- [Architecture Audit](docs/architecture-audit.md)
- [Query Ownership](docs/query-ownership.md)
- [Growth Experiment](docs/growth-experiment.md)
- [GSC Setup](docs/gsc-setup.md)
- [Historical Domain Audit](docs/historical-domain-audit.md)

## Deployment

Recommended: Vercel with domain `twolight.se`.

After deploy:
1. Verify domain in Google Search Console
2. Submit sitemap: `https://twolight.se/sitemap.xml`
3. Set GA4 measurement ID

## Guardrails

- Do NOT modify Festutrustning.se or Skaneevent.se
- No fabricated case studies or testimonials
- No historical claims about old TWOLight entity
- Cross-property links are contextual only (see `src/lib/case.ts`)
