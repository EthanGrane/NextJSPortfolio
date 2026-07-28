import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import { ThemeProvider, LayoutProvider } from "@once-ui-system/core";

import { FooterSection } from "@/components/footerSection";
import { HeaderSection } from "@/components/headerSection";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
  variable: '--font-plus-jakarta', // Opcional: para usar con Tailwind CSS
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ethangrane.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Grané García",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  sameAs: ["https://github.com/EthanGrane"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="h-full">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <LayoutProvider>
          <ThemeProvider>
            <HeaderSection />
            {children}
            <FooterSection />
          </ThemeProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}