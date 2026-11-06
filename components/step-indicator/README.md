<!-- @license CC0-1.0 -->

## De Step indicator component implementeren

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/step-indicator @dictu/icon @dictu/utility-focus-ring
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/index.css"
/>
<link rel="stylesheet" href="node_modules/@dictu/icon/dist/index.css" />
<link
  rel="stylesheet"
  href="node_modules/@dictu/utility-focus-ring/dist/index.css"
/>
<link
  rel="stylesheet"
  href="node_modules/@dictu/step-indicator/dist/index.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/index.css";
import "@dictu/icon/dist/index.css";
import "@dictu/utility-focus-ring/dist/index.css";
import "@dictu/step-indicator/dist/index.css";
```

Zet `class="dictu-theme"` op een bovenliggend element, zodat de design tokens
beschikbaar zijn.
