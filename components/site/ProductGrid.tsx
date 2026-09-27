import { COLLECTION_NAME, products } from "@/lib/products";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section
      id="shop"
      className="scroll-mt-24 bg-background py-20 sm:py-28"
      aria-labelledby="shop-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-6 border-b border-white/8 pb-10 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-4">Latest Drops</p>
              <h2
                id="shop-heading"
                className="font-display text-5xl tracking-[0.1em] text-white sm:text-6xl lg:text-7xl"
              >
                {COLLECTION_NAME}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50 sm:text-right">
              Seven original anime graphic tees. Garment-washed heavyweight
              cotton, oversized fit — once sold through, never reprinted.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 70}>
              <ProductCard product={product} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
