import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { casePages } from "@/lib/cases-data"

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="portfolio-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Portfólio
          </div>
          <h2
            id="portfolio-titulo"
            className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.1]"
          >
            Software que{" "}
            <span className="font-serif italic font-normal text-primary">
              já roda
            </span>{" "}
            de verdade.
          </h2>
          <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/80">
            Cada projeto abaixo tem sócio da Pine no código, do primeiro
            diagnóstico à entrega em produção.
          </p>
        </div>

        <ul className="mt-14 sm:mt-16 flex flex-col gap-6 sm:gap-8">
          {casePages.map((c, idx) => (
            <li
              key={c.slug}
              className="group grid lg:grid-cols-12 rounded-3xl border border-border/70 bg-card/40 overflow-hidden transition-colors duration-300 hover:border-primary/40"
            >
              <div
                className={`relative lg:col-span-7 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Link
                  href={`/cases/${c.slug}`}
                  className="block relative aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden bg-secondary/40"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/30"
                  />
                </Link>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em]">
                  <span className="text-primary">{c.segmento}</span>
                  <span className="h-px w-4 bg-border" aria-hidden="true" />
                  <span className="text-muted-foreground">{c.local}</span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                  {c.cliente}
                </h3>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                  {c.tagline}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.stack.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs tracking-tight text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/cases/${c.slug}`}
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground w-fit"
                >
                  Ver o case
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 text-primary transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
