import{j as e,M as c,T as s,S as l,C as o,A as u,a as m}from"./blocks-BFjxoBmg.js";import{useMDXComponents as a}from"./index-DNKSZLWu.js";import{Q as i,D as r,A as h,R as j,W as x,C as p}from"./quote.stories-Bqkmt_5b.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BJJr8Gsv.js";/* empty css              */const v=`<!-- @license CC0-1.0 -->

## De Quote component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/quote
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/quote/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/quote/dist/index.css";
\`\`\`
`;function d(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{of:i,title:"Componenten/Quote"}),`
`,e.jsx(s,{children:"Quote"}),`
`,e.jsx(l,{}),`
`,e.jsx(o,{of:r,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(m,{children:v}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-quote-component",children:"Wanneer gebruik je de Quote component"}),`
`,e.jsx(n.p,{children:"Gebruik de Quote component om een citaat weer te geven."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-quote-component-niet",children:"Wanneer gebruik je de Quote component niet"}),`
`,e.jsxs(n.p,{children:[`Gebruik de Quote component niet om nadruk te leggen op een stuk tekst of een stuk tekst een visuele opmaak mee te geven. De Quote component is echt bedoeld voor een citaat vanuit een andere bron.
Gebruik de Quote component ook niet voor citaten die je eigenlijk in de lopende tekst wilt laten zien, hiervoor is het `,e.jsx(n.code,{children:"q"})," element bedoelt."]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsxs(n.p,{children:["De Quote component wordt opbouwd uit een ",e.jsx(n.code,{children:"blockquote"}),` element en een eventuele vermelding van de auteur en/of het werk waaruit geciteerd wordt. Omdat de attributie van het citaat niet
in de `,e.jsx(n.code,{children:"blockquote"})," element mag worden opgenomen, worden de onderdelen van de quote opgenomen in een ",e.jsx(n.code,{children:"figure"}),` element, zodat de onderdelen één geheel vormen. De bronvermelding staat daardoor
in een `,e.jsx(n.code,{children:"figcaption"})," element."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h3,{id:"citaat-met-auteur",children:"Citaat met auteur"}),`
`,e.jsxs(n.p,{children:["Om de auteur van het citaat te vermelden voeg je in het ",e.jsx(n.code,{children:"figcaption"})," element een ",e.jsx(n.code,{children:"div"})," element toe met de ",e.jsx(n.code,{children:"dictu-quote__author"}),` class. Hierin kan de naam van
de auteur toegevoegd worden.`]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"citaat-met-auteur-en-functie",children:"Citaat met auteur en functie"}),`
`,e.jsxs(n.p,{children:["Wil je onder de vermelding van de auteur ook de functie vermelden, voeg dan een extra ",e.jsx(n.code,{children:"div"})," element toe met de class ",e.jsx(n.code,{children:"dictu-quote__role"}),". Hierin kan de functie van de auteur opgenomen worden."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"citaat-met-cite-element-voor-bronvermelding",children:"Citaat met cite element voor bronvermelding"}),`
`,e.jsxs(n.p,{children:["Voor de bronvermelding van de citaat wordt het ",e.jsx(n.code,{children:"cite"})," element om weer te geven uit welk werk het citaat komt. Voeg aan het ",e.jsx(n.code,{children:"cite"})," element de class ",e.jsx(n.code,{children:"dictu-quote__work"})," toe."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op:"})," Een ",e.jsx(n.code,{children:"cite"})," element mag alleen gebruikt worden voor de vermelding van een werk. De naam van een auteur of schrijver is geen werk, en mag dus niet in het ",e.jsx(n.code,{children:"cite"}),` element gebruikt worden.
Gebruik dus in het `,e.jsx(n.code,{children:"cite"})," element alleen de naam van het werk."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"citaat-met-cite-attribuut-voor-bronvermelding",children:"Citaat met cite attribuut voor bronvermelding"}),`
`,e.jsxs(n.p,{children:["Wanneer er verwezen kan worden naar een digitale bron - bijvoorbeeld een website - dan wordt het ",e.jsx(n.code,{children:"cite"})," attribuut toegevoegd aan het ",e.jsx(n.code,{children:"blockquote"}),` element. De waarde van
dit attribuut is de url die verwijst naar de bron. Let hierbij op dat het gaat om een `,e.jsx(n.code,{children:"cite"})," attribuut, en niet het gelijknamige ",e.jsx(n.code,{children:"cite"})," element."]}),`
`,e.jsxs(n.p,{children:["Om duidelijk te maken dat er een digitale bron is, wordt er om het ",e.jsx(n.code,{children:"cite"})," element een link gezet die verwijst naar de digitale bron. Alleen het toevoegen van het ",e.jsx(n.code,{children:"cite"}),` attribuut Biedt
namelijk geen mogelijkheid om de bron te openen.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(Later toevoegen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Quote component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),". \\"]})]})}function q(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{q as default};
