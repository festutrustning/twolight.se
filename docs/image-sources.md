# Bildkällor — Twolight.se

Alla bilder på siten är **gratis stockfoton från Unsplash** (Unsplash License).
Bilderna lagras lokalt i `/public/images/` för prestanda och tillförlitlighet.

| Fil | Användning | Källa |
|-----|-----------|-------|
| hero.jpg | Startsida hero | [Unsplash](https://unsplash.com/photos/cP5YX8I_yCQ) |
| before-venue.jpg | Före/efter — före | [Unsplash](https://unsplash.com/photos/37526070297c) |
| after-venue.jpg | Före/efter — efter | [Unsplash](https://unsplash.com/photos/ef04bbd61622) |
| eventbelysning.jpg | Eventbelysning | [Unsplash](https://unsplash.com/photos/QOajY0MNp8Y) |
| uplights.jpg | Uplights | [Unsplash](https://unsplash.com/photos/7a46d19cd819) |
| scenljus.jpg | Scenljus | [Unsplash](https://unsplash.com/photos/a3eb161ffa5f) |
| brollop.jpg | Bröllopsguide | [Unsplash](https://unsplash.com/photos/715cb0215aed) |
| foretagsevent.jpg | Företagsevent | [Unsplash](https://unsplash.com/photos/178a50c2df87) |
| effektljus.jpg | Effektljus | [Unsplash](https://unsplash.com/photos/f7f57925c3b4) |
| haze.jpg | Haze | [Unsplash](https://unsplash.com/photos/bo8XlhXNrE8) |
| guider.jpg | Guider-index | [Unsplash](https://unsplash.com/photos/379afb476865) |

## Ersätta med egna bilder

När riktiga eventbilder finns tillgängliga:

1. Lägg filer i `/public/images/`
2. Uppdatera `src/lib/images.ts` (alt-text, src)
3. Behåll beskrivande alt-texter för tillgänglighet och SEO

## Teknik

- `next/image` med `fill`, `sizes`, lazy loading
- Inga layout shifts — aspect ratio via CSS
- Bildregister: `src/lib/images.ts`
