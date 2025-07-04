# AccentCard component

De `AccentCard` component is een opvallende variant van de card component voor
belangrijke content die extra aandacht verdient. Deze component gebruikt een
accent achtergrondkleur en is volledig toegankelijk volgens WCAG
2.2-richtlijnen.

## Gebruik

Gebruik deze component wanneer u belangrijke content of call-to-actions wilt
benadrukken. De accent variant trekt de aandacht zonder de toegankelijkheid te
compromitteren.

```html
<article class="dictu-card dictu-card--accent" lang="nl">
  <div class="dictu-card__image-container">
    <img
      class="dictu-image dictu-card__image"
      src="/important-image.jpg"
      alt="Belangrijke afbeelding die aandacht verdient"
    />
  </div>
  <div class="dictu-card__content">
    <h2 class="dictu-heading dictu-card__heading">
      <a
        href="/belangrijk-artikel"
        class="dictu-link dictu-card__link"
        title="Lees dit belangrijke artikel"
      >
        Belangrijke Aankondiging
      </a>
    </h2>
    <p class="dictu-paragraph dictu-card__paragraph">
      Dit is belangrijke informatie die extra aandacht verdient van de
      gebruiker.
    </p>
  </div>
  <small class="dictu-card__metadata">
    Urgentie: Hoog - Gepubliceerd vandaag
  </small>
</article>
```

## Kenmerken

- Opvallende accent achtergrondkleur
- Contrasterende tekstkleur voor leesbaarheid
- Alle standaard card functionaliteiten
- Hover en focus states aangepast aan accent styling
- Volledig responsive

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- `variant` in te stellen op `"accent"`
- Alle andere argumenten zoals `content`, `link`, `metadata` naar wens aan te
  passen
- `headingLevel` en andere eigenschappen blijven hetzelfde werken

## Toegankelijkheid

- Gebruik dezelfde semantische HTML structuur als de standaard card
- De accent kleuren voldoen aan WCAG 2.2 AA contrast vereisten
- Alle interactieve elementen behouden hun toegankelijke states
- Focus indicators zijn aangepast aan de accent styling
- Gebruik voor belangrijke content, maar niet overmatig om de impact te behouden

## Styling

De styling wordt verzorgd door de card CSS met de `.dictu-card--accent`
modifier:

- `.dictu-card--accent` — accent variant modifier
- Gebruikt dezelfde child klassen als de standaard card
- Overschrijft background-color, border-color en color properties
- Behoudt alle hover, active en focus states met aangepaste kleuren

## Wanneer te gebruiken

- **Call-to-actions**: Belangrijke acties die gebruikers moeten ondernemen
- **Promotions**: Speciale aanbiedingen of tijdelijke content
- **Urgent berichten**: Nieuwsberichten of aankondigingen die aandacht vereisen
- **Featured content**: Uitgelichte artikelen of belangrijke informatie

## Licentie

EUPL-1.2
