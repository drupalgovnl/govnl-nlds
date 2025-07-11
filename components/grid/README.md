<!-- @license CC0-1.0 -->

De grid component biedt een flexibel en responsief grid systeem voor het
organiseren van content in kolommen van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/grid
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/grid/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/grid/dist/index.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-grid` class voor de grid container.
- Specificeer het aantal kolommen met `.dictu-grid--columns-{1-4}` modifier
  klassen.
- Gebruik semantische HTML binnen grid items: `<article>`, `<section>`, etc.
- Voeg een `id` attribuut toe voor navigatie en toegankelijkheid.
- Zorg voor consistente content binnen grid items.
- Test de layout op verschillende schermgroottes.

### Voorbeeldgebruik

```html
<div class="dictu-grid dictu-grid--columns-3" id="content-grid" lang="nl">
  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-1" class="dictu-link dictu-card__link"
          >Eerste Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Een korte beschrijving van het eerste artikel in het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 11 juli 2025</small>
  </article>

  <article class="dictu-card dictu-card--accent">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-2" class="dictu-link dictu-card__link"
          >Belangrijk Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Een highlighted artikel met accent styling voor extra aandacht.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
  </article>

  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-3" class="dictu-link dictu-card__link"
          >Derde Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Het derde artikel completeert de eerste rij van het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
  </article>
</div>
```

## CSS Klassen

- `.dictu-grid` — hoofdcontainer voor het grid systeem
- `.dictu-grid--columns-1` — één kolom layout
- `.dictu-grid--columns-2` — twee kolommen layout
- `.dictu-grid--columns-3` — drie kolommen layout (standaard)
- `.dictu-grid--columns-4` — vier kolommen layout
- `.dictu-grid--autoflow` — automatische plaatsing van items in kolommen

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor layout, spacing, etc. Zie
`proprietary/design-tokens/src/components/grid.tokens.json` voor een overzicht
van beschikbare tokens. Voorbeeld:

```css
.dictu-grid {
  --govnl-grid-gap-row-max: 2rem;
  --govnl-grid-gap-column-max: 2rem;
  --govnl-grid-gap-row-min: 1rem;
  --govnl-grid-gap-column-min: 1rem;
  --govnl-grid-template-rows-auto: auto;
  --govnl-grid-template-columns-col-1: 1fr;
  --govnl-grid-template-columns-col-2: repeat(2, 1fr);
  --govnl-grid-template-columns-col-3: repeat(3, 1fr);
  --govnl-grid-template-columns-col-4: repeat(4, 1fr);
}
```

## Responsiviteit

Het grid systeem past zich automatisch aan verschillende schermgroottes aan:

- **Desktop (>768px)**: Volledige kolom configuratie
- **Tablet (768px-480px)**: Gereduceerd aantal kolommen waar nodig
- **Mobile (<480px)**: Meestal single-column layout
- **Spacing**: Kleinere gaps op mobiele apparaten voor optimaal ruimtegebruik

## Toegankelijkheid

- Gebruik semantische HTML elementen (`<article>`, `<section>`) voor grid items.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Gebruik logische heading niveaus die aansluiten bij de paginastructuur.
- Zorg voor voldoende kleurcontrast in grid items.
- Test toetsenbordnavigatie door alle interactieve elementen.
- Gebruik `aria-label` voor context waar nodig.
- Zie
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html),
  [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
  en
  [WCAG 1.4.3 Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

# Varianten

## Default

De basis grid component zonder content, toont drie lege placeholder items.

```js
export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};
```

## WithImages

Een twee-kolommen grid met afbeeldingen die verschillende aspect ratio's
demonstreert.

```js
export const WithImages = {
  args: {
    content: `
      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Eerste voorbeeld afbeelding"
           loading="lazy"
           width="640"
           height="360" />
      <!-- Meer afbeeldingen... -->
    `,
    columns: 2,
    id: "page-grid-images",
  },
};
```

## WithCards

Een drie-kolommen grid met volledige kaart componenten inclusief afbeeldingen,
tekst en metadata.

```js
export const WithCards = {
  args: {
    content: `
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <!-- Volledige kaart content -->
      </article>
      <!-- Meer kaarten... -->
    `,
    columns: 3,
  },
};
```

## WithCardsOnMultipleRows

Een uitgebreid grid met zes kaart componenten verspreid over meerdere rijen,
demonstreert schaalbaarheid.

```js
export const WithCardsOnMultipleRows = {
  args: {
    content: `
      <!-- 6 kaart componenten -->
    `,
    columns: 3,
  },
};
```

## Componenten

De page-grid component kan elk type content bevatten, maar werkt uitstekend
samen met:

- **Card**: Voor gestructureerde content blokken
- **Image**: Voor visuele galerijen
- **Paragraph**: Voor tekst content
- **Heading**: Voor sectie titels
- **Link**: Voor navigatie elementen

## Styling

De styling wordt verzorgd door de page-grid CSS en gebruikt:

- **CSS Grid**: Voor moderne, flexibele layouts
- **Design tokens**: Voor consistente spacing en responsive gedrag
- **Modifier klassen**: Voor verschillende kolom configuraties
- **Media queries**: Voor responsive aanpassingen

## Layout Patronen

### Content Cards Grid

```html
<div class="dictu-grid dictu-grid--columns-3">
  <article class="dictu-card">...</article>
  <article class="dictu-card dictu-card--accent">...</article>
  <article class="dictu-card">...</article>
</div>
```

### Image Gallery

```html
<div class="dictu-grid dictu-grid--columns-2">
  <img class="dictu-image dictu-aspect-ratio-landscape" />
  <img class="dictu-image dictu-aspect-ratio-landscape" />
</div>
```

### Mixed Content

```html
<div class="dictu-grid dictu-grid--columns-4">
  <section>...</section>
  <aside>...</aside>
  <article>...</article>
  <div>...</div>
</div>
```

## Browser Ondersteuning

- **Modern browsers**: Volledige CSS Grid ondersteuning
- **IE 11**: Graceful degradation met fallback layouts
- **Progressive enhancement**: Basis functionaliteit werkt overal

## Prestaties

- **Efficient rendering**: Native CSS Grid voor optimale prestaties
- **Lazy loading**: Ondersteunt lazy loading van content
- **Minimal CSS**: Alleen benodigde styles worden geladen
- **Responsive images**: Werkt samen met responsive image technieken

## Licentie

EUPL-1.2
