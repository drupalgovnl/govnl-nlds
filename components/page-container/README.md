<!-- @license CC0-1.0 -->

De page-container component biedt een basis container-element van het Dictu
Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/page-container
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@dictu/page-container/dist/index.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/page-container/dist/index.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-page-container` class voor de container-element.
- Gebruik semantische HTML: `<div>` of `<main>` voor de hoofdcontainer.
- Voeg indien nodig een `id` attribuut toe voor navigatie en toegankelijkheid.
- De component zorgt voor consistente maximale breedte en centrering van
  content.

### Voorbeeldgebruik

```html
<div class="dictu-page-container">
  <h1 class="dictu-heading dictu-heading--level-1">Pagina titel</h1>
  <p class="dictu-paragraph">
    Dit is de inhoud van de pagina met consistente styling en spacing.
  </p>
</div>

<!-- Als hoofdcontainer voor de pagina -->
<main class="dictu-page-container">
  <section class="dictu-page-section">
    <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
    <p class="dictu-paragraph">
      Deze container zorgt voor consistente breedte en centrering.
    </p>
  </section>
</main>

<!-- Met ID voor navigatie en toegankelijkheid -->
<div class="dictu-page-container" id="main-content">
  <h1 class="dictu-heading dictu-heading--level-1">Welkom</h1>
  <p class="dictu-paragraph">
    Deze container heeft een ID voor betere toegankelijkheid.
  </p>
</div>
```

## CSS Klassen

- `.dictu-page-container` — hoofdcontainer voor de pagina content

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor breedte en spacing. Voorbeeld:

```css
.dictu-page-container {
  --govnl-container-max-inline-width: 80rem;
  --govnl-container-padding-inline: 1rem;
  --govnl-container-max-width: 1280px;
  /* ... */
}
```

## Toegankelijkheid

- Gebruik een semantisch juist HTML element (`<div>`, `<main>`, `<article>`,
  etc.).
- Voeg indien nodig een `id` attribuut toe voor navigatie.
- Zorg dat alle interactieve elementen binnen de container toegankelijk zijn.
- Gebruik logische heading niveaus binnen de container.

## Varianten

### Basis PageContainer

De standaard page-container component met consistente maximale breedte en
centrering.

```js
export const Default = {
  args: {
    content: `
      <h1>Pagina titel</h1>
      <p>Dit is de inhoud van de pagina met consistente styling en spacing.</p>
    `,
    id: "page-container-1",
  },
};
```

## Styling

De styling wordt verzorgd door de page-container CSS:

- `.dictu-page-container` — basis container styling met maximale breedte,
  centrering en padding

## Functies

- **Maximale breedte**: Gecontroleerde maximale breedte via design tokens
- **Centrering**: Automatische centrering van content
- **Padding**: Horizontale padding voor consistente uitlijning
- **Reset margins**: Alle margins worden gereset voor predictable styling
- **Responsief**: Flexibele breedte die zich aanpast aan het scherm

## Licentie

EUPL-1.2
