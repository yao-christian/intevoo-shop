import { getProduct, getProducts } from "@/features/product/requests";
import { formatPrice } from "@/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/features/product/ui/add-to-cart-button";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Produit non trouvé",
    };
  }

  return {
    title: `${product.title} | Intevoo Shop`,
    description: product.description,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: Props) {
  const id = (await params).id;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-sm text-muted-foreground">
              Catégorie: {product.category}
            </p>
          </div>
          <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="mt-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
