import{j as e,M as l,T as c,S as a,C as i,A as h,a as u}from"./blocks-BSxV6PyP.js";import{useMDXComponents as d}from"./index-D3GOcmvA.js";import{B as r,P as o,S as j,a as m,b as x,c as p,d as b,e as g,f as w,g as k}from"./button.stories-BM_ulWTZ.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DCUPDUkp.js";/* empty css              *//* empty css              */import"./button.component-DRRUjNOi.js";import"./icon.component-X7CMXdF1.js";const f=`<!-- @license CC0-1.0 -->

## De Button component implementeren

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
import "@dictu/button/dist/index.css";
\`\`\`
`;function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:r,title:"Componenten/Button"}),`
`,e.jsx(c,{children:"Button"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:"De Button component wordt gebruikt voor het uitvoeren van een actie op de huidige pagina."})}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(u,{children:f}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-button-component",children:"Wanneer gebruik je de Button component"}),`
`,e.jsx(n.p,{children:"Gebruik de button component om gebruikers te helpen bij het uitvoeren van een actie die geen nieuwe pagina opent. Voorbeelden hiervan zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Een formulier verzenden."}),`
`,e.jsx(n.li,{children:"Een modal openen/sluiten."}),`
`,e.jsx(n.li,{children:"Een filter activeren."}),`
`,e.jsx(n.li,{children:"Een dropdown openen."}),`
`,e.jsx(n.li,{children:"Een interactie binnen een single page application."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Een vuistregel hierbij is: ",e.jsx(n.strong,{children:'"Buttons doen iets"'})]}),`
`]}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-button-component-niet",children:"Wanneer gebruik je de Button component niet"}),`
`,e.jsxs(n.p,{children:["Gebruik de button component niet als navigatie. Wanneer de gebruiker ergens naartoe gaat, gebruik dan altijd een ",e.jsx(n.code,{children:"<a>"}),"-link (anchor element). Voorbeelden wanneer je een link gebruikt in plaats van een button zijn:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gaan naar een andere pagina."}),`
`,e.jsx(n.li,{children:"Downloaden van een document."}),`
`,e.jsx(n.li,{children:"Linken naar externe websites."}),`
`]}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik de ",e.jsx(n.code,{children:"<button>"})," altijd voor het uitvoeren van een actie en niet als navigatie."]}),`
`,e.jsxs(n.li,{children:["Gebruik de ",e.jsx(n.code,{children:"<button>"}),"-tag om een klikbare knop te definiëren."]}),`
`,e.jsxs(n.li,{children:["Binnen het ",e.jsx(n.code,{children:"<button>"}),"-element kun je tekst plaatsen (en tags zoals ",e.jsx(n.code,{children:"<i>"}),", ",e.jsx(n.code,{children:"<b>"}),", ",e.jsx(n.code,{children:"<strong>"}),", ",e.jsx(n.code,{children:"<image>"}),", enz.)."]}),`
`,e.jsx(n.li,{children:"Zorg ervoor dat het klikbare element een minimale afmeting hebben van 24 bij 24 CSS-pixels."}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"primary-action-button",children:"Primary Action Button"}),`
`,e.jsx(n.p,{children:"De Primary Action Button wordt gebruikt om de meest belangrijke actie op de pagina te tonen. In de meeste gevallen wordt het aantal primaire acties (ofwel de Primary Action Button) beperkt tot één. Voor de andere acties kan de Secundary Action Button of de Subtle Button gebruikt worden."}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"secundary-action-button",children:"Secundary Action Button"}),`
`,e.jsx(n.p,{children:"De Secondary Action Button wordt voor minder prominente acties gebruikt. Het is mogelijk om meer dan één Secondary Action Button te gebruiken. De knop is visueel minder aanwezig dan de Primary Action Button."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"subtle-button",children:"Subtle Button"}),`
`,e.jsx(n.p,{children:"De Subtle Button kan gebruikt worden voor de minst belangrijke acties op de pagina ten op zichte van de Primary Action Button en de Secondary Action Button."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"icon-only-button",children:"Icon Only Button"}),`
`,e.jsx(n.p,{children:"De Icon Only Button heeft een eenvoudig en herkenbaar icon die een specifieke actie of functionaliteit weergeeft. Ze worden gebruikt op plekken waar de ruimte beperkt is, zoals in toolbars, navigation. Bij voorkeur wordt er altijd gekeken of er een button met tekst gebruikt kan worden in verband met de toegankelijkheid"}),`
`,e.jsx(n.h4,{id:"primary-action-icon-only",children:"Primary Action Icon-Only"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"secondary-action-icon-only",children:"Secondary Action Icon-Only"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h4,{id:"subtle-icon-only",children:"Subtle Icon-Only"}),`
`,e.jsx(i,{of:b}),`
`,`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"variabelen",children:"Variabelen"}),`
`,e.jsx(n.h4,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["De Primary Action Button, Secondary Action Button en de Subtle Button kunnen een icon bevatten. Standaard bevat de button component geen icon, de ",e.jsx(n.code,{children:"iconPosition"})," krijgt in dit geval de waarde ",e.jsx(n.code,{children:"none"})," mee. De button component kan een icon voor de tekst bevatten of na de tekst. Wanneer de icon voor de tekst staat krijgt de ",e.jsx(n.code,{children:"iconPosition"})," de waarde ",e.jsx(n.code,{children:"before"})," mee en na de tekst de waarde ",e.jsx(n.code,{children:"after"}),"."]}),`
`,e.jsx(n.h5,{id:"geen-icon",children:"Geen icon"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h5,{id:"icon-voor-de-tekst",children:"Icon voor de tekst"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h5,{id:"icon-na-de-tekst",children:"Icon na de tekst"}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(n.h4,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["Alle verschillende varianten van de button worden aangeboden in een ",e.jsx(n.code,{children:"default"})," en ",e.jsx(n.code,{children:"small"})," formaat. De ",e.jsx(n.code,{children:"small"})," button kan bijvoorbeeld gebruikt worden wanneer de ruimte beperkt is."]}),`
`,e.jsx(n.h5,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h5,{id:"small",children:"Small"}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsx(n.p,{children:"De variant met icon maakt gebruik van het Icon Component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-icon--docs",children:"Icon component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.htmll",rel:"nofollow",children:"WCAG succescriterium 1.1.1"}),": Naam/label"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",rel:"nofollow",children:"WCAG succescriterium 2.1.1"}),": Toetsenbordtoegang"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html",rel:"nofollow",children:"WCAG succescriterium 2.1.2"}),": Geen keyboard trap"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html",rel:"nofollow",children:"WCAG succescriterium 2.4.3"}),": Focusvolgorde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",rel:"nofollow",children:"WCAG succescriterium 2.4.7"}),": Focus zichtbaar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html",rel:"nofollow",children:"WCAG succescriterium 3.2.1"}),": Geen onverwachte acties [1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/on-input",rel:"nofollow",children:"WCAG succescriterium 3.2.2"}),": Geen onverwachte acties [2]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",rel:"nofollow",children:"WCAG succescriterium 3.3.2"}),": Helder label"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",rel:"nofollow",children:"WCAG succescriterium 4.1.2"}),": Semantiek: naam/rol/waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",rel:"nofollow",children:"WCAG succescriterium 4.1.3"}),": Statusmeldingen"]}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Button component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function z(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{z as default};
