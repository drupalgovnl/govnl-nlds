import{j as e,M as o,T as c,S as s,C as t,A as l,h}from"./blocks-CkqFc3__.js";import{useMDXComponents as d}from"./index-DegaEofW.js";import{C as i,A as u}from"./card.stories-zBGrQjcT.js";import"./iframe-CWC7crkF.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              *//* empty css              */import"./heading.component--w7arIA8.js";import"./icon.component-BiJB5nKt.js";const g=`<!-- @license CC0-1.0 -->

De card component toont een kaart met afbeelding, titel, inhoud en metadata van
het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/design-tokens
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/design-tokens/dist/card.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/design-tokens/dist/card.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-card\` class voor de kaartcontainer.
- Gebruik semantische HTML: \`<article>\` of \`<div>\` voor de hoofdcontainer.
- Voeg een \`lang\` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg voor goede focus-states en toetsenbordnavigatie voor alle links.
- Voeg altijd betekenisvolle alt-tekst toe aan afbeeldingen.

### Voorbeeldgebruik

\`\`\`html
<article class="dictu-card" lang="nl">
  <div class="dictu-card__image-container">
    <img
      class="dictu-image dictu-card__image"
      src="/example-image.jpg"
      alt="Beschrijvende alt-tekst voor de afbeelding"
    />
  </div>
  <div class="dictu-card__content">
    <h2 class="dictu-heading dictu-card__heading">
      <a
        href="/artikel"
        class="dictu-link dictu-card__link"
        title="Lees het volledige artikel"
      >
        Titel van de kaart
      </a>
    </h2>
    <p class="dictu-paragraph dictu-card__paragraph">
      Dit is een korte beschrijving van de inhoud van de kaart die de lezer
      interesseert om verder te lezen.
    </p>
  </div>
  <small class="dictu-card__metadata"> Gepubliceerd op 15 januari 2025 </small>
</article>
\`\`\`

## CSS Klassen

- \`.dictu-card\` — hoofdcontainer voor de kaart
- \`.dictu-card--accent\` — accent variant van de kaart
- \`.dictu-card__image-container\` — container voor de afbeelding
- \`.dictu-card__content\` — container voor de hoofdinhoud
- \`.dictu-card__heading\` — titel/heading van de kaart
- \`.dictu-card__link\` — link element binnen de heading
- \`.dictu-card__paragraph\` — tekstinhoud van de kaart
- \`.dictu-card__metadata\` — metadata onderaan de kaart

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
\`proprietary/design-tokens/src/components/card.tokens.json\` voor een overzicht
van beschikbare tokens. Voorbeeld:

\`\`\`css
.dictu-card {
  --govnl-card-default-background-color: #fff;
  --govnl-card-default-border-color: #d1d5db;
  --govnl-card-default-border-radius: 0.5rem;
  --govnl-card-default-border-width: 1px;
  /* ... */
}
\`\`\`

## Toegankelijkheid

- Gebruik altijd een \`<article>\` of semantisch equivalent voor de
  kaartcontainer.
- Voeg een \`lang\` attribuut toe voor de juiste taal.
- Gebruik betekenisvolle alt-tekst voor afbeeldingen die de inhoud beschrijven.
- Links krijgen automatisch focus-states en moeten een duidelijk doel hebben.
- Gebruik logische heading niveaus die aansluiten bij de paginastructuur.
- De hele kaart is klikbaar via het ::after pseudo-element op de heading link.
- Zie
  [WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html),
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  en
  [WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).

# Varianten

## Card (Standaard)

De volledige card component met afbeelding, titel, inhoud en metadata.

\`\`\`js
export const Card = {
  args: {
    image_src: "/example-image.jpg",
    alt: "Dit is een voorbeeld afbeelding voor een kaart",
    headingLevel: 2,
    link: {
      href: "#",
      text: "De titel van de kaart",
    },
    content: "Dit is een voorbeeld van de inhoud van de kaart.",
    metadata: "Dit is een voorbeeld van de metadata",
    variant: "default",
  },
};
\`\`\`

## AccentCard

Een accent variant van de kaart met een opvallende achtergrondkleur voor
belangrijke content.

\`\`\`js
export const AccentCard = {
  args: {
    image_src: "/example-image.jpg",
    alt: "Dit is een voorbeeld afbeelding voor een accent kaart",
    headingLevel: 2,
    link: {
      href: "#",
      text: "De titel van de accent kaart",
    },
    content: "Dit is een voorbeeld van de inhoud van de accent kaart.",
    metadata: "Dit is een voorbeeld van de accent metadata",
    variant: "accent",
  },
};
\`\`\`

## Componenten

De card component maakt gebruik van andere design system componenten:

- **Image**: Voor de kaartafbeelding
- **Heading**: Voor de titel van de kaart
- **Link**: Voor de klikbare titel
- **Paragraph**: Voor de beschrijvende tekst
- **Metadata**: Voor aanvullende informatie

## Styling

De styling wordt verzorgd door de card CSS en importeert automatisch de
benodigde child components:

- \`.dictu-card\`
- \`.dictu-card--accent\`
- \`.dictu-card__image-container\`
- \`.dictu-card__content\`
- \`.dictu-card__heading\`
- \`.dictu-card__link\`
- \`.dictu-card__paragraph\`
- \`.dictu-card__metadata\`

Plus alle gerelateerde klassen van image, heading, link en paragraph components.

## Interactiviteit

- **Hover state**: Achtergrond en rand veranderen bij hover
- **Active state**: Visuele feedback bij klikken
- **Focus state**: Duidelijke focus indicator voor toetsenbordnavigatie
- **Hele kaart klikbaar**: Via het ::after pseudo-element op de heading link

## Licentie

EUPL-1.2
`;function r(a){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:i,title:"Componenten/Card"}),`
`,e.jsx(c,{children:"Card"}),`
`,e.jsx(s,{children:e.jsx(n.p,{children:`Gebruik een card op een overzichtspagina om te linken naar een artikelpagina, zoals een
nieuwsartikel, een vacature of een zoekresultaat. De card bevat doorgaans de afbeelding, titel,
subtitel, inleiding en een meta footer van de content.`})}),`
`,e.jsx(t,{of:void 0,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(h,{children:g}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-card-component",children:"Wanneer gebruik je de Card component"}),`
`,e.jsx(n.p,{children:"WIP"}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"WIP"}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"card",children:"Card"}),`
`,e.jsx(n.p,{children:"WIP"}),`
`,e.jsx(t,{of:void 0}),`
`,e.jsx(n.h3,{id:"accent-card",children:"Accent Card"}),`
`,e.jsx(n.p,{children:"WIP"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsx(n.p,{children:"De Card component maakt gebruik van de volgende componenten:"}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Card component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function C(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{C as default};
