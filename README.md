# ZENJI — Hiring Assessment Demo

A responsive one-page anime streetwear storefront built for the ZENJI hiring assessment.

## Live

- **Source:** [github.com/mrabid/zenji_demo](https://github.com/mrabid/zenji_demo)
- **Build notes:** [BUILD_NOTES.md](./BUILD_NOTES.md)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Lucide React

## Project structure

```
app/                    # Layout, page, global styles
components/site/        # Header, Hero, products, cart, footer
components/ui/          # ScrollReveal
context/                # Cart state (React Context)
lib/                    # Product data
public/Products/        # Product photography
```

## Features

- Branded header, hero, and “Shop the Drop” CTA
- 7 product cards with size selection (XS–XXL)
- Working demo cart (add, remove, quantity, subtotal)
- Responsive mobile and desktop layout
- Keyboard-friendly controls and focus management
