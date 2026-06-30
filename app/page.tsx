import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { StackStrip } from "@/components/stack-strip"
import { Proximidade } from "@/components/proximidade"
import { Solucoes } from "@/components/solucoes"
import { Coletivo } from "@/components/coletivo"
import { PresencaDigital } from "@/components/presenca-digital"
import { SeoClusters } from "@/components/seo-clusters"
import { DiagnosticoForm } from "@/components/diagnostico-form"
import { SiteFooter } from "@/components/site-footer"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export const metadata: Metadata = {
  title: "Software personalizado, CRM e sistemas de gestão | Pine Collective",
  description:
    "A Pine Collective cria software personalizado, sistema de gestão, CRM personalizado e automação para empresas em Tijucas, Florianópolis, São José, Palhoça, Itapema e Balneário Camboriú.",
  alternates: { canonical: "/" },
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground grain">
      <SiteNav />
      <Hero />
      <StackStrip />
      <ScrollFadeIn>
        <Proximidade />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Solucoes />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <PresencaDigital />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SeoClusters />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Coletivo />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <DiagnosticoForm />
      </ScrollFadeIn>
      <SiteFooter />
    </main>
  )
}
