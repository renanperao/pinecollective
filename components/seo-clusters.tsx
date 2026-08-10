import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { servicePages } from "@/lib/seo-data"

const serviceTaglines: Record<string, string> = {
  "software-personalizado": "Sistemas internos pra operação que não cabe em ferramenta pronta.",
  "sistema-de-gestao": "Pedidos, clientes, estoque e equipe num único lugar.",
  "crm-personalizado": "Funil comercial no formato do seu processo de venda.",
  "automacao-de-processos": "Tudo que é repetitivo, o computador passa a fazer.",
  "presenca-digital": "Site institucional e landing pages que convertem visita em conversa.",
}

export function SeoClusters() {
  return (
    <section
      id="software-personalizado"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="seo-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Software sob medida
            </div>

            <h2
              id="seo-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]"
            >
              Software personalizado,{" "}
              <span className="font-serif italic font-normal text-primary">
                sistema de gestão
              </span>{" "}
              e CRM. Um por vez. Um por cliente.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
              Sistemas internos, CRM sob medida, automações e plataformas
              construídas do zero, pra quem já saiu da planilha e quer controle
              real da operação.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                O que construímos
              </h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {servicePages.map((service, idx) => {
                  const isLastOrphan =
                    servicePages.length % 2 === 1 &&
                    idx === servicePages.length - 1
                  return (
                    <li
                      key={service.slug}
                      className={isLastOrphan ? "sm:col-span-2" : undefined}
                    >
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 px-5 py-4 min-h-[72px] text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-secondary/60 hover:-translate-y-0.5 active:scale-[0.99] transform-gpu"
                      >
                        <span>
                          <span className="block text-sm font-medium tracking-tight">
                            {service.shortName}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-foreground/70">
                            {serviceTaglines[service.slug] ?? service.summary}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:rotate-45"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-primary shrink-0" aria-hidden="true" />
                <p className="text-sm text-foreground">
                  Nascida em Santa Catarina.{" "}
                  <span className="text-muted-foreground">
                    Atende empresas em todo o Brasil.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
