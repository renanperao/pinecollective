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
        </div>

        <ul className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {casePages.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/cases/${c.slug}`}
                className="group flex flex-col items-center gap-8 rounded-3xl border border-border/70 bg-card/40 px-8 py-16 sm:py-20 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 transform-gpu"
              >
                <Image
                  src={c.logo}
                  alt={c.cliente}
                  width={c.logoWidth}
                  height={c.logoHeight}
                  className="h-9 sm:h-10 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />

                <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium tracking-tight text-foreground">
                  {c.cardLabel}
                  <ArrowUpRight
                    className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
