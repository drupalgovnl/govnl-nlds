<!-- @license CC0-1.0 -->

Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/heading
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/heading/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/heading/index.css";
```

## Richtlijnen

- Gebruik altijd maar één H1 heading op een pagina.
- Gebruik alleen een heading als er content onder staat.
- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van
  de content.
- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3
  gebruiken zonder dat er een voorgaande H2 is.

### Kop gebruiken met het uiterlijk van een ander level

Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de
uitstraling heeft van een ander level de `dictu-heading` en
`dictu-heading--level-{het visuele level}` op het semantische heading component
naar keuze.

```html
<h2 class="nl-heading nl-heading--level-4">
  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet
  als het vierde level.
</h2>
```

## Links

- [MDN: `<h1>–<h6>`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)

### Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings)
