# Image component

De image component biedt een toegankelijke en responsieve manier om afbeeldingen weer te geven.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/image
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/image/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/image/dist/index.css";
```

## Richtlijnen

- Gebruik in CSS de `.dictu-image` class name voor de image component.
- Specificeer altijd `width` en `height` attributen voor layout shift preventie.
- Gebruik beschrijvende alt-tekst voor betekenisvolle afbeeldingen.
- Voor decoratieve afbeeldingen gebruik `alt=""`.

## Beschrijving
De image component biedt een toegankelijke en responsieve manier om afbeeldingen weer te geven. De component ondersteunt verschillende beeldverhoudingen, lazy loading, en heeft ingebouwde toegankelijkheidsfeatures voor zowel betekenisvolle als decoratieve afbeeldingen.

### Voorbeeldgebruik
```html
<!-- Standaard afbeelding -->
<img class="dictu-image dictu-image__aspect-ratio:square"
     src="/example-image.jpg"
     alt="Beschrijving van de afbeelding"
     width="640"
     height="640"
     loading="lazy">

<!-- Decoratieve afbeelding -->
<img class="dictu-image dictu-image__aspect-ratio:landscape"
     src="/decorative-image.jpg"
     alt=""
     width="640"
     height="480"
     loading="lazy">
```

## CSS Klassen
- `.dictu-image` — basis styling voor afbeeldingen
- `.dictu-image__aspect-ratio:square` — vierkante beeldverhouding (1:1)
- `.dictu-image__aspect-ratio:landscape` — liggende beeldverhouding (4:3)
- `.dictu-image__aspect-ratio:portrait` — staande beeldverhouding (3:4)
- `.dictu-image__aspect-ratio:video` — video beeldverhouding (16:9)

## Functies
- **Responsief ontwerp**: Automatische aanpassing aan containergrootte
- **Lazy loading**: Ondersteuning voor `loading="lazy"` attribuut
- **Toegankelijkheid**: Verschillende modi voor betekenisvolle en decoratieve afbeeldingen
- **Focus management**: Zichtbare focus indicators voor toegankelijkheid
- **Beeldverhoudingen**: Verschillende beeldverhoudingen beschikbaar
- **Prestaties**: Geoptimaliseerd voor snelle laadtijden

## Beeldverhoudingen
De component ondersteunt vier standaard beeldverhoudingen:

### Square (1:1)
```html
<img class="dictu-image dictu-image__aspect-ratio:square" src="..." alt="...">
```
Ideaal voor profielfoto's, iconen en vierkante afbeeldingen.

### Landscape (4:3)
```html
<img class="dictu-image dictu-image__aspect-ratio:landscape" src="..." alt="...">
```
Geschikt voor landschapsfoto's en horizontale content.

### Portrait (3:4)
```html
<img class="dictu-image dictu-image__aspect-ratio:portrait" src="..." alt="...">
```
Perfect voor portretfoto's en verticale content.

### Video (16:9)
```html
<img class="dictu-image dictu-image__aspect-ratio:video" src="..." alt="...">
```
Ideaal voor thumbnails van video's en widescreen content.

## Toegankelijkheid

### Betekenisvolle afbeeldingen
Voor afbeeldingen die informatie overbrengen:
```html
<img class="dictu-image"
     src="chart.jpg"
     alt="Verkoopcijfers Q1 2024 tonen 15% stijging">
```

### Decoratieve afbeeldingen
Voor afbeeldingen die alleen visueel zijn:
```html
<img class="dictu-image"
     src="decoration.jpg"
     alt="">
```

### Linked afbeeldingen
Voor klikbare afbeeldingen voeg beschrijvende aria-labels toe:
```html
<a href="/artikel" aria-label="Lees artikel: Nieuwe ontwikkelingen in web toegankelijkheid">
  <img class="dictu-image" src="artikel-thumb.jpg" alt="">
</a>
```

## Attributes
De component ondersteunt alle standaard HTML img attributes:

- **src**: Pad naar de afbeelding (verplicht)
- **alt**: Alternatieve tekst (verplicht, kan leeg zijn voor decoratieve afbeeldingen)
- **width/height**: Afmetingen voor layout shift preventie
- **loading**: `lazy` of `eager` voor laadstrategie
- **aria-describedby**: Koppeling met beschrijvende tekst

## Performance
- Gebruik `loading="lazy"` voor afbeeldingen buiten de viewport
- Specificeer altijd `width` en `height` om layout shift te voorkomen
- Gebruik geoptimaliseerde afbeeldingsformaten (WebP, AVIF)
- Overweeg responsive images met `srcset` voor verschillende schermgroottes

## Focus Management
De component heeft ingebouwde focus styling:
- Zichtbare outline bij keyboard navigatie
- Decoratieve afbeeldingen krijgen geen focus
- Configureerbare focus kleuren via CSS custom properties

## CSS Custom Properties
- `--govnl-focus-outline-color`: Kleur van de focus outline

## Browser Ondersteuning
- Moderne aspect-ratio CSS eigenschap
- Fallback voor oudere browsers via padding-top methode
- Progressive enhancement voor lazy loading

## Licentie
EUPL-1.2
