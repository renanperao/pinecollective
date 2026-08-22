import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { absoluteUrl, siteConfig } from "@/lib/seo-data"
import { casePages, getCaseBySlug } from "@/lib/cases-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return casePages.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return {}

  const path = `/cases/${c.slug}`

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: absoluteUrl(path),
      type: "article",
      locale: "pt_BR",
      siteName: siteConfig.name,
      images: [{ url: c.cover, width: 1440, height: 900 }],
    },
  }
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  const path = `/cases/${c.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#case`,
    "name": `${c.cliente}: ${c.tagline}`,
    "description": c.resumo,
    "url": absoluteUrl(path),
    "image": absoluteUrl(c.cover),
    "creator": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
    },
    "about": {
      "@type": "Organization",
      "name": c.cliente,
    },
  }

  const outrosCases = casePages.filter((other) => other.slug !== c.slug)

  return (
    <main id="conteudo" className="relative min-h-screen bg-background text-foreground grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteNav />

      <section className="pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Portfólio
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em]">
              <span className="text-primary font-medium">{c.segmento}</span>
              <span className="h-px w-4 bg-border" aria-hidden="true" />
              <span className="text-muted-foreground">{c.local}</span>
              <span className="h-px w-4 bg-border" aria-hidden="true" />
              <span className="text-muted-foreground">{c.ano}</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              {c.cliente}
            </h1>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
              {c.tagline}
            </p>

            {c.liveUrl && (
              <a
                href={c.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 sm:mt-10 inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
              >
                <span className="text-sm font-medium tracking-tight">
                  Ver {c.liveLabel}
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl border border-border/70 overflow-hidden bg-secondary/40">
          <Image
            src={c.cover}
            alt={c.gallery[0]?.alt ?? c.cliente}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <ScrollFadeIn>
        <section className="py-20 sm:py-28 border-t border-border/60 mt-20 sm:mt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  O desafio
                </div>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
                  {c.problema}
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  O que construímos
                </div>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
                  {c.solucao}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-20 sm:py-28 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium mb-10">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Módulos e funcionalidades
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.modulos.map((m) => (
                <li
                  key={m.titulo}
                  className="rounded-2xl border border-border/70 bg-card/40 p-6 transition-colors hover:border-primary/40"
                >
                  <div className="text-sm md:text-base font-medium tracking-tight text-foreground">
                    {m.titulo}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {m.descricao}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      {c.gallery.length > 1 && (
        <ScrollFadeIn>
          <section className="py-20 sm:py-28 border-t border-border/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium mb-10">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                Em produção
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                {c.gallery.map((img) => (
                  <div
                    key={img.src}
                    className="rounded-2xl border border-border/70 overflow-hidden bg-secondary/40"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1280px) 1200px, 100vw"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>
      )}

      <ScrollFadeIn>
        <section className="py-20 sm:py-28 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Resultado
                </div>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/90">
                  {c.resultado}
                </p>
              </div>

              <aside className="lg:col-span-5 rounded-2xl border border-border/70 bg-card/40 p-6 md:p-8">
                <h2 className="text-lg font-medium tracking-tight">Stack técnica</h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs tracking-tight text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1] max-w-3xl mx-auto">
              Quer um ecossistema{" "}
              <span className="font-serif italic font-normal text-primary">
                assim
              </span>{" "}
              pro seu negócio?
            </h2>
            <div className="mt-8 sm:mt-10 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/#diagnostico"
                className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
              >
                <span className="text-sm font-medium tracking-tight">
                  Solicitar diagnóstico
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
            </div>

            {outrosCases.length > 0 && (
              <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-border/60">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
                  Outro case
                </div>
                <ul className="flex flex-col items-center gap-3">
                  {outrosCases.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/cases/${other.slug}`}
                        className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors"
                      >
                        {other.cliente}
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </ScrollFadeIn>

      <SiteFooter />
    </main>
  )
}
