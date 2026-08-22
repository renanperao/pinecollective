import Link from "next/link"
import { Workflow, Cpu, Boxes } from "lucide-react"

function DigitalizacaoPreview() {
  return (
    <div className="rounded-xl border border-border/50 bg-background/60 p-4 sm:p-5">
      <div className="text-[10px] font-mono text-muted-foreground/50 mb-3 uppercase tracking-widest">Gestão de pedidos</div>
      <div className="space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-6 rounded border border-border/50 bg-secondary/40 px-2.5 flex items-center">
            <div className="h-2 w-16 rounded bg-muted-foreground/20" />
          </div>
          <div className="h-6 rounded border border-border/50 bg-secondary/40 px-2.5 flex items-center">
            <div className="h-2 w-10 rounded bg-muted-foreground/20" />
          </div>
        </div>
        <div className="h-6 rounded border border-border/50 bg-secondary/40 px-2.5 flex items-center">
          <div className="h-2 w-28 rounded bg-muted-foreground/20" />
        </div>
        <div className="flex items-center justify-between pt-1.5">
          <div className="flex gap-1.5">
            {["Novo", "Em andamento", "Concluído"].map((s, i) => (
              <div key={s} className={`px-2 py-1 rounded text-[9px] ${i === 0 ? "bg-primary/20 text-primary" : "bg-border/30 text-muted-foreground/50"}`}>
                {s}
              </div>
            ))}
          </div>
          <div className="h-5 w-14 rounded-full bg-primary/70" />
        </div>
      </div>
    </div>
  )
}

function AutomacaoPreview() {
  const steps = ["Trigger", "Filtro", "E-mail", "CRM"]
  return (
    <div className="rounded-xl border border-border/50 bg-background/60 p-4 sm:p-5">
      <div className="text-[10px] font-mono text-muted-foreground/50 mb-3 uppercase tracking-widest">Fluxo de automação</div>
      <div className="flex items-center gap-1.5 mb-4">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5 flex-1 min-w-0">
            <div className={`flex-1 min-w-0 px-2 py-1.5 rounded text-[10px] text-center truncate border ${
              i === 0 ? "border-primary/50 bg-primary/10 text-primary" : "border-border/40 bg-secondary/30 text-muted-foreground/60"
            }`}>
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="text-[10px] text-muted-foreground/30 shrink-0">›</div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { label: "Novo pedido recebido", done: true },
          { label: "Confirmação enviada", done: true },
          { label: "Estoque atualizado", done: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div className={`h-2 w-2 rounded-full shrink-0 ${item.done ? "bg-primary" : "bg-border/50"}`} />
            <div className={`text-[10px] ${item.done ? "text-muted-foreground/70" : "text-muted-foreground/30"}`}>
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
    <div className="rounded-xl border border-border/50 bg-background/60 p-4 sm:p-5 min-w-0 overflow-hidden">
      <div className="text-[10px] font-mono text-muted-foreground/60 mb-3 uppercase tracking-widest">
        Módulo do nicho
      </div>

      <div className="grid grid-cols-5 gap-2.5 min-w-0">
        <div className="col-span-2 rounded-md border border-border/50 bg-secondary/30 p-2.5">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-2">
            Agenda
          </div>
          <div className="space-y-1.5">
            {[
              { h: "08h", label: "Retorno", on: true },
              { h: "10h", label: "Avaliação", on: false },
              { h: "14h", label: "Consulta", on: true },
            ].map((r) => (
              <div
                key={r.h}
                className="flex items-center gap-2"
              >
                <span className="font-mono text-[9px] text-muted-foreground/60 w-6 tabular-nums">
                  {r.h}
                </span>
                <span
                  className={`h-1.5 flex-1 rounded ${
                    r.on ? "bg-primary/70" : "bg-border/50"
                  }`}
                />
                <span className="text-[9px] text-muted-foreground/70 w-12 truncate">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 rounded-md border border-border/50 bg-secondary/30 p-2.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground/60">
              Ficha do cliente
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/15 text-primary">
              Ativo
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-primary/40 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-2 w-20 bg-foreground/40 rounded mb-1" />
              <div className="h-1.5 w-14 bg-muted-foreground/25 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { k: "Visitas", v: "12" },
              { k: "Ticket", v: "R$ 480" },
              { k: "Score", v: "9.2" },
            ].map((m) => (
              <div key={m.k} className="rounded border border-border/40 px-1.5 py-1.5">
                <div className="text-[8px] uppercase tracking-widest text-muted-foreground/50 leading-none mb-1">
                  {m.k}
                </div>
                <div className="text-[10px] font-semibold text-foreground leading-none tabular-nums">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between rounded-md border border-border/50 bg-secondary/30 px-2.5 py-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground/70">
            Regra do nicho
          </span>
        </div>
        <span className="text-[10px] text-foreground/80">
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
      "Sistema desenhado no formato do seu nicho, com as regras que só quem é do ramo conhece.",
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-16 sm:mb-20">
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

        <ul className="space-y-16 sm:space-y-20 lg:space-y-24">
          {items.map(({ icon: Icon, label, title, description, preview }, index) => {
            const invertida = index % 2 === 1
            return (
              <li
                key={label}
                className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center"
              >
                <div
                  className={
                    invertida
                      ? "lg:col-span-5 lg:col-start-8 lg:row-start-1"
                      : "lg:col-span-5 lg:row-start-1"
                  }
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-serif italic text-4xl sm:text-5xl leading-none text-primary"
                      aria-hidden="true"
                    >
                      {label}
                    </span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-[-0.015em] leading-snug">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>

                <div
                  className={
                    invertida
                      ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-6 lg:col-start-7 lg:row-start-1"
                  }
                  aria-hidden="true"
                >
                  <div className="rounded-2xl border border-border/70 bg-card/40 p-4 sm:p-6 lg:p-7">
                    {preview}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 sm:mt-20">
          <Link
            href="#diagnostico"
            className="group inline-flex items-center gap-3 min-h-[44px] text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span
              className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14"
              aria-hidden="true"
            />
            Iniciar diagnóstico
          </Link>
        </div>
      </div>
    </section>
  )
}
