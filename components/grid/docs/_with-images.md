# WithImages variant

De `WithImages` variant van de grid component toont afbeeldingen in een
twee-kolommen grid layout. Deze variant demonstreert hoe het grid systeem
gebruikt kan worden voor visuele content met verschillende aspect ratio's.

## Gebruik

Gebruik deze variant wanneer u afbeeldingen in een gestructureerd grid wilt
weergeven. De component ondersteunt verschillende aspect ratio's en is volledig
responsief.

```html
<div class="dictu-grid dictu-grid--columns-2" id="page-grid-images">
  <img
    class="dictu-image dictu-aspect-ratio-landscape"
    src="/example-image.jpg"
    alt="Eerste voorbeeld afbeelding in landscape formaat"
    loading="lazy"
    width="640"
    height="360"
  />

  <img
    class="dictu-image dictu-aspect-ratio-landscape"
    src="/example-image.jpg"
    alt="Tweede voorbeeld afbeelding in landscape formaat"
    loading="lazy"
    width="640"
    height="640"
  />
</div>
```

## Kenmerken

- **Twee kolommen layout**: Optimaal voor afbeeldingen vergelijking en weergave
- **Mixed aspect ratios**: Demonstratie van verschillende beeldverhoudingen in
  hetzelfde grid
- **Lazy loading**: Prestatie-optimalisatie met `loading="lazy"`
- **Toegankelijke alt-tekst**: Betekenisvolle beschrijvingen voor screenreaders
- **Responsive afbeeldingen**: Automatische aanpassing aan schermgrootte

## Aspect Ratio Klassen

- `.dictu-aspect-ratio-landscape` — 16:9 landschap formaat
- `.dictu-aspect-ratio-portrait` — 9:16 portret formaat
- `.dictu-aspect-ratio-square` — 1:1 vierkant formaat

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- `columns` in te stellen op `2`
- `content` te vullen met `<img>` elementen
- Juiste `dictu-image` en aspect ratio klassen toe te voegen
- `loading="lazy"` en width/height attributen in te stellen

## Toegankelijkheid

- Gebruik altijd betekenisvolle `alt` attributen voor afbeeldingen
- Vermijd decoratieve afbeeldingen zonder alt-tekst (gebruik `alt=""`)
- Zorg voor voldoende contrast bij tekst over afbeeldingen
- Test de layout met verschillende afbeeldingsgroottes
- De component voldoet aan WCAG 2.2 AA-standaarden

## Prestaties

- Gebruik `loading="lazy"` voor afbeeldingen buiten de viewport
- Specificeer `width` en `height` attributen om layout shifts te voorkomen
- Optimaliseer afbeeldingsformaten (WebP, AVIF waar mogelijk)
- Gebruik responsive afbeeldingen met `srcset` voor verschillende schermgroottes

## Styling

De styling wordt verzorgd door:

- `.dictu-grid` en `.dictu-grid--columns-2` voor grid layout
- `.dictu-image` voor afbeelding styling
- `.dictu-aspect-ratio-*` klassen voor beeldverhoudingen
- Utility klassen voor spacing en responsive gedrag
