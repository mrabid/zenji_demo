import { ArrowUpRight, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-5xl tracking-[0.32em] text-white sm:text-6xl">
              ZENJI
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Australian anime-inspired streetwear. Limited drops. No restocks.
              Made for fans who wear the reference as design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: "#shop", label: "Shop" },
                  { href: "#story", label: "Story" },
                  { href: "#details", label: "Details" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://zenji.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  zenji.shop
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href="https://www.instagram.com/zenji_.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <Instagram className="h-3.5 w-3.5" aria-hidden />
                  @zenji_.shop
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/28">
            © 2026 ZENJI · Hiring Assessment Demo
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/28">
            Demo cart only · No payments
          </p>
        </div>
      </div>
    </footer>
  );
}
