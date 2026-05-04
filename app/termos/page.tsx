import Link from "next/link"
import type { Metadata } from "next"
import { PineLogo } from "@/components/pine-logo"

export const metadata: Metadata = {
  title: "Termos de Serviço | Pine Collective",
  description: "Termos e condições de prestação de serviços da Pine Collective.",
}

export default function TermosPage() {
  const ano = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <Link href="/" className="inline-flex items-center gap-2.5 text-foreground hover:text-primary transition-colors">
            <PineLogo className="h-6 w-6 text-primary" />
            <span className="text-sm tracking-[-0.01em] font-medium">
              Pine<span className="text-muted-foreground"> Collective</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
          <span className="h-px w-8 bg-primary" />
          Condições gerais
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.1] mb-4">
          Termos de{" "}
          <span className="font-serif italic font-normal text-primary">Serviço</span>
        </h1>
        <p className="text-muted-foreground mb-12">Última atualização: maio de {ano}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">1. Aceitação dos termos</h2>
            <p className="text-muted-foreground">
              Ao acessar este site ou submeter o formulário de diagnóstico, você concorda com os presentes Termos de Serviço.
              Caso não concorde, não utilize os serviços da <strong className="text-foreground">Pine Collective</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">2. Descrição dos serviços</h2>
            <p className="text-muted-foreground">
              A Pine Collective oferece consultoria boutique de tecnologia, incluindo — mas não se limitando a — digitalização de processos,
              automação inteligente, desenvolvimento de soluções customizadas e presença digital de alta performance.
              Os serviços são prestados mediante proposta formal e contrato específico para cada projeto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">3. Diagnóstico inicial</h2>
            <p className="text-muted-foreground">
              O diagnóstico inicial é gratuito e sem compromisso. Ele tem caráter exploratório e não constitui proposta de contrato,
              garantia de resultado ou obrigação de contratação de qualquer das partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">4. Propriedade intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo deste site — textos, design, código e logotipos — é de propriedade exclusiva da Pine Collective.
              É proibida a reprodução, cópia ou distribuição sem autorização prévia por escrito.
              Os entregáveis de cada projeto têm propriedade intelectual definida no contrato específico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">5. Limitação de responsabilidade</h2>
            <p className="text-muted-foreground">
              A Pine Collective não se responsabiliza por danos indiretos, lucros cessantes ou prejuízos decorrentes do uso das informações
              disponibilizadas neste site. Os resultados de cada projeto dependem de fatores externos à nossa atuação, como
              decisões de negócio do cliente e condições de mercado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">6. Alterações nos termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de atualizar estes termos a qualquer momento. Alterações relevantes serão comunicadas
              aos clientes ativos. O uso continuado do site após as alterações implica aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">7. Foro e legislação aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de Tijucas, SC,
              para dirimir eventuais conflitos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">8. Contato</h2>
            <p className="text-muted-foreground">
              Dúvidas sobre estes termos? Fale conosco:{" "}
              <a href="mailto:contato@pinecollective.dev" className="text-primary hover:underline">contato@pinecollective.dev</a>
              {" "}ou{" "}
              <a href="https://wa.me/5548992163070" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">(48) 99216-3070</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-8 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span>© {ano} Pine Collective. Todos os direitos reservados.</span>
          <Link href="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
        </div>
      </footer>
    </div>
  )
}
