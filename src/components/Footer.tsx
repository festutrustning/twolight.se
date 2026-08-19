import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06060a]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.15em] text-[#f5f0e8]">
              {SITE.name.toUpperCase()}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#9a958d]">
              {SITE.tagline} Inspiration och kunskap om ljusdesign för event.
            </p>
          </div>

          <nav aria-label="Sidfot navigation" className="flex flex-col gap-2">
            <p className="text-xs tracking-widest text-[#6b6660] uppercase">Utforska</p>
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

          <address className="not-italic">
            <p className="text-xs tracking-widest text-[#6b6660] uppercase">Kontakt</p>
            <p className="mt-3 text-sm text-[#f5f0e8]">{CONTACT.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
              {CONTACT.street}
              <br />
              {CONTACT.postalCode} {CONTACT.city}
            </p>
            <p className="mt-3">
              <a
                href={CONTACT.phoneHref}
                className="text-sm text-[#9a958d] transition-colors hover:text-[#e8b86d]"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={CONTACT.emailHref}
                className="text-sm text-[#9a958d] transition-colors hover:text-[#e8b86d]"
              >
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>

        <p className="mt-10 border-t border-white/5 pt-6 text-xs text-[#6b6660]">
          © {new Date().getFullYear()} {SITE.name}. En självständig kunskapssajt om ljusdesign.
        </p>
      </div>
    </footer>
  );
}
