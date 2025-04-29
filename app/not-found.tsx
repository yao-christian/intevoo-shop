import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6 py-16 text-center">
      <h2 className="text-3xl font-bold">Page non trouvée</h2>
      <p className="text-muted-foreground">Nous n&apos;avons pas pu trouver la page que vous recherchez.</p>
      <Button asChild>
        <Link href="/">Retour à l&apos;accueil</Link>
      </Button>
    </div>
  )
}
