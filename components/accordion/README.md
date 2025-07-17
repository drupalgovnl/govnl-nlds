<!-- @license CC0-1.0 -->

Button uitleg

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/button
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/button/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/button/index.css";
```

## Richtlijnen

- Maak gebruik van het `aria-expanded` attribuut op de button. Wanneer de
  accordion gesloten is, staat dit attribuut op `false`, wanneer de accordion
  open is, op `true`. Zorg dat dit attribuut meeverandert met de state van de
  accordion.
- Gebruik het `hidden` attribuut op de body van het accordion waneer de
  accordion gesloten is. Dit zorgt ervoor dat de body niet zichtbaar is.

## Links

### Relevante WCAG regels

Aanpassen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
