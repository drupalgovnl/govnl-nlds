import t from"./image.stories-DK-x6cx_.js";const l=`# Figure component

De figure component is een semantische container met bijschrift.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/figure
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/figure/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/figure/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik in CSS de \`.dictu-figure\` class name voor de figure component.
- Gebruik altijd het \`<figure>\` element voor semantische betekenis.
- Voeg een \`<figcaption>\` toe voor beschrijvende tekst.
- Zorg dat de afbeelding binnen de figure een passende \`alt\` tekst heeft.

## Beschrijving

De figure component is een semantische container voor afbeeldingen met
bijschrift. Deze component combineert een afbeelding met een \`figcaption\`
element om betekenisvolle context te bieden. De component is volledig
toegankelijk en ondersteunt verschillende beeldverhoudingen.

### Voorbeeldgebruik

\`\`\`html
<figure class="dictu-figure">
  <img
    class="dictu-image"
    src="/example-image.jpg"
    alt="Voorbeeldafbeelding"
    width="640"
    height="640"
  />
  <figcaption class="dictu-figure__caption">
    Dit is een voorbeeld van een bijschrift
  </figcaption>
</figure>
\`\`\`

## CSS Klassen

- \`.dictu-figure\` — hoofdcontainer voor de figure component
- \`.dictu-figure__caption\` — bijschrift element (figcaption)

## Functies

- **Semantische structuur**: Gebruikt HTML5 \`<figure>\` en \`<figcaption>\`
  elementen
- **Flexibele layout**: Verticale uitlijning met configureerbare afstand
- **Toegankelijk bijschrift**: Correct gekoppeld aan de afbeelding
- **Verschillende beeldverhoudingen**: Ondersteuning voor square, landscape,
  portrait en video ratio's
- **Responsief ontwerp**: Automatische aanpassing aan verschillende
  schermformaten

## Beeldverhoudingen

De component ondersteunt de volgende beeldverhoudingen:

- **Square**: 1:1 verhouding voor vierkante afbeeldingen
- **Landscape**: 4:3 verhouding voor liggende afbeeldingen
- **Portrait**: 3:4 verhouding voor staande afbeeldingen
- **Video**: 16:9 verhouding voor video content

## CSS Custom Properties

De component gebruikt de volgende CSS custom properties:

- \`--govnl-figure-column-gap\`: Afstand tussen afbeelding en bijschrift
- \`--govnl-figure-caption-color\`: Tekstkleur van het bijschrift (standaard:
  #000)
- \`--govnl-figure-caption-font-size\`: Lettergrootte van het bijschrift
  (standaard: 1rem)
- \`--govnl-figure-caption-line-height\`: Regelafstand van het bijschrift
  (standaard: 1.4)

## Toegankelijkheid

- Gebruik altijd het \`<figure>\` element voor semantische betekenis
- Voeg een \`<figcaption>\` toe voor beschrijvende tekst
- De afbeelding binnen de figure moet een passende \`alt\` tekst hebben
- Voor decoratieve afbeeldingen gebruik \`alt=""\` en \`role="presentation"\`
- Zie
  [WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

## Varianten

- **Standaard**: Met bijschrift en normale afbeelding
- **Decoratief**: Voor decoratieve afbeeldingen zonder betekenisvolle alt-tekst
- **Verschillende beeldverhoudingen**: Square, landscape, portrait, video

## Licentie

EUPL-1.2
`,u={args:{src:"/example-image.jpg",caption:"Dit is een voorbeeld van een bijschrift",alt:"Dit is een voorbeeld afbeelding",loading:"lazy",decorative:!1,width:"100%",height:"100%"},argTypes:{caption:{control:"text",description:"De bijschrift van de afbeelding"},...t.argTypes},parameters:{docs:{description:{component:l}}},render:({caption:s,...d})=>{const e=document.createElement("figure");e.classList.add("dictu-figure");const c=t.render(d),i=document.createElement("figcaption");return i.classList.add("dictu-figure__caption"),i.innerText=s,e.appendChild(c),e.appendChild(i),e},tags:["autodocs"],title:"Componenten/Figure"},n={args:{src:"/example-image.jpg",caption:"Dit is een voorbeeld van een bijschrift",alt:"Dit is een voorbeeld afbeelding",width:"640",height:"640",aspectRatio:"square"}};var o,r,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    src: '/example-image.jpg',
    caption: 'Dit is een voorbeeld van een bijschrift',
    alt: 'Dit is een voorbeeld afbeelding',
    width: '640',
    height: '640',
    aspectRatio: 'square'
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const p=["Figure"];export{n as Figure,p as __namedExportsOrder,u as default};
