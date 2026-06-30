import type { MetadataRoute } from "next"
import { absoluteUrl, siteConfig } from "@/lib/seo-data"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  }
}
