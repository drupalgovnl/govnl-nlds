# Beeldverhoudingen - Image component

De image component biedt vier gestandaardiseerde beeldverhoudingen die geschikt
zijn voor verschillende soorten content. Elke verhouding is geoptimaliseerd voor
specifieke use cases en biedt consistente presentatie.

## Overzicht beeldverhoudingen

| Verhouding | Ratio | CSS Class                             | Gebruik voor                          |
| ---------- | ----- | ------------------------------------- | ------------------------------------- |
| Square     | 1:1   | `dictu-image__aspect-ratio:square`    | Profielfoto's, iconen, sociale media  |
| Landscape  | 4:3   | `dictu-image__aspect-ratio:landscape` | Landschapsfoto's, traditionele foto's |
| Portrait   | 3:4   | `dictu-image__aspect-ratio:portrait`  | Portretfoto's, verticale content      |
| Video      | 16:9  | `dictu-image__aspect-ratio:video`     | Video thumbnails, widescreen          |

## Implementatie voorbeelden

### Square (1:1) - Vierkant

```html
<img
  class="dictu-image dictu-image__aspect-ratio:square"
  src="/profile-photo.jpg"
  alt="Profielfoto van Jan Jansen"
  width="400"
  height="400"
/>
```

**Ideaal voor**: Profielfoto's, avatars, iconen, sociale media posts,
productafbeeldingen

### Landscape (4:3) - Liggend

```html
<img
  class="dictu-image dictu-image__aspect-ratio:landscape"
  src="/nature-photo.jpg"
  alt="Zonsondergang boven de Nederlandse polders"
  width="800"
  height="600"
/>
```

**Ideaal voor**: Landschapsfotografie, traditionele camera verhoudingen, brede
overzichten

### Portrait (3:4) - Staand

```html
<img
  class="dictu-image dictu-image__aspect-ratio:portrait"
  src="/building-photo.jpg"
  alt="Moderne kantoorgebouw tegen blauwe lucht"
  width="600"
  height="800"
/>
```

**Ideaal voor**: Portretfotografie, verticale architectuur, mobiele screenshots

### Video (16:9) - Widescreen

```html
<img
  class="dictu-image dictu-image__aspect-ratio:video"
  src="/video-thumbnail.jpg"
  alt="Thumbnail van instructievideo over toegankelijkheid"
  width="1280"
  height="720"
/>
```

**Ideaal voor**: Video thumbnails, presentatieslides, cinema-achtige content

## Technische specificaties

### CSS implementatie

```scss
.dictu-image__aspect-ratio:square {
  aspect-ratio: 1;
}

.dictu-image__aspect-ratio:landscape {
  aspect-ratio: 4/3;
}

.dictu-image__aspect-ratio:portrait {
  aspect-ratio: 3/4;
}

.dictu-image__aspect-ratio:video {
  aspect-ratio: 16/9;
}
```

### Browser ondersteuning

- **Moderne browsers**: Native `aspect-ratio` CSS eigenschap
- **Safari 14+**: Volledige ondersteuning
- **Legacy browsers**: Automatische fallback via padding-based beeldverhouding
- **IE 11**: Graceful degradation naar automatische grootte

## Responsive gedrag

Alle beeldverhoudingen zijn volledig responsive:

```css
.dictu-image {
  max-inline-size: 100%; /* Nooit breder dan container */
  block-size: auto; /* Hoogte past zich aan */
  inline-size: auto; /* Breedte past zich aan */
}
```

## Layout shift preventie

Specificeer altijd `width` en `height` attributen:

```html
<!-- ✅ Goed: voorkomt layout shift -->
<img
  class="dictu-image dictu-image__aspect-ratio:square"
  width="400"
  height="400"
  ...
/>

<!-- ❌ Slecht: kan layout shift veroorzaken -->
<img class="dictu-image dictu-image__aspect-ratio:square" ... />
```

## Gebruik in verschillende contexts

### Grid layouts

```html
<div class="image-grid">
  <img class="dictu-image dictu-image__aspect-ratio:square" ... />
  <img class="dictu-image dictu-image__aspect-ratio:square" ... />
  <img class="dictu-image dictu-image__aspect-ratio:square" ... />
</div>
```

### Flexible containers

```html
<div style="width: 50vw;">
  <img
    class="dictu-image dictu-image__aspect-ratio:landscape"
    style="width: 100%;"
    ...
  />
</div>
```

## Best practices

### Consistency

- Gebruik dezelfde beeldverhouding voor vergelijkbare content
- Houd beeldverhoudingen consistent binnen een pagina sectie
- Overweeg een style guide voor beeldverhouding gebruik

### Performance

- Specificeer altijd `width` en `height` voor CLS-preventie
- Gebruik `loading="lazy"` voor afbeeldingen buiten viewport
- Optimaliseer afbeeldingen voor de gekozen beeldverhouding

### Toegankelijkheid

- Alt-tekst moet de inhoud beschrijven, niet de beeldverhouding
- Gebruik consistente beeldverhoudingen voor betere gebruikerservaring
- Test met verschillende schermgroottes

## Gebruik in Storybook

Alle beeldverhoudingen zijn beschikbaar als aparte stories:

- **Square**: `aspectRatio: 'square'`
- **Landscape**: `aspectRatio: 'landscape'`
- **Portrait**: `aspectRatio: 'portrait'`
- **Video**: `aspectRatio: 'video'`

## Licentie

EUPL-1.2
