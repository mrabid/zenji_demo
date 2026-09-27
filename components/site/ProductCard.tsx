"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import {
  formatPrice,
  SIZES,
  type Product,
  type Size,
} from "@/lib/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className="group flex h-full flex-col transition-transform duration-500 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div
        className="relative aspect-[4/5] overflow-hidden bg-zinc-900"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-[1.04] motion-reduce:transition-none ${
            hovered && product.hoverImage ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 2}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            aria-hidden
            className={`object-cover transition-all duration-700 group-hover:scale-[1.04] motion-reduce:transition-none ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {product.tag && (
          <span className="absolute left-3 top-3 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-black">
            Sale {product.tag}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-sm bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          Limited
        </span>
      </div>

      <div className="flex flex-1 flex-col border border-t-0 border-white/10 bg-zinc-950/50 p-4 transition-colors duration-300 group-hover:border-white/20 sm:p-5">
        <div className="mb-3">
          <h3 className="font-display text-xl uppercase tracking-[0.06em] text-white sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/50">
            {product.description}
          </p>
        </div>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-mono text-sm font-medium text-white">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="font-mono text-sm text-white/35 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <fieldset className="mb-4">
          <legend className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
            Select size
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {SIZES.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={isSelected}
                  className={`min-h-10 min-w-10 px-2 font-mono text-[11px] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                    isSelected
                      ? "scale-105 bg-white text-black"
                      : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 border font-mono text-[11px] uppercase tracking-[0.25em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-35 ${
            added
              ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300"
              : "border-white/20 bg-transparent text-white hover:border-white hover:bg-white hover:text-black disabled:hover:border-white/20 disabled:hover:bg-transparent disabled:hover:text-white"
          }`}
          aria-label={
            selectedSize
              ? `Add ${product.name} in size ${selectedSize} to cart`
              : `Select a size to add ${product.name} to cart`
          }
        >
          {added ? (
            <>
              <Check className="h-4 w-4" aria-hidden />
              Added to Cart
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" aria-hidden />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
