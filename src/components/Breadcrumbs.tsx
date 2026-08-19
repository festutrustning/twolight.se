import Link from "next/link";

type BreadcrumbItem = { name: string; path: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Brödsmulor" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[#9a958d]">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-[#e8b86d]">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-[#f5f0e8]">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
