Gebruik in CSS de `.dictu-section` class name voor de page-section component.

## Beschrijving

De page-section component biedt een basis sectie-container met consistente
breedte en padding instellingen. De component gebruikt semantische HTML en volgt
toegankelijkheidsrichtlijnen.

### Voorbeeldgebruik

```html
<section class="dictu-section">
  <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
  <p class="dictu-paragraph">
    Dit is de inhoud van de sectie met consistente styling en spacing.
  </p>
</section>
```

## CSS Klassen

- `.dictu-section` — hoofdcontainer voor de sectie

## Functies

- **Semantische HTML**: Gebruikt `<section>` element voor goede structuur
- **Consistente breedte**: Gecontroleerde maximale breedte via design tokens
- **Padding**: Horizontale padding voor consistente uitlijning
- **Reset margins**: Alle margins worden gereset voor predictable styling

## Toegankelijkheid

Gebruik altijd `<section>` voor semantische structuur. Voeg indien nodig een
`aria-label` of `aria-labelledby` attribuut toe voor betere toegankelijkheid.
Gebruik logische heading niveaus binnen de sectie.
