import { Workflow, Cpu, Boxes } from "lucide-react"

function DigitalizacaoPreview() {
  return (
    <div className="rounded-xl border border-border/50 bg-background/60 p-3 mb-6">
      <div className="text-[9px] font-mono text-muted-foreground/50 mb-2 uppercase tracking-widest">Gestão de pedidos</div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-5 rounded border border-border/50 bg-secondary/40 px-2 flex items-center">
            <div className="h-1.5 w-12 rounded bg-muted-foreground/20" />
          </div>
          <div className="h-5 rounded border border-border/50 bg-secondary/40 px-2 flex items-center">
            <div className="h-1.5 w-8 rounded bg-muted-foreground/20" />
          </div>
        </div>
        <div className="h-5 rounded border border-border/50 bg-secondary/40 px-2 flex items-center">
          <div className="h-1.5 w-20 rounded bg-muted-foreground/20" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-1">
            {["Novo", "Em andamento", "Concluído"].map((s, i) => (
              <div key={s} className={`px-1.5 py-0.5 rounded text-[7px] ${i === 0 ? "bg-primary/20 text-primary" : "bg-border/30 text-muted-foreground/50"}`}>
                {s}
              </div>
            ))}
          </div>
          <div className="h-4 w-10 rounded-full bg-primary/70" />
        </div>
      </div>
    </div>
  )
}

function AutomacaoPreview() {
  const steps = ["Trigger", "Filtro", "E-mail", "CRM"]
  return (
    <div className="rounded-xl border border-border/50 bg-background/60 p-3 mb-6">
      <div className="text-[9px] font-mono text-muted-foreground/50 mb-2 uppercase tracking-widest">Fluxo de automação</div>
      <div className="flex items-center gap-1 mb-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1 flex-1 min-w-0">
            <div className={`flex-1 min-w-0 px-1.5 py-1 rounded text-[8px] text-center truncate border ${
              i === 0 ? "border-primary/50 bg-primary/10 text-primary" : "border-border/40 bg-secondary/30 text-muted-foreground/60"
            }`}>
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="text-[8px] text-muted-foreground/30 shrink-0">›</div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { label: "Novo pedido recebido", done: true },
          { label: "Confirmação enviada", done: true },
          { label: "Estoque atualizado", done: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${item.done ? "bg-primary" : "bg-border/50"}`} />
            <div className={`text-[8px] ${item.done ? "text-muted-foreground/70" : "text-muted-foreground/30"}`}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomizadaPreview() {
  return (
    <div className="rounded-xl border border-border/50 bg-background/60 overflow-hidden mb-6">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-border/40 bg-secondary/40">
        <div className="h-1.5 w-1.5 rounded-full bg-border/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-border/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-border/60" />
        <div className="ml-1 h-2.5 flex-1 rounded bg-background/50" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="h-2 w-10 bg-muted-foreground/20 rounded" />
          <div className="flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className="h-2 w-5 bg-muted-foreground/15 rounded" />)}
          </div>
        </div>
        <div className="h-3 w-3/4 bg-foreground/25 rounded mb-1.5" />
        <div className="h-2 w-1/2 bg-muted-foreground/20 rounded mb-3" />
        <div className="h-5 w-20 rounded-full bg-primary/60 mb-3" />
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg border border-border/40 bg-secondary/30 p-1.5">
              <div className="h-1.5 w-4 bg-primary/30 rounded mb-1" />
              <div className="h-1.5 w-8 bg-muted-foreground/20 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    icon: Workflow,
    label: "01",
    title: "Digitalização de processos",
    description:
      "Transformamos sua planilha confusa ou processo manual em um sistema de gestão fluido e inteligente.",
    preview: <DigitalizacaoPreview />,
  },
  {
    icon: Cpu,
    label: "02",
    title: "Automação inteligente",
    description:
      "Eliminamos tarefas repetitivas para que sua equipe foque no que realmente traz lucro.",
    preview: <AutomacaoPreview />,
  },
  {
    icon: Boxes,
    label: "03",
    title: "Soluções customizadas",
    description:
      "Nada de ferramentas genéricas. Criamos o que o seu nicho exige e o que o seu cliente espera.",
    preview: <CustomizadaPreview />,
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
            Cada projeto começa com um diagnóstico real do seu gargalo, e
            termina com uma ferramenta que sua equipe usa todos os dias.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, label, title, description, preview }) => (
            <li
              key={label}
              className="group relative rounded-2xl border border-border/70 bg-card/40 p-7 md:p-8 transition-all duration-200 hover:border-primary/60 hover:bg-secondary/60 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_8px_32px_-8px_rgba(224,95,33,0.15)]"
            >
              {preview}

              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {label}
                </span>
              </div>

              <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-[-0.01em] leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                {description}
              </p>

              <a
                href="#diagnostico"
                className="mt-8 flex items-center gap-2 text-xs text-muted-foreground/70 group-hover:text-primary transition-colors"
              >
                <span className="h-px w-6 bg-current transition-all duration-200 group-hover:w-8" />
                Iniciar diagnóstico
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
