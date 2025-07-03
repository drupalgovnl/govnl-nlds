<!-- @license CC0-1.0 -->

De page-header component toont de hoofding van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/design-tokens
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/page-header.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/page-header.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-page-header` class voor de hoofding.
- Gebruik semantische HTML: `<header>` voor de hoofdcontainer.
- Voeg een `lang` attribuut toe om de taal aan te geven.
- Zorg voor goede focus-states en toetsenbordnavigatie voor alle interactieve
  elementen.

### Voorbeeldgebruik

```html
<header class="dictu-page-header" lang="nl">
  <div class="dictu-container">
    <div class="dictu-logo">
      <div class="dictu-logo__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -12 44 88"
          role="img"
        >
          <title>Logo Rijksoverheid</title>
          <!-- SVG content -->
        </svg>
      </div>
      <div class="dictu-logo__text">
        <span class="dictu-logo__title">Dictu</span>
        <span class="dictu-logo__subtitle"
          >Ministerie van Economische Zaken</span
        >
      </div>
    </div>
  </div>
</header>
```

## CSS Klassen

- `.dictu-page-header` — hoofdcontainer voor de hoofding
- `.dictu-container` — interne container voor de inhoud
- `.dictu-logo` — container voor het logo en tekst

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
`proprietary/design-tokens/src/components/page-header.tokens.json` voor een
overzicht van beschikbare tokens. Voorbeeld:

```css
.dictu-page-header {
  --govnl-header-background-color: transparent;
  --govnl-header-padding-block-end: 0;
  --govnl-header-container-max-inline-width: 100%;
  --govnl-header-container-padding-inline: 1rem;
  /* ... */
}
```

## Toegankelijkheid

- Gebruik altijd een `<header>` element voor de hoofdcontainer.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Het logo bevat een `<title>` element voor screenreaders.
- Het SVG element heeft `role="img"` voor toegankelijkheid.
- Zie
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  en
  [WCAG 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).

# Varianten

## PageHeader (Standaard)

De standaard page-header component met logo en tekst.

```js
export const PageHeader = {
  render: () => {
    const header = document.createElement("header");
    header.className = "dictu-page-header";
    const container = createContainer();

    header.appendChild(container);

    return header;
  },
};
```

## Logo Configuratie

Het logo binnen de page-header kan worden geconfigureerd met:

- **Titel**: De hoofdtitel van de organisatie
- **Ondertitel**: De subtitel of afdeling
- **SVG Logo**: Het officiële Rijksoverheid logo

### Logo voorbeeld:

```js
const logo = {
  title: "Dictu",
  subtitle: "Ministerie van Economische Zaken",
  svg: "<!-- Rijksoverheid SVG content -->",
};
```

## Responsief Gedrag

De component past zich automatisch aan verschillende schermgroottes aan:

- **Desktop**: Standaard logo centrering
- **Tablet** (max-width: 48em): Aangepaste logo positie
- **Mobiel** (max-width: 20em): Compacte logo weergave

## Styling

De styling wordt verzorgd door de page-header CSS en importeert automatisch de
benodigde child components:

- `.dictu-page-header`
- `.dictu-container`
- `.dictu-logo`

Plus alle gerelateerde klassen van logo en page-container components.

## Licentie

EUPL-1.2
