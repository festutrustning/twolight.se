import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { PAGES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const page = PAGES["ljussattning-foretagsevent"];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function LjussattningForetagseventPage() {
  return <ContentPageTemplate page={page} />;
}
