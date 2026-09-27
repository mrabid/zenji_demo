"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
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
          className="object-cover object-[center_20%] opacity-85"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-4 font-mono text-[11px] uppercase tracking-[0.4em] text-white/55 motion-reduce:animate-none">
            Australian Anime Streetwear · Est. 2024
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] tracking-[0.08em] text-white"
          >
            <span className="animate-fade-up block motion-reduce:animate-none">
              WEAR YOUR
            </span>
            <span className="animate-fade-up animation-delay-150 block motion-reduce:animate-none">
              STORY
            </span>
          </h1>
          <p className="animate-fade-up animation-delay-300 mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg motion-reduce:animate-none">
            Original anime artwork on heavyweight cotton. Limited drops, no
            restocks — express your identity through what you wear.
          </p>

          <div className="animate-fade-up animation-delay-450 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center motion-reduce:animate-none">
            <a
              href="#shop"
              className="group inline-flex items-center justify-center bg-white px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-all hover:scale-[1.02] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Shop the Drop
              </span>
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45">
              {COLLECTION_NAME}
            </span>
          </div>
        </div>

        <a
          href="#shop"
          className="animate-fade-up animation-delay-600 mt-16 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:animate-none"
          aria-label="Scroll to shop section"
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden />
        </a>
      </div>
    </section>
  );
}
