import { Gauge, ShieldCheck, Zap, BarChart3, ArrowUpRight } from "lucide-react"

const diferenciais = [
  {
    icon: Gauge,
    title: "Carrega rápido",
    description:
      "A gente desenvolve em Next.js e Tailwind. Site leve, que abre na hora. Cada segundo de espera é cliente que desiste.",
  },
  {
    icon: ShieldCheck,
    title: "Sob medida, não template",
    description:
      "Sua empresa não é genérica, seu site também não. A gente desenha do zero, com a cara da sua operação.",
  },
  {
    icon: Zap,
    title: "Achado no Google",
    description:
      "Código limpo, focado em conversão. A gente estrutura pra você aparecer pra quem já procura o que você faz.",
  },
  {
    icon: BarChart3,
    title: "Feito pra converter",
    description:
      "Site não é cartão de visita parado. A gente arquiteta cada página pra transformar quem chega em oportunidade real.",
  },
]

export function PresencaDigital() {
  return (
    <section
      id="presenca"
      className="relative py-20 sm:py-28 md:py-40 border-t border-border/60"
      aria-labelledby="presenca-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Presença digital
            </div>

            <h2
              id="presenca-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05]"
            >
              Da presença que{" "}
              <span className="font-serif italic font-normal text-primary">
                atrai
              </span>{" "}
              ao sistema que organiza.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              O site é a vitrine do seu negócio. A gente constrói pra carregar rápido, aparecer no Google e transformar visita em conversa.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="#diagnostico"
                className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
              >
                <span className="text-sm font-medium tracking-tight">
                  Falar sobre o site
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            </div>
          </div>

          <ul className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {diferenciais.map(({ icon: Icon, title, description }) => (
              <li key={title} className="group">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110 group-hover:bg-primary/10"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
