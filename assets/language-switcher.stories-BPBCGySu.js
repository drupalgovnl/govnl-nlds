/* empty css              */import{L as l}from"./language-switcher.component-DAkIERlr.js";const d=`<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/language-switcher
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/language-switcher/dist/index.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/language-switcher/dist/index.css";
\`\`\`
`,u={args:{current:"Nederlands",expanded:!1,align:"start",items:[{link:"/de/huidige-pagina",value:"de",language:"Deutsch",translation:"Duits"},{link:"/en/huidige-pagina",value:"en",language:"English",translation:"Engels"},{link:"/fr/huidige-pagina",value:"fr",language:"Français",translation:"Frans"},{link:"/nl/huidige-pagina",value:"nl",language:"Nederlands",translation:"Nederlands"}]},argTypes:{current:{options:["Nederlands","English","Deutsch","Français"],control:{type:"select"}},align:{control:"radio",options:["start","end"],description:"De positie van de uitgeklapte taal container",table:{type:{summary:"start | end"},defaultValue:{summary:"start"}}},expanded:{control:"boolean"},items:{control:"array"}},parameters:{docs:{description:{component:d}}},component:l,tags:["wip"],title:"Componenten/Language switcher"},e={},n={args:{expanded:!0}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const c=["DefaultLanguageSwitcher","LanguageSwitcherExpanded"],m=Object.freeze(Object.defineProperty({__proto__:null,DefaultLanguageSwitcher:e,LanguageSwitcherExpanded:n,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{e as D,m as L,d as R,n as a};
