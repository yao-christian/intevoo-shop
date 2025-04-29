"use client";

import Link from "next/link";

import type { CartItem as CartItemType } from "@/features/cart/cart.type";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/lib/features/cart/cartSlice";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-start space-x-4 py-4 border-b">
      <div className="relative h-24 w-24 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-contain p-2"
        />
      </div>
      <div className="flex-1 space-y-1">
        <Link
          href={`/products/${item.id}`}
          className="font-medium hover:underline"
        >
          {item.title}
        </Link>
        <p className="text-sm text-muted-foreground">
          Prix unitaire: {formatPrice(item.price)}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => dispatch(decrementQuantity(item.id))}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Diminuer la quantité</span>
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Augmenter la quantité</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <span className="font-medium">
          {formatPrice(item.price * item.quantity)}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Supprimer</span>
        </Button>
      </div>
    </div>
  );
}
