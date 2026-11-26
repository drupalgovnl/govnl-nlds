import{j as e,M as d,T as l,S as c,C as i,A as p,a as h}from"./blocks-CHa0vfOi.js";import{useMDXComponents as r}from"./index-Cspg4nom.js";import{S as a,H as o,a as m,b as j,V as x,C as u,c as g}from"./step-indicator.stories-6S5YY2aq.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DqNVQ9IJ.js";import"./icon.component-dCjJmEUh.js";const v=`<!-- @license CC0-1.0 -->

## De Step indicator component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/step-indicator
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/step-indicator/dist/index.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/step-indicator/dist/index.css";
\`\`\`
`;function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:a,title:"Componenten/Form elements/Step indicator"}),`
`,e.jsx(l,{children:"Step indicator"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`De step indicator toont waar iemand zich bevindt in een lineair proces met een vaste volgorde,
zoals een aanvraag of registratie.`})}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(h,{children:v}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-step-indicator",children:"Wanneer gebruik je de Step indicator"}),`
`,e.jsx(n.p,{children:`Gebruik de component alleen voor processen waarvan de volgorde vastligt. De informatie uit de
desktopweergave blijft beschikbaar op een smal scherm, in een samenvatting die de volledige lijst
opent.`}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"horizontaal-huidige-stap-aan-het-begin",children:"Horizontaal, huidige stap aan het begin"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"horizontaal-huidige-stap-in-het-midden",children:"Horizontaal, huidige stap in het midden"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"horizontaal-alle-stappen-afgerond",children:"Horizontaal, alle stappen afgerond"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"verticaal",children:"Verticaal"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"compact",children:"Compact"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"compact-geopend",children:"Compact, geopend"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1.3.1 Info and Relationships: de stappen staan in een geordende lijst binnen een navigatie."}),`
`,e.jsxs(n.li,{children:["1.4.1 Use of Color: de huidige stap is ook vetgedrukt en heeft ",e.jsx(n.code,{children:'aria-current="step"'}),"."]}),`
`,e.jsx(n.li,{children:"2.4.6 Headings and Labels: de navigatie heeft een toegankelijke naam."}),`
`,e.jsx(n.li,{children:"4.1.2 Name, Role, Value: een afgeronde stap heeft een tekstalternatief voor het vinkje."}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Neem deel aan de discussie over de Step indicator component op GitHub."}),`
`,e.jsx(n.li,{children:"Bied een wijzigingsvoorstel aan op GitHub."}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function w(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{w as default};
