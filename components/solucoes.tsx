import { Workflow, Cpu, Boxes } from "lucide-react"

const items = [
  {
    icon: Workflow,
    label: "01",
    title: "Digitalização de processos",
    description:
      "Transformamos sua planilha confusa ou processo manual em um sistema de gestão fluido e inteligente.",
  },
  {
    icon: Cpu,
    label: "02",
    title: "Automação inteligente",
    description:
      "Eliminamos tarefas repetitivas para que sua equipe foque no que realmente traz lucro.",
  },
  {
    icon: Boxes,
    label: "03",
    title: "Soluções customizadas",
    description:
      "Nada de ferramentas genéricas. Criamos o que o seu nicho exige e o que o seu cliente espera.",
  },
]

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="relative py-28 md:py-36 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Onde resolvemos
            </div>
            <h2 className="mt-6 text-balance text-4xl md:text-5xl font-medium tracking-[-0.015em] leading-[1.1]">
              Três frentes,{" "}
              <span className="font-serif italic font-normal text-primary">
                um único compromisso:
              </span>{" "}
              destravar sua operação.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Cada projeto começa com um diagnóstico real do seu gargalo — e
            termina com uma ferramenta que sua equipe usa todos os dias.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, label, title, description }) => (
            <li
              key={label}
              className="group relative rounded-2xl border border-border/70 bg-card/40 p-7 md:p-8 transition-colors hover:border-primary/50 hover:bg-card/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary transition-colors group-hover:border-primary/60">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {label}
                </span>
              </div>

              <h3 className="mt-10 text-xl md:text-2xl font-medium tracking-[-0.01em] leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                {description}
              </p>

              <a
                href="#diagnostico"
                className="mt-8 flex items-center gap-2 text-xs text-muted-foreground/80 group-hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4"
              >
                <span className="h-px w-6 bg-current" />
                Saiba mais
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
