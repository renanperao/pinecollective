import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, MapPin } from "lucide-react"
import { PineLogo } from "@/components/pine-logo"
import { SiteFooter } from "@/components/site-footer"
import {
  absoluteUrl,
  getCityBySlug,
  servicePages,
  cityPages,
  siteConfig,
} from "@/lib/seo-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return cityPages.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const path = `/atendimento/${city.slug}`

  return {
    title: `${city.metaTitle} | Pine Collective`,
    description: city.metaDescription,
    keywords: [
      `software personalizado ${city.name}`,
      `sistema de gestão ${city.name}`,
      `CRM personalizado ${city.name}`,
      ...city.aliases,
    ],
    alternates: { canonical: path },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: absoluteUrl(path),
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const path = `/atendimento/${city.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#regional-service`,
    "name": `Software personalizado em ${city.name}`,
    "serviceType": [
      "software personalizado",
      "sistema de gestão",
      "CRM personalizado",
      "automação de processos",
    ],
    "description": city.metaDescription,
    "url": absoluteUrl(path),
    "provider": {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "areaServed": {
      "@type": "Place",
      "name": `${city.name}, ${city.region}`,
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
          <Link href="/" className="inline-flex items-center gap-2.5 text-foreground hover:text-primary transition-colors">
            <PineLogo className="h-6 w-6 text-primary" />
            <span className="text-sm tracking-[-0.01em] font-medium">
              Pine<span className="text-muted-foreground"> Collective</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Atendimento regional
            </div>
            <h1 className="mt-6 text-balance text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              Software personalizado, sistema de gestão e CRM para empresas de{" "}
              <span className="font-serif italic font-normal text-primary">
                {city.name}.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              {city.nearby}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Atuamos com diagnóstico, arquitetura e desenvolvimento de sistemas
              sob medida para empresas que precisam organizar vendas, operação,
              dados e atendimento.
            </p>

            <Link
              href="/#diagnostico"
              className="group mt-10 inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span className="text-sm font-medium tracking-tight">
                Falar sobre minha operação
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>

          <aside className="lg:col-span-5 rounded-2xl border border-border/70 bg-card/40 p-6 md:p-8">
            <div className="flex items-center gap-3 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium tracking-tight">
                {city.name}, {city.region}
              </span>
            </div>
            <h2 className="mt-6 text-lg font-medium tracking-tight">
              Principais buscas atendidas
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>software personalizado em {city.name}</li>
              <li>sistema de gestão em {city.name}</li>
              <li>CRM personalizado em {city.name}</li>
              <li>automação de processos para empresas em {city.name}</li>
            </ul>
          </aside>
        </div>

        <section className="mt-20 border-t border-border/60 pt-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.01em]">
            Soluções para empresas de {city.name}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 px-5 py-4 transition-colors hover:border-primary/60 hover:bg-secondary/60"
                >
                  <span>
                    <span className="block text-sm font-medium tracking-tight">
                      {service.shortName}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {service.aliases.slice(0, 2).join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
