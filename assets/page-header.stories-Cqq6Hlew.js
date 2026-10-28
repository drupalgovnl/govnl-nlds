/* empty css              */import{L as d}from"./language-switcher.component-BUPk1Mra.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{L as s}from"./link.component-CU7eEhVb.js";import{L as l}from"./logo.component-Ve96CmdB.js";const g=`<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/design-tokens
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/page-header.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/design-tokens/dist/page-header.css";
\`\`\`
`;function o({before:e,after:a,classNames:n=[]}){const r=document.createElement("header");r.classList.add("dictu-page-header",...n);const t=document.createElement("div");return t.classList.add("dictu-page-header__wrapper"),e&&t.appendChild(i(e,"before")),t.appendChild(p()),a&&t.appendChild(i(a,"after")),r.appendChild(t),r}const i=(e,a)=>{const n=document.createElement("div");return n.classList.add(`dictu-page-header__wrapper-${a}`),e instanceof HTMLElement?n.appendChild(e):typeof e=="string"&&(n.innerHTML=e),n},p=()=>{const e=document.createElement("div");e.classList.add("dictu-page-header__wrapper-logo");const a=new l({image_src:"assets/logo.svg",alt:"Logo Rijksoverheid - Ga naar homepagina",title:"Dienst ICT Uitvoering",subtitle:"Ministerie van Economische Zaken"}),n=new s({content:a,href:"/",classNames:["dictu-page-header__logo-link"]});return e.appendChild(n),e},c={args:{},argTypes:{before:{control:!1,description:"HTML element of string voor het logo."},after:{control:!1,description:"HTML element of string na het logo."}},parameters:{docs:{description:{component:g}}},component:o,tags:[],title:"Componenten/Page Header"},u={},m={args:{languageSwitcherExpanded:!1},argTypes:{languageSwitcherExpanded:{name:"language switcher expanded",control:"boolean",description:"Zet de Language Switcher open of dicht."}},render:e=>{const a=new d({current:"Nederlands",expanded:e.languageSwitcherExpanded,align:"end",items:[{link:"/de/huidige-pagina",value:"de",language:"Deutsch",translation:"Duits"},{link:"/en/huidige-pagina",value:"en",language:"English",translation:"Engels"},{link:"/fr/huidige-pagina",value:"fr",language:"Français",translation:"Frans"},{link:"/nl/huidige-pagina",value:"nl",language:"Nederlands",translation:"Nederlands"}]});return o({...e,after:a})}},h=["PageHeaderDefault","PageHeaderLanguageSwitcher"],C=Object.freeze(Object.defineProperty({__proto__:null,PageHeaderDefault:u,PageHeaderLanguageSwitcher:m,__namedExportsOrder:h,default:c},Symbol.toStringTag,{value:"Module"}));export{C as P,g as R,u as a,m as b};
