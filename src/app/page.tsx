import Link from "next/link";
import { TopicGrid } from "@/components/TopicGrid";
import { BeforeAfterImages, HeroBackground } from "@/components/ContentImage";
import { getImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const heroImage = getImage("hero");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75svh] items-end overflow-hidden pt-20 sm:min-h-[85vh] sm:pt-24">
        <div className="absolute inset-0">
          <HeroBackground image={heroImage} />
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#e8b86d]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-20 pb-12 sm:px-6 sm:pt-32 sm:pb-20">
          <p className="text-[10px] tracking-[0.15em] text-[#e8b86d] uppercase sm:text-xs sm:tracking-[0.3em]">
            Inspiration &amp; kunskap
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-[#f5f0e8] sm:mt-4 sm:text-5xl md:text-7xl lg:text-8xl">
            {SITE.name}
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl text-[#c4bfb6] sm:mt-6 sm:text-2xl md:text-3xl">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#9a958d] sm:text-base">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/eventbelysning"
              className="rounded-sm border border-[#e8b86d]/40 bg-[#e8b86d]/10 px-6 py-3 text-center text-sm tracking-wide text-[#e8b86d] transition-colors hover:bg-[#e8b86d]/20 sm:text-left"
            >
              Utforska eventbelysning
            </Link>
            <Link
              href="/guider"
              className="rounded-sm border border-white/10 px-6 py-3 text-center text-sm tracking-wide text-[#9a958d] transition-colors hover:border-white/20 hover:text-[#f5f0e8] sm:text-left"
            >
              Läs guider
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-t border-white/5 bg-[#06060a] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-[#f5f0e8] sm:text-3xl md:text-4xl">
            Samma lokal. Helt annan känsla.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9a958d]">
            Ljus förändrar hur vi upplever rum — djup, färg, fokus och atmosfär.
            Skillnaden mellan vitt arbetsljus och genomtänkt ljussättning är det vi utforskar.
          </p>
          <div className="mt-10">
            <BeforeAfterImages />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-[#f5f0e8] sm:text-3xl md:text-4xl">
            Utforska ljusdesign
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#9a958d]">
            Från uplights och scenljus till haze och effekter — praktisk kunskap
            för dig som planerar event.
          </p>
          <div className="mt-12">
            <TopicGrid />
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="border-t border-white/5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <blockquote className="font-display text-xl leading-relaxed text-[#c4bfb6] sm:text-2xl md:text-3xl">
            &ldquo;Vi säljer inte ljus — vi hjälper dig förstå vad ljus kan göra med ett rum.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-[#6b6660]">
            Twolight är en självständig kunskapssajt om ljusdesign för event.
          </p>
        </div>
      </section>
    </>
  );
}
