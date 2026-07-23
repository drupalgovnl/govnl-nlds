import{j as n,M as i,T as a,a as o}from"./blocks-CEOPWmX-.js";import{useMDXComponents as d}from"./index-DAK8UF0w.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-y7SCJJ2Z.js";const l=`# Angular

Zo gebruik je het GovNL Design System in een Angular-project. Dit werkt zowel
voor een nieuw project als voor een project dat je al hebt staan.

## Wat je krijgt

Het design system bestaat uit losse npm-pakketten onder de scope \`@dictu/*\`:

- \`@dictu/design-tokens\` — kleuren, typografie en spacing als CSS-variabelen.
- \`@dictu/<component>\` — losse componenten zoals \`button\`, \`heading\` en
  \`form-field\`.

Alle stijlen worden geleverd als platte CSS. Je hebt dus geen Angular-specifieke
wrapper of extra build-stap nodig.

## Handige links

- Angular installatie: https://angular.dev/installation
- GovNL Storybook: https://drupalgovnl.github.io/govnl-nlds/
- Overzicht componenten:
  https://drupalgovnl.github.io/govnl-nlds/?path=/docs/introductie--docs

## Optie A — Nieuw Angular-project

Zo maak je vanaf nul een Angular-project waarin het design system direct werkt.

### 1. Maak een nieuw project aan

\`\`\`bash
npm install -g @angular/cli@latest
ng new mijn-govnl-app
cd mijn-govnl-app
\`\`\`

Kies tijdens de wizard voor SCSS als je wilt aansluiten bij het design system.

### 2. Installeer de pakketten

\`\`\`bash
npm install @dictu/design-tokens @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 3. Importeer de stijlen globaal

Open \`src/styles.scss\` en voeg toe:

\`\`\`scss
@import "@dictu/design-tokens/dist/index.css";
@import "@dictu/button/dist/index.css";
@import "@dictu/heading/dist/index.css";
@import "@dictu/form-field/dist/index.css";
\`\`\`

### 4. Activeer het thema in je app

Open \`src/app/app.component.html\` en zet je inhoud in een element met de class
\`dictu-theme\`. Deze class activeert de design tokens.

\`\`\`html
<div class="dictu-theme">
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
</div>
\`\`\`

### 5. Start de app

\`\`\`bash
npm start
\`\`\`

Open http://localhost:4200 en controleer of de stijlen zichtbaar zijn.

## Optie B — Bestaand Angular-project

Heb je al een Angular-project? Volg dan deze stappen.

### 1. Installeer de pakketten

Begin met de tokens en breid daarna uit met de componenten die je nodig hebt.

\`\`\`bash
npm install @dictu/design-tokens
npm install @dictu/button @dictu/heading @dictu/form-field
\`\`\`

### 2. Voeg de stijlen toe aan je globale stylesheet

In \`angular.json\` is meestal \`src/styles.scss\` of \`src/styles.css\` ingesteld als
globale stylesheet. Voeg daar de imports toe:

\`\`\`scss
@import "@dictu/design-tokens/dist/index.css";
@import "@dictu/button/dist/index.css";
\`\`\`

Per nieuw component voeg je een extra import-regel toe.

### 3. Plaats \`dictu-theme\` op een geschikt element

Het design system activeert de tokens via de class \`dictu-theme\`. Zet die class
op het hoogst mogelijke element waar je het design system wilt gebruiken. Vaak
is dat het root-element in \`app.component.html\`, maar het kan ook op een
specifieke pagina of sectie.

\`\`\`html
<section class="dictu-theme">
  <h2 class="dictu-heading">Mijn nieuwe sectie</h2>
  <button class="dictu-button dictu-button--primary-action" type="button">
    Opslaan
  </button>
</section>
\`\`\`

Zo introduceer je het design system stap voor stap, zonder bestaande styling te
raken.

### 4. Voorkom conflicten met bestaande styling

- De CSS-classes beginnen altijd met \`dictu-\`. Conflicten met eigen classes
  komen daardoor zelden voor.
- Component-CSS van Angular (gescoped per component) blijft naast de globale
  design system-CSS staan.
- Een eigen reset of normalize hoef je niet te verwijderen; het design system
  stuurt op classes en werkt prima samen met de meeste basisstijlen.

## Componenten uitbreiden

Wil je een extra component gebruiken? Dat is altijd dezelfde stap:

\`\`\`bash
npm install @dictu/accordion
\`\`\`

Daarna in je globale stylesheet:

\`\`\`scss
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
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Voor ontwikkelaars/Framework Implementatie/Angular"}),`
`,n.jsx(a,{children:"Angular Implementatie"}),`
`,n.jsx(o,{children:l})]})}function g(e={}){const{wrapper:t}={...d(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s()}export{g as default};
