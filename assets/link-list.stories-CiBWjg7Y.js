/* empty css              *//* empty css              */const p=`<!-- @license CC0-1.0 -->

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
import "@dictu/link-list/index.css";
\`\`\`

## Richtlijnen

Tekst toevoegen

## Links

### Relevante WCAG regels

Aanpassen:
- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)  
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,C={argTypes:{items:{control:"object"}},parameters:{docs:{description:{component:p}}},render:({items:s})=>{const c=["dictu-link-list"],d=["dictu-link","dictu-link-list__link"],t=document.createElement("ul");for(const m in s){const l=s[m],i=document.createElement("li"),n=document.createElement("a");i.classList.add("dictu-link-list__item"),n.classList.add(...d),n.innerHTML=`<span class="dictu-icon" role="presentation" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/></svg></span>${l.label}`,n.href=l.href,i.appendChild(n),t.appendChild(i)}return t.classList.add(...c),t},tags:["autodocs"],title:"Componenten/Link List"},e={args:{items:{item1:{label:"Contact",href:"dictu.nl"},item2:{label:"Colofon",href:"dictu.nl"},item3:{label:"Toegankelijkheid",href:"dictu.nl"}}}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: {
      item1: {
        label: 'Contact',
        href: 'dictu.nl'
      },
      item2: {
        label: 'Colofon',
        href: 'dictu.nl'
      },
      item3: {
        label: 'Toegankelijkheid',
        href: 'dictu.nl'
      }
    }
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const h=["LinkList"];export{e as LinkList,h as __namedExportsOrder,C as default};
