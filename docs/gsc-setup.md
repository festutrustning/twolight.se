# Google Search Console Setup — Twolight.se

## 1. Verifiera domän

**Rekommenderad metod:** DNS TXT-post hos domänregistrar

Alternativt HTML-tag via `layout.tsx` metadata (lägg till vid verifiering):

```tsx
verification: {
  google: "VERIFICATION_CODE_HERE",
},
```

## 2. Skicka sitemap

Efter PROD-deploy:

```
https://twolight.se/sitemap.xml
```

Verifiera i GSC → Sitemaps att alla MVP-URL:er discoveras.

## 3. Förväntade indexerbara URL:er (MVP)

| URL | Typ |
|-----|-----|
| `/` | Homepage |
| `/eventbelysning/` | Pillar |
| `/ljussattning-brollop/` | Guide |
| `/ljussattning-foretagsevent/` | Guide |
| `/uplights/` | Topic |
| `/scenljus/` | Topic |
| `/effektljus/` | Topic |
| `/haze/` | Topic |
| `/guider/` | Index |

## 4. robots.txt

Genereras dynamiskt på `/robots.txt`:

- Allow: `/`
- Sitemap: `https://twolight.se/sitemap.xml`
- Ingen blockering av publikt innehåll

## 5. Baseline (D0)

Vid launch, dokumentera i [growth-experiment.md](./growth-experiment.md):

- [ ] Domän verifierad i GSC
- [ ] Sitemap submitted
- [ ] 0 indexerade sidor (ny property, ingen antagen historisk authority)
- [ ] Screenshot av Coverage report

## 6. Query Monitoring

Skapa GSC-filter för Twolight primary clusters:

- `ljusdesign`
- `ljussättning`
- `eventbelysning`
- `uplight`
- `scenljus`
- `haze`
- `bröllopsbelysning`

**Undvik** att optimera för:

- `hyra` + produkt (Festutrustning)
- `eventteknik`, `eventproduktion` (Skaneevent)

## 7. URL Inspection

Efter deploy, kör URL Inspection på:

1. `/` (homepage)
2. `/eventbelysning/`
3. `/uplights/`

Bekräfta: rendered HTML, canonical self, index allowed.
