import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";

import { siteSeo } from "@/constants/seo";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const fontSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fontHeading = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cliniquemaimounatoure.sn"),
  title: {
    default: siteSeo.defaultTitle,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteSeo.defaultTitle,
    description: siteSeo.description,
    locale: siteSeo.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
