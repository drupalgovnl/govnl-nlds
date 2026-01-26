import{j as e,M as l,T as a,S as c,C as i,A as p,a as h}from"./blocks-CfDqDAei.js";import{useMDXComponents as d}from"./index-D_FSHAXS.js";import{T as r,a as o,b as u,c as m,d as x,e as j}from"./text-input.stories-DSlm3iNh.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-1Bz-tSmw.js";import"./text-input.component-CitIGVob.js";const v=`<!-- @license CC0-1.0 -->

## De Text Input component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/text-input
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/text-input/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/text-input/dist/index.css";
\`\`\`
`;function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r,title:"Componenten/Form elements/Text input"}),`
`,e.jsx(a,{children:"Text input"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"Een Text Input component is een tekstveld voor het invoeren van korte stukken tekst"})}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(h,{children:v}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-text-input-component",children:"Wanneer gebruik je de Text Input component"}),`
`,e.jsx(n.p,{children:"Gebruik de Text Input component wanneer de gebruiker tekst moet invoeren dat niet langer is dan één regel, zoals bijvoorbeeld een straatnaam of telefoonnummer."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-text-input-component-niet",children:"Wanneer gebruik je de Text Input component niet"}),`
`,e.jsx(n.p,{children:"Gebruik de Text Input component niet wanneer het verwachte antwoord van de gebruiker bestaat uit tekst dat over meerdere regels valt. Gebruik dan de Textarea component."}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik de Text Input component in combinatie met de ",e.jsx(n.a,{href:"?path=/docs/componenten-form-elements-label--docs",children:"Label component"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"text-input",children:"Text input"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"klein-variant-van-de-text-input",children:"Klein variant van de text input"}),`
`,e.jsxs(n.p,{children:["Voor een kleinere variant van de Text Input component voeg je de class ",e.jsx(n.code,{children:"dictu-text-input--small"})," toe."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"text-input-met-foutieve-invoer",children:"Text input met foutieve invoer"}),`
`,e.jsxs(n.p,{children:["Wanneer je visueel wilt laten zien dat de invoer van het inputveld foutief is, voeg dan de class ",e.jsx(n.code,{children:"dictu-text-input--error"})," toe aan het input element."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"disabled-inputveld",children:"Disabled inputveld"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"text-input-met-placeholder",children:"Text input met placeholder"}),`
`,e.jsxs(n.p,{children:["Het is mogelijk om een placeholder te laten zien in het inputveld. Voeg hiervoor het ",e.jsx(n.code,{children:"placeholder"})," attribuut toe aan het ",e.jsx(n.code,{children:"input"})," element."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op:"}),` Een placeholder is nooit een vervanging voor het Label elemement. Gebruik alleen een placeholder als de informatie niet op een andere manier
weergegeven kan worden. Een placeholder verdwijnt namelijk wanneer de gebruiker het inputveld vult. Hierdoor is het niet mogelijk om de informatie uit
de placeholder tussentijds nogmaals te bekijken. Ook wanneer er een foutmelding wordt weergegeven, is het voor gebruikers niet mogelijk om te controleren
wat er precies fout is.`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(nog in te vullen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Text Input component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function C(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
