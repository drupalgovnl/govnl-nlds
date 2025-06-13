/* empty css              */const c=`<!-- @license CC0-1.0 -->

Icon uitleg

## Gebruik deze component
Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/icon
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/icon/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/icon/index.css";
\`\`\`

## Richtlijnen

Tekst toevoegen

## Links

### Relevante WCAG regels

Aanpassen:
- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)  
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,d={argTypes:{icon:{control:"string"}},parameters:{docs:{description:{component:c}}},render:({icon:i})=>{const r=["dictu-icon"],n=document.createElement("span");return n.classList.add(...r),n.setAttribute("aria-hidden","true"),n.innerHTML=i,n},tags:["autodocs"],title:"Componenten/Icon"},e={args:{icon:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" /></svg>'}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" /></svg>'
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["Icon"];export{e as Icon,p as __namedExportsOrder,d as default};
