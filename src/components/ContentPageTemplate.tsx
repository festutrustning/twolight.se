import Link from "next/link";
import type { ContentPage } from "@/lib/content";
import { getPageImage } from "@/lib/images";
import { Breadcrumbs } from "./Breadcrumbs";
import { HandoffCtaBlock } from "./HandoffCta";
import { ContentImage } from "./ContentImage";
import { JsonLd } from "./JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type ContentPageTemplateProps = {
  page: ContentPage;
};

export function ContentPageTemplate({ page }: ContentPageTemplateProps) {
  const pageImage = getPageImage(page.path);
  const breadcrumbs = [
    { name: "Twolight", path: "/" },
    ...(page.isGuide
      ? [{ name: "Guider", path: "/guider" }]
      : []),
    { name: page.h1, path: page.path },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    ...(page.isGuide
      ? [
          articleSchema({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
        ]
      : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <article className="pb-20">
        <div className="mx-auto max-w-3xl px-6 pt-32">
          <Breadcrumbs items={breadcrumbs} />
          <header>
            <h1 className="font-display text-4xl leading-tight text-[#f5f0e8] md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#9a958d]">{page.intro}</p>
          </header>
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-6">
          {pageImage && (
            <ContentImage image={pageImage} aspect="hero" overlay="gradient" />
          )}
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-16">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-14">
              <h2 className="font-display text-2xl text-[#f5f0e8]">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-[#c4bfb6]">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#9a958d]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#e8b86d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.handoff && (
            <HandoffCtaBlock handoff={page.handoff} pagePath={page.path} />
          )}

          {page.relatedLinks.length > 0 && (
            <nav aria-label="Relaterade ämnen" className="mt-16 border-t border-white/5 pt-10">
              <h2 className="text-xs tracking-widest text-[#6b6660] uppercase">
                Relaterade ämnen
              </h2>
              <ul className="mt-4 space-y-3">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9a958d] transition-colors hover:text-[#e8b86d]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
