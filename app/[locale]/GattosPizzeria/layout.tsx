import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";

import { ASSET_BASE } from "@/components/gattos/config";

const display = Fredoka({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-gp-display",
    display: "swap",
});

const body = Nunito({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-gp-body",
    display: "swap",
});

const TITLE = "Gatto's Pizzeria — Cozy pizza cooking game";
const DESCRIPTION =
    "Bake authentic Neapolitan pizzas in your grandpa's restaurant! A first-person cozy cooking game coming to Steam in February 2027. Wishlist now.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/GattosPizzeria" },
    icons: { icon: `${ASSET_BASE}/icon-256.png`, apple: `${ASSET_BASE}/icon-256.png` },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "/GattosPizzeria",
        type: "website",
        locale: "en_US",
        images: [{ url: `${ASSET_BASE}/og-image.jpg`, width: 920, height: 430, alt: "Gatto's Pizzeria" }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [`${ASSET_BASE}/og-image.jpg`],
    },
};

// The game page is English only. It renders the same content under every
// locale prefix (e.g. /es/GattosPizzeria) and the canonical URL points search
// engines to /GattosPizzeria. Do not redirect here: the next-intl proxy sends
// Spanish browsers to /es/..., so redirecting back causes an infinite loop.
export default function GattosPizzeriaLayout({ children }: { children: React.ReactNode }) {
    return <div className={`${display.variable} ${body.variable}`}>{children}</div>;
}
