"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotalLabel,
    itemCount,
  } = useCart();

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();

      if (event.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 motion-reduce:transition-none ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      role="presentation"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-label="Close cart overlay"
        tabIndex={isOpen ? 0 : -1}
      />

      <div
        ref={drawerRef}
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        aria-hidden={!isOpen}
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2
              id="cart-title"
              className="font-display text-2xl tracking-[0.15em] text-white"
            >
              Cart
            </h2>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeCart}
            tabIndex={isOpen ? 0 : -1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <ShoppingBag
                className="mb-4 h-10 w-10 text-white/20"
                aria-hidden
              />
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/50">
                Your cart is empty
              </p>
              <button
                type="button"
                onClick={closeCart}
                tabIndex={isOpen ? 0 : -1}
                className="mt-6 border border-white/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5" aria-label="Cart items">
              {items.map((item, index) => (
                <li
                  key={item.lineId}
                  className="flex animate-fade-up gap-4 border-b border-white/10 pb-5 motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-lg uppercase tracking-wide text-white">
                          {item.name}
                        </p>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                          Size {item.size}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        tabIndex={isOpen ? 0 : -1}
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label={`Remove ${item.name} size ${item.size} from cart`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-white/15">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity - 1)
                          }
                          tabIndex={isOpen ? 0 : -1}
                          className="inline-flex h-9 w-9 items-center justify-center text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden />
                        </button>
                        <span
                          className="min-w-8 text-center font-mono text-sm text-white"
                          aria-live="polite"
                          aria-label={`Quantity ${item.quantity}`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity + 1)
                          }
                          tabIndex={isOpen ? 0 : -1}
                          className="inline-flex h-9 w-9 items-center justify-center text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </div>
                      <span className="font-mono text-sm text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/10 px-5 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                Subtotal
              </span>
              <span
                className="font-mono text-lg text-white transition-all"
                aria-live="polite"
                aria-atomic="true"
              >
                {subtotalLabel}
              </span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-white/40">
              Demo cart only — no payment processing. Free shipping over A$100
              in production.
            </p>
            <button
              type="button"
              disabled
              tabIndex={isOpen ? 0 : -1}
              className="w-full bg-white py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-black opacity-60"
              aria-disabled="true"
              title="Checkout is disabled in this demo"
            >
              Checkout (Demo)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
