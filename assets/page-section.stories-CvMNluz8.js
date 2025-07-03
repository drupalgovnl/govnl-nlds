/* empty css                */const f=`Gebruik in CSS de \`.dictu-page-section\` class name voor de page-section
component.

## Beschrijving

De page-section component biedt een basis sectie-container met consistente
breedte en padding instellingen. De component gebruikt semantische HTML en volgt
toegankelijkheidsrichtlijnen.

### Voorbeeldgebruik

\`\`\`html
<section class="dictu-page-section">
  <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
  <p class="dictu-paragraph">
    Dit is de inhoud van de sectie met consistente styling en spacing.
  </p>
</section>
\`\`\`

## CSS Klassen

- \`.dictu-page-section\` — hoofdcontainer voor de sectie

## Functies

- **Semantische HTML**: Gebruikt \`<section>\` element voor goede structuur
- **Consistente breedte**: Gecontroleerde maximale breedte via design tokens
- **Padding**: Horizontale padding voor consistente uitlijning
- **Reset margins**: Alle margins worden gereset voor predictable styling

## Toegankelijkheid

Gebruik altijd \`<section>\` voor semantische structuur. Voeg indien nodig een
\`aria-label\` of \`aria-labelledby\` attribuut toe voor betere toegankelijkheid.
Gebruik logische heading niveaus binnen de sectie.
`,D=`<!-- @license CC0-1.0 -->

De page-section component biedt een basis sectie-container van het Dictu Design
Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/page-section
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/page-section/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/page-section/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-page-section\` class voor de sectie-container.
- Gebruik semantische HTML: \`<section>\` voor de hoofdcontainer.
- Voeg indien nodig een \`aria-label\` of \`aria-labelledby\` attribuut toe.
- Gebruik logische heading niveaus binnen de sectie.

### Voorbeeldgebruik

\`\`\`html
<section class="dictu-page-section">
  <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
  <p class="dictu-paragraph">
    Dit is de inhoud van de sectie met consistente styling en spacing.
  </p>
</section>

<!-- Met aria-label voor toegankelijkheid -->
<section class="dictu-page-section" aria-label="Belangrijke informatie">
  <h2 class="dictu-heading dictu-heading--level-2">Belangrijke update</h2>
  <p class="dictu-paragraph">
    Deze sectie bevat belangrijke informatie voor gebruikers.
  </p>
</section>

<!-- Met aria-labelledby voor toegankelijkheid -->
<section class="dictu-page-section" aria-labelledby="contact-heading">
  <h2 id="contact-heading" class="dictu-heading dictu-heading--level-2">
    Contact informatie
  </h2>
  <p class="dictu-paragraph">
    Neem contact met ons op via onderstaande gegevens.
  </p>
</section>
\`\`\`

## CSS Klassen

- \`.dictu-page-section\` — hoofdcontainer voor de sectie

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor breedte en spacing. Voorbeeld:

\`\`\`css
.dictu-page-section {
  --govnl-section-max-inline-width: 75rem;
  --govnl-section-padding-inline: 1rem;
  /* ... */
}
\`\`\`

## Toegankelijkheid

- Gebruik altijd een \`<section>\` element voor semantische structuur.
- Voeg indien nodig een \`aria-label\` of \`aria-labelledby\` attribuut toe.
- Gebruik logische heading niveaus binnen de sectie.
- Zorg dat alle interactieve elementen binnen de sectie toegankelijk zijn.

## Varianten

### Basis PageSection

De standaard page-section component met consistente breedte en padding.

\`\`\`js
export const Default = {
  args: {
    content: \`
      <h2>Sectie titel</h2>
      <p>Dit is de inhoud van de sectie met consistente styling en spacing.</p>
    \`,
    title: "Sectie titel",
    id: "page-section-1",
  },
};
\`\`\`

## Styling

De styling wordt verzorgd door de page-section CSS:

- \`.dictu-page-section\` — basis sectie styling met consistente breedte en
  padding

## Licentie

EUPL-1.2
`,L={args:{content:`
      <p>Dit is een page-section component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit.</p>
    `,title:"Sectie titel",id:"page-section-1"},argTypes:{content:{control:"text",description:"De HTML inhoud van de page-section"},id:{control:"text",description:"Sectie ID voor navigatie en toegankelijkheid"},ariaLabel:{control:"text",description:"Toegankelijke naam voor de sectie"},title:{control:"text",description:"Titel van de sectie, gebruikt voor toegankelijkheid en structuur"}},parameters:{docs:{description:{component:D}}},render:({content:n,id:s,ariaLabel:c,title:r})=>{const e=document.createElement("section");if(e.classList.add("dictu-section"),r){const t=document.createElement("h2");t.classList.add("dictu-heading","dictu-heading--level-2"),t.textContent=r,s&&(t.id=s,e.setAttribute("aria-labelledby",s)),e.appendChild(t)}if(n){if(typeof n=="string"){const j=new DOMParser().parseFromString(n,"text/html"),d=document.createDocumentFragment();Array.from(j.body.childNodes).forEach(S=>{d.appendChild(S.cloneNode(!0))}),e.appendChild(d)}n instanceof HTMLElement&&e.appendChild(n)}return c&&!r&&e.setAttribute("aria-label",c),e},tags:["autodocs"],title:"Componenten/Page Section"},i={args:{},parameters:{docs:{description:{story:f}}}},a={args:{ariaLabel:"Voorbeeld sectie met aria label",content:"<p>Deze sectie heeft een aria-label voor betere toegankelijkheid, zonder titel.</p>"},parameters:{docs:{description:{story:"Deze sectie heeft een aria-label voor betere toegankelijkheid."}}}},o={args:{title:"",content:`
      <p>Een sectie zonder titel, maar met rijke content.</p>
      <ul>
        <li>Lijst item 1</li>
        <li>Lijst item 2</li>
        <li>Lijst item 3</li>
      </ul>
    `},parameters:{docs:{description:{story:"Een sectie zonder titel, enkel met content."}}}};var l,g,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs
      }
    }
  }
}`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Voorbeeld sectie met aria label',
    content: \`<p>Deze sectie heeft een aria-label voor betere toegankelijkheid, zonder titel.</p>\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze sectie heeft een aria-label voor betere toegankelijkheid.'
      }
    }
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,k,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: '',
    content: \`
      <p>Een sectie zonder titel, maar met rijke content.</p>
      <ul>
        <li>Lijst item 1</li>
        <li>Lijst item 2</li>
        <li>Lijst item 3</li>
      </ul>
    \`
  },
  parameters: {
    docs: {
      description: {
        story: 'Een sectie zonder titel, enkel met content.'
      }
    }
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const C=["Default","WithAriaLabel","WithoutTitle"];export{i as Default,a as WithAriaLabel,o as WithoutTitle,C as __namedExportsOrder,L as default};
