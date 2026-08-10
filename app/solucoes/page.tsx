import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Workflow, Cpu, Boxes, LayoutGrid, Globe } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { servicePages } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: "Soluções | Pine Collective",
  description:
    "Software personalizado, sistema de gestão, CRM personalizado, automação de processos, sites e landing pages. Conheça todos os serviços da Pine Collective.",
  alternates: { canonical: "/solucoes" },
}

const iconMap: Record<string, typeof Workflow> = {
  "software-personalizado": LayoutGrid,
  "sistema-de-gestao": Boxes,
  "crm-personalizado": Workflow,
  "automacao-de-processos": Cpu,
  "presenca-digital": Globe,
}

export default function SolucoesPage() {
  return (
    <main
      id="conteudo"
      className="relative min-h-screen bg-background text-foreground grain"
    >
      <SiteNav />

      <section className="pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Soluções
            </div>
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              O que a Pine{" "}
              <span className="font-serif italic font-normal text-primary">
                constrói
              </span>
              .
            </h1>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
              Cinco frentes de trabalho, todas sob medida. Cada projeto começa
              com um diagnóstico e termina com uma ferramenta que sua equipe usa
              todos os dias.
            </p>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium mb-10">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Serviços
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {servicePages.map((service) => {
                const Icon = iconMap[service.slug] ?? Boxes
                return (
                  <li key={service.slug} className="h-full">
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-7 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] transform-gpu"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-110"
                          aria-hidden="true"
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:rotate-45"
                          aria-hidden="true"
                        />
                      </div>

                      <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-snug">
                        {service.shortName}
                      </h2>
                      <p className="mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed flex-1">
                        {service.summary}
                      </p>

                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-3">
                          Ideal quando
                        </div>
                        <p className="text-xs text-foreground/80 leading-relaxed">
                          {service.intent}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Portfólio
                </div>
                <h2 className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]">
                  Alguns projetos{" "}
                  <span className="font-serif italic font-normal text-primary">
                    que já entregamos
                  </span>
                  .
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Cases reais de operação. Nome do cliente é mantido sob acordo de
                confidencialidade quando solicitado.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-border/70 bg-card/20 px-6 py-14 sm:px-10 sm:py-20 text-center">
              <div className="mx-auto max-w-md">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Em breve
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Estamos documentando os cases mais recentes. Enquanto isso, se
                  você quer conversar sobre um projeto em específico ou pedir
                  referências, é só chamar.
                </p>
                <Link
                  href="/contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Pedir referências
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1] max-w-3xl mx-auto">
              Não achou o que precisa?{" "}
              <span className="font-serif italic font-normal text-primary">
                A gente conversa.
              </span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
              Cada operação tem uma dor diferente. Descreve a sua e a gente
              devolve um plano concreto, mesmo que ainda não vire projeto.
            </p>
            <Link
              href="/contato"
              className="group mt-8 sm:mt-10 inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
            >
              <span className="text-sm font-medium tracking-tight">
                Falar com um sócio
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      <SiteFooter />
    </main>
  )
}
