import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-geist",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-geist",
})
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pinecollective.dev"),
  title: "Pine Collective — Tecnologia sob medida para quem já fatura",
  description:
    "Consultoria boutique de tecnologia. Digitalizamos e otimizamos pequenos e médios negócios cansados de processos manuais. Atenção dedicada, soluções customizadas, resultado real.",
  keywords: [
    "Consultoria de Tecnologia",
    "Automação de Processos",
    "Digitalização",
    "Pine Collective",
    "Eficiência Operacional",
    "Tecnologia sob medida",
  ],
  authors: [{ name: "Pine Collective" }],
  creator: "Pine Collective",
  openGraph: {
    title: "Pine Collective | Consultoria Boutique de Tecnologia",
    description:
      "Tecnologia sob medida para eliminar processos manuais e escalar negócios que já faturam. Atenção dedicada, soluções customizadas.",
    url: "https://pinecollective.dev",
    siteName: "Pine Collective",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pine Collective — Consultoria boutique de tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pine Collective | Consultoria Boutique de Tecnologia",
    description:
      "Tecnologia sob medida para eliminar processos manuais e escalar negócios que já faturam.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#101419",
  width: "device-width",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth selection:bg-primary selection:text-primary-foreground bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Pine Collective",
              "image": "https://pinecollective.dev/og-image.png",
              "description": "Consultoria boutique de tecnologia e automação para médias e pequenas empresas.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tijucas",
                "addressRegion": "SC",
                "addressCountry": "BR"
              },
              "url": "https://pinecollective.dev",
              "priceRange": "$$$"
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
