"use client";

import AnnouncementBar from "@/components/site/AnnouncementBar";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import DropStats from "@/components/site/DropStats";
import ProductGrid from "@/components/site/ProductGrid";
import BrandSection from "@/components/site/BrandSection";
import Footer from "@/components/site/Footer";
import CartDrawer from "@/components/site/CartDrawer";

export default function Storefront() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>
      <div className="h-[6.75rem] shrink-0 sm:h-[7.25rem]" aria-hidden />

      <main>
        <Hero />
        <DropStats />
        <ProductGrid />
        <BrandSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
