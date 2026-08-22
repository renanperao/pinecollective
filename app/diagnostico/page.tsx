import type { Metadata } from "next"
import Link from "next/link"
import { PineLogo } from "@/components/pine-logo"
import { DiagnosticoQuiz } from "@/components/diagnostico-quiz"

export const metadata: Metadata = {
  title: "Diagnóstico gratuito | Pine Collective",
  description:
    "5 perguntas rápidas sobre o seu negócio. A Pine Collective devolve um diagnóstico técnico gratuito, direto com um sócio.",
  alternates: { canonical: "/diagnostico" },
  robots: { index: false, follow: true },
}

export default function DiagnosticoPage() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background text-foreground grain flex flex-col">
      <header className="shrink-0 flex items-center justify-center pt-3 pb-1">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground rounded-md"
          aria-label="Pine Collective, Início"
        >
          <PineLogo className="h-5 w-5 text-primary" />
          <span className="text-xs font-medium tracking-tight">
            Pine<span className="text-muted-foreground"> Collective</span>
          </span>
        </Link>
      </header>

      <div className="flex-1 min-h-0 flex items-center justify-center px-3 pb-3">
        <div className="w-full max-w-sm max-h-full overflow-y-auto flex flex-col rounded-2xl border border-border/70 bg-card/40 p-4">
          <DiagnosticoQuiz compact />
        </div>
      </div>
    </main>
  )
}
