export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  hoverImage?: string;
  description: string;
  tag?: string;
};

export const SIZES: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const COLLECTION_NAME = "THE_ORIGIN_DROP";

export const products: Product[] = [
  {
    id: "blue-flame-tee",
    name: "Blue Flame Tee",
    slug: "blue-flame-tee",
    price: 33.99,
    compareAtPrice: 39.99,
    image: "/Products/1.jpg",
    hoverImage: "/Products/3.jpg",
    description:
      "Original anime artwork on 240gsm garment-washed cotton. Oversized streetwear fit.",
    tag: "15% OFF",
  },
  {
    id: "bushido-tee",
    name: "Bushido Tee",
    slug: "bushido-tee",
    price: 39.99,
    image: "/Products/2.jpg",
    hoverImage: "/Products/4.jpg",
    description:
      "Samurai discipline meets modern streetwear. Limited run — no restocks.",
  },
  {
    id: "demon-blood-tee",
    name: "Demon Blood Tee",
    slug: "demon-blood-tee",
    price: 33.99,
    compareAtPrice: 39.99,
    image: "/Products/5.jpg",
    hoverImage: "/Products/6.jpg",
    description:
      "Cursed marks and bold ink. Screenprinted to survive the wash cycle.",
    tag: "15% OFF",
  },
  {
    id: "domain-expansion-tee",
    name: "Domain Expansion Tee",
    slug: "domain-expansion-tee",
    price: 39.99,
    image: "/Products/7.jpg",
    hoverImage: "/Products/10.jpg",
    description:
      "Techniques with no limit. Premium heavyweight cotton in cream colourway.",
  },
  {
    id: "warrior-spirit-tee",
    name: "Warrior Spirit Tee",
    slug: "warrior-spirit-tee",
    price: 33.99,
    compareAtPrice: 39.99,
    image: "/Products/4.jpg",
    hoverImage: "/Products/2.jpg",
    description:
      "Built for fans who wear the reference as design first. XS–XXL.",
    tag: "15% OFF",
  },
  {
    id: "will-of-the-sun-tee",
    name: "Will of the Sun Tee",
    slug: "will-of-the-sun-tee",
    price: 39.99,
    image: "/Products/9.jpg",
    hoverImage: "/Products/7.jpg",
    description:
      "Editorial artwork inspired by shonen arcs and late-night subs.",
  },
  {
    id: "limitless-tee",
    name: "Limitless Tee",
    slug: "limitless-tee",
    price: 39.99,
    image: "/Products/8.jpg",
    hoverImage: "/Products/10.jpg",
    description:
      "無制限 — bold back print with Japanese typography. Cream heavyweight cotton.",
  },
];

export function formatPrice(amount: number): string {
  return `A$${amount.toFixed(2)}`;
}
