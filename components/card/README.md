<!-- @license CC0-1.0 -->

De card component toont een kaart met afbeelding, titel, inhoud en metadata van
het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/design-tokens
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/design-tokens/dist/card.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/card.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-card` class voor de kaartcontainer.
- Gebruik semantische HTML: `<article>` of `<div>` voor de hoofdcontainer.
- Voeg een `lang` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg voor goede focus-states en toetsenbordnavigatie voor alle links.
- Voeg altijd betekenisvolle alt-tekst toe aan afbeeldingen.

### Voorbeeldgebruik

```html
<article class="dictu-card" lang="nl">
  <div class="dictu-card__image-container">
    <img
      class="dictu-image dictu-card__image"
      src="/example-image.jpg"
      alt="Beschrijvende alt-tekst voor de afbeelding"
    />
  </div>
  <div class="dictu-card__content">
    <h2 class="dictu-heading dictu-card__heading">
      <a
        href="/artikel"
        class="dictu-link dictu-card__link"
        title="Lees het volledige artikel"
      >
        Titel van de kaart
      </a>
    </h2>
    <p class="dictu-paragraph dictu-card__paragraph">
      Dit is een korte beschrijving van de inhoud van de kaart die de lezer
      interesseert om verder te lezen.
    </p>
  </div>
  <small class="dictu-card__metadata"> Gepubliceerd op 15 januari 2025 </small>
</article>
```

## CSS Klassen

- `.dictu-card` — hoofdcontainer voor de kaart
- `.dictu-card--accent` — accent variant van de kaart
- `.dictu-card__image-container` — container voor de afbeelding
- `.dictu-card__content` — container voor de hoofdinhoud
- `.dictu-card__heading` — titel/heading van de kaart
- `.dictu-card__link` — link element binnen de heading
- `.dictu-card__paragraph` — tekstinhoud van de kaart
- `.dictu-card__metadata` — metadata onderaan de kaart

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
`proprietary/design-tokens/src/components/card.tokens.json` voor een overzicht
van beschikbare tokens. Voorbeeld:

```css
.dictu-card {
  --govnl-card-default-background-color: #fff;
  --govnl-card-default-border-color: #d1d5db;
  --govnl-card-default-border-radius: 0.5rem;
  --govnl-card-default-border-width: 1px;
  /* ... */
}
```

## Toegankelijkheid

- Gebruik altijd een `<article>` of semantisch equivalent voor de
  kaartcontainer.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Gebruik betekenisvolle alt-tekst voor afbeeldingen die de inhoud beschrijven.
- Links krijgen automatisch focus-states en moeten een duidelijk doel hebben.
- Gebruik logische heading niveaus die aansluiten bij de paginastructuur.
- De hele kaart is klikbaar via het ::after pseudo-element op de heading link.
- Zie
  [WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html),
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  en
  [WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).

# Varianten

## Card (Standaard)

De volledige card component met afbeelding, titel, inhoud en metadata.

```js
export const Card = {
  args: {
    image_src: "/example-image.jpg",
    alt: "Dit is een voorbeeld afbeelding voor een kaart",
    headingLevel: 2,
    link: {
      href: "#",
      text: "De titel van de kaart",
    },
    content: "Dit is een voorbeeld van de inhoud van de kaart.",
    metadata: "Dit is een voorbeeld van de metadata",
    variant: "default",
  },
};
```

## AccentCard

Een accent variant van de kaart met een opvallende achtergrondkleur voor
belangrijke content.

```js
export const AccentCard = {
  args: {
    image_src: "/example-image.jpg",
    alt: "Dit is een voorbeeld afbeelding voor een accent kaart",
    headingLevel: 2,
    link: {
      href: "#",
      text: "De titel van de accent kaart",
    },
    content: "Dit is een voorbeeld van de inhoud van de accent kaart.",
    metadata: "Dit is een voorbeeld van de accent metadata",
    variant: "accent",
  },
};
```

## Componenten

De card component maakt gebruik van andere design system componenten:

- **Image**: Voor de kaartafbeelding
- **Heading**: Voor de titel van de kaart
- **Link**: Voor de klikbare titel
- **Paragraph**: Voor de beschrijvende tekst
- **Metadata**: Voor aanvullende informatie

## Styling

De styling wordt verzorgd door de card CSS en importeert automatisch de
benodigde child components:

- `.dictu-card`
- `.dictu-card--accent`
- `.dictu-card__image-container`
- `.dictu-card__content`
- `.dictu-card__heading`
- `.dictu-card__link`
- `.dictu-card__paragraph`
- `.dictu-card__metadata`

Plus alle gerelateerde klassen van image, heading, link en paragraph components.

## Interactiviteit

- **Hover state**: Achtergrond en rand veranderen bij hover
- **Active state**: Visuele feedback bij klikken
- **Focus state**: Duidelijke focus indicator voor toetsenbordnavigatie
- **Hele kaart klikbaar**: Via het ::after pseudo-element op de heading link

## Licentie

EUPL-1.2
