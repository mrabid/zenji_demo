# ZENJI — Build Notes

## Submission

| Item | Link |
|---|---|
| Source code | [github.com/mrabid/zenji_demo](https://github.com/mrabid/zenji_demo) |
| Live demo | Deploy from Vercel (see below) |
| Build notes | This file |

## Run locally

```bash
git clone https://github.com/mrabid/zenji_demo.git
cd zenji_demo
npm install
npm run dev
```

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **`mrabid/zenji_demo`**
3. Framework: **Next.js** (auto-detected)
4. Root Directory: leave empty
5. Deploy — no env variables required
6. **Important:** In Project Settings → Build & Deployment, leave **Output Directory empty**. Do not set `.next` or `public`.
7. Use **your** project URL from the Vercel dashboard

**Note:** Next.js 15 is used because Next.js 16 currently fails on Vercel's remote builder. `allowScripts` in `package.json` allows `sharp` install scripts on npm 11+.

## Stack

- Next.js 15 + TypeScript
- Tailwind CSS v4
- Lucide React
- Client-side cart via React Context + `useReducer`

## Requirements coverage

| Requirement | Implementation |
|---|---|
| Branded header | ZENJI wordmark, nav anchors, cart badge |
| Hero + Shop CTA | “WEAR YOUR STORY” + “Shop the Drop” |
| 4+ product cards | 7 tees from THE_ORIGIN_DROP with images, prices, sizes |
| Working demo cart | Add/remove items, quantity controls, live subtotal |
| Responsive layout | Mobile menu, 1/2/3-column product grid, cart drawer |
| Keyboard-friendly | Focus rings, Escape closes cart, tab trap in drawer |

## Brand direction

Inspired by [zenji.shop](https://zenji.shop/) and [@zenji_.shop](https://www.instagram.com/zenji_.shop/):

- Dark, minimal, editorial layout
- Bold display typography + mono labels
- Original product photography from `public/Products/`
- Limited-drop messaging and Australian streetwear copy

## Architecture

```
app/layout.tsx          CartProvider, fonts, metadata
app/page.tsx            Storefront entry
components/site/        Header, Hero, ProductGrid, CartDrawer, etc.
context/cart-context.tsx
lib/products.ts
public/Products/        Provided assets (1.jpg–10.jpg)
```

## Time spent

~3.5 hours (within the suggested 3–4 hour scope).

## Out of scope (by design)

- No real checkout or payments
- No user accounts or backend
- Cart resets on page refresh (in-memory only)
- No separate product detail pages

## Testing checklist

- [x] Add to cart with size selected
- [x] Update quantity and subtotal
- [x] Remove items from cart
- [x] Mobile menu and cart drawer
- [x] Production build passes (`npm run build`)
