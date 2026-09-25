import{j as e,M as s,T as a,S as c,C as o,A as h,a as g}from"./blocks-CgmsJYHR.js";import{useMDXComponents as l}from"./index-8zCqh1E6.js";import{P as r,a as d,R as j,b as x}from"./page-header.stories-B_tW9vBw.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-5sULlumf.js";/* empty css              */import"./language-switcher.component-DAkIERlr.js";import"./icon.component-X7CMXdF1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./link.component-wPEVoUTz.js";import"./logo.component-Ve96CmdB.js";function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:r,title:"Componenten/Page Header"}),`
`,e.jsx(a,{children:"Page Header"}),`
`,e.jsx(c,{children:"De page-header component toont de hoofding van het Dictu Design Systeem."}),`
`,e.jsx(o,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(g,{children:j}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"standaard-page-header",children:"Standaard page header"}),`
`,e.jsx(o,{of:d,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"page-header-met-language-switcher",children:"Page header met language switcher"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik altijd de ",e.jsx(n.code,{children:".dictu-page-header"})," class voor de hoofding."]}),`
`,e.jsxs(n.li,{children:["Gebruik semantische HTML: ",e.jsx(n.code,{children:"<header>"})," voor de hoofdcontainer."]}),`
`,e.jsx(n.li,{children:`Zorg voor goede focus-states en toetsenbordnavigatie voor alle interactieve
elementen.`}),`
`,e.jsxs(n.li,{children:["Plaats geen andere elementen in de page header, zoals projectlogo's of interactie-elementen. Plaats ook geen elementen boven de logobalk, zoals navigatie. Een uitzondering hierop is de Language navigation. Bekijk de ",e.jsx(n.a,{href:"https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=11969",rel:"nofollow",children:"Rijkshuisstijl"})," voor meer informatie.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Op lagere resoluties wordt de language navigation verborgen en via alternatieve methoden aangeboden."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-klassen",children:"CSS Klassen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header"})," — hoofdcontainer voor de hoofding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header__wrapper"})," — interne grid container voor de inhoud"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header__wrapper-before"})," — container voor de content voor het logo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header__wrapper-logo"})," — container voor het logo en tekst"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header__wrapper-after"})," — container voor de content na het logo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".dictu-page-header__logo-link"})," - link element voor naar de homepagina"]}),`
`]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik altijd een ",e.jsx(n.code,{children:"<header>"})," element voor de hoofdcontainer."]}),`
`,e.jsxs(n.li,{children:["Het logo bevat een ",e.jsx(n.code,{children:"alt"})," tag met bijvoorbeeld ",e.jsx(n.code,{children:"Logo Rijksoverheid - Ga naar homepagina"}),` voor screenreaders.
In combinatie met de titel en/of subtitel van het logo krijgt de link een volledige toegankelijke naam.`]}),`
`,e.jsxs(n.li,{children:[`Zie
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",rel:"nofollow",children:"WCAG 2.1.3 Info and Relationships"}),`
en
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",rel:"nofollow",children:"WCAG 1.1.1 Non-text Content"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"logo-configuratie",children:"Logo Configuratie"}),`
`,e.jsx(n.p,{children:"Het logo binnen de page-header kan worden geconfigureerd met:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Titel"}),": De hoofdtitel van de organisatie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ondertitel"}),": De subtitel of afdeling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SVG Logo"}),": Het officiële Rijksoverheid logo"]}),`
`]}),`
`,e.jsx(n.h2,{id:"responsief-gedrag",children:"Responsief Gedrag"}),`
`,e.jsx(n.p,{children:"De component past zich automatisch aan verschillende schermgroottes aan:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop"}),": Standaard logo centrering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tablet"})," (max-width: 48em): Aangepaste logo positie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobiel"})," (max-width: 20em): Compacte logo weergave"]}),`
`]}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:`De styling wordt verzorgd door de page-header CSS en importeert automatisch de
benodigde child components:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".dictu-page-header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".dictu-page-container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".dictu-link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".dictu-logo"})}),`
`]}),`
`,e.jsx(n.p,{children:"Plus alle gerelateerde klassen van logo en page-container components."})]})}function H(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{H as default};
