import type { MetadataRoute } from "next"
import { absoluteUrl, cityPages, servicePages } from "@/lib/seo-data"
import { casePages } from "@/lib/cases-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/solucoes"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/equipe"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
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
    ...casePages.map((c) => ({
      url: absoluteUrl(`/cases/${c.slug}`),
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
