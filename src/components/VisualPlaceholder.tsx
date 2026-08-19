type VisualPlaceholderProps = {
  alt: string;
  gradient?: string;
  aspect?: "hero" | "wide" | "square" | "before-after";
  label?: string;
  priority?: boolean;
};

export function VisualPlaceholder({
  alt,
  gradient = "from-amber-950/40 via-neutral-900 to-neutral-950",
  aspect = "wide",
  label,
  priority = false,
}: VisualPlaceholderProps) {
  const aspectClass = {
    hero: "aspect-[21/9] min-h-[280px] md:min-h-[420px]",
    wide: "aspect-[16/9]",
    square: "aspect-square",
    "before-after": "aspect-[16/10]",
  }[aspect];

  return (
    <figure className="overflow-hidden rounded-sm">
      <div
        role="img"
        aria-label={alt}
        className={`relative w-full bg-gradient-to-br ${gradient} ${aspectClass} ${priority ? "" : ""}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,184,109,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(201,149,106,0.1),transparent_40%)]" />
        {label && (
          <figcaption className="absolute bottom-4 left-4 text-xs tracking-widest text-[#9a958d] uppercase">
            {label}
          </figcaption>
        )}
      </div>
      {label && aspect !== "before-after" && (
        <figcaption className="mt-2 text-xs text-[#6b6660]">{alt}</figcaption>
      )}
    </figure>
  );
}

export function BeforeAfterPlaceholder() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <VisualPlaceholder
        alt="Lokal före ljussättning — neutralt arbetsljus"
        gradient="from-neutral-800 via-neutral-900 to-neutral-950"
        aspect="before-after"
        label="Före"
      />
      <VisualPlaceholder
        alt="Lokal efter ljussättning — varm uplighting och atmosfär"
        gradient="from-amber-950/60 via-orange-950/40 to-neutral-950"
        aspect="before-after"
        label="Efter"
      />
    </div>
  );
}
