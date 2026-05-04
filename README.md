# Pine Collective — Website

Landing page institucional da **Pine Collective**, consultoria boutique de tecnologia sediada em Tijucas, SC. O site tem função de marketing e captação de leads qualificados via formulário de diagnóstico.

---

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.x |
| UI Library | React | 19.x |
| Linguagem | TypeScript | 5.7.x |
| Estilização | Tailwind CSS | 4.x |
| Animações | Framer Motion | 12.x |
| Scroll suave | Lenis | 1.x |
| Formulários | react-hook-form | 7.x |
| Componentes base | Radix UI | variadas |
| Ícones | Lucide React | 0.564.x |
| Toasts | Sonner | 1.x |
| Submissão de form | Web3Forms | API externa |
| Analytics | Vercel Analytics | 1.x |
| Package manager | pnpm | — |

---

## Estrutura do projeto

```
pinecollective/
├── app/
│   ├── globals.css          # Tokens de design (CSS custom properties) + utilities
│   ├── layout.tsx           # Root layout: fonts, metadata, Schema.org, Toaster
│   ├── page.tsx             # Composição da landing page (ordem das seções)
│   ├── privacidade/
│   │   └── page.tsx         # Política de privacidade (LGPD)
│   └── termos/
│       └── page.tsx         # Termos de serviço
│
├── components/
│   ├── hero.tsx             # Seção hero com DashboardMockup inline
│   ├── site-nav.tsx         # Header fixo com menu mobile (overlay)
│   ├── stack-strip.tsx      # Faixa de tecnologias usadas
│   ├── proximidade.tsx      # Seção "Como trabalhamos" (3 etapas)
│   ├── solucoes.tsx         # 3 frentes de serviço com previews visuais
│   ├── presenca-digital.tsx # Diferencial de presença digital (4 cards)
│   ├── coletivo.tsx         # Hub de especialistas sêniores
│   ├── diagnostico-form.tsx # Formulário de captação de leads (Web3Forms)
│   ├── site-footer.tsx      # Rodapé com navegação e contato
│   ├── scroll-fade-in.tsx   # Wrapper de animação scroll-triggered (Framer Motion)
│   ├── smooth-scroll.tsx    # Provider do Lenis (scroll physics)
│   ├── pine-logo.tsx        # SVG do logotipo como componente React
│   ├── theme-provider.tsx   # Provider de tema (instalado, não utilizado atualmente)
│   └── ui/                  # Componentes shadcn/ui (Radix UI + Tailwind)
│
├── hooks/
│   ├── use-mobile.ts        # Hook para detecção de viewport mobile
│   └── use-toast.ts         # Hook do sistema de toast legado
│
├── lib/
│   └── utils.ts             # Utilitário cn() (clsx + tailwind-merge)
│
├── public/
│   ├── og-image.png         # Imagem Open Graph (1200×630)
│   └── pine-logo.png        # Favicon / Apple touch icon
│
├── .env.local               # Variáveis de ambiente (não commitado)
├── next.config.mjs          # Configuração do Next.js
├── tsconfig.json            # TypeScript (strict mode ativo)
├── postcss.config.mjs       # PostCSS para Tailwind v4
└── components.json          # Configuração do shadcn/ui CLI
```

---

## Configuração do ambiente

### Pré-requisitos

- Node.js >= 20
- pnpm >= 9

### Instalação

```bash
pnpm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz com:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=sua_chave_aqui
```

