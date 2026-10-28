/* empty css              */import{H as e}from"./heading.component-CU6pfZFM.js";const n=`<!-- @license CC0-1.0 -->

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
`,t="Gebruik voor een hoofdkop van een pagina de `dictu-heading` en\n`dictu-heading--level-1` class name op een `h1` element.\n",i="Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op\nhet tweede niveau staat de `dictu-heading` en `dictu-heading--level-2` class\nname op een `h2` element:\n",o="Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de\n`dictu-heading` en `dictu-heading--level-3` class name op een `h3` element.\n",a="Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat\nde `dictu-heading` en `dictu-heading--level-4` class name op een `h4` element.\n",s="Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat\nde `dictu-heading` en `dictu-heading--level-5` class name op een `h5` element.\n",d="Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de\n`dictu-heading` en `dictu-heading--level-6` class name op een `h6` element.\n",c={args:{content:"Dit is een voorbeeld van een heading",level:1},argTypes:{content:{control:"text",description:"De tekst van de heading"},level:{control:"select",options:["1","2","3","4","5","6"],description:"Het niveau van de heading"},appearanceLevel:{control:"select",options:["1","2","3","4","5","6"],description:"De visuele grote van de heading"}},parameters:{docs:{description:{component:n}}},render:e,tags:["autodocs"],title:"Componenten/Heading"},p={args:{content:"Dit is een hoofdkop van een pagina",level:1},parameters:{docs:{description:{story:t}}}},u={args:{content:"Een koptekst die in de koppenstructuur op het tweede niveau staat",level:2},parameters:{docs:{description:{story:i}}}},v={args:{content:"Een koptekst die in de koppenstructuur op het derde niveau staat",level:3},parameters:{docs:{description:{story:o}}}},h={args:{content:"Een koptekst die in de koppenstructuur op het vierde niveau staat",level:4},parameters:{docs:{description:{story:a}}}},g={args:{content:"Een koptekst die in de koppenstructuur op het vijfde niveau staat",level:5},parameters:{docs:{description:{story:s}}}},k={args:{content:"Een koptekst die in de koppenstructuur op het zesde niveau staat",level:6},parameters:{docs:{description:{story:d}}}},m=["HeadingLevel1","HeadingLevel2","HeadingLevel3","HeadingLevel4","HeadingLevel5","HeadingLevel6"];export{p as HeadingLevel1,u as HeadingLevel2,v as HeadingLevel3,h as HeadingLevel4,g as HeadingLevel5,k as HeadingLevel6,m as __namedExportsOrder,c as default};
