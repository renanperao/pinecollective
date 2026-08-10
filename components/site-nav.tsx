"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { PineLogo } from "@/components/pine-logo"

const navLinks = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur-xl border-b border-border shadow-xl shadow-black/30"
            : "bg-background/95 backdrop-blur-md border-b border-border/80"
        }`}
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 h-20 sm:h-24"
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground rounded-md"
            aria-label="Pine Collective, Início"
          >
            <PineLogo className="h-6 w-6 text-primary" />
            <span className="text-sm sm:text-base tracking-[-0.01em] font-medium">
              Pine<span className="text-muted-foreground"> Collective</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative py-1 text-foreground/80 hover:text-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contato"
              className="group hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm rounded-full border border-primary/50 bg-transparent px-4 h-10 text-foreground hover:border-primary hover:bg-primary/10 transition-colors active:scale-[0.97] transform-gpu"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Agendas abertas
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" strokeWidth={2.2} aria-hidden="true" />
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
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={close}
            aria-hidden="true"
          />

          <div
            id="mobile-menu-panel"
            ref={panelRef}
            className="absolute inset-x-4 top-4 rounded-2xl border border-border/70 bg-background/98 backdrop-blur-md p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
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
                href="/contato"
                onClick={close}
                className="flex items-center justify-center gap-2.5 w-full rounded-full border border-primary/50 bg-primary/10 px-6 min-h-[48px] text-primary font-medium transition-colors hover:bg-primary/20 active:scale-[0.98] transform-gpu"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
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
