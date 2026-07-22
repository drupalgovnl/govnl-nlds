import{j as e,M as s,T as o,a}from"./blocks-CDG6_bGW.js";import{useMDXComponents as d}from"./index-Dp9GBBTX.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DIE8NMQ8.js";const l=`# SvelteKit

Zo gebruik je het GovNL Design System in een SvelteKit-project. Dit werkt zowel
voor een nieuw project als voor een SvelteKit-app die je al hebt staan.

## Wat je krijgt

Het design system bestaat uit losse npm-pakketten onder de scope \`@dictu/*\`:

- \`@dictu/design-tokens\` — kleuren, typografie en spacing als CSS-variabelen.
- \`@dictu/<component>\` — losse componenten zoals \`button\`, \`heading\` en
  \`form-field\`.

Het design system levert platte CSS. Je gebruikt de class-namen direct in je
Svelte-templates.

## Handige links

- SvelteKit project starten: https://svelte.dev/docs/kit/creating-a-project
- Svelte CLI overzicht: https://svelte.dev/docs/cli/overview
- GovNL Storybook: https://drupalgovnl.github.io/govnl-nlds/

## Optie A — Nieuw SvelteKit-project

### 1. Maak een nieuw project aan

\`\`\`bash
npx sv create mijn-govnl-app
cd mijn-govnl-app
npm install
\`\`\`

Volg de wizard en kies de gewenste opties (TypeScript, ESLint, enzovoort).

### 2. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 3. Importeer de stijlen globaal

Open \`src/app.css\` (of maak het aan als het er nog niet is) en voeg toe:

\`\`\`css
@import "@dictu/design-tokens/dist/index.css";
@import "@dictu/button/dist/index.css";
@import "@dictu/heading/dist/index.css";
@import "@dictu/form-field/dist/index.css";
\`\`\`

Zorg dat \`src/routes/+layout.svelte\` deze stylesheet importeert:

\`\`\`svelte
<script>
  import '../app.css';
<\/script>

<slot />
\`\`\`

### 4. Activeer het thema in je layout

Wikkel je layout in een element met de class \`dictu-theme\`. Deze class activeert
de design tokens voor de hele app.

\`\`\`svelte
<script>
  import '../app.css';
<\/script>

<div class="dictu-theme">
  <slot />
</div>
\`\`\`

### 5. Gebruik componenten in een pagina

Open \`src/routes/+page.svelte\`:

\`\`\`svelte
<main>
  <h1 class="dictu-heading">Aanvraag starten</h1>

  <div class="dictu-form-field">
    <label class="dictu-label" for="bsn">BSN</label>
    <input class="dictu-text-input" id="bsn" name="bsn" type="text" />
  </div>

  <button class="dictu-button dictu-button--primary-action" type="button">
    Verder
  </button>
</main>
\`\`\`

### 6. Start de app

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:5173 en controleer of de stijlen zichtbaar zijn.

## Optie B — Bestaand SvelteKit-project

Heb je al een SvelteKit-app? Volg dan deze stappen.

### 1. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens
npm install @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 2. Voeg de stijlen toe aan je globale CSS

Heb je al een \`src/app.css\` of vergelijkbaar globaal CSS-bestand? Zet de imports
daar bovenaan:

\`\`\`css
@import "@dictu/design-tokens/dist/index.css";
@import "@dictu/button/dist/index.css";
\`\`\`

Zorg dat dit bestand wordt geïmporteerd in \`src/routes/+layout.svelte\`. Zo niet,
voeg de import toe in een \`<script>\`-blok.

### 3. Plaats \`dictu-theme\` op een geschikt element

Het design system activeert de tokens via de class \`dictu-theme\`. Zet die class
op het hoogst mogelijke element waar je het design system wilt gebruiken. Dat
kan de hele layout zijn, maar ook één pagina of sectie.

\`\`\`svelte
<section class="dictu-theme">
  <h2 class="dictu-heading">Mijn nieuwe sectie</h2>
  <button class="dictu-button dictu-button--primary-action" type="button">
    Opslaan
  </button>
</section>
\`\`\`

Zo introduceer je het design system stap voor stap, zonder bestaande styling te
raken.

### 4. Goed om te weten

- De CSS-classes beginnen altijd met \`dictu-\`. Botsingen met eigen classes komen
  daardoor zelden voor.
- Svelte gebruikt standaard scoped styles in componenten. De globale design
  system-CSS werkt daar prima naast.
- Als je class-namen alleen dynamisch toevoegt en Svelte ze niet ziet, voeg dan
  \`:global()\` toe in de scoped style of gebruik de class direct in de template.

## Componenten uitbreiden

Wil je een extra component gebruiken?

\`\`\`bash
npm install @dictu/accordion
\`\`\`

Daarna in je globale CSS:

\`\`\`css
@import "@dictu/accordion/dist/index.css";
\`\`\`

De juiste class-namen vind je in de
[Storybook-pagina van het component](https://drupalgovnl.github.io/govnl-nlds/).

## Let op

- Zonder \`dictu-theme\` op een ouder-element zijn de design tokens niet actief en
  zien componenten er anders uit dan in Storybook.
- Importeer \`@dictu/design-tokens/dist/index.css\` één keer globaal, niet per
  component.
- Gebruik de exacte class-namen uit Storybook; de stijlen zijn niet gebaseerd op
  element-selectors.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Voor ontwikkelaars/Framework Implementatie/SvelteKit"}),`
`,e.jsx(o,{children:"SvelteKit Implementatie"}),`
`,e.jsx(a,{children:l})]})}function g(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{g as default};
