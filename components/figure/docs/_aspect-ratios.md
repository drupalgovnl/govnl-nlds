# Beeldverhoudingen - Figure component

De figure component ondersteunt verschillende beeldverhoudingen om optimaal gebruik te maken van verschillende soorten content. Elke beeldverhouding is geoptimaliseerd voor specifieke use cases.

## Beschikbare verhoudingen

### Square (1:1)
```html
<figure class="dictu-figure">
  <img class="dictu-image dictu-image__aspect-ratio-square"
       src="/example-image.jpg"
       alt="Vierkante afbeelding"
       width="640"
       height="640">
  <figcaption class="dictu-figure__caption">Vierkante beeldverhouding</figcaption>
</figure>
```
**Gebruik voor**: Profielfoto's, iconen, sociale media posts, productafbeeldingen

### Landscape (4:3)
```html
<figure class="dictu-figure">
  <img class="dictu-image dictu-image__aspect-ratio-landscape"
       src="/landscape-image.jpg"
       alt="Landschapsafbeelding"
       width="640"
       height="480">
  <figcaption class="dictu-figure__caption">Landschap beeldverhouding</figcaption>
</figure>
```
**Gebruik voor**: Landschapsfoto's, brede afbeeldingen, traditionele foto's

### Portrait (3:4)
```html
<figure class="dictu-figure">
  <img class="dictu-image dictu-image__aspect-ratio-portrait"
       src="/portrait-image.jpg"
       alt="Portretafbeelding"
       width="480"
       height="640">
  <figcaption class="dictu-figure__caption">Portret beeldverhouding</figcaption>
</figure>
```
**Gebruik voor**: Portretfoto's, verticale content, mobiele screenshots

### Video (16:9)
```html
<figure class="dictu-figure">
  <img class="dictu-image dictu-image__aspect-ratio-video"
       src="/video-thumbnail.jpg"
       alt="Video thumbnail"
       width="960"
       height="540">
  <figcaption class="dictu-figure__caption">Video beeldverhouding</figcaption>
</figure>
```
**Gebruik voor**: Video thumbnails, widescreen content, cinema-achtige beelden

## Technische implementatie
Elke beeldverhouding gebruikt moderne CSS `aspect-ratio` eigenschap:

```scss
.dictu-image__aspect-ratio-square {
  aspect-ratio: 1;
}

.dictu-image__aspect-ratio-landscape {
  aspect-ratio: 4/3;
}

.dictu-image__aspect-ratio-portrait {
  aspect-ratio: 3/4;
}

.dictu-image__aspect-ratio-video {
  aspect-ratio: 16/9;
}
```

## Responsief gedrag
Alle beeldverhoudingen zijn volledig responsief:
- Behouden hun verhouding op alle schermgroottes
- Passen zich aan binnen hun container
- Gebruiken `max-inline-size: 100%` voor overflow preventie

## Browser ondersteuning
- **Moderne browsers**: Gebruiken native `aspect-ratio` CSS eigenschap
- **Legacy browsers**: Automatische fallback via padding-top methode
- **Progressive enhancement**: Graceful degradation voor oudere browsers

## Best practices
- **Consistency**: Gebruik dezelfde beeldverhouding voor vergelijkbare content
- **Prestaties**: Specificeer altijd `width` en `height` attributen
- **Loading**: Gebruik `loading="lazy"` voor afbeeldingen buiten de viewport
- **Quality**: Kies de juiste beeldverhouding voor uw content type

## Gebruik in Storybook
Alle beeldverhoudingen zijn beschikbaar als aparte stories:
- `Square`: Voor vierkante content
- `Landscape`: Voor brede afbeeldingen
- `Portrait`: Voor verticale content
- `Video`: Voor widescreen content
- `Portrait`: Voor hoge afbeeldingen
- `Video`: Voor widescreen content

## Licentie
EUPL-1.2
