# Intevoo Shop - Application E-commerce Next.js

Cette application e-commerce a été développée avec Next.js, TypeScript, Redux Toolkit et Tailwind CSS.

## Fonctionnalités

- Affichage de la liste des produits
- Page de détail produit
- Ajout au panier
- Gestion du panier (ajout, suppression, modification de quantité)
- Recherche de produits
- Mode sombre/clair

## Technologies utilisées

- Next.js 14 avec App Router
- TypeScript
- Redux Toolkit pour la gestion d'état
- Tailwind CSS pour le style
- shadcn/ui pour les composants d'interface

## Installation

1. Clonez le dépôt
   \`\`\`bash
   git clone https://github.com/yao-christian/intevoo-shop.git
   cd intevoo-shop
   \`\`\`

2. Installez les dépendances
   \`\`\`bash
   npm install

3. Lancez le serveur de développement
   \`\`\`bash
   npm run dev

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Structure du projet

- `app/` - Pages et layouts de l'application (App Router)
- `src/features/` - Features de l'application
- `src/components/` - Composants réutilisables

## Choix techniques

### Architecture

L'application utilise l'App Router de Next.js pour le routage et les Server Components pour optimiser les performances. Les données sont récupérées côté serveur lorsque c'est possible, et les interactions utilisateur sont gérées côté client.

### Gestion d'état

Redux Toolkit est utilisé pour gérer l'état global de l'application, notamment le panier d'achat. Le panier est persisté dans le localStorage pour conserver les données entre les sessions.

### Performance

- Utilisation de Server Components pour réduire le JavaScript côté client
- Optimisation des images avec le composant Image de Next.js
- Génération statique des pages produit avec revalidation périodique

### SEO

- Métadonnées dynamiques pour chaque page
- Utilisation de balises sémantiques HTML
- Génération de métadonnées Open Graph pour le partage sur les réseaux sociaux
