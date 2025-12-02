/* empty css              */import{H as D}from"./heading.component--w7arIA8.js";const M=`<!-- @license CC0-1.0 -->

Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/heading
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/heading/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/heading/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik altijd maar één H1 heading op een pagina.
- Gebruik alleen een heading als er content onder staat.
- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van
  de content.
- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3
  gebruiken zonder dat er een voorgaande H2 is.

### Kop gebruiken met het uiterlijk van een ander level

Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de
uitstraling heeft van een ander level de \`dictu-heading\` en
\`dictu-heading--level-{het visuele level}\` op het semantische heading component
naar keuze.

\`\`\`html
<h2 class="nl-heading nl-heading--level-4">
  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet
  als het vierde level.
</h2>
\`\`\`

## Links

- [MDN: \`<h1>–<h6>\`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)

### Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings)
`,S="Gebruik voor een hoofdkop van een pagina de `dictu-heading` en\n`dictu-heading--level-1` class name op een `h1` element.\n",y="Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op\nhet tweede niveau staat de `dictu-heading` en `dictu-heading--level-2` class\nname op een `h2` element:\n",E="Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de\n`dictu-heading` en `dictu-heading--level-3` class name op een `h3` element.\n",f="Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat\nde `dictu-heading` en `dictu-heading--level-4` class name op een `h4` element.\n",C="Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat\nde `dictu-heading` en `dictu-heading--level-5` class name op een `h5` element.\n",j="Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de\n`dictu-heading` en `dictu-heading--level-6` class name op een `h6` element.\n",W={args:{innerHTML:"Dit is een voorbeeld van een heading"},argTypes:{innerHTML:{control:"text",description:"De tekst van de heading"},level:{control:"select",options:["1","2","3","4","5","6"],description:"Het niveau van de heading"}},parameters:{docs:{description:{component:M}}},render:D,tags:["autodocs"],title:"Componenten/Heading"},e={args:{innerHTML:"Dit is een hoofdkop van een pagina",level:1},parameters:{docs:{description:{story:S}}}},n={args:{innerHTML:"Een koptekst die in de koppenstructuur op het tweede niveau staat",level:2},parameters:{docs:{description:{story:y}}}},t={args:{innerHTML:"Een koptekst die in de koppenstructuur op het derde niveau staat",level:3},parameters:{docs:{description:{story:E}}}},s={args:{innerHTML:"Een koptekst die in de koppenstructuur op het vierde niveau staat",level:4},parameters:{docs:{description:{story:f}}}},a={args:{innerHTML:"Een koptekst die in de koppenstructuur op het vijfde niveau staat",level:5},parameters:{docs:{description:{story:C}}}},r={args:{innerHTML:"Een koptekst die in de koppenstructuur op het zesde niveau staat",level:6},parameters:{docs:{description:{story:j}}}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Dit is een hoofdkop van een pagina',
    level: 1
  },
  parameters: {
    docs: {
      description: {
        story: level1Docs
      }
    }
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het tweede niveau staat',
    level: 2
  },
  parameters: {
    docs: {
      description: {
        story: level2Docs
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,v,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het derde niveau staat',
    level: 3
  },
  parameters: {
    docs: {
      description: {
        story: level3Docs
      }
    }
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,k,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het vierde niveau staat',
    level: 4
  },
  parameters: {
    docs: {
      description: {
        story: level4Docs
      }
    }
  }
}`,...(m=(k=s.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var H,L,T;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het vijfde niveau staat',
    level: 5
  },
  parameters: {
    docs: {
      description: {
        story: level5Docs
      }
    }
  }
}`,...(T=(L=a.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var b,G,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    innerHTML: 'Een koptekst die in de koppenstructuur op het zesde niveau staat',
    level: 6
  },
  parameters: {
    docs: {
      description: {
        story: level6Docs
      }
    }
  }
}`,...(w=(G=r.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};const R=["HeadingLevel1","HeadingLevel2","HeadingLevel3","HeadingLevel4","HeadingLevel5","HeadingLevel6"];export{e as HeadingLevel1,n as HeadingLevel2,t as HeadingLevel3,s as HeadingLevel4,a as HeadingLevel5,r as HeadingLevel6,R as __namedExportsOrder,W as default};
