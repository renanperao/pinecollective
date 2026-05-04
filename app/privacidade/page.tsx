import Link from "next/link"
import type { Metadata } from "next"
import { PineLogo } from "@/components/pine-logo"

export const metadata: Metadata = {
  title: "Política de Privacidade | Pine Collective",
  description: "Política de privacidade e tratamento de dados da Pine Collective, em conformidade com a LGPD.",
}

export default function PrivacidadePage() {
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
          LGPD · Lei nº 13.709/2018
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.1] mb-4">
          Política de{" "}
          <span className="font-serif italic font-normal text-primary">Privacidade</span>
        </h1>
        <p className="text-muted-foreground mb-12">Última atualização: maio de {ano}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">1. Quem somos</h2>
            <p className="text-muted-foreground">
              A <strong className="text-foreground">Pine Collective</strong> é uma consultoria boutique de tecnologia com sede em Tijucas, SC,
              que presta serviços de digitalização, automação e desenvolvimento de soluções customizadas para pequenas e médias empresas em todo o Brasil.
              Este documento descreve como coletamos, usamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">2. Dados coletados</h2>
            <p className="text-muted-foreground mb-3">Coletamos apenas os dados estritamente necessários para prestar nossos serviços:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Formulário de diagnóstico:</strong> nome, empresa, e-mail, telefone/WhatsApp, descrição do gargalo operacional e orçamento estimado.</li>
              <li><strong className="text-foreground">Dados de navegação:</strong> informações agregadas e anônimas via Vercel Analytics (sem cookies de rastreamento individual).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">3. Finalidade do tratamento</h2>
            <p className="text-muted-foreground mb-3">Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responder à sua solicitação de diagnóstico e entrar em contato pelos canais informados.</li>
              <li>Avaliar a viabilidade de uma proposta de serviço adequada ao seu negócio.</li>
              <li>Melhorar a experiência do site com base em dados de navegação agregados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">4. Compartilhamento de dados</h2>
            <p className="text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais.
              Os dados do formulário são transmitidos de forma segura via <strong className="text-foreground">Web3Forms</strong> e armazenados apenas pelo tempo necessário para o atendimento da sua solicitação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">5. Seus direitos</h2>
            <p className="text-muted-foreground mb-3">Em conformidade com a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar, corrigir ou solicitar a exclusão dos seus dados.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Solicitar a portabilidade dos dados.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@pinecollective.dev" className="text-primary hover:underline">contato@pinecollective.dev</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">6. Segurança</h2>
            <p className="text-muted-foreground">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado,
              perda ou divulgação indevida. A transmissão de dados é realizada via HTTPS com criptografia em trânsito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium tracking-tight mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Dúvidas sobre esta política? Fale conosco:{" "}
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
          <Link href="/termos" className="hover:text-foreground transition-colors">Termos de Serviço</Link>
        </div>
      </footer>
    </div>
  )
}