> A chave é obtida em [web3forms.com](https://web3forms.com). Por ser prefixada com `NEXT_PUBLIC_`, ela é exposta no bundle do cliente — isso é intencional e seguro para o Web3Forms (a chave identifica apenas a caixa de entrada de destino).

### Desenvolvimento

```bash
pnpm dev       # Inicia em http://localhost:3000
pnpm build     # Build de produção (TypeScript + Next.js)
pnpm start     # Serve o build de produção localmente
pnpm lint      # ESLint
```

---

## Arquitetura de componentes

### Composição da página

`page.tsx` é puramente declarativa — apenas importa e ordena as seções. Cada seção é um Server Component por padrão, exceto onde `"use client"` é necessário.

```tsx
// app/page.tsx — estrutura da página
<main>
  <SiteNav />           {/* client — estado do menu mobile */}
  <Hero />              {/* server */}
  <StackStrip />        {/* server */}
  <ScrollFadeIn>        {/* client — Framer Motion */}
    <Proximidade />
  </ScrollFadeIn>
  {/* ... demais seções envoltas em ScrollFadeIn */}
  <DiagnosticoForm />   {/* client — react-hook-form */}
  <SiteFooter />        {/* server */}
</main>
```

### Animações de scroll

`ScrollFadeIn` (`components/scroll-fade-in.tsx`) é um wrapper genérico baseado em `motion.div` do Framer Motion:

- `initial`: `{ opacity: 0, y: 40 }` — elemento começa invisível e deslocado
- `whileInView`: `{ opacity: 1, y: 0 }` — anima ao entrar no viewport
- `viewport: { once: true }` — a animação roda apenas uma vez, não re-anima ao rolar de volta
- `margin: "-100px"` — dispara 100px antes de entrar no viewport para evitar o "pop"

```tsx
<ScrollFadeIn delay={0.1}>
  <Componente />
</ScrollFadeIn>
```

### Smooth scroll

`SmoothScroll` (`components/smooth-scroll.tsx`) envolve toda a aplicação com `ReactLenis`:

```tsx
<ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1.2, smoothWheel: true }}>
```

- `lerp: 0.1` — interpolação linear; valores menores = scroll mais "molhado"
- `wheelMultiplier: 1.2` — velocidade do scroll com roda do mouse
- O CSS usa `scroll-behavior: auto` (não `smooth`) para evitar conflito com o Lenis

---

## Design system

O sistema de design é definido integralmente via **CSS custom properties** em `app/globals.css` e mapeado para o Tailwind via `@theme inline`.

### Paleta de cores

```css
--background:        #101419  /* dark navy — fundo base */
--foreground:        #f3efe9  /* off-white quente */
--card:              #151a20  /* card surface */
--primary:           #e05f21  /* laranja queimado — cor de acento */
--secondary:         #1a2027  /* superfície secundária */
--muted-foreground:  #8a8f96  /* texto de suporte */
--border:            #232a33  /* divisores */
```

### Tipografia

Três famílias com variáveis CSS:

| Variável | Fonte | Uso |
|---|---|---|
| `--font-sans` | Geist Sans | Corpo e interface |
| `--font-mono` | Geist Mono | Labels, badges, código |
| `--font-serif` | Instrument Serif | Destaques editoriais em itálico |

Padrão de uso editorial (hero, títulos de seção):

```tsx
<h1>
  Texto normal{" "}
  <span className="font-serif italic font-normal text-primary">
    destaque em itálico
  </span>
</h1>
```

### Utilities globais

| Classe | Descrição |
|---|---|
| `.grain` | Sobreposição de textura granulada via SVG `feTurbulence` (pseudo-elemento `::after`) |
| `.hairline` | Linha divisória com fade nas extremidades |
| `.form-input` | Input estilizado com underline bottom-border e focus laranja |

---

## Formulário de diagnóstico

**Arquivo:** `components/diagnostico-form.tsx`

### Fluxo de submissão

```
Usuário preenche → react-hook-form valida (onBlur) → handleSubmit
  → monta FormData → POST https://api.web3forms.com/submit
    → sucesso: estado `enviado = true` (troca form por mensagem de confirmação)
    → erro:    toast.error() via Sonner
```

### Campos e validações

| Campo | Tipo | Validação |
|---|---|---|
| `nome` | text | obrigatório |
| `empresa` | text | obrigatório |
| `email` | email | obrigatório + regex de formato |
| `telefone` | tel | obrigatório + mínimo 14 chars (com máscara) |
| `gargalo` | textarea | obrigatório |
| `orcamento` | hidden (pill buttons) | obrigatório (uma das 5 opções) |

### Máscara de telefone

Implementada manualmente via `maskPhone()`, sem dependências externas:

```ts
function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
}
```

---

## SEO e metadados

Toda a configuração de SEO está centralizada em `app/layout.tsx` via a API `Metadata` do Next.js.

### Coberturas implementadas

- **`<title>` e `<meta description>`** — títulos e descrições otimizados
- **Open Graph** — `og:title`, `og:description`, `og:image` (1200×630), `og:locale: pt_BR`
- **Twitter Card** — `summary_large_image`
- **Favicon** — `/pine-logo.png` (ícone e Apple touch icon)
- **`metadataBase`** — `https://pinecollective.dev` (necessário para URLs absolutas no OG)
- **Schema.org (JSON-LD)** — tipo `ProfessionalService` injetado via `dangerouslySetInnerHTML` no body

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Pine Collective",
  "address": { "addressLocality": "Tijucas", "addressRegion": "SC" },
  "url": "https://pinecollective.dev"
}
```

---

## Analytics

**Vercel Analytics** é carregado condicionalmente apenas em produção:

```tsx
{process.env.NODE_ENV === "production" && <Analytics />}
```

Isso evita poluir os dados com acessos de desenvolvimento.

---

## Deploy

O projeto é hospedado na **Vercel**. O deploy acontece automaticamente a cada push na branch `master`.

### Variáveis de ambiente na Vercel

Adicionar via dashboard Vercel → Settings → Environment Variables:

```
NEXT_PUBLIC_WEB3FORMS_KEY  →  <chave de produção>
```

### Build checklist pré-deploy

- [ ] `pnpm build` passa sem erros TypeScript
- [ ] `NEXT_PUBLIC_WEB3FORMS_KEY` configurada na Vercel
- [ ] `og-image.png` atualizada se houver mudança visual relevante
- [ ] Testar formulário de diagnóstico em produção após deploy

---

## Páginas

| Rota | Arquivo | Descrição |
|---|---|---|
| `/` | `app/page.tsx` | Landing page principal |
| `/privacidade` | `app/privacidade/page.tsx` | Política de privacidade (LGPD) |
| `/termos` | `app/termos/page.tsx` | Termos de serviço |

---

## Licença

Projeto privado. Propriedade da Pine Collective. Todos os direitos reservados.
