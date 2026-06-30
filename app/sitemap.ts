import type { MetadataRoute } from "next"
import { absoluteUrl, cityPages, servicePages } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: absoluteUrl(`/servicos/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cityPages.map((city) => ({
      url: absoluteUrl(`/atendimento/${city.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: absoluteUrl("/privacidade"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/termos"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
