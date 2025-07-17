Gebruik in CSS de `.dictu-card` class name voor de card component.

## Beschrijving

De card component toont een kaart met een afbeelding, titel, inhoud en optionele
metadata. De component ondersteunt verschillende varianten en is volledig
toegankelijk. De kaart is geheel klikbaar via de titel-link.

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
- `.dictu-card__image-container` — container voor de afbeelding
- `.dictu-card__content` — container voor de hoofdinhoud (titel en beschrijving)
- `.dictu-card__heading` — titel/heading van de kaart
- `.dictu-card__link` — link element binnen de heading
- `.dictu-card__paragraph` — tekstinhoud van de kaart
- `.dictu-card__metadata` — metadata onderaan de kaart

## Functies

- **Afbeelding**: Ondersteunt responsive afbeeldingen met object-fit: cover
- **Titel**: Klikbare titel met semantische heading levels
- **Inhoud**: Flexibele tekstinhoud met paragraph styling
- **Metadata**: Optionele metadata voor extra informatie
- **Hele kaart klikbaar**: Via het ::after pseudo-element op de titel-link
- **Hover/Focus states**: Visuele feedback voor interactie
- **Responsive**: Automatisch responsive gedrag

## Toegankelijkheid

Gebruik altijd `<article>` of vergelijkbaar semantisch element voor de
hoofdcontainer. Voeg een `lang` attribuut toe om de taal aan te geven.
Afbeeldingen moeten altijd betekenisvolle alt-tekst hebben die de inhoud
beschrijft. Gebruik logische heading niveaus die aansluiten bij de
paginastructuur. De hele kaart is klikbaar via het ::after pseudo-element op de
heading link. Zie
[WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html),
[WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
en
[WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).
