Aplikácia je navrhnutá tak, aby vedela pracovať s dátami z dvoch zdrojov – buď zo vzdialeného servera, alebo lokálne.
Pôvodne bolo cieľom načítavať dáta priamo z online servera, no keďže som nechcel platiť za hosting, rozhodol som sa vytvoriť riešenie, ktoré umožňuje prepínať medzi režimami.

Tento prepínač funguje pomocou boolean hodnoty v samostatných súboroch ako albumService a audioService.
Podľa nastavenia tejto hodnoty aplikácia:

buď sťahuje dáta zo servera,

alebo načítava lokálne uložené dáta.

Vďaka tomu je možné aplikáciu spúšťať a testovať bez potreby online backendu, no zároveň si zachováva rovnakú štruktúru a logiku ako pri reálnom serveri.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
