/* empty css              */import{I as l}from"./icon.component-X7CMXdF1.js";const m=`<!-- @license CC0-1.0 -->

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
`,L=({current:t,expanded:a,items:e})=>{const n=document.createElement("div");return n.classList.add("dictu-language-switcher"),n.appendChild(w(t,a)),a&&n.appendChild(S(e,t)),n},w=(t,a)=>{const e=document.createElement("button");e.classList.add("dictu-language-switcher__toggler","dictu-focus-ring"),e.innerHTML=t,e.setAttribute("aria-controls","language-switcher"),e.setAttribute("aria-expanded",a);const n=new l({icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M9.6525 11.3025L7.7475 9.42L7.77 9.3975C9.075 7.9425 10.005 6.27 10.5525 4.5H12.75V3H7.5V1.5H6V3H0.75V4.4925H9.1275C8.625 5.94 7.83 7.3125 6.75 8.5125C6.0525 7.74 5.475 6.8925 5.0175 6H3.5175C4.065 7.2225 4.815 8.3775 5.7525 9.42L1.935 13.185L3 14.25L6.75 10.5L9.0825 12.8325L9.6525 11.3025ZM13.875 7.5H12.375L9 16.5H10.5L11.34 14.25H14.9025L15.75 16.5H17.25L13.875 7.5ZM11.91 12.75L13.125 9.5025L14.34 12.75H11.91Z"/></svg>',classes:["dictu-language-switcher__icon-start"]}),s=new l({icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"/></svg>',classes:["dictu-language-switcher__icon-end"]});return e.insertAdjacentElement("afterbegin",n),e.insertAdjacentElement("beforeend",s),e},S=(t,a)=>{const e=document.createElement("div");return e.classList.add("dictu-language-switcher__content"),e.setAttribute("id","language-switcher"),e.appendChild(C()),e.appendChild(_(t,a)),e},_=(t,a)=>{const e=document.createElement("ul");return e.classList.add("dictu-language-switcher__list"),t.forEach(n=>{e.appendChild(v(n,a))}),e},C=()=>{const t=document.createElement("div");return t.classList.add("dictu-language-switcher__heading"),t.innerHTML="Taal",t},v=(t,a)=>{const e=document.createElement("li");e.classList.add("dictu-language-switcher__item");const n=document.createElement("a");n.classList.add("dictu-language-switcher__link","dictu-focus-ring"),n.setAttribute("href",t.link),e.appendChild(n);const s=document.createElement("span");if(s.classList.add("dictu-language-switcher__link-label"),s.textContent=t.language,n.appendChild(s),t.language!==a){const r=document.createElement("span");r.classList.add("dictu-language-switcher__link-label-second"),r.textContent=`(${t.translation})`,s.setAttribute("lang",t.value),n.appendChild(r)}return e},f={args:{current:"Nederlands",expanded:!1,items:[{link:"/de/huidige-pagina",value:"de",language:"Deutsch",translation:"Duits"},{link:"/en/huidige-pagina",value:"en",language:"English",translation:"Engels"},{link:"/fr/huidige-pagina",value:"fr",language:"Français",translation:"Frans"},{link:"/nl/huidige-pagina",value:"nl",language:"Nederlands",translation:"Nederlands"}]},argTypes:{current:{options:["Nederlands","English","Deutsch","Français"],control:{type:"select"}},expanded:{control:"boolean"},items:{control:"array"}},parameters:{docs:{description:{component:m}}},component:L,tags:["wip"],title:"Componenten/Language switcher"},i={},c={args:{expanded:!0}};var g,o,d;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var u,p,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["DefaultLanguageSwitcher","LanguageSwitcherExpanded"],k=Object.freeze(Object.defineProperty({__proto__:null,DefaultLanguageSwitcher:i,LanguageSwitcherExpanded:c,__namedExportsOrder:E,default:f},Symbol.toStringTag,{value:"Module"}));export{i as D,k as L,m as R,c as a};
