import Link from "next/link";
import { TOPIC_AREAS } from "@/lib/site";

export function TopicGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TOPIC_AREAS.map((topic) => (
        <Link
          key={topic.href}
          href={topic.href}
          className="group relative overflow-hidden rounded-sm border border-white/5 bg-[#111118] p-6 transition-colors hover:border-[#e8b86d]/30"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-40 transition-opacity group-hover:opacity-60`}
          />
          <div className="relative">
            <h3 className="font-display text-lg text-[#f5f0e8]">{topic.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#9a958d]">
              {topic.description}
            </p>
            <span className="mt-4 inline-block text-xs tracking-widest text-[#e8b86d] uppercase opacity-0 transition-opacity group-hover:opacity-100">
              Utforska →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
