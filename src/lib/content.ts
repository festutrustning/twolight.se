import type { FestutrustningLinkKey } from "./site";

export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type FestutrustningHandoff = {
  heading: string;
  body: string;
  linkText: string;
  target: "festutrustning";
  festutrustningLink: FestutrustningLinkKey;
};

type SkaneeventHandoff = {
  heading: string;
  body: string;
  linkText: string;
  target: "skaneevent";
  linkUrl: string;
};

export type HandoffCta = FestutrustningHandoff | SkaneeventHandoff;

export type ContentPage = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  relatedLinks: { href: string; label: string }[];
  handoff?: HandoffCta;
  isGuide?: boolean;
};

export const PAGES: Record<string, ContentPage> = {
  eventbelysning: {
    slug: "eventbelysning",
    path: "/eventbelysning",
    title: "Eventbelysning — grundprinciper för lokaler och scener",
    h1: "Eventbelysning",
    description:
      "Lär dig hur professionell eventbelysning förändrar lokaler, scener och atmosfär. Praktiska principer om färgtemperatur, placering och ljussättning.",
    intro:
      "En lokal med vitt arbetsljus kan kännas som en konferenssal även efter att dukningen är klar. Släcker du takljuset och bygger rummet med varma uplights längs väggarna förändras både djup, färg och fokus — utan att du byter möbler eller dekoration.",
    sections: [
      {
        id: "tre-lager",
        heading: "Tre lager av ljus",
        paragraphs: [
          "Professionell eventbelysning bygger sällan på en enda ljuskälla. Istället arbetar man med lager: basljus som ger orientering, accentljus som lyfter detaljer och effektljus som skapar energi eller fokus.",
          "Basljus kan vara dämpat takljus, wash över dansgolvet eller mjuka uplights längs väggarna. Accentljus riktas mot talare, band, tårtbord eller produkt. Effektljus — som beams eller strobes — används sparsamt och med tydligt syfte.",
        ],
      },
      {
        id: "fargtemperatur",
        heading: "Färgtemperatur avgör känslan",
        paragraphs: [
          "Kelvin (K) beskriver om ljuset känns varmt eller kallt. Takljus i kontorslokaler ligger ofta runt 4000–5000K och känns neutralt till kallt. Bröllop och middagar vill ofta ha 2700–3200K — varmt, inbjudande, hudvänligt.",
          "Blanda inte varma och kalla källor i samma vy utan avsikt. Om scenen är kall (5000K) och väggarna varma (3000K) kan ansikten se ojämna ut på foto och video.",
        ],
        list: [
          "2700–3200K — varmt, intimt, bröllop och middag",
          "3500–4000K — neutralt, konferens och presentation",
          "5000K+ — kallt, retail eller hög skärpa — sällan önskvärt på kvällsevent",
        ],
      },
      {
        id: "placering",
        heading: "Placering före effekt",
        paragraphs: [
          "Fler armaturer med lägre intensitet ger oftast bättre resultat än få starka punkter. Uplights placeras typiskt 0,5–1,5 meter från väggen, riktade uppåt så att ljuset tvättar taket mjukt.",
          "Tänk på vad som ska vara i fokus. Vill du att gästerna ska titta mot scenen? Då ska scenen vara ljusast. Vill du att rummet ska kännas omslutande? Arbeta med sidoljus och undvik bländande frontljus i sittriktning.",
        ],
      },
      {
        id: "sakerhet",
        heading: "Säkerhet och praktik",
        paragraphs: [
          "Kablage ska ligga säkert — särskilt på dansgolv och gångvägar. Armaturer som står på golvet behöver skydd mot att trampa sönder eller välta. Värmeutveckling från traditionella PAR-spots ska beaktas nära tyg och dekoration.",
          "Dimma och rök kräver godkännande och ventilation. I många lokaler gäller strikta regler — kontrollera alltid med lokalvärden innan haze eller rök används.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/uplights", label: "Uplights — väggljus och atmosfär" },
      { href: "/scenljus", label: "Scenljus — front, fill och bakljus" },
      { href: "/haze", label: "Haze — när dimma gör ljuset synligt" },
      { href: "/effektljus", label: "Effektljus — beams och rörelse" },
    ],
  },

  "ljussattning-brollop": {
    slug: "ljussattning-brollop",
    path: "/ljussattning-brollop",
    title: "Ljussättning bröllop — från ceremoni till fest",
    h1: "Ljussättning bröllop",
    description:
      "Guide till bröllopsbelysning: uplights, dansgolv, ceremoni och middag. Hur ljus förändrar lokalen genom dagen och kvällen.",
    intro:
      "Bröllopsparet vill ofta att samma lokal ska kännas annorlunda klockan 14, 18 och 23. Ljussättningen är det som gör övergången — inte att byta hela dekorationen.",
    sections: [
      {
        id: "ceremoni",
        heading: "Ceremoni — mjukhet och fokus",
        paragraphs: [
          "Under ceremonin vill man att blicken hamnar på paret, inte på teknik. Undvik starkt frontljus rakt i ansiktet — använd istället sidoljus eller bakljus som ramar in.",
          "Om ceremonin sker i dagsljus behöver ljusdesignern planera för skiftet mot kväll. Var ska uplights stå så de inte syns på bilder? Var behövs extra fill när solen försvinner?",
        ],
      },
      {
        id: "middag",
        heading: "Middag — värme vid borden",
        paragraphs: [
          "På middagen räcker sällan ett takljus. Varm uplighting längs väggarna (2700–3000K) ger inramning. Små bordsljus eller ljusstakar kompletterar — men tänk på att de ska synas, inte konkurrera med kameran.",
          "Tak som är höga och mörka absorberar ljus. Fler uplights med lägre vinkel ger mer 'glow' i rummet än att bara blända uppåt.",
        ],
      },
      {
        id: "fest",
        heading: "Fest — energi utan att förstöra atmosfär",
        paragraphs: [
          "När dansgolvet öppnar kan effektljus och rörliga heads tillföra energi. Nyckeln är övergång: dämpa uplights långsamt, tänd wash över golvet, låt effekter komma in gradvis.",
          "Bröllopsgäster är ofta känsliga för strobes och blinders. Håll effekterna musikstyrda och undvik plötsliga vita blixtar under slow songs.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/uplights", label: "Uplights på bröllop" },
      { href: "/haze", label: "Haze för dansgolv" },
      { href: "/eventbelysning", label: "Grundprinciper eventbelysning" },
    ],
    handoff: {
      heading: "Vill du hyra uplights till bröllopet?",
      body: "När du vet vilken känsla du vill skapa kan du jämföra utrustning och paket.",
      linkText: "Se uplights hos Festutrustning",
      target: "festutrustning",
      festutrustningLink: "uplights",
    },
    isGuide: true,
  },

  "ljussattning-foretagsevent": {
    slug: "ljussattning-foretagsevent",
    path: "/ljussattning-foretagsevent",
    title: "Ljussättning företagsevent — från konferens till kväll",
    h1: "Ljussättning företagsevent",
    description:
      "Så ljussätter du företagsevent: presentationer, mingel och kvällsprogram i samma lokal. Teknik som förändrar rummet utan att byta venue.",
    intro:
      "Företagsevent börjar ofta med presentation i dagsljus och avslutas med middag eller fest. Ljussättningen måste stödja både läsbarhet på scen och stämning vid borden — utan att gästerna märker att tekniken 'byter läge'.",
    sections: [
      {
        id: "presentation",
        heading: "Presentation — läsbarhet först",
        paragraphs: [
          "På scen behöver talare tillräckligt med frontljus för att ansikten ska vara jämna på foto och video. Fill-ljus från sidan mjukar upp skuggor. Undvik att blända publiken — vinkla armaturer så att de inte skjuter rakt ut i salen.",
          "Projektion och LED-skärm kräver kontrollerat ambientljus. För mycket uplight på vägg bakom skärm kan sänka kontrasten. Planera vilka zoner som dimmas under presentation.",
        ],
      },
      {
        id: "mingel",
        heading: "Mingel — öppenhet och flöde",
        paragraphs: [
          "Vid mingel vill man att rummet känns luftigt men inte kliniskt. Neutral till varm färgtemperatur (3200–3800K) fungerar ofta. Markera bar, buffé och fotozon med accentljus istället för att höja hela taket.",
          "Gångvägar ska vara tillräckligt ljusa för säkerhet — särskilt om glas och trappor ingår.",
        ],
      },
      {
        id: "kvall",
        heading: "Kväll — samma lokal, ny identitet",
        paragraphs: [
          "Övergången till kvällsevent är klassisk ljusdesign-uppgift: dämpa vit wash, växla till varmare ton, kanske lägg till discokula eller subtila beams för dansgolv.",
          "Varumärkesfärger kan integreras via LED uplights — men håll mättnaden kontrollerad så att mat och dekoration fortfarande ser naturliga ut.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/scenljus", label: "Scenljus för tal och panel" },
      { href: "/eventbelysning", label: "Eventbelysning — grunderna" },
      { href: "/haze", label: "Haze vid produktlansering" },
    ],
    handoff: {
      heading: "Behöver företaget hjälp med hela teknikproduktionen?",
      body: "Från scen och ljud till ljus och rigg — produktion i Skåne.",
      linkText: "Läs mer hos Skåne Event",
      linkUrl: "https://skaneevent.se/eventteknik",
      target: "skaneevent",
    },
    isGuide: true,
  },

  uplights: {
    slug: "uplights",
    path: "/uplights",
    title: "Uplights — inspiration och praktik för event",
    h1: "Uplights",
    description:
      "Allt om uplighting för event: placering, färg, antal armaturer och hur väggljus förvandlar lokaler. Inspiration utan uthyrningsspråk.",
    intro:
      "En uplight står på golvet och skjuter ljus uppåt längs vägg, pelare eller draperi. Det är ett av de mest effektiva sätten att ge en anonym lokal karaktär — utan att bygga om rummet.",
    sections: [
      {
        id: "effekt",
        heading: "Vad uplights faktiskt gör",
        paragraphs: [
          "Uplights tvättar vertikala ytor och låter taket 'glöda'. De skapar djup genom att separera vägg från golv och ger färg åt ytor som annars är vita eller grå.",
          "Jämfört med takmonterad belysning pekar uplights bort från gästernas ögon — färre bländningar, mjukare skuggor under bord och ansikten.",
        ],
      },
      {
        id: "placering-antal",
        heading: "Placering och antal",
        paragraphs: [
          "Regel of thumb: en uplight var 2–4 meter längs väggen i mellanstora salar. Hörn behöver ofta extra enhet — annars blir de mörka och rummet känns 'ihopklämt'.",
          "Avstånd från vägg: 30–80 cm för smala ljusstrålar, längre ut om armaturen har bred optik. Testa alltid mot faktisk väggfärg — mörka väggar absorberar, ljusa reflekterar.",
        ],
        list: [
          "Bröllopssal 80 gäster: 12–20 uplights",
          "Konferens/mingel: 8–16 beroende på perimeter",
          "Produktlansering med varumärkesfärg: RGBW LED uplights, dmx-styrda",
        ],
      },
      {
        id: "farg",
        heading: "Färgval",
        paragraphs: [
          "Varm amber och champagne fungerar på de flesta middagar. DJ- eller klubbstämning kan kräva djupare färger — men undvik mättad röd/grön som färgar hudtoner oattraktivt.",
          "RGBW-armaturer ger flexibilitet men kräver någon som kan programmera övergångar. Statisk varmvit är ofta bättre än dåligt schemalagd färgcykel.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ljussattning-brollop", label: "Uplights på bröllop" },
      { href: "/eventbelysning", label: "Eventbelysning" },
      { href: "/ljussattning-foretagsevent", label: "Företagsevent" },
    ],
    handoff: {
      heading: "Behöver du uplights?",
      body: "När du vet antal, färg och placering kan du hitta rätt utrustning.",
      linkText: "Hyra uplights — Festutrustning",
      target: "festutrustning",
      festutrustningLink: "uplights",
    },
  },

  scenljus: {
    slug: "scenljus",
    path: "/scenljus",
    title: "Scenljus — guide till frontljus, fill och bakljus",
    h1: "Scenljus",
    description:
      "Lär dig ljussätta en scen: frontljus, fill, backlight och wash. Praktisk guide för tal, band och shower på event.",
    intro:
      "Scenljus handlar om att styra var publiken tittar och hur talare eller artister framträder. Fel vinkel ger hårda skuggor under näsan; rätt setup ger dimension utan bländning.",
    sections: [
      {
        id: "tre-punkts",
        heading: "Tre-punktsbelysning — grunden",
        paragraphs: [
          "Key light (huvudljus) står snett framför och åt sidan — typiskt 30–45° horisontellt och 30–45° vertikalt. Fill ljusar upp skuggor från motsatt sida med lägre intensitet. Backlight separerar subjekt från bakgrund.",
          "På event utan rigg ovanför scen kan detta lösas med stativ i golvet eller sidetårn. Höjd är avgörande: för lågt key light ger 'skrämmande' upplysning under hakan.",
        ],
      },
      {
        id: "wash",
        heading: "Wash över scenyta",
        paragraphs: [
          "Wash-armaturer täcker större yta med jämn belysning — bra för paneler, band med flera medlemmar eller dans. Zoom- eller fresnel-armaturer låter dig justera fältstorlek.",
          "Färg på wash bör matcha ambientljus i rummet. En scen som är 5600K kall medan salen är 3000K varm ser oprofessionell ut på bild.",
        ],
      },
      {
        id: "band",
        heading: "Band och shower",
        paragraphs: [
          "Musik kräver dynamik: frontwash för ansikten, sidoljus för gitarrer och trummor, bakljus och haze för synliga strålar. Moving heads ger rörelse men ska följa musiken — inte blinka slumpmässigt.",
          "Säkerhetsavstånd till gäster gäller särskilt för lasereffekter och strobes. Kolla alltid lokala regler och eventförsäkring.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/effektljus", label: "Effektljus och moving heads" },
      { href: "/haze", label: "Haze för synliga strålar" },
      { href: "/ljussattning-foretagsevent", label: "Scen på företagsevent" },
    ],
  },

  effektljus: {
    slug: "effektljus",
    path: "/effektljus",
    title: "Effektljus för event — beams, moving heads och mer",
    h1: "Effektljus",
    description:
      "Guide till effektljus på event: moving heads, beams, strobes och blinders. När effekter hjälper — och när de stör.",
    intro:
      "Effektljus är det lager som många gäster minns — men också det som lättast blir för mycket. Skillnaden ligger i timing, musikstyrning och att veta när rummet redan har tillräcklig energi.",
    sections: [
      {
        id: "moving-heads",
        heading: "Moving heads",
        paragraphs: [
          "Moving heads kan pan/tilt, zooma och byta färg/gobo. De används för att skapa rörelse i rummet — svepande beams, utvalda spot på dansgolv eller logo-projektion via gobo.",
          "På företagsevent: håll rörelser långsamma och färger diskreta. På klubb eller avslutningsfest: sync till beat via DMX eller timecode.",
        ],
      },
      {
        id: "beams",
        heading: "Beams och synlighet",
        paragraphs: [
          "Smala ljusstrålar syns bäst med haze i luften. Utan dimma försvinner effekten — gästen ser bara fläckar på vägg. Med rätt mängd haze blir strålarna tredimensionella.",
          "Antal beams vs wash: beams skapar struktur och energi; wash ger bas. Börja med wash, lägg beams ovanpå.",
        ],
      },
      {
        id: "strobes-blinders",
        heading: "Strobes och blinders",
        paragraphs: [
          "Strobes och blinders är kraftfulla. Använd dem vid drop eller chorus — inte under tal eller middag. Många lokaler och DJ:er har krav på att strobes ska kunna stängas av snabbt.",
          "Blinders (intens vit front) ger 'arena-känsla' i korta blixtar. Längre än någon sekund blir det obehagligt.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/scenljus", label: "Scenljus" },
      { href: "/haze", label: "Haze" },
      { href: "/eventbelysning", label: "Eventbelysning" },
    ],
    handoff: {
      heading: "Ska du använda effektljus på nästa event?",
      body: "Moving heads och effekter kräver rätt modeller för lokalens storlek.",
      linkText: "Se effektljus — Festutrustning",
      target: "festutrustning",
      festutrustningLink: "effectLighting",
    },
  },

  haze: {
    slug: "haze",
    path: "/haze",
    title: "Haze och dimma — hur ljus blir synligt på event",
    h1: "Haze",
    description:
      "Förstå haze och dimma på event: skillnad mot rök, ventilation, säkerhet och hur dimma gör strålar och wash synliga.",
    intro:
      "Utan partiklar i luften syns knappt ljusstrålar — ögat ser bara det som träffar ytor. Haze fyller rummet med mikroskopisk dimma som fångar ljus utan att se ut som tung rök.",
    sections: [
      {
        id: "haze-vs-rok",
        heading: "Haze vs rök",
        paragraphs: [
          "Haze-maskiner producerar fin, jämn dimma som hänger kvar länge och är svår att se direkt. Rökmaskiner ger tät vit rökpuff — bra för effekt, dåligt för långvarig beam-synlighet.",
          "Konferenslokaler och hotell har ofta rökdetektorer. Haze kan fortfarande trigga larm — alltid koordinera med lokal och brandskydd.",
        ],
      },
      {
        id: "niva",
        heading: "Rätt nivå",
        paragraphs: [
          "För mycket haze grumlar luften och irriterar ögon. För lite syns inga beams. Proffs kör maskin i intervaller och låter ventilation sprida jämnt.",
          "På foto och video: lätt haze softar bakgrund och ger ljus 'kropp'. Helt rent luft kan se platt ut trots bra ljus.",
        ],
      },
      {
        id: "sakerhet",
        heading: "Säkerhet och tillstånd",
        paragraphs: [
          "Använd vätska avsedd för maskinen — fel vätska luktar och kan ge hälsobesvär. Placera maskin där gäster inte står i direktstråle.",
          "Ventilation och max kapacitet per lokal är inte förhandlingsbart. Plan B utan haze ska alltid finnas.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/effektljus", label: "Effektljus och beams" },
      { href: "/scenljus", label: "Scenljus" },
      { href: "/ljussattning-brollop", label: "Haze på bröllopsfest" },
    ],
    handoff: {
      heading: "Behöver du haze-utrustning?",
      body: "Rätt maskin och vätska för lokalens storlek och regler.",
      linkText: "Hyra haze — Festutrustning",
      target: "festutrustning",
      festutrustningLink: "haze",
    },
  },
};

export const GUIDES = [
  PAGES["ljussattning-brollop"],
  PAGES["ljussattning-foretagsevent"],
];

export const ALL_ROUTES = [
  { path: "/", changefreq: "weekly" as const, priority: 1 },
  ...Object.values(PAGES).map((p) => ({
    path: p.path,
    changefreq: "monthly" as const,
    priority: p.path.includes("ljussattning") ? 0.9 : 0.8,
  })),
  { path: "/guider", changefreq: "monthly" as const, priority: 0.7 },
];

export function getPageByPath(path: string): ContentPage | undefined {
  return Object.values(PAGES).find((p) => p.path === path);
}
