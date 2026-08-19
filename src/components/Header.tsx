import Link from "next/link";
import { SITE, MAIN_NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#08080c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl tracking-[0.2em] text-[#f5f0e8] transition-colors group-hover:text-[#e8b86d]">
            {SITE.name.toUpperCase()}
          </span>
          <span className="text-[10px] tracking-widest text-[#9a958d] uppercase">
            Ljusdesign för event
          </span>
        </Link>
        <nav aria-label="Huvudnavigation" className="hidden items-center gap-8 md:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-[#9a958d] transition-colors hover:text-[#f5f0e8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
