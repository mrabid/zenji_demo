import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { CartProvider } from "@/context/cart-context";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZENJI | Wear Your Story — Anime Streetwear Australia",
  description:
    "Australian anime-inspired streetwear. Limited-edition graphic tees from THE_ORIGIN_DROP. 240gsm heavyweight cotton, oversized fit.",
  openGraph: {
    title: "ZENJI | Wear Your Story",
    description:
      "Shop THE_ORIGIN_DROP — original anime artwork on premium heavyweight cotton.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${dmSans.variable} ${ibmPlexMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
