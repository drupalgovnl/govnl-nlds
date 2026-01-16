import{j as e,M as d,T as s,S as c,C as i,A as h,h as m}from"./blocks-BiHpa7tf.js";import{useMDXComponents as a}from"./index-CfXAfZUW.js";import{L as l,a as r,b as j,c as b}from"./label.stories-BwTtOXBd.js";import"./preload-helper-Z2-GuEqQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-COYUSxwF.js";const u=`<!-- @license CC0-1.0 -->

## De Label component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/label
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/label/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/label/dist/index.css";
\`\`\`
`;function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:l,title:"Componenten/Form elements/Label"}),`
`,e.jsx(s,{children:"Label"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`Een label is beschrijvende tekst die het doel van een form element, zoals een text input of select
list, communiceert aan de gebruiker.`})}),`
`,e.jsx(i,{of:r,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(m,{children:u}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-label-component",children:"Wanneer gebruik je de Label component"}),`
`,e.jsx(n.p,{children:"Gebruik de Label component voor een beschrijving van een onderdeel van de user interface. In de meeste gevallen is dit een input, textarea of select component in een formulier."}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Wanneer de label gebruikt wordt voor een bijbehorend form element, geef dan door middel van het ",e.jsx(n.code,{children:"for"})," attribuut een verwijzing mee naar het ",e.jsx(n.code,{children:"id"})," van het form element."]}),`
`,e.jsxs(n.li,{children:["Wanneer de labl niet gebruikt wordt voor een form element, dan kan het ",e.jsx(n.code,{children:"for"})," attribuut achterwege worden gelaten."]}),`
`,e.jsx(n.li,{children:"Zet geen heading in het label component. Het is voor screenreaders lastig om dit te intepreteren, waardoor gebruikers van screenreaders niet de juiste informatie krijgen."}),`
`,e.jsx(n.li,{children:`Zet geen interactieve elementen als een link in een label. Een label dat verbonden is aan een form element werkt als een verlengde van dat element. Wanneer je op de label klikt
geldt dit als een klik op het form element. Deze functionaliteit werkt niet samen met bijvoorbeeld een link in de label.`}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"label",children:"Label"}),`
`,e.jsx(i,{of:r}),`
`,e.jsxs(n.p,{children:["Naast de default variant is er ook een ",e.jsx(n.code,{children:"strong"}),` variant van het label. Deze variant kan bijvoorbeeld gebruikt worden om het uiterlijk van de label gelijk te trekken met het uiterlijk van de legend
element in een fieldset, zodat de gehele flow van een formulier er visueel beter uitziet.`]}),`
`,e.jsx(n.h3,{id:"strong-label",children:"Strong label"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"label-met-een-toevoeging-voor-het-verplicht-invullen",children:"Label met een toevoeging voor het verplicht invullen"}),`
`,e.jsxs(n.p,{children:["Als het voor het bijbehorende form element verplicht is om in te vullen, kan dit duidelijk worden gemaakt in het label. Hiervoor kan een ",e.jsx(n.code,{children:"span"}),` element worden toegevoegd met
de className `,e.jsx(n.code,{children:"dictu-label__required"}),"."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(nog in te vullen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Label component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function w(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{w as default};
