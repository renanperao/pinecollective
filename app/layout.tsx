import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { SmoothScroll } from "@/components/smooth-scroll"
import { cityPages, primaryKeywords, servicePages, siteConfig } from "@/lib/seo-data"
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
  metadataBase: new URL(siteConfig.url),
  title: "Pine Collective | Software personalizado, CRM e sistemas de gestão",
  description:
    "Software personalizado, sistema de gestão, CRM personalizado e automação para empresas que querem sair da planilha e escalar com controle.",
  keywords: [
    ...primaryKeywords,
    "Pine Collective",
    ...cityPages.map((city) => city.name),
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pine Collective | Software personalizado, CRM e sistemas de gestão",
    description:
      "Tecnologia sob medida para eliminar processos manuais: software personalizado, sistema de gestão, CRM personalizado e automação.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pine Collective | Software personalizado e CRM sob medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pine Collective | Software personalizado, CRM e sistemas de gestão",
    description:
      "Software personalizado, sistema de gestão e CRM personalizado para empresas em crescimento.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/pine-logo.png",
    apple: "/pine-logo.png",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/pine-logo.png`,
    "image": `${siteConfig.url}/og-image.png`,
    "description": "Consultoria boutique de tecnologia em Tijucas, SC, especializada em software personalizado, sistemas de gestão, CRM personalizado, automação de processos e presença digital.",
    "telephone": siteConfig.telephone,
    "email": siteConfig.email,
    "sameAs": [siteConfig.instagram],
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.region,
      "addressCountry": siteConfig.country
    },
    "areaServed": cityPages.map((city) => ({
      "@type": "Place",
      "name": `${city.name}${city.region !== "BR" ? `, ${city.region}` : ""}`
    })),
    "knowsAbout": primaryKeywords,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de tecnologia sob medida",
      "itemListElement": servicePages.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "alternateName": service.aliases,
          "description": service.summary,
          "url": `${siteConfig.url}/servicos/${service.slug}`
        }
      }))
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": siteConfig.email,
      "telephone": siteConfig.telephone,
      "areaServed": "BR",
      "availableLanguage": "pt-BR"
    }
  }

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} selection:bg-primary selection:text-primary-foreground bg-background`}
    >
      <body className="font-sans antialiased">
        <SmoothScroll>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          {children}
          <Toaster theme="dark" position="bottom-right" />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </SmoothScroll>
      </body>
    </html>
  )
}
