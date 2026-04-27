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
      className="relative py-28 md:py-40 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              O Coletivo
            </div>

            <h2 className="mt-6 text-balance text-4xl md:text-5xl font-medium tracking-[-0.015em] leading-[1.1]">
              Um{" "}
              <span className="font-serif italic font-normal text-primary">
                hub
              </span>{" "}
              de especialistas sêniores, mobilizado sob demanda.
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              Para cada desafio, montamos um time enxuto com as pessoas certas,
              não um time grande com pessoas disponíveis. É assim que entregamos
              profundidade técnica sem o peso de uma agência tradicional.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  +12
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  Anos de operação
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  100%
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  Projetos sob medida
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-card/40 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/70">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Hub · Especialistas ativos
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
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
                    className="flex items-center justify-between px-6 py-5 hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-xs text-muted-foreground w-8">
                        0{idx + 1}
                      </span>
                      <span className="text-base md:text-lg text-foreground tracking-tight">
                        {e.area}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
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
