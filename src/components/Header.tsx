"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, MAIN_NAV } from "@/lib/site";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="text-current"
    >
      {open ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M3 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#08080c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group flex min-w-0 flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="truncate font-display text-lg tracking-[0.12em] text-[#f5f0e8] transition-colors group-hover:text-[#e8b86d] sm:text-xl sm:tracking-[0.2em]">
            {SITE.name.toUpperCase()}
          </span>
          <span className="truncate text-[10px] tracking-widest text-[#9a958d] uppercase">
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

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/10 text-[#f5f0e8] transition-colors hover:border-white/20 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Stäng meny" : "Öppna meny"}</span>
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobilnavigation"
          className="border-t border-white/5 bg-[#08080c]/95 px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-sm px-3 py-3 text-base text-[#9a958d] transition-colors hover:bg-white/5 hover:text-[#f5f0e8]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
