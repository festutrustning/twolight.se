import Image from "next/image";
import { getImage, type ImageAsset } from "@/lib/images";

type AspectVariant = "hero" | "wide" | "square" | "before-after" | "card";

type ContentImageProps = {
  image: ImageAsset;
  aspect?: AspectVariant;
  label?: string;
  priority?: boolean;
  overlay?: "dark" | "gradient" | "none";
  className?: string;
};

const aspectClasses: Record<AspectVariant, string> = {
  hero: "aspect-[21/9] min-h-[280px] md:min-h-[420px]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
  "before-after": "aspect-[16/10]",
  card: "aspect-[4/3]",
};

export function ContentImage({
  image,
  aspect = "wide",
  label,
  priority = false,
  overlay = "gradient",
  className = "",
}: ContentImageProps) {
  return (
    <figure className={`overflow-hidden rounded-sm ${className}`}>
      <div className={`relative w-full ${aspectClasses[aspect]}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            aspect === "hero"
              ? "(max-width: 768px) 100vw, 1280px"
              : aspect === "card"
                ? "(max-width: 640px) 100vw, 400px"
                : "(max-width: 768px) 100vw, 900px"
          }
          priority={priority}
          className="object-cover"
        />
        {overlay === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080c]/80 via-[#08080c]/20 to-transparent" />
        )}
        {overlay === "dark" && (
          <div className="absolute inset-0 bg-[#08080c]/30" />
        )}
        {label && (
          <figcaption className="absolute bottom-4 left-4 text-xs tracking-widest text-[#f5f0e8] uppercase drop-shadow-md">
            {label}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export function BeforeAfterImages() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ContentImage
        image={getImage("beforeVenue")}
        aspect="before-after"
        label="Före"
        overlay="dark"
      />
      <ContentImage
        image={getImage("afterVenue")}
        aspect="before-after"
        label="Efter"
        overlay="gradient"
      />
    </div>
  );
}

type HeroBackgroundProps = {
  image: ImageAsset;
};

export function HeroBackground({ image }: HeroBackgroundProps) {
  return (
    <>
      <Image
        src={image.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080c]/60 via-[#08080c]/80 to-[#08080c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,184,109,0.08),transparent_60%)]" />
    </>
  );
}
