import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-3xl tracking-[0.35em] text-white">
              ZENJI
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
              Australian anime-inspired streetwear. Limited drops. No restocks.
              Made for fans who wear the reference as design.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#shop"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Shop
            </a>
            <a
              href="https://zenji.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              zenji.shop
            </a>
            <a
              href="https://www.instagram.com/zenji_.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              @zenji_.shop
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2026 ZENJI · Hiring Assessment Demo
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            No payments · Demo cart only
          </p>
        </div>
      </div>
    </footer>
  );
}
