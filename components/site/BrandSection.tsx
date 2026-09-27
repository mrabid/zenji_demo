import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    title: "Built to Last",
    body: "240gsm heavyweight 100% cotton, garment washed. Oversized streetwear cut, XS to XXL.",
  },
  {
    title: "Original Artwork",
    body: "Every graphic is drawn for the drop it appears on. No stock templates, no restocks.",
  },
  {
    title: "Shipped Australia-Wide",
    body: "Dispatched from Australia. Free shipping over A$100. 14-day returns on unworn items.",
  },
];

export default function BrandSection() {
  return (
    <>
      <section
        id="story"
        className="scroll-mt-28 border-t border-white/8 bg-surface py-20 sm:py-28"
        aria-labelledby="story-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -left-3 -top-3 h-full w-full border border-white/10" aria-hidden />
                <div className="group relative aspect-[4/5] overflow-hidden bg-black lg:aspect-[3/4]">
                  <Image
                    src="/Products/8.jpg"
                    alt="Limitless Tee back print with Japanese typography"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <p className="section-label mb-5">Anime Streetwear</p>
                <h2
                  id="story-heading"
                  className="font-display text-5xl leading-[0.92] tracking-[0.08em] text-white sm:text-6xl"
                >
                  WEAR YOUR
                  <br />
                  STORY
                </h2>

                <blockquote className="mt-8 border-l border-white/20 pl-5">
                  <p className="font-display text-xl leading-snug tracking-wide text-white/90 sm:text-2xl">
                    &ldquo;What you wear should tell a story.&rdquo;
                  </p>
                </blockquote>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  <p>
                    ZENJI is an anime streetwear label based in Australia,
                    started in 2024. We make anime graphic tees for anyone who
                    wants the reference to read as design first.
                  </p>
                  <p>
                    Japanese streetwear&apos;s restraint — heavy cotton, muted
                    colourways, one strong graphic — meets the anime we actually
                    watch. Runs are small and finite.
                  </p>
                </div>

                <a
                  href="#shop"
                  className="btn-ghost mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Shop the Drop
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="scroll-mt-28 border-t border-white/8 bg-background py-20 sm:py-24"
        aria-labelledby="details-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label mb-10">Why ZENJI</p>
          </ScrollReveal>
          <h2 id="details-heading" className="sr-only">
            Product details
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 90}>
                <article className="glass-panel h-full p-7 transition-colors duration-300 hover:border-white/15 sm:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {pillar.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
