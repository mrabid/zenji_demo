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

  const productNumber = String(index + 1).padStart(2, "0");

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className="group flex h-full flex-col">
      <div
        className="image-vignette relative aspect-[4/5] overflow-hidden bg-surface-elevated"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 ease-out motion-reduce:transition-none ${
            hovered && product.hoverImage
              ? "scale-[1.05] opacity-0"
              : "scale-100 opacity-100"
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
            className={`object-cover transition-all duration-700 ease-out motion-reduce:transition-none ${
              hovered ? "scale-[1.05] opacity-100" : "scale-100 opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/50">
          {productNumber}
        </span>

        {product.tag && (
          <span className="absolute right-4 top-4 bg-white px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
            Sale {product.tag}
          </span>
        )}

        <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
          Limited
        </span>
      </div>

      <div className="glass-panel flex flex-1 flex-col border-t-0 p-5 transition-colors duration-300 group-hover:border-white/15 sm:p-6">
        <div className="mb-4">
          <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/45">
            {product.description}
          </p>
        </div>

        <div className="mb-5 flex items-baseline gap-2.5">
          <span className="font-mono text-base font-medium text-white">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="font-mono text-sm text-white/30 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <fieldset className="mb-5">
          <legend className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
            Size
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
                  className={`min-h-9 min-w-9 px-2 font-mono text-[10px] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    isSelected
                      ? "bg-white text-black"
                      : "border border-white/12 text-white/65 hover:border-white/35 hover:text-white"
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
          className={`mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-not-allowed disabled:opacity-30 ${
            added
              ? "border border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
              : "btn-ghost disabled:hover:border-white/12 disabled:hover:bg-transparent"
          }`}
          aria-label={
            selectedSize
              ? `Add ${product.name} in size ${selectedSize} to cart`
              : `Select a size to add ${product.name} to cart`
          }
        >
          {added ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden />
              Added
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" aria-hidden />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
