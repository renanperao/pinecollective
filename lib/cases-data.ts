export type CaseStudy = {
  slug: string
  cliente: string
  segmento: string
  local: string
  ano: string
  tagline: string
  cardLabel: string
  logo: string
  logoWidth: number
  logoHeight: number
  cover: string
  gallery: { src: string; alt: string; width: number; height: number }[]
  liveUrl?: string
  liveLabel?: string
  metaTitle: string
  metaDescription: string
  resumo: string
  problema: string
  solucao: string
  modulos: { titulo: string; descricao: string }[]
  stack: string[]
  resultado: string
}

export const casePages: CaseStudy[] = [
  {
    slug: "brasil-forte",
    cliente: "Brasil Forte",
    segmento: "Fabricação e venda de portas de alto padrão",
    local: "Biguaçu, SC",
    ano: "2024–2025",
    tagline:
      "Um ecossistema digital: do pré-orçamento em segundos ao ERP que roda a fábrica inteira.",
    cardLabel: "Ecossistema digital completo",
    logo: "/cases/logos/brasil-forte-white.png",
    logoWidth: 1694,
    logoHeight: 492,
    cover: "/cases/brasil-forte/site-home.png",
    gallery: [
      {
        src: "/cases/brasil-forte/site-home.png",
        alt: "Site institucional da Brasil Forte com o configurador de portas",
        width: 1440,
        height: 900,
      },
      {
        src: "/cases/brasil-forte/erp-dashboard.jpg",
        alt: "Dashboard do ERP da Brasil Forte com faturamento, pipeline e funil de propostas",
        width: 1800,
        height: 823,
      },
      {
        src: "/cases/brasil-forte/erp-propostas.jpg",
        alt: "Lista de propostas comerciais do ERP da Brasil Forte",
        width: 1800,
        height: 819,
      },
      {
        src: "/cases/brasil-forte/erp-financeiro.jpg",
        alt: "Módulo financeiro de contas a receber do ERP da Brasil Forte",
        width: 1800,
        height: 819,
      },
      {
        src: "/cases/brasil-forte/erp-relatorios.jpg",
        alt: "Relatórios financeiros configuráveis do ERP da Brasil Forte",
        width: 1800,
        height: 816,
      },
      {
        src: "/cases/brasil-forte/erp-gamificacao.jpg",
        alt: "Painel de metas e gamificação para a equipe comercial no ERP da Brasil Forte",
        width: 1800,
        height: 823,
      },
    ],
    liveUrl: "https://brasilforte.com",
    liveLabel: "brasilforte.com",
    metaTitle: "Case Brasil Forte: site com configurador e ERP sob medida | Pine Collective",
    metaDescription:
      "Como a Pine Collective construiu o ecossistema digital completo da Brasil Forte: site com configurador de produto e ERP personalizado para produção, vendas e instalação.",
    resumo:
      "A Brasil Forte fabrica portas de alto padrão sob medida. A Pine construiu os dois lados do negócio: o site que capta e qualifica o cliente, e o ERP que roda a operação por trás.",
    problema:
      "A Brasil Forte vendia portas sob medida negociando cada orçamento manualmente por WhatsApp, e organizava produção, estoque e instaladores em planilhas soltas. Não havia como saber, num único lugar, em que pé estava cada proposta, quem tinha instalado o quê ou quanto era devido a cada instalador.",
    solucao:
      "Construímos os dois lados do negócio. No site, um configurador deixa o cliente montar a porta (tipo, largura do batente, cor) e ver o preço calculado na hora, gerando um pré-orçamento que já sai formatado para o WhatsApp da equipe comercial. Por trás, um ERP personalizado passou a rodar toda a operação: propostas viram pedidos, pedidos entram no financeiro e na produção, o estoque reflete cada peça vendida, e um módulo próprio de instaladores controla quem instalou o quê e o fechamento financeiro de cada um.",
    modulos: [
      {
        titulo: "Configurador de produto",
        descricao:
          "Cliente escolhe tipo de porta, largura e cor, vê o preço em tempo real e envia o pré-orçamento pronto para o WhatsApp.",
      },
      {
        titulo: "Propostas e comercial",
        descricao:
          "Criação, acompanhamento e PDF de propostas, com pipeline e prospecção para a equipe de vendas.",
      },
      {
        titulo: "Produtos, estoque e PDV",
        descricao:
          "Catálogo com variações de produto, controle de estoque, etiquetas e ponto de venda.",
      },
      {
        titulo: "Instaladores e instalações",
        descricao:
          "Cadastro de instaladores, vínculo com cada instalação e tela de fechamento financeiro por instalador.",
      },
      {
        titulo: "Financeiro e contas a receber",
        descricao:
          "Contas a pagar e a receber, comissões e relatórios configuráveis por período, regime e categoria, com exportação em CSV e PDF.",
      },
      {
        titulo: "CRM e clientes",
        descricao:
          "Cadastro mestre de clientes com deduplicação automática por CPF/CNPJ a partir das propostas.",
      },
      {
        titulo: "Gamificação comercial",
        descricao:
          "Painel de metas, pontos e sequência por vendedor, com comissão calculada em tempo real sobre o que já fechou.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "Supabase (Postgres)",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "Zustand",
    ],
    resultado:
      "Hoje cada proposta nasce e é acompanhada dentro do mesmo ecossistema, do pré-orçamento gerado no site até o pagamento do instalador em campo, sem planilha nenhuma no meio do caminho.",
  },
  {
    slug: "autobayer",
    cliente: "Autobayer Veículos",
    segmento: "Loja de veículos seminovos",
    local: "Pato Branco, PR",
    ano: "2025",
    tagline:
      "Vitrine digital com painel próprio: a loja atualiza o estoque sem depender de ninguém.",
    cardLabel: "Desenvolvimento de site exclusivo",
    logo: "/cases/logos/autobayer.png",
    logoWidth: 430,
    logoHeight: 160,
    cover: "/cases/autobayer/home.png",
    gallery: [
      {
        src: "/cases/autobayer/home.png",
        alt: "Home do site da Autobayer Veículos",
        width: 1440,
        height: 900,
      },
      {
        src: "/cases/autobayer/estoque.png",
        alt: "Página de estoque completo da Autobayer Veículos, com busca e filtros",
        width: 1440,
        height: 1100,
      },
    ],
    liveUrl: "https://autobayer.com.br",
    liveLabel: "autobayer.com.br",
    metaTitle: "Case Autobayer: site e painel de estoque para loja de carros | Pine Collective",
    metaDescription:
      "Como a Pine Collective construiu o site e o painel administrativo da Autobayer Veículos, com catálogo de estoque, filtros, favoritos e integração com WhatsApp.",
    resumo:
      "A Autobayer vende veículos seminovos em Pato Branco. A Pine construiu um site próprio com catálogo completo de estoque e um painel para a equipe gerenciar tudo sem depender de portais de terceiros.",
    problema:
      "A Autobayer dependia de portais de anúncio de terceiros para expor o estoque, sem uma vitrine digital própria que refletisse a marca e sem controle direto sobre como cada veículo era exibido, atualizado ou removido quando vendido.",
    solucao:
      "Construímos um site institucional com vitrine de destaques na home e uma página de estoque completo, com busca, filtros por tipo e marca, e ficha individual de cada veículo. A equipe ganhou um painel administrativo próprio para cadastrar, editar e marcar veículos como vendidos sem tocar em código, incluindo um recurso que lê o texto de um anúncio já pronto e preenche o formulário automaticamente. O site roda com dados estruturados de concessionária para SEO e integra WhatsApp em toda a jornada de contato.",
    modulos: [
      {
        titulo: "Vitrine e estoque completo",
        descricao:
          "Home com destaques do estoque e página dedicada com busca, filtros por tipo e marca, e ficha individual de cada veículo.",
      },
      {
        titulo: "Favoritos e deep-link",
        descricao:
          "Cliente favorita veículos e acessa a ficha de um veículo específico direto por link.",
      },
      {
        titulo: "Painel administrativo",
        descricao:
          "Equipe cadastra, edita e marca vendas sem depender de desenvolvedor, com parser que lê um anúncio pronto e preenche o formulário sozinho.",
      },
      {
        titulo: "SEO e integração",
        descricao:
          "Dados estruturados de concessionária, sitemap, Open Graph e integração com WhatsApp e Google Analytics em toda a jornada.",
      },
    ],
    stack: [
      "HTML, CSS & JavaScript",
      "Node.js (build)",
      "Playwright",
      "Vercel",
      "GitHub API",
    ],
    resultado:
      "O site está no ar em autobayer.com.br, com a equipe atualizando o estoque direto pelo painel, sem depender de portais de terceiros nem de código para cada anúncio novo.",
  },
]

export function getCaseBySlug(slug: string) {
  return casePages.find((c) => c.slug === slug)
}
