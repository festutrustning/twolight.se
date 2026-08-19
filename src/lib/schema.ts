import { CONTACT, SITE } from "./site";
import { absoluteUrl } from "./seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: absoluteUrl("/logo.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      postalCode: CONTACT.postalCode,
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneHref.replace("tel:", ""),
      email: CONTACT.email,
      contactType: "customer service",
      areaServed: "SE",
      availableLanguage: "Swedish",
    },
    legalName: CONTACT.company,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "sv-SE",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2026-08-19",
  dateModified = "2026-08-19",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified,
    inLanguage: "sv-SE",
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  };
}
