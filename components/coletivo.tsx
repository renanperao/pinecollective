"use client"

import { useEffect, useRef, useState } from "react"
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

const socios = [
  {
    nome: "Renan Perão",
    role: "Founder & Developer",
    foto: "/renan.png",
  },
  {
    nome: "Luis Augusto dos Santos",
    role: "Co-founder & Developer",
    foto: "/luis.png",
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

export function Coletivo() {
  const socioRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeSocio, setActiveSocio] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const canHover = window.matchMedia("(hover: hover)").matches
    if (canHover) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"))
          if (Number.isNaN(idx)) return
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveSocio(idx)
          } else if (!entry.isIntersecting) {
            setActiveSocio((cur) => (cur === idx ? null : cur))
          }
        })
      },
      {
        threshold: [0.25],
        rootMargin: "-5% 0px -25% 0px",
      }
    )

    socioRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="coletivo"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="coletivo-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Quem está por trás
            </div>

            <h2
              id="coletivo-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]"
            >
              Dois sócios.{" "}
              <span className="font-serif italic font-normal text-primary">
                Rede sob demanda
              </span>{" "}
              quando o projeto exige.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
              A Pine é uma dupla de desenvolvedores que assume o projeto do
              começo ao fim. Quando o desafio pede especialistas de fora, como
              arquitetura, dados ou segurança, mobilizamos o coletivo.
            </p>

            <div className="mt-8 sm:mt-10">
              <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground tabular-nums">
                100%
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                Projetos com sócio na linha de frente
              </div>
            </div>

            <Link
              href="#diagnostico"
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

          <div className="lg:col-span-7 flex flex-col gap-8 min-w-0">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socios.map((s, idx) => (
                <li
                  key={s.nome}
                  ref={(el) => {
                    socioRefs.current[idx] = el
                  }}
                  data-idx={idx}
                  data-active={activeSocio === idx}
                  className="group relative rounded-2xl border border-border/70 bg-card/40 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] data-[active=true]:border-primary/50 data-[active=true]:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] transform-gpu"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                    <Image
                      src={s.foto}
                      alt={s.nome}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03] group-data-[active=true]:grayscale-0 group-data-[active=true]:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-base md:text-lg font-medium tracking-tight text-foreground">
                      {s.nome}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {s.role}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="min-w-0">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Coletivo · Rede sob demanda
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Ativa
                </span>
              </div>

              <div
                className="marquee-mask relative overflow-hidden"
                role="region"
                aria-label="Rede de especialistas parceiros"
              >
                <ul className="marquee-track flex w-max gap-3" aria-hidden="true">
                  {[...rede, ...rede].map(({ icon: Icon, area, role }, idx) => (
                    <li
                      key={`${area}-${idx}`}
                      className="flex w-[220px] shrink-0 items-center gap-3 rounded-2xl border border-border/70 bg-card/40 px-4 py-3.5 transition-colors hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary"
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium tracking-tight text-foreground truncate">
                          {area}
                        </div>
                        <div className="text-[11px] text-muted-foreground truncate">
                          {role}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <ul className="sr-only">
                  {rede.map(({ area, role }) => (
                    <li key={area}>
                      {area}: {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
