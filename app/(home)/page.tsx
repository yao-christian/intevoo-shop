import ProductList from "./product-list";
import { getProducts } from "@/features/product/requests";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intevoo Shop - Découvrez nos produits",
  description:
    "Parcourez notre sélection de produits de qualité à des prix compétitifs",
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>
      <ProductList products={products} />
    </div>
  );
}
