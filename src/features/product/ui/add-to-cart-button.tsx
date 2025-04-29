"use client";

import type { Product } from "@/features/product/product.type";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useToast } from "@/components/ui/use-toast";

interface AddToCartButtonProps {
  product: Product;
  showText?: boolean;
}

export default function AddToCartButton({
  product,
  showText = true,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );

    toast({
      title: "Produit ajouté au panier",
      description: product.title,
    });
  };

  return (
    <Button onClick={handleAddToCart} className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      {showText && "Ajouter au panier"}
    </Button>
  );
}
