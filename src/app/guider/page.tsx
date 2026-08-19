import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentImage } from "@/components/ContentImage";
import { GUIDES } from "@/lib/content";
import { getImage, getPageImage } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Guider om ljussättning och eventbelysning",
  description:
    "Praktiska guider om ljussättning för bröllop, företagsevent och mer. Konkret kunskap om eventbelysning.",
  path: "/guider",
});

export default function GuiderPage() {
  const breadcrumbs = [
    { name: "Twolight", path: "/" },
    { name: "Guider", path: "/guider" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display text-4xl text-[#f5f0e8] md:text-5xl">Guider</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#9a958d]">
          Djupgående guider om ljussättning — skrivna för dig som planerar event,
          inte för tekniker som redan kan allt.
        </p>

        <div className="mt-10 -mx-6 max-w-none px-0 sm:mx-0 sm:max-w-none sm:px-0">
          <ContentImage image={getImage("guider")} aspect="wide" overlay="gradient" />
        </div>

        <ul className="mt-12 space-y-6">
          {GUIDES.map((guide) => {
            const image = getPageImage(guide.path);
            return (
              <li key={guide.path}>
                <Link
                  href={guide.path}
                  className="group block overflow-hidden rounded-sm border border-white/5 bg-[#111118] transition-colors hover:border-[#e8b86d]/30"
                >
                  {image && (
                    <div className="relative aspect-[21/9] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="font-display text-xl text-[#f5f0e8] group-hover:text-[#e8b86d]">
                      {guide.h1}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
                      {guide.description}
                    </p>
                    <span className="mt-4 inline-block text-xs tracking-widest text-[#e8b86d] uppercase">
                      Läs guide →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <nav aria-label="Relaterade ämnen" className="mt-16 border-t border-white/5 pt-10">
          <h2 className="text-xs tracking-widest text-[#6b6660] uppercase">
            Utforska även
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/eventbelysning" className="text-sm text-[#9a958d] hover:text-[#e8b86d]">
                Eventbelysning — grundprinciper
              </Link>
            </li>
            <li>
              <Link href="/uplights" className="text-sm text-[#9a958d] hover:text-[#e8b86d]">
                Uplights
              </Link>
            </li>
            <li>
              <Link href="/scenljus" className="text-sm text-[#9a958d] hover:text-[#e8b86d]">
                Scenljus
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
