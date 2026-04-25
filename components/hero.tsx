import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32">
      {/* Glow sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-[520px] max-w-5xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(224,95,33,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-8 bg-primary" />
          Consultoria boutique de tecnologia
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-5xl text-balance font-sans text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium">
          Tecnologia{" "}
          <span className="font-serif italic font-normal text-primary">
            sob medida
          </span>{" "}
          para quem já fatura, mas cansou de processos lentos e manuais.
        </h1>

        {/* Subheadline */}
        <p className="mt-10 max-w-2xl text-pretty text-lg md:text-xl leading-relaxed text-muted-foreground">
          Na Pine Collective, não entregamos apenas sistemas. Nós entramos na
          sua operação, ouvimos seus problemas e construímos a ferramenta exata
          para sua empresa escalar com inteligência.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="#diagnostico"
            className="group inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90"
          >
            <span className="text-base font-medium tracking-tight">
              Agendar diagnóstico pessoal
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </Link>

          <Link
            href="#solucoes"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Ver como resolvemos
            <span aria-hidden className="text-primary">
              →
            </span>
          </Link>
        </div>

        {/* Meta dots */}
        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10 border-t border-border/60 pt-10">
          {[
            { k: "Atendimento", v: "1:1, sem intermediários" },
            { k: "Especialistas", v: "Sêniores sob demanda" },
            { k: "Foco", v: "PMEs em crescimento" },
            { k: "Entrega", v: "Customizada por nicho" },
          ].map((item) => (
            <div key={item.k} className="flex flex-col gap-1.5">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                {item.k}
              </dt>
              <dd className="text-sm md:text-base text-foreground">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
