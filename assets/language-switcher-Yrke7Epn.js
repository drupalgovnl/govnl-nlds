import{j as e,M as s,T as o,S as c,C as i,A as h,a as j}from"./blocks-DhO_RiKc.js";import{useMDXComponents as l}from"./index-D63oix9e.js";import{L as a,D as d,R as g,a as u}from"./language-switcher.stories-eEkHw9qn.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CDhdgK1p.js";/* empty css              */import"./icon.component-X7CMXdF1.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:a,title:"Componenten/Language Switcher"}),`
`,e.jsx(o,{children:"Language Switcher"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`De language switcher (taalwisselaar) stelt gebruikers in staat om de taal van de website of
applicatie te wijzigen. Het component functioneert als een 'custom select' menu. Het toont de
momenteel geselecteerde taal en klapt open om een lijst met alternatieve talen te tonen.`})}),`
`,e.jsx(i,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:a}),`
`,e.jsx(j,{children:g}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"standaard-language-switcher",children:"Standaard language switcher"}),`
`,e.jsx(n.p,{children:"De standaard language switcher wordt weergegeven als een knop met de huidige taalkeuze."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"opengeklapte-weergave-expanded",children:"Opengeklapte weergave (Expanded)"}),`
`,e.jsx(n.p,{children:"Wanneer de gebruiker op de knop klikt, klapt het menu open. Binnen dit menu is het volgende gedrag zichtbaar:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Er is een duidelijke groepering/titel ("Taal") bovenaan het menu.'}),`
`,e.jsxs(n.li,{children:["De beschikbare talen worden getoond als links (",e.jsx(n.code,{children:"<a>"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Taalweergave:"})," De naam van de taal wordt in de ",e.jsx(n.em,{children:"eigen"})," taal geschreven (bijvoorbeeld 'Deutsch' of 'English'). Daarbij krijgt dit element het correcte ",e.jsx(n.code,{children:"lang"})," attribuut voor schermlezers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vertaling:"})," Als de taal in de lijst niet de momenteel geselecteerde taal is, wordt de vertaling van die taal in de huidige taal er tussen haakjes achter gezet (bijvoorbeeld ",e.jsx(n.code,{children:"Deutsch (Duits)"})," als de pagina op Nederlands staat)."]}),`
`]}),`
`,e.jsx(n.p,{children:"Voor het correct en toegankelijk gebruik zijn de volgende attributen verplicht op de uitklap-knop (toggler):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-expanded"}),": ",e.jsx(n.code,{children:"false"})," wanneer het menu gesloten is, en ",e.jsx(n.code,{children:"true"})," wanneer het menu geopend is."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"}),": De ID van het content element dat de lijst met talen bevat (in dit component standaard ",e.jsx(n.code,{children:"language-switcher"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:"Houd bij de implementatie rekening met de volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sluit de dropdown wanneer er buiten het menu wordt geklikt (click outside)."}),`
`,e.jsx(n.li,{children:"Sluit de dropdown wanneer de focus het menu verlaat (bijvoorbeeld bij het wegtappen vanaf het laatste taal-item)."}),`
`]}),`
`,e.jsx(i,{of:u,story:{height:"225px"}}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.p,{children:"Voor de bediening van de Language Switcher met het toetsenbord gelden de volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TAB"}),": Plaatst de focus op het volgende item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SHIFT"})," + ",e.jsx(n.code,{children:"TAB"}),": Plaats de focus op het vorige item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ENTER"})," / ",e.jsx(n.code,{children:"SPACE"}),": Wanneer de knop (toggler) focus heeft, opent of sluit dit het taalmenu. Binnen het menu activeert dit de geselecteerde taal."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ESCAPE"}),": Sluit het taalmenu wanneer deze de focus heeft."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"(Optioneel/Aanbevolen)"})," ",e.jsx(n.code,{children:"ARROW DOWN"})," / ",e.jsx(n.code,{children:"ARROW UP"}),": Binnen het geopende menu kan hiermee door de verschillende taalopties genavigeerd worden."]}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Language Switcher component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function S(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{S as default};
