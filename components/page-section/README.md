<!-- @license CC0-1.0 -->

De page-section component biedt een basis sectie-container van het Dictu Design
Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/page-section
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/page-section/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/page-section/dist/index.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-section` class voor de sectie-container.
- Gebruik semantische HTML: `<section>` voor de hoofdcontainer.
- Voeg indien nodig een `aria-label` of `aria-labelledby` attribuut toe.
- Gebruik logische heading niveaus binnen de sectie.

### Voorbeeldgebruik

```html
<section class="dictu-section">
  <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
  <p class="dictu-paragraph">
    Dit is de inhoud van de sectie met consistente styling en spacing.
  </p>
</section>

<!-- Met aria-label voor toegankelijkheid -->
<section class="dictu-section" aria-label="Belangrijke informatie">
  <h2 class="dictu-heading dictu-heading--level-2">Belangrijke update</h2>
  <p class="dictu-paragraph">
    Deze sectie bevat belangrijke informatie voor gebruikers.
  </p>
</section>

<!-- Met aria-labelledby voor toegankelijkheid -->
<section class="dictu-section" aria-labelledby="contact-heading">
  <h2 id="contact-heading" class="dictu-heading dictu-heading--level-2">
    Contact informatie
  </h2>
  <p class="dictu-paragraph">
    Neem contact met ons op via onderstaande gegevens.
  </p>
</section>
```

## CSS Klassen

- `.dictu-section` — hoofdcontainer voor de sectie

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor breedte en spacing. Voorbeeld:

```css
.dictu-section {
  --govnl-section-max-inline-width: 75rem;
  --govnl-section-padding-inline: 1rem;
  /* ... */
}
```

## Toegankelijkheid

- Gebruik altijd een `<section>` element voor semantische structuur.
- Voeg indien nodig een `aria-label` of `aria-labelledby` attribuut toe.
- Gebruik logische heading niveaus binnen de sectie.
- Zorg dat alle interactieve elementen binnen de sectie toegankelijk zijn.

## Varianten

### Basis PageSection

De standaard page-section component met consistente breedte en padding.

```js
export const Default = {
  args: {
    content: `
      <h2>Sectie titel</h2>
      <p>Dit is de inhoud van de sectie met consistente styling en spacing.</p>
    `,
    title: "Sectie titel",
    id: "page-section-1",
  },
};
```

## Styling

De styling wordt verzorgd door de page-section CSS:

- `.dictu-section` — basis sectie styling met consistente breedte en padding

## Licentie

EUPL-1.2
