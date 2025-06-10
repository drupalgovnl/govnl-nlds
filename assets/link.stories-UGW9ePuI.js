const l=`<!-- @license CC0-1.0 -->

Een verwijzing om een een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.

## Gebruik deze component
Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/link
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/link/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/link/index.css";
\`\`\`

## Link gebruiken
Gebruik in CSS de \`.dictu-link\` class name.

## Link om een Image of andere inline-box componenten

Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de \`dictu-link\` class name in combinatie met \`dictu-link--inline-box\` class name.

## Links

- [MDN: \`<a>\`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
`,c={args:{href:"dictu.nl"},argTypes:{innerHTML:{control:"text"},href:{control:"text"}},parameters:{docs:{description:{component:l}}},render:({innerHTML:o,href:r})=>{const a=["dictu-link"],e=document.createElement("a");return e.innerText=o,e.href=r,e.classList.add(...a),e},tags:["autodocs"],title:"Componenten/Link"},n={args:{innerHTML:"Dit is een link"}};var t,i,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Dit is een link'
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const d=["Link"];export{n as Link,d as __namedExportsOrder,c as default};
