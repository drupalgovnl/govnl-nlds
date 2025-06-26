# Decoratieve Image component

De `Decoratieve Image` component is specifiek ontworpen voor afbeeldingen die geen betekenisvolle informatie overbrengen maar alleen ter decoratie of visuele ondersteuning dienen. Deze variant zorgt voor correcte toegankelijkheid door decoratieve afbeeldingen te verbergen voor screenreaders.

## Gebruik
Gebruik deze component voor puur decoratieve afbeeldingen zoals achtergronden, scheidingslijnen, patronen, of visuele elementen die geen inhoudelijke waarde toevoegen.

```html
<img class="dictu-image dictu-image__aspect-ratio:square"
     src="/decorative-image.jpg"
     alt=""
     width="640"
     height="640"
     loading="lazy">
```

## Kenmerken
- **Lege alt-tekst**: `alt=""` zorgt ervoor dat screenreaders de afbeelding overslaan
- **Geen keyboard focus**: Voorkomt onnodige tab stops voor niet-interactieve content
- **Normale styling**: Behoudt alle visuele eigenschappen van standaard images

## Verschil met standaard image
| Eigenschap | Standaard | Decoratief |
|------------|-----------|------------|
| `alt` attribuut | Beschrijvende tekst | Leeg (`""`) |
| Keyboard focus | Kan focus ontvangen | Geen focus |
| Screenreader | Wordt voorgelezen | Wordt overgeslagen |

## Wanneer decoratief gebruiken
✅ **Wel decoratief**:
- Achtergrondpatronen en texturen
- Visuele scheidingslijnen
- Decoratieve iconen naast tekst die al beschreven is
- Afbeeldingen waarvan de betekenis volledig in omliggende tekst staat

❌ **Niet decoratief**:
- Afbeeldingen die informatie bevatten
- Functionele iconen (buttons, links)
- Grafieken of diagrammen
- Foto's die context toevoegen

## Voorbeelden

### Decoratief patroon
```html
<img class="dictu-image"
     src="/pattern-decoration.svg"
     alt="">
```

### Visuele scheiding
```html
<img class="dictu-image dictu-image__aspect-ratio:landscape"
     src="/divider-image.jpg"
     alt=""
     width="800"
     height="100">
```

## Gebruik in Storybook
In Storybook activeert u de decoratieve variant door:
- `decorative`: Op `true` zetten
- `alt`: Wordt automatisch leeg gehouden
- `ariaDescribedBy`: Leeg laten

## Toegankelijkheid richtlijnen
Volgens [WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html):
- Decoratieve afbeeldingen moeten `alt=""` hebben
- Ze mogen geen betekenisvolle informatie bevatten
- Ze moeten overgeslagen worden door assistive technology

## Veelgemaakte fouten
- **Alt-tekst toevoegen**: Decoratieve afbeeldingen moeten een lege alt hebben
- **Betekenisvolle afbeeldingen markeren**: Controleer of de afbeelding echt decoratief is
- **Inconsistente markering**: Gebruik consequent decoratieve attributen

## Testing
Test decoratieve afbeeldingen met:
- **Screenreader**: Afbeelding moet worden overgeslagen
- **Keyboard-navigatie**: Mag geen focus ontvangen
- **Axe accessibility tool**: Controleer op toegankelijkheidsproblemen

## Performance
Decoratieve afbeeldingen behouden alle performance features:
- Lazy loading ondersteuning
- Responsief gedrag
- Layout shift preventie

## Licentie
EUPL-1.2
