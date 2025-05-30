import{BADGES as d}from"./preview-2NqGIXso.js";const k=`<!-- @license CC0-1.0 -->

Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.

## Gebruik deze component
Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/skip-link
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/skip-link/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/skip-link/index.css";
\`\`\`

## Richtlijnen

Skip links zijn belangrijk om te gebruiken op de meeste websites omdat voor sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te gebruiken. Met een skip link ga je naar een andere plek op dezelfde pagina, zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt aanklikken, zonder tijd te besteden aan de hoofdnavigatie.

## Gebruik skip link

Gebruik voor een skip link de class name \`dictu-skip-link\` op een \`anchor\` element. Voeg de class name \`dictu-skip-link--visible-on-focus\` toe wanneer de skip link alleen zichtbaar moet zijn wanneer het element focus heeft.

## Links

### Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks)
`,p={argTypes:{innerHTML:{control:"text"},href:{control:"text"}},parameters:{badges:[d.WIP],docs:{description:{component:k}}},render:({innerHTML:r,href:o,...l})=>{const a=["dictu-skip-link"],e=document.createElement("a");return e.innerText=r,e.href=o,e.classList.add(...a),e},tags:["autodocs"],title:"Componenten/Skip Link"},n={args:{innerHTML:"Ga direct naar inhoud",href:"#content"}};var i,t,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Ga direct naar inhoud',
    href: '#content'
  }
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const m=["SkipLink"];export{n as SkipLink,m as __namedExportsOrder,p as default};
