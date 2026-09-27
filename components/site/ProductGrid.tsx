import { COLLECTION_NAME, products } from "@/lib/products";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section
      id="shop"
      className="scroll-mt-24 border-t border-white/10 bg-black py-16 sm:py-24"
      aria-labelledby="shop-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
                Latest Drops
              </p>
              <h2
                id="shop-heading"
                className="font-display text-4xl tracking-[0.12em] text-white sm:text-5xl lg:text-6xl"
              >
                {COLLECTION_NAME}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Seven original anime graphic tees. 240gsm heavyweight cotton,
              garment-washed, oversized fit. Once sold through — never
              reprinted.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <ProductCard product={product} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
