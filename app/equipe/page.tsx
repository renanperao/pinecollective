import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Palette,
  Target,
  Megaphone,
  PenLine,
  Network,
  Database,
  Search,
  ShieldCheck,
  Compass,
} from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export const metadata: Metadata = {
  title: "Equipe | Pine Collective",
  description:
    "Conheça Renan Perão e Luis Augusto dos Santos, sócios-desenvolvedores da Pine Collective, e a rede de especialistas mobilizada sob demanda em cada projeto.",
  alternates: { canonical: "/equipe" },
}

const socios = [
  {
    nome: "Renan Perão",
    role: "Founder & Developer",
    foto: "/renan.png",
    bio: "Fundador da Pine Collective. Desenvolve software sob medida desde os primeiros anos da faculdade, com foco em sistemas internos, CRM personalizado e integrações entre operação e vendas. Assina diretamente cada projeto do começo ao fim.",
  },
  {
    nome: "Luis Augusto dos Santos",
    role: "Co-founder & Developer",
    foto: "/luis.png",
    bio: "Co-fundador da Pine Collective. Especialista em digitalização de processos e automação de fluxos operacionais. Conduz o diagnóstico técnico junto ao cliente e responde pela arquitetura e execução das soluções.",
  },
]

const rede = [
  { icon: Palette, area: "Designer", role: "UI & Produto" },
  { icon: Target, area: "Gestor de Tráfego", role: "Google & Meta Ads" },
  { icon: Megaphone, area: "Social Media", role: "Estratégia & Conteúdo" },
  { icon: PenLine, area: "Copywriter", role: "Conversão & SEO" },
  { icon: Network, area: "Arquitetura", role: "Sistemas distribuídos" },
  { icon: Database, area: "Dados", role: "BI & Integrações" },
  { icon: Search, area: "SEO Técnico", role: "Indexação & performance" },
  { icon: ShieldCheck, area: "Segurança", role: "LGPD & compliance" },
  { icon: Compass, area: "Produto", role: "Discovery & UX" },
]

export default function EquipePage() {
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
              Equipe
            </div>
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Dois sócios na linha de frente.{" "}
              <span className="font-serif italic font-normal text-primary">
                Uma rede
              </span>{" "}
              atrás de cada projeto.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
              A Pine é uma consultoria boutique conduzida por Renan Perão e Luis
              Augusto dos Santos. Quando o desafio pede especialistas de fora,
              como design, tráfego pago, arquitetura, dados ou segurança,
              mobilizamos o coletivo.
            </p>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium mb-10">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Sócios
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {socios.map((s) => (
                <li
                  key={s.nome}
                  className="group relative rounded-2xl border border-border/70 bg-card/40 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] transform-gpu"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
                    <Image
                      src={s.foto}
                      alt={s.nome}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="text-xl md:text-2xl font-medium tracking-tight text-foreground">
                      {s.nome}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-primary">
                      {s.role}
                    </div>
                    <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {s.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Rede sob demanda
                </div>
                <h2 className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]">
                  Especialistas que{" "}
                  <span className="font-serif italic font-normal text-primary">
                    entram
                  </span>{" "}
                  quando o projeto exige.
                </h2>
                <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
                  A dupla assume cada projeto do começo ao fim. Quando o
                  desafio pede profundidade específica, chamamos os
                  especialistas certos da nossa rede de parceiros. Você paga só
                  pelo que o projeto precisa, sem estrutura de agência.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {rede.map(({ icon: Icon, area, role }) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/40 px-4 py-4 transition-colors hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium tracking-tight text-foreground">
                          {area}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {role}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="py-24 sm:py-32 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1] max-w-3xl mx-auto">
              Quer conversar com{" "}
              <span className="font-serif italic font-normal text-primary">
                quem escreve o código?
              </span>
            </h2>
            <div className="mt-8 sm:mt-10 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
              >
                <span className="text-sm font-medium tracking-tight">
                  Iniciar conversa
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <SiteFooter />
    </main>
  )
}
