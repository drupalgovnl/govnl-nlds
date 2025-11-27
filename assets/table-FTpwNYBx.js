import{j as e,M as l,T as s,S as c,C as t,A as h,h as m}from"./blocks-OhiLYP3j.js";import{useMDXComponents as d}from"./index-CcywNb8_.js";import{T as r,D as i,R as j,F as b,C as p,a as x}from"./table.stories-D5ZQL10v.js";import"./iframe-QyXzRj5L.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */const u=`<!-- @license CC0-1.0 -->

## De Table component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/table
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/table/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/table/dist/index.css";
\`\`\`
`;function a(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:r,title:"Componenten/Table"}),`
`,e.jsx(s,{children:"Table"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`De Table component organiseert data op een voor de gebruiker makkelijk te scannen manier van rijen
en kolommen.`})}),`
`,e.jsx(t,{of:i,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(m,{children:u}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-table-component",children:"Wanneer gebruik je de Table component"}),`
`,e.jsx(n.p,{children:"Gebruik de Table component om gebruikers makkelijk data te laten vergelijken in rijen en kolommen."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-table-component-niet",children:"Wanneer gebruik je de Table component niet"}),`
`,e.jsxs(n.p,{children:["Gebruik de Table component niet om een layout op te zetten op een pagina, hiervoor is de ",e.jsx(n.a,{href:"?path=/docs/componenten-grid--docs",children:"Grid component"}),"."]}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik een ",e.jsx(n.code,{children:"<caption>"})," element om te beschrijven wat er in de tabel staat, zodat het voor gebruikers makkelijk is om de tabel te begrijpen."]}),`
`,e.jsxs(n.li,{children:["Gebruiker table headers (",e.jsx(n.code,{children:"th"}),") om aan gebruikers te vertellen wat de inhoud is van elke rij en kolom."]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsxs(n.p,{children:["Een basis tabel heeft een caption met daarin de beschrijving van de tabel. De tabel begint met een ",e.jsx(n.code,{children:"thead"}),` element, waarin de table headers voor elke kolom in zijn opgenomen.
Deze headers beschrijven wat de inhoud is van de kolommen. Om duidelijk te maken dat het gaat om headers voor de kolommen, wordt op het `,e.jsx(n.code,{children:"th"})," element een ",e.jsx(n.code,{children:"scope"})," attribuut met als waarde ",e.jsx(n.code,{children:"col"})," gezet."]}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"tabel-met-headers-voor-rijen",children:"Tabel met headers voor rijen"}),`
`,e.jsxs(n.p,{children:["Een tabel kan naast headers voor de kolommen ook headers voor de rijen hebben. Deze headers hoeven niet in de ",e.jsx(n.code,{children:"thead"})," worden opgenomen, maar kunnen ook aan de ",e.jsx(n.code,{children:"tbody"}),`
toegevoegd worden. De headers voor de rijen beschrijven wat de inhoud van de betreffende rij is. Om duidelijk te maken dat het gaat om headers voor de rijen, wordt op het `,e.jsx(n.code,{children:"th"}),`
element een `,e.jsx(n.code,{children:"scope"})," met als waarde ",e.jsx(n.code,{children:"row"})," gezet."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"tabel-met-een-footer",children:"Tabel met een footer"}),`
`,e.jsxs(n.p,{children:["Aan de tabel kan een ",e.jsx(n.code,{children:"tfoot"})," element worden toegevoegd. De footer van een tabel bevat informatie over de bovenliggende kolommen. Vaak is dit een samenvatting van de kolom, of de totale som van bovenliggende kolom."]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h3,{id:"tabel-met-cellen-over-meerdere-rijen-of-kolommen",children:"Tabel met cellen over meerdere rijen of kolommen"}),`
`,e.jsxs(n.p,{children:["Het is mogelijk om cellen over meerdere rijen of kolommen te laten lopen. Hiervoor voeg je aan het ",e.jsx(n.code,{children:"td"})," element een ",e.jsx(n.code,{children:"colspan"})," attribuut toe voor kolommen, en/of een ",e.jsx(n.code,{children:"rowspan"}),` attribuut voor rijen.
De waarde van het attribuut is het aantal kolommen of rijen dat overbrugt moet worden.`]}),`
`,e.jsx(n.h4,{id:"tabel-met-colspan",children:"Tabel met colspan"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h4,{id:"tabel-met-rowspan",children:"Tabel met rowspan"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(Nog in te vullen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Table component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function C(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{C as default};
