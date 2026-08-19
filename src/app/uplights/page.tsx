import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { PAGES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const page = PAGES.uplights;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function UplightsPage() {
  return <ContentPageTemplate page={page} />;
}
