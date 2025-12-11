import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-o7SW9AmG.js";import{Meta as s,Title as a,Subtitle as l,Canvas as i,ArgTypes as h,Markdown as j}from"@storybook/addon-docs/blocks";import{B as t,P as o}from"./button.stories-EmND38U9.js";import"./index-pHYmH9NJ.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              *//* empty css              */import"./button-DWuSISss.js";import"./icon.component-BiJB5nKt.js";const u=`<!-- @license CC0-1.0 -->

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
`;function d(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:t,title:"Componenten/Button"}),`
`,e.jsx(a,{children:"Button"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:"De Button component wordt gebruikt voor het uitvoeren van een actie op de huidige pagina."})}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(j,{children:u}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-accordion-component",children:"Wanneer gebruik je de Accordion component"}),`
`,e.jsx(n.p,{children:"Gebruik een accordion alleen wanneer het voor de gebruiker handig is om:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Een overzicht te hebben van meerdere - aan elkaar gerelateerde - onderdelen van de content."}),`
`,e.jsx(n.li,{children:"De keuze te hebben om verschillende onderdelen van de content die relevant voor de gebruiker zijn, te kunnen verbergen of zichtbaar te maken."}),`
`]}),`
`,e.jsx(n.p,{children:"Test met de gebruikers om te kijken of de voordelen van het gebruik van een accordion de potentiële problemen met het verbergen van content overstijgt."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-accordion-component-niet",children:"Wanneer gebruik je de Accordion component niet"}),`
`,e.jsx(n.p,{children:"Een accordion verbergt informatie voor gebruikers. Niet alle gebruikers zullen dit zien, of begrijpen hoe een accordion werkt. Accordions zouden daarom alleen in specifieke gevallen ingezet moeten worden. Gebruik nooit een accordion voor content dat iedereen zou moeten kunnen zien."}),`
`,e.jsx(n.p,{children:"In de meeste gevallen zou je in plaats van het gebruiken van een accordion ook kunnen kijken naar:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Het verkleinen en versimpelen van de content."}),`
`,e.jsx(n.li,{children:"De content verdelen over meerdere pagina's."}),`
`]}),`
`,e.jsx(n.p,{children:"Gebruik hoe dan ook nooit een accordion in een accordion."}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Maak gebruik van het ",e.jsx(n.code,{children:"aria-expanded"}),` attribuut op de accordion. Wanneer de
accordion gesloten is, staat dit attribuut op `,e.jsx(n.code,{children:"false"}),`, wanneer de accordion
open is, op `,e.jsx(n.code,{children:"true"}),`. Zorg dat dit attribuut meeverandert met de state van de
accordion.`]}),`
`,e.jsxs(n.li,{children:["Gebruik het ",e.jsx(n.code,{children:"hidden"}),` attribuut op de body van het accordion waneer de
accordion gesloten is. Dit zorgt ervoor dat de body niet zichtbaar is.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"open-accordion",children:"Open Accordion"}),`
`,e.jsxs(n.p,{children:["Bij een open accordion is de gehele accordion zichtbaar. Op de toggler wordt het ",e.jsx(n.code,{children:"aria-expanded"})," attribuut op ",e.jsx(n.code,{children:"true"})," gezet, zodat het voor screenreaders duidelijk is dat de accordion open staat."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"gesloten-accordion",children:"Gesloten Accordion"}),`
`,e.jsx(n.p,{children:"Bij een gesloten accordion is alleen de toggler zichtbaar, en is body van de accordion uitgesloten van weergave."}),`
`,e.jsxs(n.p,{children:["Wanneer de accordion gesloten is, staat er op het ",e.jsx(n.code,{children:"div"})," element met de ",e.jsx(n.code,{children:".dictu-accordion__body"})," class een ",e.jsx(n.code,{children:"hidden"}),` attribuut. Zo wordt de body verborgen voor weergave.
Op de toggler wordt het `,e.jsx(n.code,{children:"aria-expanded"})," attribuut op ",e.jsx(n.code,{children:"false"})," gezet, zodat het voor screenreaders duidelijk is dat de accordion gesloten is."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsx(n.p,{children:"De variant met"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-icon--docs",children:"Icon component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",rel:"nofollow",children:"WCAG succescriterium 1.3.1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",rel:"nofollow",children:"WCAG succescriterium 1.4.4"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",rel:"nofollow",children:"WCAG succescriterium 2.1.1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html",rel:"nofollow",children:"WCAG succescriterium 2.4.3"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html",rel:"nofollow",children:"WCAG succescriterium 2.4.6"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",rel:"nofollow",children:"WCAG succescriterium 2.4.7"})}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Button component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function z(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{z as default};
