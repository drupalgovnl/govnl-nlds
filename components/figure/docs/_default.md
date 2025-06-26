# Standaard Figure component

De standaard `Figure` component combineert een afbeelding met een bijschrift in
een semantische HTML structuur. Deze variant is ideaal voor informatieve
afbeeldingen die context of uitleg nodig hebben.

## Gebruik

Gebruik deze component wanneer u een afbeelding wilt tonen met een beschrijvend
bijschrift dat extra informatie of context biedt.

```html
<figure class="dictu-figure">
  <img
    class="dictu-image dictu-image__aspect-ratio-square"
    src="/example-image.jpg"
    alt="Beschrijving van de afbeelding"
    width="640"
    height="640"
    loading="lazy"
  />
  <figcaption class="dictu-figure__caption">
    Dit is een voorbeeld van een bijschrift dat extra context biedt over de
    afbeelding.
  </figcaption>
</figure>
```

## Kenmerken

- Semantische HTML met `<figure>` en `<figcaption>`
- Automatische koppeling tussen afbeelding en bijschrift
- Flexibele beeldverhoudingen
- Volledig responsief ontwerp
- Toegankelijk voor screenreaders

## Beeldverhoudingen

De standaard variant ondersteunt alle beschikbare aspect ratio's:

- **Square**: Voor vierkante afbeeldingen (1:1)
- **Landscape**: Voor liggende afbeeldingen (4:3)
- **Portrait**: Voor staande afbeeldingen (3:4)
- **Video**: Voor widescreen content (16:9)

## Gebruik in Storybook

In Storybook kunt u de standaard variant aanpassen door:

- `src`: Pad naar de gewenste afbeelding
- `alt`: Beschrijvende alternatieve tekst
- `caption`: Tekst voor het bijschrift
- `aspectRatio`: Gewenste beeldverhouding
- `width/height`: Afmetingen van de afbeelding

## Toegankelijkheid

- De `<figure>` container biedt semantische betekenis
- Het `<figcaption>` element wordt automatisch gekoppeld aan de afbeelding
- Screenreaders lezen eerst de alt-tekst, dan het bijschrift
- Gebruik beschrijvende alt-tekst die de inhoud van de afbeelding weergeeft
- Het bijschrift kan aanvullende context of uitleg bevatten

## Best Practices

- Houd alt-tekst beknopt maar beschrijvend
- Gebruik het bijschrift voor context die niet in de alt-tekst staat
- Specificeer altijd width en height voor betere prestaties
- Gebruik lazy loading voor afbeeldingen buiten de viewport

## Licentie

EUPL-1.2
