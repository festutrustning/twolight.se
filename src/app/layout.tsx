import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/cookie-consent/CookieBanner";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CookieConsentProvider>
          <JsonLd data={[organizationSchema(), websiteSchema()]} />
          <Analytics />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
