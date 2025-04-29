"use client";

import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { formatPrice } from "@/lib/utils";
import CartItem from "./cart-item";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartClient() {
  const { items } = useAppSelector((state) => state.cart);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h2 className="mt-4 text-2xl font-bold">Votre panier est vide</h2>
        <p className="mt-2 text-muted-foreground">
          Vous n&apos;avez pas encore ajouté de produits à votre panier.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Parcourir les produits</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Résumé de la commande
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6">Passer à la caisse</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
