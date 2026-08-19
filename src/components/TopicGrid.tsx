import Link from "next/link";
import Image from "next/image";
import { TOPIC_AREAS } from "@/lib/site";
import { getImage, TOPIC_IMAGES } from "@/lib/images";

export function TopicGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TOPIC_AREAS.map((topic) => {
        const imageKey = TOPIC_IMAGES[topic.href];
        const image = imageKey ? getImage(imageKey) : null;

        return (
          <Link
            key={topic.href}
            href={topic.href}
            className="group relative overflow-hidden rounded-sm border border-white/5 bg-[#111118] transition-colors hover:border-[#e8b86d]/30"
          >
            {image && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/70 to-[#08080c]/30" />
              </div>
            )}
            {!image && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-40 transition-opacity group-hover:opacity-60`}
              />
            )}
            <div className="relative p-6">
              <h3 className="font-display text-lg text-[#f5f0e8]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
                {topic.description}
              </p>
              <span className="mt-4 inline-block text-xs tracking-widest text-[#e8b86d] uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Utforska →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
