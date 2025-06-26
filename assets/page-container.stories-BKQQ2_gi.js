const l=`Gebruik in CSS de \`.dictu-page-container\` class name voor de page-container
component.

## Beschrijving

De page-container component biedt een basis container-element met consistente
maximale breedte, centrering en padding instellingen. De component gebruikt
semantische HTML en volgt toegankelijkheidsrichtlijnen voor een gestructureerde
pagina-indeling.

### Voorbeeldgebruik

\`\`\`html
<div class="dictu-page-container">
  <h1 class="dictu-heading dictu-heading--level-1">Pagina titel</h1>
  <p class="dictu-paragraph">
    Dit is de inhoud van de pagina met consistente styling en spacing.
  </p>
</div>
\`\`\`

### Als hoofdcontainer

\`\`\`html
<main class="dictu-page-container">
  <section class="dictu-page-section">
    <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
    <p class="dictu-paragraph">
      Deze container zorgt voor consistente breedte en centrering.
    </p>
  </section>
</main>
\`\`\`

## CSS Klassen

- \`.dictu-page-container\` — hoofdcontainer voor de pagina content

## Functies

- **Maximale breedte**: Gecontroleerde maximale breedte via design tokens
  (standaard 1280px)
- **Centrering**: Automatische centrering van content met \`margin: 0 auto\`
- **Flexibele breedte**: 100% breedte die zich aanpast aan het scherm
- **Padding**: Horizontale padding voor consistente uitlijning via design tokens
- **Reset margins**: Alle margins worden gereset voor predictable styling
- **Responsief**: Flexibele breedte die zich aanpast aan verschillende
  schermgroottes

## Design Tokens

De component gebruikt de volgende design tokens:

- \`--govnl-container-max-inline-width\`: Maximale inline breedte
- \`--govnl-container-padding-inline\`: Horizontale padding
- \`--govnl-container-max-width\`: Maximale breedte (fallback: 1280px)

## Toegankelijkheid

Gebruik semantisch juiste HTML elementen zoals \`<div>\`, \`<main>\`, \`<article>\` of
\`<section>\` afhankelijk van de context. Voeg indien nodig een \`id\` attribuut toe
voor navigatie en toegankelijkheid. Gebruik logische heading niveaus binnen de
container.
`,g=`<!-- @license CC0-1.0 -->

De page-container component biedt een basis container-element van het Dictu
Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/page-container
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/page-container/dist/index.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/page-container/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-page-container\` class voor de container-element.
- Gebruik semantische HTML: \`<div>\` of \`<main>\` voor de hoofdcontainer.
- Voeg indien nodig een \`id\` attribuut toe voor navigatie en toegankelijkheid.
- De component zorgt voor consistente maximale breedte en centrering van
  content.

### Voorbeeldgebruik

\`\`\`html
<div class="dictu-page-container">
  <h1 class="dictu-heading dictu-heading--level-1">Pagina titel</h1>
  <p class="dictu-paragraph">
    Dit is de inhoud van de pagina met consistente styling en spacing.
  </p>
</div>

<!-- Als hoofdcontainer voor de pagina -->
<main class="dictu-page-container">
  <section class="dictu-page-section">
    <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
    <p class="dictu-paragraph">
      Deze container zorgt voor consistente breedte en centrering.
    </p>
  </section>
</main>

<!-- Met ID voor navigatie en toegankelijkheid -->
<div class="dictu-page-container" id="main-content">
  <h1 class="dictu-heading dictu-heading--level-1">Welkom</h1>
  <p class="dictu-paragraph">
    Deze container heeft een ID voor betere toegankelijkheid.
  </p>
</div>
\`\`\`

## CSS Klassen

- \`.dictu-page-container\` — hoofdcontainer voor de pagina content

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor breedte en spacing. Voorbeeld:

\`\`\`css
.dictu-page-container {
  --govnl-container-max-inline-width: 80rem;
  --govnl-container-padding-inline: 1rem;
  --govnl-container-max-width: 1280px;
  /* ... */
}
\`\`\`

## Toegankelijkheid

- Gebruik een semantisch juist HTML element (\`<div>\`, \`<main>\`, \`<article>\`,
  etc.).
- Voeg indien nodig een \`id\` attribuut toe voor navigatie.
- Zorg dat alle interactieve elementen binnen de container toegankelijk zijn.
- Gebruik logische heading niveaus binnen de container.

## Varianten

### Basis PageContainer

De standaard page-container component met consistente maximale breedte en
centrering.

\`\`\`js
export const Default = {
  args: {
    content: \`
      <h1>Pagina titel</h1>
      <p>Dit is de inhoud van de pagina met consistente styling en spacing.</p>
    \`,
    id: "page-container-1",
  },
};
\`\`\`

## Styling

De styling wordt verzorgd door de page-container CSS:

- \`.dictu-page-container\` — basis container styling met maximale breedte,
  centrering en padding

## Functies

- **Maximale breedte**: Gecontroleerde maximale breedte via design tokens
- **Centrering**: Automatische centrering van content
- **Padding**: Horizontale padding voor consistente uitlijning
- **Reset margins**: Alle margins worden gereset voor predictable styling
- **Responsief**: Flexibele breedte die zich aanpast aan het scherm

## Licentie

EUPL-1.2
`,m={args:{content:`
      <p>Dit is een page-container component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.</p>
    `,id:"page-container-1"},argTypes:{content:{control:"text",description:"De HTML inhoud van de page-container"},id:{control:"text",description:"Container ID voor navigatie en toegankelijkheid"}},parameters:{docs:{description:{component:g}}},render:({content:n,id:s})=>{const e=document.createElement("div");if(e.classList.add("dictu-page-container"),e.setAttribute("id",s),n){if(typeof n=="string"){const c=new DOMParser().parseFromString(n,"text/html"),t=document.createDocumentFragment();Array.from(c.body.childNodes).forEach(d=>{t.appendChild(d.cloneNode(!0))}),e.appendChild(t)}n instanceof HTMLElement&&e.appendChild(n)}return e},tags:["autodocs"],title:"Componenten/Page Container"},i={args:{},parameters:{docs:{description:{story:l}}}};var a,o,r;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs
      }
    }
  }
}`,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Default"];export{i as Default,u as __namedExportsOrder,m as default};
