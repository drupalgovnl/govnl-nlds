import{j as e,M as r,T as l,S as h,C as t,A as c,a as u}from"./blocks-giFtRqz0.js";import{useMDXComponents as o}from"./index-CYVHELNu.js";import{N as a,a as d,R as m,b,c as j}from"./navigation-bar.stories-Dwhbyz-0.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BGVIen_E.js";/* empty css              *//* empty css              */import"./icon.component-X7CMXdF1.js";function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:a,title:"Componenten/Navigation Bar"}),`
`,e.jsx(l,{children:"Navigation Bar"}),`
`,e.jsx(h,{children:e.jsx(n.p,{children:`De navbar, voluit ‘navigation bar’ of ‘navigatiebalk’, is de horizontale balk die op een website
wordt geplaatst en die links bevat naar andere delen of pagina’s van dezelfde website. Deze balk
helpt bezoekers om eenvoudig door de inhoud van een website te navigeren en biedt hen directe
links naar belangrijke of veelgebruikte pagina’s. Het is een essentieel onderdeel van webdesign en
draagt bij aan een gebruiksvriendelijke website-ervaring. Daarnaast is dit de plek waar de
zoekbalk wordt getoont, zodat hij vanuit elke pagina op de website beschikbaar is.`})}),`
`,e.jsx(t,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(u,{children:m}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"standaard-navigatiebalk",children:"Standaard navigatiebalk"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"navigatiebalk-met-submenu",children:"Navigatiebalk met submenu"}),`
`,e.jsx(t,{of:b}),`
`,e.jsxs(n.p,{children:["Aan de navigatiebalk kunnen menu items worden toegevoegd met een submenu. In plaats van een ",e.jsx(n.code,{children:"link"})," is het menu item in de navigatiebalk een ",e.jsx(n.code,{children:"button"}),` dat gebruikt wordt om een submenu open en dicht te klappen.
Voor het correcte en toegankelijk gebruik zijn de volgende attributen verplicht op de `,e.jsx(n.code,{children:"button"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-expanded"})," ",e.jsx(n.code,{children:"false"})," wanneer het submenu gesloten is, anders ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"}),": ID van het submenu"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-haspopup"}),": ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Houdt bij het opzetten van een navigatiebalk met submenus rekening met de volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gebruik de richtlijnen voor toegankelijkheid die je verderop in deze documentatie kunt vinden."}),`
`,e.jsxs(n.li,{children:["Sluit het submenu wanneer het element dat focus heeft geen onderdeel is van het submenu, bijvoorbeeld wanneer de focus op het laatste item in de submenu staat, en er met ",e.jsx(n.code,{children:"TAB"})," naar het volgende item wordt getabt."]}),`
`,e.jsx(n.li,{children:"Sluit het submenu wanneer er buiten het submenu geklikt wordt."}),`
`]}),`
`,e.jsx(n.h4,{id:"opengeklapt-submenu",children:"Opengeklapt submenu"}),`
`,e.jsx(n.p,{children:"Het opengeklapt submenu laat een submenu zien dat gepositioneerd is onder het menu item. Hierin zijn de subitems van het bovenliggende item zichtbaar."}),`
`,e.jsx(n.p,{children:"Bij een opengeklapte submenu veranderen de volgende attributen ten opzichte van de gesloten staat van het submenu:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"aria-expanded"})," attribuut op de submenu toggler wordt naar ",e.jsx(n.code,{children:"true"})," gezet."]}),`
`]}),`
`,e.jsx(t,{of:j,story:{height:"275px"}}),`
`,e.jsx(n.h3,{id:"mobiele-weergave",children:"Mobiele weergave"}),`
`,e.jsxs(n.p,{children:["De voorbeelden van het navigatiemenu op mobiele schermen kan op dit moment helaas niet worden opgenomen in de documentatie voorbeelden. In de navigatie kunnen de stories ",e.jsx(n.code,{children:"Navigation Bar Default Mobile"})," en ",e.jsx(n.code,{children:"Navigation bar Default Mobile Expanded"})," gebruikt worden als voorbeelden van de visuele weergave van de Navigation Bar component op mobiele schermen."]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.p,{children:"Voor de bediening van de Navigation Bar met het toetsenbord gelden de volgende richtlijnen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TAB"}),": Plaatst de focus op het volgende item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SHIFT"})," + ",e.jsx(n.code,{children:"TAB"}),": Plaats de focus op het vorige item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ENTER"}),": Opent het submenu bij menu items die een submenu hebben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SPACE"}),": Opent het submenu bij menu items die een submenu hebben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ESCAPE"}),": Sluit het submenu wanneer het submenu focus heeft."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ARROW LEFT"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"In een menubar wordt de focus geplaatst op het vorige item."}),`
`,e.jsx(n.li,{children:"In een submenu wordt het submenu gesloten en wordt de focus geplaatst op het vorige item."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ARROW RIGHT"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"In een menubar wordt de focus geplaatst op het volgende item."}),`
`,e.jsx(n.li,{children:"In een submenu wordt het submenu gesloten en wordt de focus geplaatst op het volgende item."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"help-mee-om-deze-component-te-verbeteren",children:"Help mee om deze component te verbeteren"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Neem deel aan de discussie over de ",e.jsx(n.a,{href:"",children:"Navigation Bar component op GitHub"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Biedt een wijzigingsvoorstel aan op Github"}),". Lees hoe je het beste ",e.jsx(n.a,{href:"",children:"een wijziging kunt aanbieden"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"heb-je-hulp-nodig",children:"Heb je hulp nodig?"}),`
`,e.jsxs(n.p,{children:["Heb je een vraag over deze component of het DICTU Design System? ",e.jsx(n.a,{href:"?path=/docs/informatie-team--docs",children:"Neem dan contact op met het team"}),"."]})]})}function B(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{B as default};
