import{j as e,M as d,T as c,S as a,C as i,A as m,a as h}from"./blocks-CompVdVN.js";import{useMDXComponents as l}from"./index-C0SNgPNn.js";import{S as r,a as o,b as j,c as u,d as p,e as x}from"./select.stories-CQXCzM6P.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Wr3MMADh.js";/* empty css              */const g=`<!-- @license CC0-1.0 -->

## De Select component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/select
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/select/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/select/dist/index.css";
\`\`\`
`;function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,title:"Componenten/Form elements/Select"}),`
`,e.jsx(c,{children:"Select"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:`Een Select component creëert een vervolgkeuzelijst waaruit gebruikers één of meerdere opties
kunnen kiezen. Het is het meest geschikt wanneer gebruikers één item uit een (langere) vooraf
gedefinieerde lijst moeten selecteren.`})}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(h,{children:g}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-select-component",children:"Wanneer gebruik je de Select component"}),`
`,e.jsx(n.p,{children:`Gebruik de Select component wanneer gebruikers een keuze moeten selecteren uit een lange lijst met opties. Wees voorzichtig met het gebruik van de Select component.
In veel gevallen is het gebruiksvriendelijker om afzonderlijke, opvolgende vragen te stellen, of om bij weinig opties gebruik te maken van een radio button.`}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["De Select component bevat meerdere ",e.jsx(n.code,{children:"option"})," elementen waaruit de gebruiker een keuze kan maken. Zorg dat deze ",e.jsx(n.code,{children:"option"})," elementen een ",e.jsx(n.code,{children:"value"})," attribuut meekrijgen."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsxs(n.p,{children:["Om aan de gebruiker te laten zien dat er een fout zit in de Select component geef je de ",e.jsx(n.code,{children:"dictu-select--error"}),` class mee. Zorg er daarnaast voor
dat de `,e.jsx(n.code,{children:"aria-invalid"})," attribuut is toegevoegd en de waarde ",e.jsx(n.code,{children:"true"})," heeft."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Het is mogelijk om de Select component een disabled state mee te geven. Hiervoor gebruik je de ",e.jsx(n.code,{children:"disabled"})," en ",e.jsx(n.code,{children:"aria-disabled"})," attributen."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(n.p,{children:["Om de Select component inline weer te geven, gebruik je de ",e.jsx(n.code,{children:"dictu-select--inline"})," class."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"multiple",children:"Multiple"}),`
`,e.jsxs(n.p,{children:[`Er is een mogelijkheid om meerde keuzes toe te staan bij de Select component. De component zal er dan visueel uitzien als een box met een scroll mogelijkheid. Om meerdere opties
te selecteren moet de gebruiker gebruik maken van de `,e.jsx(n.code,{children:"SHIFT"})," knop om meerdere opties onder elkaar te kiezen, of ",e.jsx(n.code,{children:"CTRL"}),"/",e.jsx(n.code,{children:"COMMAND"})," om meerdere opties afzonderlijk van elkaar te selecteren."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op:"})," Gebruik deze mogelijkheid alleen wanneer er geen enkele andere optie mogelijk is. Het kan voor de gebruiker erg lastig zijn om meerdere opties te selecteren."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(nog in te vullen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Select component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function w(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{w as default};
