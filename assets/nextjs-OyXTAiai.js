import{j as n,M as o,T as a,a as s}from"./blocks-CkXrTRLP.js";import{useMDXComponents as d}from"./index-BLN9bQuX.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-bv3rb2K_.js";const r=`# Next.js

Zo gebruik je het GovNL Design System in een Next.js-project. Dit werkt zowel
voor een nieuw project als voor een Next.js-app die je al hebt staan, en zowel
met de App Router als de Pages Router.

## Wat je krijgt

Het design system bestaat uit losse npm-pakketten onder de scope \`@dictu/*\`:

- \`@dictu/design-tokens\` — kleuren, typografie en spacing als CSS-variabelen.
- \`@dictu/<component>\` — losse componenten zoals \`button\`, \`heading\` en
  \`form-field\`.

Het design system levert platte CSS. Je gebruikt de class-namen direct in je
JSX. Server- en client-componenten worden allebei ondersteund.

## Handige links

- Next.js installatie: https://nextjs.org/docs/app/getting-started/installation
- CSS in Next.js:
  https://nextjs.org/docs/app/building-your-application/styling/css
- GovNL Storybook: https://drupalgovnl.github.io/govnl-nlds/

## Optie A — Nieuw Next.js-project

### 1. Maak een nieuw project aan

\`\`\`bash
npx create-next-app@latest mijn-govnl-app
cd mijn-govnl-app
\`\`\`

Volg de wizard. De stappen hieronder gaan uit van de App Router (de
standaardkeuze).

### 2. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 3. Importeer de stijlen globaal

Open \`app/layout.tsx\` en voeg de imports bovenaan toe:

\`\`\`tsx
import "@dictu/design-tokens/dist/index.css";
import "@dictu/button/dist/index.css";
import "@dictu/heading/dist/index.css";
import "@dictu/form-field/dist/index.css";
\`\`\`

### 4. Activeer het thema in je layout

Wikkel de \`children\` in een element met de class \`dictu-theme\`. Deze class
activeert de design tokens.

\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <div className="dictu-theme">{children}</div>
      </body>
    </html>
  );
}
\`\`\`

### 5. Gebruik componenten in een pagina

Open \`app/page.tsx\`:

\`\`\`tsx
export default function Home() {
  return (
    <main>
      <h1 className="dictu-heading">Aanvraag starten</h1>

      <div className="dictu-form-field">
        <label className="dictu-label" htmlFor="bsn">
          BSN
        </label>
        <input className="dictu-text-input" id="bsn" name="bsn" type="text" />
      </div>

      <button
        className="dictu-button dictu-button--primary-action"
        type="button"
      >
        Verder
      </button>
    </main>
  );
}
\`\`\`

### 6. Start de app

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000 en controleer of de stijlen zichtbaar zijn.

## Optie B — Bestaand Next.js-project

Heb je al een Next.js-app? Volg dan deze stappen.

### 1. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens
npm install @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 2. Importeer de CSS op één centrale plek

Importeer de CSS in het bestand dat altijd geladen wordt. In Next.js mag globale
CSS alleen in de root van je app worden geïmporteerd:

- App Router: \`app/layout.tsx\`.
- Pages Router: \`pages/_app.tsx\` (of \`pages/_app.js\`).

\`\`\`tsx
import "@dictu/design-tokens/dist/index.css";
import "@dictu/button/dist/index.css";
\`\`\`

Per nieuw component voeg je daar een extra import-regel toe.

### 3. Plaats \`dictu-theme\` op een geschikt element

Zet de class \`dictu-theme\` op het hoogst mogelijke element waar je het design
system wilt gebruiken. Dat kan het root-element van je layout zijn, maar ook één
pagina of sectie.

\`\`\`tsx
function NieuweSectie() {
  return (
    <section className="dictu-theme">
      <h2 className="dictu-heading">Mijn nieuwe sectie</h2>
      <button
        className="dictu-button dictu-button--primary-action"
        type="button"
      >
        Opslaan
      </button>
    </section>
  );
}
\`\`\`

Zo gebruik je het design system alleen waar je het wilt, zonder bestaande
styling te raken.

### 4. Goed om te weten

- Globale CSS uit \`node_modules\` mag in Next.js alleen in \`app/layout.tsx\` of
  \`pages/_app.tsx\` worden geïmporteerd. Andere plekken geven een build-fout.
- Server-componenten en client-componenten gebruiken dezelfde class-namen. Voor
  \`dictu-theme\` is geen \`'use client'\` nodig.
- CSS Modules en Tailwind blijven gewoon werken naast de globale design
  system-CSS.

## Componenten uitbreiden

Wil je een extra component gebruiken?

\`\`\`bash
npm install @dictu/accordion
\`\`\`

Daarna in \`app/layout.tsx\` of \`pages/_app.tsx\`:

\`\`\`ts
import "@dictu/accordion/dist/index.css";
\`\`\`

De juiste class-namen vind je in de
[Storybook-pagina van het component](https://drupalgovnl.github.io/govnl-nlds/).

## Let op

- Zonder \`dictu-theme\` op een ouder-element zijn de design tokens niet actief en
  zien componenten er anders uit dan in Storybook.
- Importeer \`@dictu/design-tokens/dist/index.css\` één keer in de root layout,
  niet in losse componenten.
- Gebruik de exacte class-namen uit Storybook; de stijlen zijn niet gebaseerd op
  element-selectors.
`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Voor ontwikkelaars/Framework Implementatie/Next.js"}),`
`,n.jsx(a,{children:"Next.js Implementatie"}),`
`,n.jsx(s,{children:r})]})}function g(e={}){const{wrapper:t}={...d(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{g as default};
