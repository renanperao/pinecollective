import type { Metadata } from "next"
import Link from "next/link"
import { PineLogo } from "@/components/pine-logo"
import { CampanhaSiteQuiz } from "@/components/campanha-site-quiz"

// Página exclusiva da campanha de tráfego pago (Instagram/Facebook Ads) pra
// site institucional e landing page: advogados, corretores, clínicas de
// estética, arquitetura e engenharia. Não aparece em nenhum menu do site;
// existe só pra receber o clique do anúncio. Ver memória do projeto sobre
// o padrão de campanhas (cada uma pode ter seu próprio modelo de formulário).

export const metadata: Metadata = {
  title: "Site ou landing page profissional | Pine Collective",
  description:
    "Site institucional ou landing page sob medida pro seu negócio. 6 perguntas rápidas e a Pine Collective te procura com uma proposta.",
  alternates: { canonical: "/campanha/site" },
  robots: { index: false, follow: true },
}

export default function CampanhaSitePage() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background text-foreground grain flex flex-col">
      <header className="shrink-0 flex flex-col items-center gap-1 pt-4 pb-2 px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground rounded-md"
          aria-label="Pine Collective, Início"
        >
          <PineLogo className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium tracking-tight">
            Pine<span className="text-muted-foreground"> Collective</span>
          </span>
        </Link>
        <p className="text-[11px] leading-snug text-muted-foreground max-w-[300px] text-balance">
          Consultoria Boutique de Tecnologia{" "}
          <span className="text-primary/70">|</span> Software sob medida e
          páginas que convertem
        </p>
      </header>

      <div className="flex-1 min-h-0 flex justify-center px-3 pb-3">
        <div className="w-full max-w-sm flex flex-col rounded-2xl border border-border/70 bg-card/40 p-5">
          <CampanhaSiteQuiz compact />
        </div>
      </div>
    </main>
  )
}
