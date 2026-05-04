"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { PineLogo } from "@/components/pine-logo"

const navLinks = [
  { href: "#proximidade", label: "Proximidade" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#coletivo", label: "O Coletivo" },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
          <nav className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md px-5 py-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-foreground"
              aria-label="Pine Collective, Início"
            >
              <PineLogo className="h-6 w-6 text-primary" />
              <span className="text-sm tracking-[-0.01em] font-medium">
                Pine<span className="text-muted-foreground"> Collective</span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="#diagnostico"
                className="group inline-flex items-center gap-2 text-sm rounded-full border border-border/80 bg-secondary/40 px-4 py-2 text-foreground hover:border-primary/60 hover:bg-secondary transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Agendas abertas
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden flex items-center justify-center h-9 w-9 rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div className="absolute inset-x-4 top-4 rounded-2xl border border-border/70 bg-background/98 backdrop-blur-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={close}
                className="flex items-center gap-2.5 text-foreground"
              >
                <PineLogo className="h-6 w-6 text-primary" />
                <span className="text-sm tracking-[-0.01em] font-medium">
                  Pine<span className="text-muted-foreground"> Collective</span>
                </span>
              </Link>
              <button
                onClick={close}
                className="flex items-center justify-center h-9 w-9 rounded-xl border border-border/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="flex items-center px-4 py-3.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors text-lg font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-border/60">
              <Link
                href="#diagnostico"
                onClick={close}
                className="flex items-center justify-center gap-2.5 w-full rounded-full border border-primary/50 bg-primary/10 px-6 py-3.5 text-primary font-medium transition-colors hover:bg-primary/20"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Agendas abertas
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
