# WithCards component

De `WithCards` variant van de page-grid component toont kaart componenten in een
drie-kolommen grid layout. Deze variant demonstreert hoe verschillende card
varianten (standaard en accent) samen kunnen worden gebruikt in een
gestructureerd grid.

## Gebruik

Gebruik deze variant wanneer u kaart componenten wilt weergeven in een
overzichtelijk grid. Perfect voor nieuwsartikelen, productoverzichten, of andere
content die gestructureerd gepresenteerd moet worden.

```html
<div class="dictu-grid dictu-grid--columns-3" id="page-grid-cards">
  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Eerste voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Dit is de inhoud van de eerste kaart in het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 8 juli 2025</small>
  </article>

  <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Tweede voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link"
          >Tweede Kaart (Accent)</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Dit is de inhoud van de tweede kaart in accent stijl.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
  </article>

  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Derde voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Dit is de inhoud van de derde kaart in het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
  </article>
</div>
```

## Kenmerken

- **Drie kolommen layout**: Optimaal voor content overzichten
- **Mixed card varianten**: Combinatie van standaard en accent kaarten
- **Volledige kaart content**: Afbeelding, titel, tekst en metadata
- **Interactieve elementen**: Focus states en klikbare kaarten
- **Semantische HTML**: Gebruik van `<article>` elementen

## Card Varianten

- **Standaard kaart**: `.dictu-card` - neutrale styling
- **Accent kaart**: `.dictu-card--accent` - opvallende styling voor belangrijke
  content

## Kaart Componenten

Elke kaart bestaat uit:

- **Image container**: `.dictu-card__image-container` met afbeelding
- **Content sectie**: `.dictu-card__content` met titel en tekst
- **Heading**: `.dictu-card__heading` met klikbare link
- **Paragraph**: `.dictu-card__paragraph` met beschrijvende tekst
- **Metadata**: `.dictu-card__metadata` met aanvullende informatie

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- `columns` in te stellen op `3`
- `content` te vullen met complete `<article class="dictu-card">` elementen
- Mix van standaard en accent kaarten te gebruiken
- Betekenisvolle content en metadata toe te voegen

## Toegankelijkheid

- Gebruik semantische `<article>` elementen voor elke kaart
- Voeg `tabindex="0"` toe voor toetsenbordnavigatie
- Gebruik `.dictu-focus-ring` voor zichtbare focus states
- Zorg voor betekenisvolle link teksten in headings
- Test de layout met verschillende content lengtes
- Voeg `aria-label` toe waar nodig voor context

## Interactiviteit

- **Focus management**: Duidelijke focus indicators
- **Klikbare kaarten**: Hele kaart wordt klikbaar via heading link
- **Hover states**: Visuele feedback bij mouse hover
- **Keyboard navigation**: Volledige toetsenbord ondersteuning

## Responsive Gedrag

Op kleinere schermen:

- Grid past zich aan naar minder kolommen
- Kaarten behouden hun proporties
- Spacing wordt geoptimaliseerd voor mobiele weergave
- Touch targets blijven toegankelijk

## Styling Dependencies

De styling vereist deze componenten:

- Page-grid CSS (`.dictu-grid`, `.dictu-grid--columns-3`)
- Card CSS (alle `.dictu-card` varianten)
- Image CSS (`.dictu-image`)
- Heading CSS (`.dictu-heading`)
- Link CSS (`.dictu-link`)
- Paragraph CSS (`.dictu-paragraph`)
- Utilities CSS (focus ring, spacing)
