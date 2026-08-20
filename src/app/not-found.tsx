import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 text-center sm:px-6 sm:pt-24">
      <p className="text-[10px] tracking-[0.15em] text-[#e8b86d] uppercase sm:text-xs sm:tracking-[0.3em]">404</p>
      <h1 className="mt-4 font-display text-3xl text-[#f5f0e8] sm:text-4xl">Sidan hittades inte</h1>
      <p className="mt-4 max-w-md text-sm text-[#9a958d]">
        Sidan du söker finns inte. Utforska våra guider om ljusdesign istället.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-[#e8b86d]/40 px-6 py-3 text-sm text-[#e8b86d] hover:bg-[#e8b86d]/10"
      >
        Till startsidan
      </Link>
    </div>
  );
}
