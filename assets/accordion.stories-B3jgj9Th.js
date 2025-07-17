/* empty css              */const A=`<!-- @license CC0-1.0 -->

Button uitleg

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/button
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/button/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/button/index.css";
\`\`\`

## Richtlijnen

- Maak gebruik van het \`aria-expanded\` attribuut op de button. Wanneer de
  accordion gesloten is, staat dit attribuut op \`false\`, wanneer de accordion
  open is, op \`true\`. Zorg dat dit attribuut meeverandert met de state van de
  accordion.
- Gebruik het \`hidden\` attribuut op de body van het accordion waneer de
  accordion gesloten is. Dit zorgt ervoor dat de body niet zichtbaar is.

## Links

### Relevante WCAG regels

Aanpassen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,q={argTypes:{label:{control:"string"},content:{control:"string"},headingLevel:{control:"radio",options:["1","2","3","4","5","6"]}},parameters:{docs:{description:{component:A}}},render:({label:g,content:o,headingLevel:v,...s})=>{const b=["dictu-accordion"],h=["dictu-button","dictu-button--subtle","dictu-accordion__button"],n=document.createElement("div"),u=document.createElement(`h${v}`),t=document.createElement("button"),e=document.createElement("div"),f='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#154273"/></svg>';return t.classList.add(...h),t.setAttribute("aria-expanded",s.expanded),t.innerHTML=g+f,e.classList.add("dictu-accordion__body"),e.id=s.id,e.innerHTML=o,e.setAttribute=o,s.expanded===!1&&(e.hidden=!0),u.classList.add("dictu-accordion__heading"),u.appendChild(t),n.appendChild(u),n.appendChild(e),n.classList.add(...b),n},tags:["autodocs"],title:"Componenten/Accordion"},i={args:{label:"Accordeon Titel",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.",expanded:!0,id:"accordion-1",headingLevel:"2"}},a={args:{label:"Accordeon Titel",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.",expanded:!1,id:"accordion-2",headingLevel:"2"}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Accordeon Titel',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.',
    expanded: true,
    id: 'accordion-1',
    headingLevel: '2'
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var r,m,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Accordeon Titel',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut varius lectus. Sed lacus sapien, tincidunt sed mi vitae, aliquam venenatis orci. Aliquam vel nisi pulvinar odio pretium tincidunt. Etiam imperdiet lacus non justo sodales vulputate. Nam et lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis nibh nec commodo laoreet. Nulla rutrum nulla dui, a luctus sapien congue in. Vestibulum quis condimentum ligula, a sagittis augue. Suspendisse ullamcorper urna non leo posuere, ac feugiat lectus pellentesque. In luctus sodales massa ac bibendum.',
    expanded: false,
    id: 'accordion-2',
    headingLevel: '2'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["AccordionOpen","AccordionClosed"];export{a as AccordionClosed,i as AccordionOpen,L as __namedExportsOrder,q as default};
