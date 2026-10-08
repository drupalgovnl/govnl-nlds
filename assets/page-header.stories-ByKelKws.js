/* empty css              */import{L as m}from"./language-switcher.component-DAkIERlr.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{L as f}from"./link.component-wPEVoUTz.js";import{L as S}from"./logo.component-Ve96CmdB.js";const w=`<!-- @license CC0-1.0 -->

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
`;function h({before:e,after:n,classNames:a=[]}){const s=document.createElement("header");s.classList.add("dictu-page-header",...a);const r=document.createElement("div");return r.classList.add("dictu-page-header__wrapper"),e&&r.appendChild(d(e,"before")),r.appendChild(L()),n&&r.appendChild(d(n,"after")),s.appendChild(r),s}const d=(e,n)=>{const a=document.createElement("div");return a.classList.add(`dictu-page-header__wrapper-${n}`),e instanceof HTMLElement?a.appendChild(e):typeof e=="string"&&(a.innerHTML=e),a},L=()=>{const e=document.createElement("div");e.classList.add("dictu-page-header__wrapper-logo");const n=new S({image_src:"assets/logo.svg",alt:"Logo Rijksoverheid - Ga naar homepagina",title:"Dienst ICT Uitvoering",subtitle:"Ministerie van Economische Zaken"}),a=new f({content:n,href:"/",classNames:["dictu-page-header__logo-link"]});return e.appendChild(a),e},v={args:{},argTypes:{before:{control:!1,description:"HTML element of string voor het logo."},after:{control:!1,description:"HTML element of string na het logo."}},parameters:{docs:{description:{component:w}}},component:h,tags:[],title:"Componenten/Page Header"},t={},i={args:{languageSwitcherExpanded:!1},argTypes:{languageSwitcherExpanded:{name:"language switcher expanded",control:"boolean",description:"Zet de Language Switcher open of dicht."}},render:e=>{const n=new m({current:"Nederlands",expanded:e.languageSwitcherExpanded,align:"end",items:[{link:"/de/huidige-pagina",value:"de",language:"Deutsch",translation:"Duits"},{link:"/en/huidige-pagina",value:"en",language:"English",translation:"Engels"},{link:"/fr/huidige-pagina",value:"fr",language:"Français",translation:"Frans"},{link:"/nl/huidige-pagina",value:"nl",language:"Nederlands",translation:"Nederlands"}]});return h({...e,after:n})}};var o,g,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,c,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    languageSwitcherExpanded: false
  },
  argTypes: {
    languageSwitcherExpanded: {
      name: 'language switcher expanded',
      control: 'boolean',
      description: 'Zet de Language Switcher open of dicht.'
    }
  },
  render: args => {
    const languageSwitcher = new LanguageSwitcher({
      current: 'Nederlands',
      expanded: args.languageSwitcherExpanded,
      align: 'end',
      items: [{
        link: '/de/huidige-pagina',
        value: 'de',
        language: 'Deutsch',
        translation: 'Duits'
      }, {
        link: '/en/huidige-pagina',
        value: 'en',
        language: 'English',
        translation: 'Engels'
      }, {
        link: '/fr/huidige-pagina',
        value: 'fr',
        language: 'Français',
        translation: 'Frans'
      }, {
        link: '/nl/huidige-pagina',
        value: 'nl',
        language: 'Nederlands',
        translation: 'Nederlands'
      }]
    });
    return PageHeader({
      ...args,
      after: languageSwitcher
    });
  }
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["PageHeaderDefault","PageHeaderLanguageSwitcher"],j=Object.freeze(Object.defineProperty({__proto__:null,PageHeaderDefault:t,PageHeaderLanguageSwitcher:i,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{j as P,w as R,t as a,i as b};
