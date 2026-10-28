import{j as e,M as l,T as s,S as c,C as d,A as h,a as j}from"./blocks-D3EOcIkB.js";import{useMDXComponents as a}from"./index-B0rii9is.js";import{M as i,a as t,R as m,b as g,c as p}from"./modal.stories-CjoLn2gZ.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bpl2pOdG.js";/* empty css              *//* empty css              *//* empty css              */import"./button.component-DG9rLuzQ.js";import"./icon.component-dCjJmEUh.js";import"./heading.component-CU6pfZFM.js";function r(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:i,title:"Componenten/Modal"}),`
`,e.jsx(s,{children:"Modal"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`Een modal (dialoogvenster) toont belangrijke informatie of acties over de rest van de applicatie
heen. Het dwingt de gebruiker om een actie te voltooien of te annuleren voordat ze terug kunnen
keren naar de hoofdinhoud. Dit component bevat ingebouwde logica voor focus-trapping en
toetsenbordnavigatie.`})}),`
`,e.jsx(d,{of:t,story:{height:"500px"},sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(j,{children:m}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"standaard-modal",children:"Standaard modal"}),`
`,e.jsx(n.p,{children:"De standaard modal is in de basis verborgen voor de gebruiker. Op de pagina wordt een trigger (meestal een knop) weergegeven waarmee de gebruiker de modal kan openen."}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["De daadwerkelijke inhoud van de modal wordt getoond binnen een duidelijke dialoog-container (",e.jsx(n.code,{children:".dictu-modal__dialog"}),")."]}),`
`,e.jsxs(n.li,{children:["Sluitknoppen of annuleer-acties binnen de modal zijn voorzien van het ",e.jsx(n.code,{children:"data-modal-dismiss"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zichtbaarheid:"})," Het JavaScript component voegt de class ",e.jsx(n.code,{children:"is-open"})," toe aan de root-container om deze zichtbaar te maken."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"URL Hash:"})," Indien ingesteld (",e.jsx(n.code,{children:"useHash: true"}),"), wordt de ID van de modal toegevoegd aan de URL (bijv. ",e.jsx(n.code,{children:"#mijn-modal"}),"), zodat de modal direct open staat bij het delen van de link."]}),`
`]}),`
`,e.jsx(n.p,{children:"Voor het correct en toegankelijk gebruik past het component de volgende attributen automatisch aan op de modal container:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-hidden"}),": ",e.jsx(n.code,{children:"true"})," wanneer de modal gesloten is, en ",e.jsx(n.code,{children:"false"})," wanneer de modal geopend is."]}),`
`]}),`
`,e.jsx(n.p,{children:"Houd bij de implementatie rekening met de volgende HTML/CSS richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Zorg dat de modal container een ",e.jsx(n.code,{children:'role="dialog"'})," of ",e.jsx(n.code,{children:'role="alertdialog"'})," en ",e.jsx(n.code,{children:'aria-modal="true"'})," heeft."]}),`
`,e.jsxs(n.li,{children:["Sluit de modal wanneer er buiten het dialoogvenster (op de donkere overlay) wordt geklikt (standaard geactiveerd via de ",e.jsx(n.code,{children:"clickOutside"})," optie)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"basic"})," variant plaatst de dialoog bovenaan het scherm. De dialoog is maximaal 600 pixels breed."]}),`
`,e.jsx(d,{of:g,story:{height:"500px"}}),`
`,e.jsx(n.h3,{id:"long-content",children:"Long content"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"long-content"})," variant gebruikt de beschikbare breedte. Gebruik deze variant wanneer de inhoud langer is dan een korte bevestiging."]}),`
`,e.jsx(d,{of:p,story:{height:"640px"}}),`
`,e.jsx(n.h3,{id:"mobiele-weergave",children:"Mobiele weergave"}),`
`,e.jsx(n.p,{children:"Onder een schermbreedte van 48em worden de acties onder elkaar gezet."}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.p,{children:"Voor de bediening van de Modal met het toetsenbord neemt het component de bediening grotendeels over (focus trapping). Hiervoor gelden de volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TAB"}),": Plaatst de focus op het volgende interactieve item ",e.jsx(n.strong,{children:"binnen"})," de modal. De focus kan de modal niet verlaten zolang deze open is."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SHIFT"})," + ",e.jsx(n.code,{children:"TAB"}),": Plaatst de focus op het vorige interactieve item binnen de modal."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ENTER"})," / ",e.jsx(n.code,{children:"SPACE"}),": Wanneer een knop (zoals opslaan of de trigger) de focus heeft, wordt deze actie geactiveerd of de modal geopend."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ESCAPE"}),": Sluit de modal direct en plaatst de focus automatisch terug op het element dat de modal oorspronkelijk opende."]}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"https://github.com/drupalgovnl/govnl-nlds/issues",rel:"nofollow",children:"Modal component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/drupalgovnl/govnl-nlds",rel:"nofollow",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"https://github.com/drupalgovnl/govnl-nlds/blob/main/DEVELOPMENT.md",rel:"nofollow",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function C(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{C as default};
