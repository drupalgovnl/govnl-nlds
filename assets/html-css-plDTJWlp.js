import{j as e,M as s,T as a,a as o}from"./blocks-CDG6_bGW.js";import{useMDXComponents as d}from"./index-Dp9GBBTX.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DIE8NMQ8.js";const l=`# HTML & CSS

Zo gebruik je het GovNL Design System in een statische HTML/CSS-pagina, zonder
framework of build-stap.

## Wat je krijgt

Het design system bestaat uit losse npm-pakketten onder de scope \`@dictu/*\`:

- \`@dictu/design-tokens\` — kleuren, typografie en spacing als CSS-variabelen.
- \`@dictu/<component>\` — losse componenten zoals \`button\`, \`heading\` en
  \`form-field\`.

Elk pakket levert een CSS-bestand op \`dist/index.css\`. Je kunt deze bestanden
direct gebruiken via npm of via een CDN.

## Handige links

- MDN HTML documentatie: https://developer.mozilla.org/nl/docs/Learn/HTML
- MDN CSS documentatie: https://developer.mozilla.org/nl/docs/Learn/CSS
- GovNL Storybook: https://drupalgovnl.github.io/govnl-nlds/

## Optie A — Nieuwe statische pagina met npm

Werk je met Node.js en wil je de pakketten lokaal beheren?

### 1. Maak een projectmap aan

\`\`\`bash
mkdir mijn-govnl-pagina
cd mijn-govnl-pagina
npm init -y
\`\`\`

### 2. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 3. Maak een HTML-bestand

Maak \`index.html\` met verwijzingen naar de CSS-bestanden in \`node_modules\`:

\`\`\`html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <title>Mijn GovNL pagina</title>
    <link
      rel="stylesheet"
      href="node_modules/@dictu/design-tokens/dist/index.css"
    />
    <link rel="stylesheet" href="node_modules/@dictu/heading/dist/index.css" />
    <link
      rel="stylesheet"
      href="node_modules/@dictu/form-field/dist/index.css"
    />
    <link rel="stylesheet" href="node_modules/@dictu/button/dist/index.css" />
  </head>
  <body class="dictu-theme">
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
  </body>
</html>
\`\`\`

### 4. Bekijk de pagina

Open \`index.html\` rechtstreeks in de browser, of gebruik een lokale server
zoals:

\`\`\`bash
npx serve .
\`\`\`

## Optie B — Bestaande HTML/CSS-website

Heb je al een statische site? Voeg het design system toe via npm of via een CDN.

### Variant 1 — via npm

Installeer de pakketten zoals hierboven en kopieer de CSS-bestanden naar je
publieke map, of laat je build-tool ze meenemen. Verwijs er vervolgens naar in
je HTML:

\`\`\`html
<link rel="stylesheet" href="/css/dictu/design-tokens.css" />
<link rel="stylesheet" href="/css/dictu/button.css" />
\`\`\`

### Variant 2 — via een CDN

Wil je niets lokaal installeren? Gebruik een CDN zoals
[unpkg](https://unpkg.com) of [jsDelivr](https://www.jsdelivr.com):

\`\`\`html
<link
  rel="stylesheet"
  href="https://unpkg.com/@dictu/design-tokens/dist/index.css"
/>
<link rel="stylesheet" href="https://unpkg.com/@dictu/heading/dist/index.css" />
<link rel="stylesheet" href="https://unpkg.com/@dictu/button/dist/index.css" />
\`\`\`

Pin in productie altijd een versie, bijvoorbeeld \`@dictu/button@1.0.0\`, zodat
updates je site niet onverwacht raken.

### Plaats \`dictu-theme\` op een geschikt element

Het design system activeert de tokens via de class \`dictu-theme\`. Zet die class
op \`<body>\` of op een sectie waar je het design system wilt gebruiken:

\`\`\`html
<section class="dictu-theme">
  <h2 class="dictu-heading">Mijn nieuwe sectie</h2>
  <button class="dictu-button dictu-button--primary-action" type="button">
    Opslaan
  </button>
</section>
\`\`\`

## Componenten uitbreiden

Wil je een extra component gebruiken? Voeg het pakket toe en linke de
bijbehorende CSS:

\`\`\`html
<link
  rel="stylesheet"
  href="https://unpkg.com/@dictu/accordion/dist/index.css"
/>
\`\`\`

De juiste class-namen vind je in de
[Storybook-pagina van het component](https://drupalgovnl.github.io/govnl-nlds/).

## Let op

- Zonder \`dictu-theme\` op een ouder-element zijn de design tokens niet actief en
  zien componenten er anders uit dan in Storybook.
- Linke \`@dictu/design-tokens/dist/index.css\` één keer, niet meerdere keren op
  dezelfde pagina.
- Gebruik de exacte class-namen uit Storybook; de stijlen zijn niet gebaseerd op
  element-selectors.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Voor ontwikkelaars/Framework Implementatie/HTML & CSS"}),`
`,e.jsx(a,{children:"HTML & CSS Implementatie"}),`
`,e.jsx(o,{children:l})]})}function h(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{h as default};
