import{j as e,M as l,T as a,S as c,C as i,A as h,a as m}from"./blocks-COAy_3Tx.js";import{useMDXComponents as d}from"./index-BIVSP-Iv.js";import{F as s,D as o,E as j,a as p,L as x,C as u}from"./fieldset.stories-CTc4Qrys.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-pxzuJJae.js";import"./label.component-DIIE1Bz3.js";import"./text-input.component-CUK7wOy1.js";import"./checkbox.component-PLTYKzR5.js";import"./icon.component-X7CMXdF1.js";import"./form-field.component-B7EXBhMX.js";const g=`<!-- @license CC0-1.0 -->

## De Fieldset component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/fieldset
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/fieldset/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/fieldset/dist/index.css";
\`\`\`
`;function r(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:s,title:"Componenten/Form elements/Fieldset"}),`
`,e.jsx(a,{children:"Fieldset"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`Een fieldset wordt gebruikt om gerelateerde form elementen visueel te groeperen. Vaak voor zaken
als een adres of contactgegevens, maar ook voor het groeperen van een lijst checkboxes of
radio-buttons.`})}),`
`,e.jsx(n.p,{children:"De fieldset maakt gebruik van een legend, die een titel of beschrijving geeft aan deze groep. Deze legend kan er visueel uitzien als een label wanneer hij wordt gebruikt voor een groep checkboxes of radiobuttons."}),`
`,e.jsx(i,{of:o,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(m,{children:g}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-fieldset-component",children:"Wanneer gebruik je de Fieldset component"}),`
`,e.jsx(n.p,{children:"Gebruik de Fieldset component als je gerelateerde input velden wilt groeperen, bijvoorbeeld een aantal checkboxes of radio buttons."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-fieldset-component-niet",children:"Wanneer gebruik je de Fieldset component niet"}),`
`,e.jsx(n.p,{children:"Gebruik de Fieldset component niet om niet aan elkaar gerelateerde input velden"}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-icon--docs",children:"Icon component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"fieldset-met-error-status",children:"Fieldset met error status"}),`
`,e.jsx(n.p,{children:"Het is mogelijk om binnen de Fieldset component een visuele error status te tonen. De visuele vormgeving bestaat uit twee delen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Een border aan de linkerkant van de gehele Fieldset door gebruik van de ",e.jsx(n.code,{children:"dictu-fieldset--error"})," class op het component."]}),`
`,e.jsxs(n.li,{children:["De combinatie van een icon en verklarende tekst boven het input element door middel van een extra ",e.jsx(n.code,{children:"div"})," met de ",e.jsx(n.code,{children:'"dictu-fieldset__error-message'})," class."]}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"fieldset-met-description",children:"Fieldset met description"}),`
`,e.jsx(n.p,{children:"Binnen de Fieldset component kan optioneel een verklarende beschrijving worden toegevoegd."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"fieldset-met-dikgedrukte-label",children:"Fieldset met dikgedrukte label"}),`
`,e.jsxs(n.p,{children:["Het is mogelijk om het ",e.jsx(n.code,{children:"legend"})," element dikgedrukt weer te geven."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"voorbeeld-met-checkboxes",children:"Voorbeeld met checkboxes"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(Later toevoegen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Form field component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),". \\"]})]})}function E(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{E as default};
