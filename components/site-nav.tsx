"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { PineLogo } from "@/components/pine-logo"

const navLinks = [
  { href: "/#proximidade", label: "Proximidade" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#coletivo", label: "O Coletivo" },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return

    firstLinkRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        setMobileOpen(false)
        openerRef.current?.focus()
        return
      }
      if (e.key !== "Tab" || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
          <nav
            aria-label="Navegação principal"
            className={`flex items-center justify-between rounded-2xl border px-4 sm:px-5 py-2.5 sm:py-3 transition-[background-color,border-color,box-shadow] duration-300 ${
              scrolled
                ? "border-border/80 bg-background/85 backdrop-blur-md shadow-lg shadow-black/20"
                : "border-border/60 bg-background/70 backdrop-blur-md"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 text-foreground rounded-md"
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
                  <Link
                    href={l.href}
                    className="relative py-1 hover:text-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/#diagnostico"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm rounded-full border border-border/80 bg-secondary/40 px-3 sm:px-4 h-11 text-foreground hover:border-primary/60 hover:bg-secondary transition-colors active:scale-[0.97] transform-gpu"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Agendas abertas
              </Link>

              <button
                ref={openerRef}
                onClick={() => setMobileOpen(true)}
                className="md:hidden flex items-center justify-center h-11 w-11 rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-border transition-colors active:scale-[0.94] transform-gpu"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu-panel"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
            onClick={close}
            aria-hidden="true"
          />

          <div
            id="mobile-menu-panel"
            ref={panelRef}
            className="absolute inset-x-4 top-4 rounded-2xl border border-border/70 bg-background/98 backdrop-blur-md p-6 shadow-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-4 motion-safe:duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={close}
                className="flex items-center gap-2.5 text-foreground rounded-md"
              >
                <PineLogo className="h-6 w-6 text-primary" />
                <span className="text-sm tracking-[-0.01em] font-medium">
                  Pine<span className="text-muted-foreground"> Collective</span>
                </span>
              </Link>
              <button
                onClick={close}
                className="flex items-center justify-center h-11 w-11 rounded-xl border border-border/80 text-muted-foreground hover:text-foreground transition-colors active:scale-[0.94] transform-gpu"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  onClick={close}
                  className="flex items-center px-4 min-h-[48px] rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors text-lg font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-border/60">
              <Link
                href="/#diagnostico"
                onClick={close}
                className="flex items-center justify-center gap-2.5 w-full rounded-full border border-primary/50 bg-primary/10 px-6 min-h-[48px] text-primary font-medium transition-colors hover:bg-primary/20 active:scale-[0.98] transform-gpu"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
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
