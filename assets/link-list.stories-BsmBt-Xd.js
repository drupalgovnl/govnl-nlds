/* empty css              */import{L as p}from"./link.component-KS7kVO7o.js";import{I as m}from"./icon.component-X7CMXdF1.js";const u=`<!-- @license CC0-1.0 -->

Link list uitleg

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/link-list
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/link-list/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/link-list/dist/index.css";
\`\`\`

## Richtlijnen

Tekst toevoegen

## Links

### Relevante WCAG regels

Aanpassen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,k=({items:a,classNames:c=[]})=>{const e=document.createElement("ul");return e.classList.add("dictu-link-list",...c),a.forEach(i=>{const t=document.createElement("li"),s=p({content:i.label,href:i.href,classNames:["dictu-link-list__link"]}),d='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/></svg>';t.classList.add("dictu-link-list__item"),s.insertAdjacentElement("afterbegin",m({icon:d})),t.appendChild(s),e.appendChild(t)}),e},L={argTypes:{items:{control:"object"}},parameters:{docs:{description:{component:u}}},component:k,tags:["autodocs"],title:"Componenten/Link List"},n={args:{items:[{label:"Contact",href:"dictu.nl"},{label:"Colofon",href:"dictu.nl"},{label:"Toegankelijkheid",href:"dictu.nl"}]}};var l,o,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Contact',
      href: 'dictu.nl'
    }, {
      label: 'Colofon',
      href: 'dictu.nl'
    }, {
      label: 'Toegankelijkheid',
      href: 'dictu.nl'
    }]
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const g=["DefaultLinkList"];export{n as DefaultLinkList,g as __namedExportsOrder,L as default};
