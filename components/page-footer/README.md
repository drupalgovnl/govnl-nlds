<!-- @license CC0-1.0 -->

De page-footer component toont de voettekst van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/design-tokens
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/page-footer.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/page-footer.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-page-footer` class voor de voettekst.
- Gebruik semantische HTML: `<footer role="contentinfo">` voor de
  hoofdcontainer.
- Voeg een `lang` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg voor goede focus-states en toetsenbordnavigatie voor alle links.

### Voorbeeldgebruik

```html
<footer class="dictu-page-footer" role="contentinfo" lang="nl">
  <div class="dictu-page-footer__container">
    <div class="dictu-page-footer__text-container">
      <h2 class="dictu-heading dictu-heading--level-2">Footer kop</h2>
      <p class="dictu-paragraph">
        Dit is een voettekst die extra informatie biedt.
      </p>
    </div>
    <div class="dictu-page-footer__columns">
      <div class="dictu-page-footer__column">
        <h3 class="dictu-heading dictu-heading--level-3">Kop 1</h3>
        <ul class="dictu-link-list">
          <li class="dictu-link-list__item">
            <a
              href="/privacy"
              class="dictu-link dictu-link-list__link"
              title="Lees ons privacy beleid"
            >
              <span
                class="dictu-icon dictu-link-list__icon"
                role="presentation"
              >
                <!-- Arrow icon SVG -->
              </span>
              <span>Privacy beleid</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## CSS Klassen

- `.dictu-page-footer` — hoofdcontainer voor de voettekst
- `.dictu-page-footer__container` — interne container voor de inhoud
- `.dictu-page-footer__text-container` — container voor de hoofdtekst en
  beschrijving
- `.dictu-page-footer__columns` — container voor de kolommen met links
- `.dictu-page-footer__column` — individuele kolom met links

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
`proprietary/design-tokens/src/components/page-footer.tokens.json` voor een
overzicht van beschikbare tokens. Voorbeeld:

```css
.dictu-page-footer {
  --govnl-page-footer-background-color: #fff;
  --govnl-page-footer-color: #123456;
  /* ... */
}
```

## Toegankelijkheid

- Gebruik altijd een `<footer>` met `role="contentinfo"`.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Externe links krijgen automatisch een aria-label met "(opent in nieuw
  venster)".
- Gebruik logische heading niveaus waarbij kolomtitels één niveau hoger zijn dan
  de hoofdtekst.
- Iconen hebben `role="presentation"` om te voorkomen dat ze door screenreaders
  worden voorgelezen.
- Zie
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  en
  [WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).

# Varianten

## PageFooter (Standaard)

De volledige page-footer component met hoofdtekst, beschrijving en kolommen met
links.

```js
export const PageFooter = {
  args: {
    heading: "Footer kop",
    text: "Dit is een voettekst die extra informatie biedt.",
    headingLevel: 2,
    lang: "nl",
    columns: [
      {
        title: "Kop 1",
        items: [
          {
            label: "Privacy beleid",
            href: "/privacy",
            title: "Lees ons privacy beleid",
          },
        ],
      },
    ],
  },
};
```

## MinimalPageFooter

Een eenvoudige variant met alleen hoofdtekst en beschrijving, zonder kolommen.

```js
export const MinimalPageFooter = {
  args: {
    heading: "Minimale Footer",
    text: "Een eenvoudige footer zonder kolommen.",
    headingLevel: 2,
    lang: "nl",
    columns: [],
  },
};
```

## MinimalPageFooterOnlyColumns

Een variant die alleen kolommen met links toont, zonder hoofdtekst of
beschrijving.

```js
export const MinimalPageFooterOnlyColumns = {
  args: {
    heading: "",
    text: "",
    headingLevel: 2,
    lang: "nl",
    columns: [
      {
        title: "Belangrijke Links",
        items: [
          {
            label: "Toegankelijkheidsverklaring",
            href: "/toegankelijkheid",
            title: "Lees onze toegankelijkheidsverklaring",
          },
        ],
      },
    ],
  },
};
```

## Link Types

De component ondersteunt verschillende link types:

- **Interne links**: Normale navigatie binnen de site
- **Externe links**: Automatisch `target="_blank"` en
  `rel="noopener noreferrer"`
- **Download links**: Met `download` attribuut voor bestanden
- **Aangepaste aria-labels**: Voor verbeterde toegankelijkheid

### Externe link voorbeeld:

```js
{
  label: "W3C WCAG Richtlijnen",
  href: "https://www.w3.org/WAI/WCAG22/quickref/",
  title: "Bezoek de officiële WCAG 2.2 richtlijnen",
  external: true
}
```

### Download link voorbeeld:

```js
{
  label: "PDF Handleiding",
  href: "/handleiding.pdf",
  title: "Download de handleiding als PDF",
  download: "handleiding.pdf"
}
```

## Styling

De styling wordt verzorgd door de page-footer CSS en importeert automatisch de
benodigde child components:

- `.dictu-page-footer`
- `.dictu-page-footer__container`
- `.dictu-page-footer__text-container`
- `.dictu-page-footer__columns`
- `.dictu-page-footer__column`

Plus alle gerelateerde klassen van heading, paragraph, link-list, link en icon
components.

## Licentie

EUPL-1.2
