# Standaard Image component

De standaard `Image` component biedt een basis implementatie voor het tonen van afbeeldingen met toegankelijkheidsfeatures en responsief ontwerp. Deze variant is geschikt voor de meeste gebruikssituaties.

## Gebruik
Gebruik deze component voor informatieve afbeeldingen die betekenisvolle content bevatten en beschreven moeten worden voor screenreaders.

```html
<img class="dictu-image dictu-image__aspect-ratio:square"
     src="/example-image.jpg"
     alt="Beschrijvende tekst van de afbeelding"
     width="640"
     height="640"
     loading="lazy"
     role="img">
```

## Kenmerken
- **Semantische toegankelijkheid**: Correct `role="img"` attribuut
- **Beschrijvende alt-tekst**: Betekenisvolle alternatieve tekst
- **Responsief ontwerp**: Automatische aanpassing aan containergrootte
- **Performance optimalisatie**: Lazy loading ondersteuning
- **Focus management**: Keyboard navigatie ondersteuning

## Vereiste attributen
- **src**: Pad naar de afbeelding (verplicht)
- **alt**: Beschrijvende alternatieve tekst (verplicht)
- **width**: Breedte voor layout shift preventie (aanbevolen)
- **height**: Hoogte voor layout shift preventie (aanbevolen)

## Optionele attributen
- **loading**: `lazy` of `eager` (standaard: `lazy`)
- **role**: `img` voor informatieve afbeeldingen (standaard)
- **aria-describedby**: Koppeling met uitgebreidere beschrijving

## Beeldverhoudingen
Alle aspect ratio opties zijn beschikbaar:
```html
<!-- Vierkant -->
<img class="dictu-image dictu-image__aspect-ratio:square" ...>

<!-- Liggend -->
<img class="dictu-image dictu-image__aspect-ratio:landscape" ...>

<!-- Staand -->
<img class="dictu-image dictu-image__aspect-ratio:portrait" ...>

<!-- Video -->
<img class="dictu-image dictu-image__aspect-ratio:video" ...>
```

## Gebruik in Storybook
In Storybook kunt u de standaard variant aanpassen via:
- `src`: Afbeelding-URL
- `alt`: Alternatieve tekst
- `width/height`: Afmetingen
- `aspectRatio`: Gewenste beeldverhouding
- `loading`: Laadstrategie

## Toegankelijkheid
- **Alt-tekst**: Beschrijft de inhoud en betekenis van de afbeelding
- **Role**: `img` zorgt voor correcte interpretatie door screenreaders
- **Focus**: Ontvangt keyboard focus wanneer interactief
- **Contrast**: Voldoet aan WCAG contrast vereisten voor focus indicators

## Best Practices
- Gebruik beschrijvende alt-tekst die de essentie van de afbeelding weergeeft
- Vermijd "afbeelding van" of "foto van" in alt-tekst
- Houd alt-tekst beknopt maar informatief (max. ~150 karakters)
- Specificeer altijd width en height voor betere performance
- Gebruik lazy loading voor afbeeldingen buiten de initiële viewport

## Performance
- **Lazy loading**: Automatisch laden wanneer afbeelding in beeld komt
- **Layout shift preventie**: Width/height attributen voorkomen content verschuiving
- **Responsive**: Schaal automatisch mee met container
- **Modern fallbacks**: Graceful degradation voor oudere browsers

## Licentie
EUPL-1.2
