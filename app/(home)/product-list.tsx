"use client";

import { useEffect, useState } from "react";

import type { Product } from "@/features/product/product.type";
import ProductCard from "@/features/product/ui/product-card";
import { useSearchParams } from "next/navigation";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">Aucun produit trouvé</h2>
        <p className="text-muted-foreground">
          Essayez de modifier vos critères de recherche.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
