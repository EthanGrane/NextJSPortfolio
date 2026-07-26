import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import { ThemeProvider, LayoutProvider } from "@once-ui-system/core";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
  variable: '--font-plus-jakarta', // Opcional: para usar con Tailwind CSS
});

export const metadata: Metadata = {
  title: "Ethan Grane",
  description: "Personal portfolio website showcasing my projects and skills as a Full-Stack Developer.",
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
    >
      <body className="h-full">
        <LayoutProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
