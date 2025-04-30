import type { Product } from "@/features/product/product.type";
import { formatPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AddToCartButton from "./add-to-cart-button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2 h-12">{product.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {product.category}
          </p>
          <p className="mt-2 font-bold">{formatPrice(product.price)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
