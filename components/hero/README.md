<!-- @license CC0-1.0 -->

De hero component toont een opvallende sectie met een achtergrondafbeelding en
tekstinhoud aan de bovenkant van een pagina.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/hero
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/hero/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/hero/dist/index.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-hero` class voor de hero sectie.
- Gebruik semantische HTML: `<section>` voor de hoofdcontainer.
- Voeg een `lang` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg ervoor dat de achtergrondafbeelding een alt-tekst heeft voor
  toegankelijkheid.
- De hero is responsive en past zich automatisch aan op mobiele apparaten.

### Voorbeeldgebruik

```html
<section class="dictu-section dictu-hero" lang="nl">
  <div class="dictu-container dictu-hero__container">
    <img
      src="/path/to/hero-image.jpg"
      alt="Beschrijving van de afbeelding"
      class="dictu-hero__image dictu-hero__image-ratio-video dictu-hero__image--corner-top-right"
      loading="lazy"
    />
    <div class="dictu-hero__message dictu-hero__message--left">
      <h1 class="dictu-hero__heading dictu-heading dictu-heading--level-1">
        Hero Titel
      </h1>
      <p class="dictu-paragraph dictu-hero__subheading">
        Dit is een beschrijvende ondertitel die meer context geeft over de hero
        sectie.
      </p>
    </div>
  </div>
</section>
```

## CSS Klassen

### Hoofdcontainer

- `.dictu-hero` — hoofdcontainer voor de hero sectie
- `.dictu-hero__container` — interne container voor de inhoud

### Afbeelding

- `.dictu-hero__image` — de achtergrondafbeelding van de hero
- `.dictu-hero__image-ratio-square` — vierkante beeldverhouding (1:1)
- `.dictu-hero__image-ratio-landscape` — landschap beeldverhouding (4:3)
- `.dictu-hero__image-ratio-video` — video beeldverhouding (16:9)

### Hoekposities

- `.dictu-hero__image--corner-top-left` — afgeronde hoek linksboven
- `.dictu-hero__image--corner-top-right` — afgeronde hoek rechtsboven
- `.dictu-hero__image--corner-bottom-left` — afgeronde hoek linksonder
- `.dictu-hero__image--corner-bottom-right` — afgeronde hoek rechtsonder

### Bericht

- `.dictu-hero__message` — container voor de tekstinhoud
- `.dictu-hero__message--left` — positioneert het bericht links
- `.dictu-hero__message--right` — positioneert het bericht rechts
- `.dictu-hero__heading` — de hoofdtitel van de hero
- `.dictu-hero__subheading` — de ondertitel van de hero

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, typografie, etc.
Voorbeeld:

## Responsive gedrag

De hero component is volledig responsive:

- **Desktop**: Volledige grootte met optimale tekst- en afbeeldingsverhoudingen
- **Mobiel** (≤ 48em):
  - Kleinere marges voor betere ruimtebenutting
  - Aangepaste tekstgroottes voor leesbaarheid
  - Compactere lay-out van het berichtgedeelte

## Toegankelijkheid

- Gebruik altijd een `<section>` element voor de hero container.
- Voeg een `lang` attribuut toe voor de juiste taal.
- Zorg voor voldoende kleurcontrast tussen tekst en achtergrond.
- Gebruik logische heading hiërarchie (meestal h1 voor de hoofdtitel).
- Voeg betekenisvolle alt-teksten toe aan afbeeldingen.
- Test de component met een schermlezer om te controleren of de content goed
  voorgelezen wordt.

## Varianten

### Berichtposities

- **Links**: Bericht verschijnt aan de linkerkant van de afbeelding
- **Rechts**: Bericht verschijnt aan de rechterkant van de afbeelding

### Hoekposities voor afbeeldingen

- **Linksboven**: Afgeronde hoek linksboven
- **Rechtsboven**: Afgeronde hoek rechtsboven
- **Linksonder**: Afgeronde hoek linksonder
- **Rechtsonder**: Afgeronde hoek rechtsonder

### Beeldverhoudingen

- **Vierkant** (1:1): Voor vierkante afbeeldingen
- **Landschap** (4:3): Voor traditionele landschapsafbeeldingen
- **Video** (16:9): Voor widescreen afbeeldingen
