# MinimalPageFooterOnlyColumns component

De `MinimalPageFooterOnlyColumns` component is een variant van de page-footer
die alleen kolommen met links toont, zonder hoofdtekst of beschrijving. Deze
component is ideaal voor situaties waar alleen navigatielinks in de footer nodig
zijn.

## Gebruik

Gebruik deze component wanneer u alleen gestructureerde links in kolommen wilt
tonen zonder hoofdtekst. Dit is bijvoorbeeld handig voor site-navigatie in de
footer.

```html
<footer class="dictu-page-footer" role="contentinfo" lang="nl">
  <div class="dictu-page-footer__container">
    <div class="dictu-page-footer__columns">
      <div class="dictu-page-footer__column">
        <h2 class="dictu-heading dictu-heading--level-2">Belangrijke Links</h2>
        <ul class="dictu-link-list">
          <li class="dictu-link-list__item">
            <a
              href="/toegankelijkheid"
              class="dictu-link dictu-link-list__link"
              title="Lees onze toegankelijkheidsverklaring"
              aria-label="Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen"
            >
              <span
                class="dictu-icon dictu-link-list__icon"
                role="presentation"
              >
                <!-- Arrow icon SVG -->
              </span>
              <span>Toegankelijkheidsverklaring</span>
            </a>
          </li>
          <li class="dictu-link-list__item">
            <a
              href="/handleiding.pdf"
              class="dictu-link dictu-link-list__link"
              title="Download de handleiding als PDF"
              download="handleiding.pdf"
            >
              <span
                class="dictu-icon dictu-link-list__icon"
                role="presentation"
              >
                <!-- Arrow icon SVG -->
              </span>
              <span>PDF Handleiding</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="dictu-page-footer__column">
        <h2 class="dictu-heading dictu-heading--level-2">Externe Bronnen</h2>
        <ul class="dictu-link-list">
          <li class="dictu-link-list__item">
            <a
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              class="dictu-link dictu-link-list__link"
              title="Bezoek de officiële WCAG 2.2 richtlijnen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="W3C WCAG Richtlijnen (opent in nieuw venster)"
            >
              <span
                class="dictu-icon dictu-link-list__icon"
                role="presentation"
              >
                <!-- Arrow icon SVG -->
              </span>
              <span>W3C WCAG Richtlijnen</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## Kenmerken

- Alleen kolommen met links, geen hoofdtekst
- Ondersteuning voor meerdere kolommen
- Automatische externe link behandeling
- Download link ondersteuning
- Flexibele heading levels voor kolomtitels
- Volledig responsive kolommen-layout

## Link Types

De component ondersteunt verschillende link types:

- **Interne links**: Normale navigatie binnen de site
- **Externe links**: Automatisch `target="_blank"` en
  `rel="noopener noreferrer"`
- **Download links**: Met `download` attribuut voor bestanden
- **Aangepaste aria-labels**: Voor verbeterde toegankelijkheid

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- `heading` en `text` leeg te laten (`""`)
- `columns` array te vullen met gewenste kolommen
- Elke kolom heeft een `title` en `items` array
- Items kunnen `href`, `title`, `ariaLabel`, `external`, en `download`
  properties hebben

## Toegankelijkheid

- Gebruik altijd `<footer>` met `role="contentinfo"`.
- Externe links krijgen automatisch juiste aria-labels.
- Iconen hebben `role="presentation"` om te voorkomen dat ze door screenreaders
  worden voorgelezen.
- Download links worden duidelijk gemarkeerd.
- Kolomtitels gebruiken logische heading structuur.

## Styling

De styling gebruikt alle page-footer CSS klassen:

- `.dictu-page-footer`
- `.dictu-page-footer__container`
- `.dictu-page-footer__columns`
- `.dictu-page-footer__column`

Plus alle link-list gerelateerde klassen voor de navigatie.

## Licentie

EUPL-1.2
