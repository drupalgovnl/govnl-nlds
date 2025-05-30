<!-- @license CC0-1.0 -->

Het logo component toont het logo van Dictu, bestaande uit een afbeelding, een titel en een subtitel.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/design-tokens
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/design-tokens/dist/logo.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/logo.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-logo` class voor het logo component.
- Het logo bestaat uit een afbeelding, een titel en een subtitel.
- Gebruik de bijbehorende CSS-variabelen voor consistente styling.

### Voorbeeldgebruik

```html
<div class="dictu-logo">
  <div class="dictu-logo__image"></div>
  <div class="dictu-logo__text">
    <div class="dictu-logo__title">Titel</div>
    <div class="dictu-logo__subtitle">Subtitel</div>
  </div>
</div>
```

## CSS Klassen
- `.dictu-logo` — container voor het logo
- `.dictu-logo__image` — bevat de logo-afbeelding (SVG of img)
- `.dictu-logo__text` - Tekst wrapper van het logo
- `.dictu-logo__title` — titel van het logo
- `.dictu-logo__subtitle` — subtitel van het logo
