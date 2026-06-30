import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cityPages, servicePages } from "@/lib/seo-data"

export function SeoClusters() {
  return (
    <section
      id="software-personalizado"
      className="relative py-28 md:py-36 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Software sob medida
            </div>

            <h2 className="mt-6 text-balance text-4xl md:text-5xl font-medium tracking-[-0.015em] leading-[1.1]">
              Software personalizado,{" "}
              <span className="font-serif italic font-normal text-primary">
                sistema de gestão
              </span>{" "}
              e CRM para operações em crescimento.
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              A Pine Collective cria sistemas internos, CRM personalizado,
              automações e plataformas sob medida para empresas que querem sair
              da planilha e ganhar controle real da operação.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                O que construímos
              </h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {servicePages.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 px-5 py-4 text-foreground transition-colors hover:border-primary/60 hover:bg-secondary/60"
                    >
                      <span>
                        <span className="block text-sm font-medium tracking-tight">
                          {service.shortName}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                          {service.aliases.slice(0, 3).join(" · ")}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:rotate-45" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                Atendimento regional
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cityPages.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/atendimento/${city.slug}`}
                      className="inline-flex rounded-full border border-border/80 bg-secondary/40 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      {city.name}
                    </Link>
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
