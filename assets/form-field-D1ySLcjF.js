import{j as e,M as s,T as a,S as c,C as r,A as m,a as h}from"./blocks-Cw0h3eUZ.js";import{useMDXComponents as l}from"./index-CF1Y6RSv.js";import{F as o,D as t,E as p,a as j,L as f,I as u}from"./form-field.stories-DhTUA3i9.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BBi-6ZjW.js";import"./label.component-DIIE1Bz3.js";import"./text-input.component-CitIGVob.js";import"./checkbox.component-PLTYKzR5.js";import"./form-field.component-B7EXBhMX.js";import"./icon.component-X7CMXdF1.js";const x=`<!-- @license CC0-1.0 -->

## De Form field component implementeren

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/form-field
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/form-field/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/form-field/dist/index.css";
\`\`\`
`;function d(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:o,title:"Componenten/Form elements/Form field"}),`
`,e.jsx(a,{children:"Form field"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`Een form field is het geheel van een input veld (zoals een text input, select list, text area of
date input), label en description.`})}),`
`,e.jsx(n.p,{children:"Visueel ziet deze er hetzelfde uit als een fieldset. Hiervoor is gekozen, omdat het flexibiliteit geeft in het opbouwen van een formulier met checkboxes, radio-buttons en form fields."}),`
`,e.jsx(r,{of:t,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(h,{children:x}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-form-field-component",children:"Wanneer gebruik je de Form field component"}),`
`,e.jsx(n.p,{children:"Gebruik de Form field component voor een representatie van een input element en de bijbehorende label en description."}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-de-form-field-component-niet",children:"Wanneer gebruik je de Form field component niet"}),`
`,e.jsx(n.p,{children:"Gebruik de Form Field component niet om meerdere aan elkaar gerelateerde input elementen bij elkaar te zetten. Hiervoor is het Fieldset bedoelt."}),`
`,e.jsx(n.h2,{id:"afhankelijkheden",children:"Afhankelijkheden"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-icon--docs",children:"Icon component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/componenten-label--docs",children:"Label component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h3,{id:"form-field-met-error-status",children:"Form field met error status"}),`
`,e.jsx(n.p,{children:"Het is mogelijk om binnen de Form field component een visuele error status te tonen. De visuele vormgeving bestaat uit twee delen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Een border aan de linkerkant van de gehele Form field door gebruik van de ",e.jsx(n.code,{children:"dictu-form-field--error"})," class op het component."]}),`
`,e.jsxs(n.li,{children:["De combinatie van een icon en verklarende tekst boven het input element door middel van een extra ",e.jsx(n.code,{children:"div"})," met de ",e.jsx(n.code,{children:'"dictu-form-field__error-message'})," class."]}),`
`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"form-field-met-description",children:"Form field met description"}),`
`,e.jsx(n.p,{children:"Binnen de Form field component kan optioneel een verklarende beschrijving worden toegevoegd."}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"form-field-met-dikgedrukte-label",children:"Form field met dikgedrukte label"}),`
`,e.jsx(n.p,{children:"Doordat de Form field component gebruikt maakt van het Label component, kunnen alle Label varianten gebruikt worden."}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"inline-form-field",children:"Inline Form field"}),`
`,e.jsx(n.p,{children:"Bij bepaalde input types wordt de label niet boven, maar achter de input gezet. Dit is bijvoorbeeld het geval bij checkbox en radio elementen. Voor deze input types kan de inline Form field gebruikt worden."}),`
`,e.jsxs(n.p,{children:["Voor de inline Form field wordt de ",e.jsx(n.code,{children:"dictu-form-field--inline"})," class toegevoegd aan het component, dat ervoor zorgt dat de elementen niet onder elkaar, maar achter elkaar komen te staan."]}),`
`,e.jsx(n.p,{children:"Bij de inline variant is het niet mogelijk om een description of error status te gebruiken."}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h2,{id:"relevante-wcag-succescriteria",children:"Relevante WCAG succescriteria"}),`
`,e.jsx(n.p,{children:"(Later toevoegen)"}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Form field component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),". \\"]})]})}function H(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{H as default};
