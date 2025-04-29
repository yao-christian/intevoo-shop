import type { Metadata } from "next";
import CartClient from "./cart-client";

export const metadata: Metadata = {
  title: "Panier | Intevoo Shop",
  description: "Consultez les articles dans votre panier",
};

export default function CartPage() {
  return <CartClient />;
}
