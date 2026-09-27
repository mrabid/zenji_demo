"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { COLLECTION_NAME } from "@/lib/products";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 animate-ken-burns motion-reduce:animate-none">
        <Image
          src="/Products/10.jpg"
          alt="Model wearing ZENJI Domain Expansion Tee beside a vintage car"
          fill
          priority
          className="object-cover object-[center_22%] opacity-90"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />

      <div
        className="pointer-events-none absolute right-6 top-1/3 hidden select-none font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 [writing-mode:vertical-rl] lg:block"
        aria-hidden
      >
        THE_ORIGIN_DROP · 2024
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-label animate-fade-up mb-6 motion-reduce:animate-none">
            Australian Anime Streetwear · Est. 2024
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(3.75rem,13vw,9rem)] leading-[0.88] tracking-[0.06em] text-white"
          >
            <span className="animate-fade-up block motion-reduce:animate-none">
              WEAR YOUR
            </span>
            <span className="animate-fade-up animation-delay-150 block text-white/95 motion-reduce:animate-none">
              STORY<span className="text-white/35">_</span>
            </span>
          </h1>

          <div className="animate-line-grow mt-6 h-px w-16 bg-white/30 motion-reduce:animate-none" />

          <p className="animate-fade-up animation-delay-300 mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg motion-reduce:animate-none">
            Original anime artwork on heavyweight cotton. Limited drops, no
            restocks — express your identity through what you wear.
          </p>

          <div className="animate-fade-up animation-delay-450 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center motion-reduce:animate-none">
            <a href="#shop" className="btn-primary group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Shop the Drop
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              {COLLECTION_NAME}
            </span>
          </div>
        </div>

        <a
          href="#shop"
          className="animate-fade-up animation-delay-600 mt-20 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 motion-reduce:animate-none"
          aria-label="Scroll to shop section"
        >
          Explore collection
          <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden />
        </a>
      </div>
    </section>
  );
}
