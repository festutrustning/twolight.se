import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06060a]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg tracking-[0.15em] text-[#f5f0e8]">
              {SITE.name.toUpperCase()}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#9a958d]">
              {SITE.tagline} Inspiration och kunskap om ljusdesign för event.
            </p>
          </div>
          <nav aria-label="Sidfot navigation" className="flex flex-col gap-2">
            <Link href="/eventbelysning" className="text-sm text-[#9a958d] hover:text-[#f5f0e8]">
              Eventbelysning
            </Link>
            <Link href="/guider" className="text-sm text-[#9a958d] hover:text-[#f5f0e8]">
              Guider
            </Link>
            <Link href="/uplights" className="text-sm text-[#9a958d] hover:text-[#f5f0e8]">
              Uplights
            </Link>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-xs text-[#6b6660]">
          © {new Date().getFullYear()} {SITE.name}. En självständig kunskapssajt om ljusdesign.
        </p>
      </div>
    </footer>
  );
}
