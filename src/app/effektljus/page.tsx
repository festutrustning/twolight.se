import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { PAGES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const page = PAGES.effektljus;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function EffektljusPage() {
  return <ContentPageTemplate page={page} />;
}
