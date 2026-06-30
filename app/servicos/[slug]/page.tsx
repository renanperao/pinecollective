import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check } from "lucide-react"
import { PineLogo } from "@/components/pine-logo"
import { SiteFooter } from "@/components/site-footer"
import {
  absoluteUrl,
  cityPages,
  getServiceBySlug,
  servicePages,
  siteConfig,
} from "@/lib/seo-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const path = `/servicos/${service.slug}`

  return {
    title: `${service.metaTitle} | Pine Collective`,
    description: service.metaDescription,
    keywords: [...service.aliases, ...cityPages.map((city) => city.name)],
    alternates: { canonical: path },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(path),
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const path = `/servicos/${service.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    "name": service.name,
    "alternateName": service.aliases,
    "serviceType": service.name,
    "description": service.summary,
    "url": absoluteUrl(path),
    "provider": {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "areaServed": cityPages.map((city) => ({
      "@type": "Place",
      "name": `${city.name}${city.region !== "BR" ? `, ${city.region}` : ""}`,
    })),
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
              {service.name}
            </div>
            <h1 className="mt-6 text-balance text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              {service.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {service.intent}
            </p>

            <Link
              href="/#diagnostico"
              className="group mt-10 inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span className="text-sm font-medium tracking-tight">
                Solicitar diagnóstico
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>

          <aside className="lg:col-span-5 rounded-2xl border border-border/70 bg-card/40 p-6 md:p-8">
            <h2 className="text-lg font-medium tracking-tight">
              Entregas comuns
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-20 border-t border-border/60 pt-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.01em]">
            Atendemos empresas próximas e remotas
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A Pine Collective tem base em Tijucas, SC, e atende empresas que
            buscam software personalizado, sistema de gestão e CRM personalizado
            em Santa Catarina e região.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {cityPages.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/atendimento/${city.slug}`}
                  className="inline-flex rounded-full border border-border/80 bg-secondary/40 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {city.name}
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
