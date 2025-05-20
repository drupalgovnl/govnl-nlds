<!-- @license CC0-1.0 -->

De paragraph component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.

## Gebruik deze component
Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/paragraph
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/paragraph/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/paragraph/index.css";
```

## Richtlijnen

Gebruik voor het paragraph component altijd het `<p>` HTML-element, die heeft automatisch de goede paragraph role in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het `<p>` element is er tussen alinea's duidelijke witruimte (WCAG 1.4.12).

## Links

- [MDN: `<p>`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)

### Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)  
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
