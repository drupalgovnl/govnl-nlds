const i=`<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/link-as-button
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/link-as-button/dist/index.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/link-as-button/dist/index.css";
\`\`\`
`,r=({content:t,href:e,variant:s,size:a,classNames:o=[]})=>{const n=document.createElement("a");return n.classList.add("dictu-link-as-button",`dictu-link-as-button--${s}`,"dictu-focus-ring",...o),n.href=e,a==="small"&&n.classList.add("dictu-link-as-button--small"),(t==null?void 0:t.nodeType)!==void 0?n.appendChild(t):n.innerHTML=t,n},l={args:{href:"dictu.nl",classNames:"",variant:"primary-action",content:"Dit is geen button"},argTypes:{content:{control:"text"},href:{control:"text"},variant:{control:"radio",options:["primary-action","secondary-action"],description:"De variant van de link as button",table:{type:{summary:"primary-action | secondary-action"},defaultValue:{summary:"primary-action"}}},size:{control:"radio",options:["default","small"],description:"De afmeting van de link as button",table:{type:{summary:"default | small"},defaultValue:{summary:"default"}}},classNames:{control:"text"}},parameters:{docs:{description:{component:i}}},render:r,title:"Componenten/Link as Button"},d={},u={args:{variant:"secondary-action"}},c={args:{size:"small"}},m=["DefaultLinkAsButton","SecondaryLinkAsButton","SmallLinkAsButton"],k=Object.freeze(Object.defineProperty({__proto__:null,DefaultLinkAsButton:d,SecondaryLinkAsButton:u,SmallLinkAsButton:c,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{d as D,k as L,i as R,u as S,c as a};
