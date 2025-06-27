Gebruik in CSS de `.dictu-page-header` class name voor de page-header component.

## Beschrijving

De page-header component toont een hoofding aan de bovenkant van een pagina met
het officiële Rijksoverheid logo en organisatie-informatie. De component is
responsief en volledig toegankelijk.

### Voorbeeldgebruik

```html
<header class="dictu-page-header" lang="nl">
  <div class="dictu-page-container">
    <div class="dictu-logo">
      <div class="dictu-logo__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -12 44 88"
          role="img"
        >
          <title>Logo Rijksoverheid</title>
          <!-- SVG inhoud van het Rijksoverheid logo -->
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
- `.dictu-page-container` — interne container voor de inhoud
- `.dictu-logo` — container voor het logo en bijbehorende tekst
- `.dictu-logo__image` — container voor het SVG logo
- `.dictu-logo__text` — container voor de titel en ondertitel
- `.dictu-logo__title` — hoofdtitel van de organisatie
- `.dictu-logo__subtitle` — ondertitel of afdelingsnaam

## Functies

- **Rijksoverheid Logo**: Officieel SVG logo met correcte kleuren en formaat
- **Organisatie Titel**: Configureerbare hoofdtitel
- **Afdeling Ondertitel**: Optionele ondertitel voor specifieke afdeling
- **Responsief Design**: Automatische aanpassing aan verschillende
  schermgroottes
- **Toegankelijk**: Volledige ondersteuning voor screenreaders en
  toetsenbordnavigatie

## Responsief Gedrag

De component past zich aan verschillende schermgroottes aan:

- **Desktop**: Standaard centrering en grootte
- **Tablet** (max-width: 48em): Aangepaste logo positie voor medium schermen
- **Mobiel** (max-width: 20em): Compacte weergave voor kleine schermen

## Design Tokens

Beschikbare CSS custom properties voor aanpassing:

- `--govnl-header-background-color`: Achtergrondkleur van header (standaard:
  transparent)
- `--govnl-header-padding-block-end`: Onderste padding van header (standaard: 0)
- `--govnl-header-container-max-inline-width`: Maximale breedte van container
  (standaard: 100%)
- `--govnl-header-container-padding-inline`: Horizontale padding van container
  (standaard: 1rem)

## Toegankelijkheid

Gebruik altijd `<header>` voor de hoofdcontainer. Voeg een `lang` attribuut toe
om de taal aan te geven. Het SVG logo heeft `role="img"` en een `<title>`
element voor screenreaders. Logo tekst is toegankelijk via de tekstinhoud. Zie
[WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
en
[WCAG 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).
