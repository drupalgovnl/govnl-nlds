/* empty css              */const u=`<!-- @license CC0-1.0 -->

Gebruik in CSS de \`.dictu-paragraph\` class name.
`,m=`<!-- @license CC0-1.0 -->

De lead paragraph is een extra opvallende variant van de paragraph. Gebruik de
lead paragraph onder de heading van een article voor een introductietekst.
Gebruik de lead paragraph niet wanneer je een paragraph voor een ander doel
extra opvallend wil maken, ontwikkel dan een eigen variant.

Gebruik in CSS de \`.dictu-paragraph\` en \`.dictu-paragraph--lead\` class names.

Gebruik het HTML element \`<b>\` om de tekst visueel herkenbaar te maken als lead
paragraph. Gebruik niet \`<strong>\`, die is bedoeld om informatie extra
belangrijk te maken. Je wilt bijvoorbeeld niet dat een lead paragraph extra
nadrukkelijk wordt uigesproken door een schermvoorlezer.

Als de CSS niet geladen kan worden, dan blijft de tekst visueel herkenbaar als
lead paragraph door het \`<b>\` element.
`,g=`<!-- @license CC0-1.0 -->

De paragraph component gebruik je voor een alinea met lopende tekst, instructies
van formulieren en voor overige losstaande tekstfragmenten.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/paragraph
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/paragraph/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/paragraph/index.css";
\`\`\`

## Richtlijnen

Gebruik voor het paragraph component altijd het \`<p>\` HTML-element, die heeft
automatisch de goede paragraph role in de accessibility tree (dat is nodig voor
WCAG eis 1.3.1). Zelfs als geen CSS geladen kan worden, blijft de tekst
duidelijk. Door het \`<p>\` element is er tussen alinea's duidelijke witruimte
(WCAG 1.4.12).

## Links

- [MDN: \`<p>\`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)

### Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,k={args:{innerHTML:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit. Quisque placerat lobortis interdum. Mauris ut tempor tellus. Curabitur lacinia mauris eget ultrices pellentesque. Aenean accumsan dui ut odio bibendum efficitur. Pellentesque consequat, orci congue cursus aliquet, risus sem tincidunt ex, porta sagittis diam dui feugiat nunc. Donec aliquet tortor sed nibh aliquet mollis."},argTypes:{innerHTML:{control:"text"},lead:{control:"boolean"}},parameters:{docs:{description:{component:g}}},render:({innerHTML:p,...c})=>{const r=["dictu-paragraph"],a=document.createElement("p");return c.lead&&r.push("dictu-paragraph--lead"),a.innerText=p,a.classList.add(...r),a},tags:["autodocs"],title:"Componenten/Paragraph"},e={args:{lead:!1},parameters:{docs:{description:{story:u}}}},n={args:{lead:!0},parameters:{docs:{description:{story:m}}}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    lead: false
  },
  parameters: {
    docs: {
      description: {
        story: defaultDocs
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    lead: true
  },
  parameters: {
    docs: {
      description: {
        story: leadDocs
      }
    }
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const b=["Paragraph","Lead"];export{n as Lead,e as Paragraph,b as __namedExportsOrder,k as default};
