import Link from "next/link"
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
    <div className="rounded-xl border border-border/50 bg-background/60 p-3 mb-6">
      <div className="text-[9px] font-mono text-muted-foreground/60 mb-2 uppercase tracking-widest">
        Módulo do nicho
      </div>

      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 rounded-md border border-border/50 bg-secondary/30 p-2">
          <div className="text-[7px] uppercase tracking-widest text-muted-foreground/60 mb-1.5">
            Agenda
          </div>
          <div className="space-y-1">
            {[
              { h: "08h", label: "Retorno", on: true },
              { h: "10h", label: "Avaliação", on: false },
              { h: "14h", label: "Consulta", on: true },
            ].map((r) => (
              <div
                key={r.h}
                className="flex items-center gap-1.5"
              >
                <span className="font-mono text-[7px] text-muted-foreground/60 w-4 tabular-nums">
                  {r.h}
                </span>
                <span
                  className={`h-1 flex-1 rounded ${
                    r.on ? "bg-primary/70" : "bg-border/50"
                  }`}
                />
                <span className="text-[7px] text-muted-foreground/70 w-8 truncate">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 rounded-md border border-border/50 bg-secondary/30 p-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] uppercase tracking-widest text-muted-foreground/60">
              Ficha do cliente
            </span>
            <span className="text-[7px] px-1 py-0.5 rounded bg-primary/15 text-primary">
              Ativo
            </span>
          </div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="h-4 w-4 rounded-full bg-primary/40 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-1.5 w-14 bg-foreground/40 rounded mb-0.5" />
              <div className="h-1 w-10 bg-muted-foreground/25 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              { k: "Visitas", v: "12" },
              { k: "Ticket", v: "R$ 480" },
              { k: "Score", v: "9.2" },
            ].map((m) => (
              <div key={m.k} className="rounded border border-border/40 px-1 py-1">
                <div className="text-[6px] uppercase tracking-widest text-muted-foreground/50 leading-none mb-0.5">
                  {m.k}
                </div>
                <div className="text-[8px] font-semibold text-foreground leading-none tabular-nums">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-md border border-border/50 bg-secondary/30 px-2 py-1.5">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[7px] uppercase tracking-widest text-muted-foreground/70">
            Regra do nicho
          </span>
        </div>
        <span className="text-[8px] text-foreground/80">
          Confirma se ausência {`>`} 60d
        </span>
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
      "Sua planilha vira sistema. Seu processo manual vira fluxo. Sem mudar como sua equipe pensa.",
    preview: <DigitalizacaoPreview />,
  },
  {
    icon: Cpu,
    label: "02",
    title: "Automação inteligente",
    description:
      "O que é repetitivo, o computador faz. O que exige julgamento, sua equipe.",
    preview: <AutomacaoPreview />,
  },
  {
    icon: Boxes,
    label: "03",
    title: "Soluções sob medida",
    description:
      "Sistema desenhado no formato do seu nicho, não adaptado de um genérico.",
    preview: <CustomizadaPreview />,
  },
]

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="solucoes-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Onde resolvemos
            </div>
            <h2
              id="solucoes-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]"
            >
              Três frentes. Uma promessa:{" "}
              <span className="font-serif italic font-normal text-primary">
                sua planilha nunca mais.
              </span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Cada projeto nasce de um gargalo real e vira ferramenta que sua
            equipe abre todo dia. Sem nada no meio.
          </p>
        </div>

        <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, label, title, description, preview }) => (
            <li
              key={label}
              className="group relative rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] transform-gpu"
            >
              <div aria-hidden="true">{preview}</div>

              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {label}
                </span>
              </div>

              <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                {description}
              </p>

              <Link
                href="#diagnostico"
                className="mt-8 inline-flex items-center gap-2 min-h-[44px] text-xs text-muted-foreground/70 group-hover:text-primary transition-colors"
              >
                <span
                  className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10"
                  aria-hidden="true"
                />
                Iniciar diagnóstico
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
