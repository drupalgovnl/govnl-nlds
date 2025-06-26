# Decoratieve Figure component

De `Decoratieve Figure` component is bedoeld voor afbeeldingen die puur visueel
zijn en geen betekenisvolle informatie overbrengen. Deze variant zorgt ervoor
dat decoratieve afbeeldingen correct worden behandeld door screenreaders.

## Gebruik

Gebruik deze component voor afbeeldingen die alleen ter decoratie dienen, zoals
achtergrondafbeeldingen, scheidingslijnen, of puur visuele elementen die geen
inhoudelijke waarde hebben.

```html
<figure class="dictu-figure">
  <img
    class="dictu-image dictu-image__aspect-ratio-square"
    src="/decorative-image.jpg"
    alt=""
    role="presentation"
    width="640"
    height="640"
    loading="lazy"
  />
  <figcaption class="dictu-figure__caption">
    Dit is een voorbeeld van een decoratieve afbeelding
  </figcaption>
</figure>
```

## Kenmerken

- Lege `alt=""` attribuut voor screenreaders
- `role="presentation"` om decoratief karakter aan te geven
- Normale figure structuur behouden voor layout
- Bijschrift kan nog steeds beschrijvende tekst bevatten
- Geen focus ontvangen via keyboard navigatie

## Verschil met standaard variant

- **Alt-tekst**: Leeg (`alt=""`) in plaats van beschrijvend
- **Role**: `presentation` om aan te geven dat het decoratief is
- **Focus**: Ontvangt geen keyboard focus
- **Screenreaders**: Wordt overgeslagen door assistive technology

## Wanneer te gebruiken

Gebruik de decoratieve variant voor:

- Achtergrondafbeeldingen die geen inhoud toevoegen
- Visuele scheidingselementen
- Patronen of texturen
- Afbeeldingen waarvan de betekenis al in de tekst staat beschreven
- Puur esthetische elementen

## Gebruik in Storybook

In Storybook kunt u de decoratieve variant aanpassen door:

- `decorative`: Instellen op `true`
- `alt`: Automatisch leeg gehouden
- `caption`: Kan nog steeds beschrijvende tekst bevatten
- `ariaDescribedBy`: Leeg laten voor decoratieve afbeeldingen

## Toegankelijkheid

- **Lege alt-tekst**: Zorgt ervoor dat screenreaders de afbeelding overslaan
- **Role presentation**: Expliciet markeren als decoratief
- **Geen keyboard focus**: Voorkomt onnodige tab stops
- **Bijschrift**: Kan nog steeds context bieden voor ziende gebruikers
- Volgt
  [WCAG 2.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
  richtlijnen

## Best Practices

- Gebruik spaarzaam - alleen voor echt decoratieve afbeeldingen
- Overweeg of de afbeelding echt geen betekenis heeft
- Als de afbeelding context toevoegt, gebruik dan de standaard variant
- Test met screenreaders om het gedrag te verifiëren

## Licentie

EUPL-1.2
