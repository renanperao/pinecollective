"use client"

import { Check } from "lucide-react"
import { DiagnosticoQuiz } from "@/components/diagnostico-quiz"

export function DiagnosticoForm() {
  return (
    <section
      id="diagnostico"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="diagnostico-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Diagnóstico
            </div>

            <h2
              id="diagnostico-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.02em] leading-[1.05]"
            >
              Comece pelo{" "}
              <span className="font-serif italic font-normal text-primary">
                gargalo
              </span>
              . Não pela ferramenta.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/90 max-w-md">
              5 perguntas rápidas. Menos de 2 minutos. A gente devolve um plano
              concreto, mesmo se você não fechar projeto.
            </p>

            <ul className="mt-8 sm:mt-10 space-y-4 text-sm text-foreground/80">
              {[
                "Conversa direta com Renan ou Luis, sem intermediário",
                "Mapeamento dos 3 gargalos que mais custam hoje",
                "Recomendação técnica e próximos passos, mesmo sem contratar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-8 md:p-10 min-h-[560px] flex flex-col">
              <DiagnosticoQuiz />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
