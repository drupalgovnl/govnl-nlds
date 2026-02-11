import{j as e,M as l,T as c,S as o,C as i,A as h,a as m}from"./blocks-Cw0h3eUZ.js";import{useMDXComponents as a}from"./index-CF1Y6RSv.js";import{B as s,D as d,L as u,M as j}from"./breadcrumbs.stories-q8EvkTSZ.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BBi-6ZjW.js";/* empty css              *//* empty css              */import"./link.component-KS7kVO7o.js";import"./icon.component-X7CMXdF1.js";const p=`<!-- @license CC0-1.0 -->

## De Breadcrumbs component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install @dictu/breadcrumbs
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/breadcrumbs/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/breadcrumbs/dist/index.css";
\`\`\`
`;function t(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:s,title:"Componenten/Breadcrumbs"}),`
`,e.jsx(c,{children:"Breadcrumbs"}),`
`,e.jsx(o,{children:e.jsx(n.p,{children:`De Breadcrumbs component toont de gebruiker het pad naar de huidige pagina binnen de website
structuur.`})}),`
`,e.jsx(i,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(m,{children:p}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-breadcrumbs-component",children:"Wanneer gebruik je de Breadcrumbs component"}),`
`,e.jsx(n.p,{children:"Gebruik breadcrumbs wanneer:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Je de gebruiker wilt laten zien waar deze zich bevindt in de hiërarchie van de website."}),`
`,e.jsx(n.li,{children:"Je de gebruiker een snelle manier wilt bieden om naar bovenliggende niveaus te navigeren."}),`
`,e.jsx(n.li,{children:"De website een diepe hiërarchische structuur heeft (meer dan 2 niveaus)."}),`
`]}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-breadcrumbs-component-niet",children:"Wanneer gebruik je de Breadcrumbs component niet"}),`
`,e.jsx(n.p,{children:"Gebruik geen breadcrumbs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Op de homepage."}),`
`,e.jsx(n.li,{children:"Als de website een platte structuur heeft."}),`
`,e.jsx(n.li,{children:"Als vervanging voor de hoofdnavigatie."}),`
`]}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik het ",e.jsx(n.code,{children:"<nav>"})," element met een ",e.jsx(n.code,{children:'aria-label="Breadcrumb"'})," om het navigatiegebied te markeren."]}),`
`,e.jsxs(n.li,{children:["Gebruik een geordende lijst ",e.jsx(n.code,{children:"<ol>"})," voor de items, omdat de volgorde van de hiërarchie belangrijk is."]}),`
`,e.jsxs(n.li,{children:["Voeg ",e.jsx(n.code,{children:'aria-current="page"'})," toe aan het laatste item in de lijst (de huidige pagina) om aan screenreaders door te geven dat dit de actieve pagina is."]}),`
`,e.jsx(n.li,{children:"Zorg dat alle items behalve de huidige pagina links zijn."}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"standaard-breadcrumbs",children:"Standaard Breadcrumbs"}),`
`,e.jsx(n.p,{children:"De standaard weergave van breadcrumbs toont het volledige pad."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"lange-breadcrumbs",children:"Lange Breadcrumbs"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"mobiele-breadcrumbs",children:"Mobiele Breadcrumbs"}),`
`,e.jsx(n.p,{children:"Op mobiele apparaten kan de ruimte beperkt zijn. In dit geval kan er gekozen worden om alleen de vorige pagina te tonen met een pijl terug."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsx(n.p,{children:"De Breadcrumbs component maakt gebruik van de volgende componenten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-link--docs",children:"Link component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-icon--docs",children:"Icon component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",rel:"nofollow",children:"WCAG succescriterium 1.3.1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",rel:"nofollow",children:"WCAG succescriterium 2.1.1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html",rel:"nofollow",children:"WCAG succescriterium 2.4.3"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html",rel:"nofollow",children:"WCAG succescriterium 2.4.4"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/location.html",rel:"nofollow",children:"WCAG succescriterium 2.4.8"})}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Breadcrumbs component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function W(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{W as default};
