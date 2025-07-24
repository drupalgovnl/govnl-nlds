/* empty css              */const l=`<!-- @license CC0-1.0 -->

Gebruik in CSS de \`.dictu-rich-text\` class name.
`,p=`<!-- @license CC0-1.0 -->

De Rich Text component voegt standaard styling toe aan platte HTML waar je geen
controle over hebt, zoals content uit een CMS.

De volgende HTML elementen worden voorzien van standaard opmaak:

- Paragrafen
- Links
- Kopteksten

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/rich-text
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/rich-text/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/rich-text/index.css";
\`\`\`

Dit component maakt gebruik van de design tokens van \`@dictu/paragraph\`,
\`@dictu/link\` en \`@dictu/heading\`. Zorg ervoor dat je de design tokens van deze
componenten ook hebt ingeladen als je dit component gebruikt.

## Richtlijnen

- Zorg ervoor dat de content van de component alleen \`p\`, \`a\`, en \`h1\` t/m \`h6\`
  elementen bevat.
- Zorg ervoor dat de semantische structuur van de tekst behouden blijft.
- Voeg geen inline stijlen toe; vertrouw op de meegeleverde CSS voor consistente
  opmaak.

## Links

- [Rich Text Content](https://www.nldesignsystem.nl/rich-text-content/)
`,u={args:{content:`
      <p>Paragraaf met een <a href="#">link</a>.</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    `,id:"rich-text-1"},argTypes:{content:{control:"text",description:"De HTML inhoud van de rich-text component"},id:{control:"text",description:"Container ID voor navigatie en toegankelijkheid"}},parameters:{docs:{description:{component:p}}},render:({content:e,id:s})=>{const n=document.createElement("div");if(n.classList.add("dictu-rich-text"),n.setAttribute("id",s),e){if(typeof e=="string"){const d=new DOMParser().parseFromString(e,"text/html"),o=document.createDocumentFragment();Array.from(d.body.childNodes).forEach(c=>{o.appendChild(c.cloneNode(!0))}),n.appendChild(o)}e instanceof HTMLElement&&n.appendChild(e)}return n},tags:["autodocs"],title:"Componenten/Rich Text"},t={args:{},parameters:{docs:{description:{story:l}}}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,u as default};
