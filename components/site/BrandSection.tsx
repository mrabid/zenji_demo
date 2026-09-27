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
        className="scroll-mt-28 border-t border-white/10 bg-zinc-950 py-16 sm:py-24"
        aria-labelledby="story-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="group relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/Products/8.jpg"
                  alt="Limitless Tee back print with Japanese typography"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
                  Anime Streetwear
                </p>
                <h2
                  id="story-heading"
                  className="font-display text-4xl leading-none tracking-[0.1em] text-white sm:text-5xl"
                >
                  WEAR YOUR
                  <br />
                  STORY
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/60 sm:text-base">
                  <p>
                    ZENJI is an anime streetwear label based in Australia,
                    started in 2024 by people who grew up on late-night subs and
                    long shonen arcs. We make anime graphic tees for anyone who
                    wants the reference to read as design first.
                  </p>
                  <p>
                    Every drop starts as original artwork. Japanese
                    streetwear&apos;s restraint — heavy cotton, muted colourways,
                    one strong graphic — meets the anime we actually watch. Runs
                    are small and finite: once a drop sells through, it is never
                    reprinted.
                  </p>
                </div>
                <a
                  href="#shop"
                  className="mt-8 inline-flex border border-white/20 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
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
        className="scroll-mt-28 border-t border-white/10 bg-black py-16 sm:py-20"
        aria-labelledby="details-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="details-heading" className="sr-only">
            Product details
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <article className="h-full border border-white/10 bg-zinc-950/50 p-6 transition-colors duration-300 hover:border-white/25 sm:p-8">
                  <h3 className="mb-3 font-display text-2xl uppercase tracking-wide text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
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
