import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { CONTACT, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Integritet och cookies",
  description:
    "Information om cookies, analys och integritet på Twolight.se — kunskapssajt om ljusdesign för event.",
  path: "/integritet",
});

export default function IntegritetPage() {
  const breadcrumbs = [
    { name: "Twolight", path: "/" },
    { name: "Integritet", path: "/integritet" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display text-3xl text-[#f5f0e8] sm:text-4xl md:text-5xl">
          Integritet och cookies
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#9a958d] sm:mt-6 sm:text-lg">
          {SITE.name} är en kunskapssajt. Vi samlar endast in det som behövs för att
          förbättra innehållet — och endast med ditt samtycke när det gäller analys.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[#f5f0e8]">Cookies vi använder</h2>
          <div className="rounded-sm border border-white/5 bg-[#111118] p-6">
            <h3 className="text-sm font-medium text-[#f5f0e8]">Nödvändiga</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
              Sparar ditt cookieval i webbläsaren så att vi inte frågar vid varje besök.
            </p>
          </div>
          <div className="rounded-sm border border-white/5 bg-[#111118] p-6">
            <h3 className="text-sm font-medium text-[#f5f0e8]">Analys (valfritt)</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
              Google Analytics 4 används för att mäta sidvisningar, guide-engagemang och
              outbound-klick till relaterade tjänster. Laddas endast om du accepterar
              analyscookies.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[#f5f0e8]">Dina val</h2>
          <p className="text-sm leading-relaxed text-[#9a958d]">
            Du kan när som helst ändra ditt val via länken &ldquo;Cookieinställningar&rdquo;
            i sidfoten, eller genom att rensa cookies i webbläsaren.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[#f5f0e8]">Ansvarig</h2>
          <p className="text-sm leading-relaxed text-[#9a958d]">
            {CONTACT.company}
            <br />
            {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
            <br />
            <a href={CONTACT.emailHref} className="text-[#e8b86d] hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </section>

        <p className="mt-12 text-sm text-[#6b6660]">
          <Link href="/" className="hover:text-[#9a958d]">
            ← Tillbaka till startsidan
          </Link>
        </p>
      </div>
    </>
  );
}
