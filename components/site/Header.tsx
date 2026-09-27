"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#details", label: "Details" },
];

export default function Header() {
  const { itemCount, openCart, isOpen: cartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-black/90 backdrop-blur-xl"
            : "border-white/8 bg-black/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group font-display text-2xl tracking-[0.38em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:text-[1.75rem]"
            aria-label="ZENJI home"
          >
            ZENJI
          </Link>

          <nav
            className="hidden items-center gap-12 md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition-all hover:border-white/35 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-11 sm:w-11"
              aria-label={`Open cart, ${itemCount} items`}
              aria-expanded={cartOpen}
              aria-controls="cart-drawer"
            >
              <ShoppingBag className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 animate-scale-in items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black motion-reduce:animate-none">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition-all hover:border-white/35 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden sm:h-11 sm:w-11"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-4">
            <span className="font-display text-xl tracking-[0.35em] text-white">
              ZENJI
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-col px-4 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/8 py-5 font-mono text-sm uppercase tracking-[0.28em] text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openCart();
              }}
              className="mt-6 btn-ghost w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Cart ({itemCount})
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
