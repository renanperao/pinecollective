import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  BadgeCheck,
  GraduationCap,
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
import { siteConfig } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: "Equipe | Pine Collective",
  description:
    "Conheça Renan Perão e Luis Augusto dos Santos, sócios-desenvolvedores da Pine Collective: formação, certificações, stack de trabalho e a rede de especialistas mobilizada sob demanda em cada projeto.",
  alternates: { canonical: "/equipe" },
}

type Socio = {
  nome: string
  role: string
  foto: string
  local: string
  bio: string
  formacao: {
    curso: string
    instituicao: string
    periodo: string
    status?: string
  }
  certificacoes: {
    nome: string
    emissor?: string
    ano?: string
  }[]
  stack: string[]
}

const socios: Socio[] = [
  {
    nome: "Renan Perão",
    role: "Founder & Developer",
    foto: "/renan.png",
    local: "Biguaçu, SC",
    bio: "Fundador da Pine Collective. Desenvolve software sob medida desde os primeiros anos da faculdade, com foco em sistemas internos, CRM personalizado e integrações entre operação e vendas. Passou por backoffice em fintech, pela Liga de Investimentos da UFPR e por anos de venda consultiva, o que faz todo projeto aqui começar pelo negócio e não pela tecnologia. Certificado CPA-20 pela ANBIMA, entende produtos financeiros a fundo e leva essa proficiência para o software que constrói para o mercado financeiro. Assina diretamente cada entrega do começo ao fim.",
    formacao: {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "FIAP",
      periodo: "Graduação",
    },
    certificacoes: [
      { nome: "CPA-20", emissor: "ANBIMA" },
      { nome: "Montagem e Manutenção de Redes" },
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "SQL",
      "Integrações & APIs",
    ],
  },
  {
    nome: "Luis Augusto dos Santos",
    role: "Co-founder & Developer",
    foto: "/luis.png",
    local: "Pato Branco, PR",
    bio: "Co-fundador da Pine Collective. São quatro anos entre implantação, suporte de sistemas e desenvolvimento full stack, da linha de frente com o usuário até o código em produção. Passou por Grupo Limber Software, Bitz Softwares, Xpert e E-Dialoga Sistemas antes da Pine. Essa bagagem é o que torna a digitalização de processos e a automação de fluxos operacionais o terreno dele. Conduz o diagnóstico técnico junto ao cliente e responde pela arquitetura e execução das soluções.",
    formacao: {
      curso: "Sistemas de Informação",
      instituicao: "Centro Universitário de Pato Branco (UNIDEP)",
      periodo: "2024 a 2026",
      status: "Em andamento",
    },
    certificacoes: [
      { nome: "OCI AI Foundations Associate", emissor: "Oracle", ano: "2025" },
    ],
    stack: [
      "Python",
      "PHP",
      "Laravel",
      "SQL",
      "JavaScript",
      "Flutter",
      "Dart",
      "HTML & CSS",
    ],
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
  const equipeSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/equipe#webpage`,
    "name": "Equipe | Pine Collective",
    "url": `${siteConfig.url}/equipe`,
    "about": { "@id": `${siteConfig.url}/#organization` },
    "mainEntity": socios.map((s) => ({
      "@type": "Person",
      "name": s.nome,
      "jobTitle": s.role,
      "image": `${siteConfig.url}${s.foto}`,
      "worksFor": { "@id": `${siteConfig.url}/#organization` },
      "knowsAbout": s.stack,
      ...(s.formacao.status
        ? {}
        : {
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": s.formacao.instituicao,
            },
          }),
      ...(s.certificacoes.length
        ? {
            "hasCredential": s.certificacoes.map((c) => ({
              "@type": "EducationalOccupationalCredential",
              "name": c.nome,
              "credentialCategory": "certificate",
              ...(c.emissor
                ? {
                    "recognizedBy": {
                      "@type": "Organization",
                      "name": c.emissor,
                    },
                  }
                : {}),
            })),
          }
        : {}),
    })),
  }

  return (
    <main
      id="conteudo"
      className="relative min-h-screen bg-background text-foreground grain"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equipeSchema) }}
      />

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

            <ul className="flex flex-col gap-6 sm:gap-8">
              {socios.map((s, idx) => (
                <li
                  key={s.nome}
                  className="group grid lg:grid-cols-12 rounded-3xl border border-border/70 bg-card/40 overflow-hidden transition-colors duration-300 hover:border-primary/40"
                >
                  <div
                    className={`relative lg:col-span-5 ${
                      idx % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden bg-secondary/40">
                      <Image
                        src={s.foto}
                        alt={s.nome}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover grayscale [@media(hover:none)]:grayscale-0 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/40"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                      {s.nome}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em]">
                      <span className="text-primary">{s.role}</span>
                      <span
                        className="h-px w-4 bg-border"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{s.local}</span>
                    </div>

                    <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {s.bio}
                    </p>

                    <div className="mt-7 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          <GraduationCap
                            className="h-3.5 w-3.5 text-primary"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          Formação
                        </div>
                        <div className="mt-2.5 text-sm font-medium tracking-tight text-foreground">
                          {s.formacao.curso}
                        </div>
                        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {s.formacao.instituicao}
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] text-muted-foreground/70">
                            {s.formacao.periodo}
                          </span>
                          {s.formacao.status && (
                            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-primary">
                              {s.formacao.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {s.certificacoes.map((c) => (
                        <div
                          key={c.nome}
                          className="rounded-2xl border border-border/70 bg-secondary/30 p-4"
                        >
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            <BadgeCheck
                              className="h-3.5 w-3.5 text-primary"
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                            Certificação
                          </div>
                          <div className="mt-2.5 text-sm font-medium tracking-tight text-foreground">
                            {c.nome}
                          </div>
                          {c.emissor && (
                            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {c.emissor}
                            </div>
                          )}
                          {c.ano && (
                            <div className="mt-3 font-mono text-[11px] text-muted-foreground/70">
                              {c.ano}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Stack
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {s.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs tracking-tight text-foreground/80"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
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
