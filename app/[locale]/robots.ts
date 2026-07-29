import type { MetadataRoute } from "next";

const SITE_URL = "https://ethangrane.github.io/EthanGraneWeb/"; // debe coincidir con el de page.tsx

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}