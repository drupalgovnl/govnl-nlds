/* empty css              */import{L as e}from"./language-switcher.component-BUPk1Mra.js";const n=`<!-- @license CC0-1.0 -->

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
`,a={args:{current:"Nederlands",expanded:!1,align:"start",items:[{link:"/de/huidige-pagina",value:"de",language:"Deutsch",translation:"Duits"},{link:"/en/huidige-pagina",value:"en",language:"English",translation:"Engels"},{link:"/fr/huidige-pagina",value:"fr",language:"Français",translation:"Frans"},{link:"/nl/huidige-pagina",value:"nl",language:"Nederlands",translation:"Nederlands"}]},argTypes:{current:{options:["Nederlands","English","Deutsch","Français"],control:{type:"select"}},align:{control:"radio",options:["start","end"],description:"De positie van de uitgeklapte taal container",table:{type:{summary:"start | end"},defaultValue:{summary:"start"}}},expanded:{control:"boolean"},items:{control:"array"}},parameters:{docs:{description:{component:n}}},component:e,tags:["wip"],title:"Componenten/Language switcher"},t={},i={args:{expanded:!0}},r=["DefaultLanguageSwitcher","LanguageSwitcherExpanded"],o=Object.freeze(Object.defineProperty({__proto__:null,DefaultLanguageSwitcher:t,LanguageSwitcherExpanded:i,__namedExportsOrder:r,default:a},Symbol.toStringTag,{value:"Module"}));export{t as D,o as L,n as R,i as a};
