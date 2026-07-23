import{j as e,M as a,T as o,a as s}from"./blocks-CEOPWmX-.js";import{useMDXComponents as d}from"./index-DAK8UF0w.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-y7SCJJ2Z.js";const r=`# React

Zo gebruik je het GovNL Design System in een React-project. Dit werkt zowel voor
een nieuw project als voor een React-app die je al hebt staan.

## Wat je krijgt

Het design system bestaat uit losse npm-pakketten onder de scope \`@dictu/*\`:

- \`@dictu/design-tokens\` — kleuren, typografie en spacing als CSS-variabelen.
- \`@dictu/<component>\` — losse componenten zoals \`button\`, \`heading\` en
  \`form-field\`.

Het design system levert CSS, geen React-componenten. Je gebruikt de class-namen
direct in je JSX.

## Handige links

- React: https://react.dev/learn/installation
- Vite: https://vite.dev/guide/
- GovNL Storybook: https://drupalgovnl.github.io/govnl-nlds/

## Optie A — Nieuw React-project

Voor een nieuw React-project gebruik je Vite. Create React App is afgeraden.

### 1. Maak een nieuw project aan

\`\`\`bash
npm create vite@latest mijn-govnl-app -- --template react
cd mijn-govnl-app
npm install
\`\`\`

### 2. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 3. Importeer de stijlen globaal

Open \`src/main.jsx\` en voeg de imports toe vóór de \`createRoot\`-aanroep:

\`\`\`jsx
import "@dictu/design-tokens/dist/index.css";
import "@dictu/button/dist/index.css";
import "@dictu/heading/dist/index.css";
import "@dictu/form-field/dist/index.css";
\`\`\`

### 4. Activeer het thema in je app

Open \`src/App.jsx\` en zet je inhoud in een element met de class \`dictu-theme\`.
Deze class activeert de design tokens.

\`\`\`jsx
export default function App() {
  return (
    <div className="dictu-theme">
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
    </div>
  );
}
\`\`\`

### 5. Start de app

\`\`\`bash
npm run dev
\`\`\`

Open de URL die in de terminal verschijnt en controleer of de stijlen zichtbaar
zijn.

## Optie B — Bestaand React-project

Heb je al een React-app (Vite, Next.js of een andere bundler die CSS-imports
ondersteunt)? Volg dan deze stappen.

### 1. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens
npm install @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 2. Importeer de CSS op één centrale plek

Importeer de tokens en componenten in het hoogste bestand dat altijd geladen
wordt:

- Vite: \`src/main.jsx\` of \`src/main.tsx\`.
- Next.js (App Router): \`app/layout.tsx\`.

\`\`\`jsx
import "@dictu/design-tokens/dist/index.css";
import "@dictu/button/dist/index.css";
\`\`\`

Per nieuw component voeg je daar een extra import-regel toe.

### 3. Plaats \`dictu-theme\` op een geschikt element

Zet de class \`dictu-theme\` op het hoogst mogelijke element waar je het design
system wilt gebruiken. Dat kan het root-element zijn, maar ook een enkele pagina
of sectie.

\`\`\`jsx
function NieuweSectie() {
  return (
    <body className="dictu-theme">
      <h2 className="dictu-heading">Mijn nieuwe sectie</h2>
      <button
        className="dictu-button dictu-button--primary-action"
        type="button"
      >
        Opslaan
      </button>
    </body>
  );
}
\`\`\`

Zo gebruik je het design system alleen waar je het wilt, zonder bestaande
styling te raken.

### 4. Goed om te weten

- De CSS-classes beginnen altijd met \`dictu-\`. Botsingen met eigen classes komen
  daardoor zelden voor.
- CSS Modules en styled-components blijven gewoon werken naast de globale design
  system-CSS.
- In Next.js mag je deze CSS alleen importeren in een server- of root-component
  (niet binnen een client-component met dynamische import).

## Componenten uitbreiden

Wil je een extra component gebruiken?

\`\`\`bash
npm install @dictu/accordion
\`\`\`

Daarna in je centrale CSS-import-bestand:

\`\`\`js
import "@dictu/accordion/dist/index.css";
\`\`\`

De juiste class-namen vind je in de
[Storybook-pagina van het component](https://drupalgovnl.github.io/govnl-nlds/).

## Let op

- Zonder \`dictu-theme\` op een ouder-element zijn de design tokens niet actief en
  zien componenten er anders uit dan in Storybook.
- Importeer \`@dictu/design-tokens/dist/index.css\` één keer, niet in meerdere
  componenten.
- Gebruik de exacte class-namen uit Storybook; de stijlen zijn niet gebaseerd op
  element-selectors.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Voor ontwikkelaars/Framework Implementatie/React"}),`
`,e.jsx(o,{children:"React Implementatie"}),`
`,e.jsx(s,{children:r})]})}function g(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{g as default};
