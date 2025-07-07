/* empty css              */import u from"./image.stories-B9egdvZX.js";/* empty css              */const H=`<!-- @license CC0-1.0 -->

De hero component toont een opvallende sectie met een achtergrondafbeelding en
tekstinhoud aan de bovenkant van een pagina.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/hero
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/hero/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/hero/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-hero\` class voor de hero sectie.
- Gebruik semantische HTML: \`<section>\` voor de hoofdcontainer.
- Voeg een \`lang\` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg ervoor dat de achtergrondafbeelding een alt-tekst heeft voor
  toegankelijkheid.
- De hero is responsive en past zich automatisch aan op mobiele apparaten.

### Voorbeeldgebruik

\`\`\`html
<section class="dictu-section dictu-hero" lang="nl">
  <div class="dictu-container dictu-hero__container">
    <img
      src="/path/to/hero-image.jpg"
      alt="Beschrijving van de afbeelding"
      class="dictu-hero__image dictu-hero__image-ratio-video dictu-hero__image--corner-top-right"
      loading="lazy"
    />
    <div class="dictu-hero__message dictu-hero__message--left">
      <h1 class="dictu-hero__heading dictu-heading dictu-heading--level-1">
        Hero Titel
      </h1>
      <p class="dictu-paragraph dictu-hero__subheading">
        Dit is een beschrijvende ondertitel die meer context geeft over de hero
        sectie.
      </p>
    </div>
  </div>
</section>
\`\`\`

## CSS Klassen

### Hoofdcontainer

- \`.dictu-hero\` — hoofdcontainer voor de hero sectie
- \`.dictu-hero__container\` — interne container voor de inhoud

### Afbeelding

- \`.dictu-hero__image\` — de achtergrondafbeelding van de hero
- \`.dictu-hero__image-ratio-square\` — vierkante beeldverhouding (1:1)
- \`.dictu-hero__image-ratio-landscape\` — landschap beeldverhouding (4:3)
- \`.dictu-hero__image-ratio-video\` — video beeldverhouding (16:9)

### Hoekposities

- \`.dictu-hero__image--corner-top-left\` — afgeronde hoek linksboven
- \`.dictu-hero__image--corner-top-right\` — afgeronde hoek rechtsboven
- \`.dictu-hero__image--corner-bottom-left\` — afgeronde hoek linksonder
- \`.dictu-hero__image--corner-bottom-right\` — afgeronde hoek rechtsonder

### Bericht

- \`.dictu-hero__message\` — container voor de tekstinhoud
- \`.dictu-hero__message--left\` — positioneert het bericht links
- \`.dictu-hero__message--right\` — positioneert het bericht rechts
- \`.dictu-hero__heading\` — de hoofdtitel van de hero
- \`.dictu-hero__subheading\` — de ondertitel van de hero

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, typografie, etc.
Voorbeeld:

## Responsive gedrag

De hero component is volledig responsive:

- **Desktop**: Volledige grootte met optimale tekst- en afbeeldingsverhoudingen
- **Mobiel** (≤ 48em):
  - Kleinere marges voor betere ruimtebenutting
  - Aangepaste tekstgroottes voor leesbaarheid
  - Compactere lay-out van het berichtgedeelte

## Toegankelijkheid

- Gebruik altijd een \`<section>\` element voor de hero container.
- Voeg een \`lang\` attribuut toe voor de juiste taal.
- Zorg voor voldoende kleurcontrast tussen tekst en achtergrond.
- Gebruik logische heading hiërarchie (meestal h1 voor de hoofdtitel).
- Voeg betekenisvolle alt-teksten toe aan afbeeldingen.
- Test de component met een schermlezer om te controleren of de content goed
  voorgelezen wordt.

## Varianten

### Berichtposities

- **Links**: Bericht verschijnt aan de linkerkant van de afbeelding
- **Rechts**: Bericht verschijnt aan de rechterkant van de afbeelding

### Hoekposities voor afbeeldingen

- **Linksboven**: Afgeronde hoek linksboven
- **Rechtsboven**: Afgeronde hoek rechtsboven
- **Linksonder**: Afgeronde hoek linksonder
- **Rechtsonder**: Afgeronde hoek rechtsonder

### Beeldverhoudingen

- **Vierkant** (1:1): Voor vierkante afbeeldingen
- **Landschap** (4:3): Voor traditionele landschapsafbeeldingen
- **Video** (16:9): Voor widescreen afbeeldingen
`,C=["top-left","top-right","bottom-left","bottom-right"],S=["left","right"],V={args:{headingLevel:2,heading:"Hero Heading",subheading:"Hero Subheading",cornerPosition:"top-right",messagePosition:"left",...u.args,width:"1280",height:"495"},argTypes:{headingLevel:{control:"select",options:[1,2,3,4,5],description:"Heading level in de hero"},heading:{control:"text",description:"De titel van de hero"},subheading:{control:"text",description:"De ondertitel van de hero"},cornerPosition:{control:"select",options:C,description:"De positie van de hoekafbeelding"},messagePosition:{control:"select",options:S,description:"De positie van de inhoud in de hero"},...u.argTypes},parameters:{docs:{description:{component:H}}},tags:["autodocs"],title:"Componenten/Hero"},L=(r,o,h="heading")=>{if(!r||!o)return null;const l=`dictu-hero__${h}`,e=document.createElement(`h${o}`);return e.classList.add(`${l}`,"dictu-heading",`dictu-heading--level-${o}`),e.textContent=r,e},f=({heading:r,subheading:o,cornerPosition:h,messagePosition:l,...e})=>{const a=document.createElement("section");a.classList.add("dictu-section"),a.classList.add("dictu-hero");const d=document.createElement("div");d.classList.add("dictu-container","dictu-hero__container"),a.appendChild(d);const n=document.createElement("img");n.src=e.src,n.alt=e.alt||"",n.loading=e.imageLoading||"lazy",n.classList.add("dictu-hero__image",`dictu-aspect-ratio-${e.aspectRatio}`),n.classList.add(`dictu-hero__image--corner-${h}`),n&&d.appendChild(n);const t=document.createElement("div");t.classList.add("dictu-hero__message"),t.classList.add(`dictu-hero__message--${l}`),d.appendChild(t);const g=L(r,e.headingLevel);g&&(g.classList.add("dictu-hero__heading"),t.appendChild(g));const s=document.createElement("p");return s.classList.add("dictu-paragraph","dictu-hero__subheading"),s.textContent=o,s&&t.appendChild(s),a},i={render:f},c={args:{...i.args,heading:"Hero Titel Mobiel",subheading:"Dit is een beschrijvende ondertitel speciaal voor mobiele weergave."},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"De hero component geoptimaliseerd voor mobiele weergave met aangepaste lettergroottes en compactere layout."}}},render:f};var p,m,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: renderHero
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,_,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Hero.args,
    heading: 'Hero Titel Mobiel',
    subheading: 'Dit is een beschrijvende ondertitel speciaal voor mobiele weergave.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'De hero component geoptimaliseerd voor mobiele weergave met aangepaste lettergroottes en compactere layout.'
      }
    }
  },
  render: renderHero
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const y=["Hero","HeroMobiel"];export{i as Hero,c as HeroMobiel,y as __namedExportsOrder,V as default};
