const b=`<!-- @license CC0-1.0 -->

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
`,g=({content:t,href:k,variant:y,size:f,classNames:S=[]})=>{const n=document.createElement("a");return n.classList.add("dictu-link-as-button",`dictu-link-as-button--${y}`,"dictu-focus-ring",...S),n.href=k,f==="small"&&n.classList.add("dictu-link-as-button--small"),(t==null?void 0:t.nodeType)!==void 0?n.appendChild(t):n.innerHTML=t,n},v={args:{href:"dictu.nl",classNames:"",variant:"primary-action",content:"Dit is geen button"},argTypes:{content:{control:"text"},href:{control:"text"},variant:{control:"radio",options:["primary-action","secondary-action"],description:"De variant van de link as button",table:{type:{summary:"primary-action | secondary-action"},defaultValue:{summary:"primary-action"}}},size:{control:"radio",options:["default","small"],description:"De afmeting van de link as button",table:{type:{summary:"default | small"},defaultValue:{summary:"default"}}},classNames:{control:"text"}},parameters:{docs:{description:{component:b}}},render:g,title:"Componenten/Link as Button"},e={},a={args:{variant:"secondary-action"}},s={args:{size:"small"}};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'secondary-action'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["DefaultLinkAsButton","SecondaryLinkAsButton","SmallLinkAsButton"],B=Object.freeze(Object.defineProperty({__proto__:null,DefaultLinkAsButton:e,SecondaryLinkAsButton:a,SmallLinkAsButton:s,__namedExportsOrder:L,default:v},Symbol.toStringTag,{value:"Module"}));export{e as D,B as L,b as R,a as S,s as a};
