import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const especialistas = [
  { area: "Arquitetura", role: "Sistemas distribuídos" },
  { area: "Produto", role: "Discovery & UX" },
  { area: "Dados", role: "BI & integrações" },
  { area: "Engenharia", role: "Web, mobile & APIs" },
  { area: "Automação", role: "Workflows & RPA" },
  { area: "Segurança", role: "LGPD & compliance" },
]

export function Coletivo() {
  return (
    <section
      id="coletivo"
      className="relative py-20 sm:py-28 md:py-40 border-t border-border/60"
      aria-labelledby="coletivo-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              O Coletivo
            </div>

            <h2
              id="coletivo-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.015em] leading-[1.1]"
            >
              Um{" "}
              <span className="font-serif italic font-normal text-primary">
                hub
              </span>{" "}
              de especialistas sêniores, mobilizado sob demanda.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              Para cada desafio, montamos um time enxuto com as pessoas certas,
              não um time grande com pessoas disponíveis. É assim que entregamos
              profundidade técnica sem o peso de uma agência tradicional.
            </p>

            <div className="mt-8 sm:mt-10">
              <div>
                <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground tabular-nums">
                  100%
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  Projetos sob medida
                </div>
              </div>
            </div>

            <Link
              href="#diagnostico"
              className="group mt-8 sm:mt-10 inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
            >
              <span className="text-sm font-medium tracking-tight">
                Falar com um especialista
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-card/40 overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border/70">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Hub · Especialistas ativos
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Disponível agora
                </span>
              </div>

              <ul className="divide-y divide-border/60">
                {especialistas.map((e, idx) => (
                  <li
                    key={e.area}
                    className="group flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      <span className="font-mono text-xs text-muted-foreground w-6 sm:w-8 shrink-0 tabular-nums transition-colors group-hover:text-primary">
                        0{idx + 1}
                      </span>
                      <span className="text-base md:text-lg text-foreground tracking-tight truncate">
                        {e.area}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground text-right shrink-0">
                      {e.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
