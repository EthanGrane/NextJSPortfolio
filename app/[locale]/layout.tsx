import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import { ThemeProvider, LayoutProvider } from "@once-ui-system/core";

import { FooterSection } from "@/components/footerSection";
import { HeaderSection } from "@/components/headerSection";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
});

const SITE_URL = "https://www.ethangrane.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Grané García",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ethan Grane",
  description: "...",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  other: {
    "color-scheme": "dark",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutProvider>
            <ThemeProvider theme="dark">
              <HeaderSection />
              {children}
              <FooterSection />
            </ThemeProvider>
          </LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}