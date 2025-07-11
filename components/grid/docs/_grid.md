Gebruik in CSS de `.dictu-grid` class name voor de grid component.

## Beschrijving

De grid component toont een responsief grid systeem dat content kan weergeven in
1 tot 4 kolommen. Het grid past zich automatisch aan verschillende
schermgroottes aan en biedt een consistente spacing tussen grid items. De
component ondersteunt ook autoflow functionaliteit voor automatische plaatsing
van items.

### Standaard Gebruik

De standaard variant toont een eenvoudig drie-kolommen grid met placeholder
content. Deze variant demonstreert de basis functionaliteit van het grid
systeem.

```html
<div class="dictu-grid dictu-grid--columns-3" id="page-grid-1">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## CSS Klassen

- `.dictu-grid` — hoofdcontainer voor het grid systeem
- `.dictu-grid--columns-1` — één kolom layout
- `.dictu-grid--columns-2` — twee kolommen layout
- `.dictu-grid--columns-3` — drie kolommen layout (standaard)
- `.dictu-grid--columns-4` — vier kolommen layout
- `.dictu-grid--autoflow` — automatische plaatsing van items in kolommen

## Functies

- **Responsief ontwerp**: Automatische aanpassing aan verschillende
  schermgroottes
- **Flexibele kolommen**: Ondersteuning voor 1 tot 4 kolommen
- **Autoflow ondersteuning**: Automatische plaatsing van items wanneer enabled
- **Consistente spacing**: Gestandaardiseerde spacing tussen grid items
- **Semantische HTML**: Gebruik van semantische elementen binnen grid items
- **Toegankelijkheid**: Volledig toegankelijk voor screenreaders

## Responsiviteit

Het grid past zich automatisch aan op kleinere schermen:

- Op desktop: volledige kolom configuratie
- Op mobiel (≤ 48em): geoptimaliseerde spacing en layout

## Gebruik Cases

- **Basis content grid**: Voor eenvoudige content organisatie
- **Kaarten grid**: Voor het weergeven van meerdere kaart componenten
- **Afbeeldingen galerij**: Voor het tonen van afbeeldingen in een grid layout
- **Content blokken**: Voor gestructureerde content weergave
- **Product overzichten**: Voor e-commerce toepassingen

## Parameters

De grid component accepteert de volgende parameters:

- **`autoflow`** (boolean): Geeft aan of het grid automatische plaatsing moet
  gebruiken. Als dit waar is, worden items in de volgende beschikbare ruimte
  geplaatst.
- **`content`** (string|HTMLElement): De HTML inhoud van het grid
- **`columns`** (1|2|3|4): Aantal kolommen in het grid. Standaard is 3.
- **`id`** (string): ID voor navigatie en toegankelijkheid

## Toegankelijkheid

Gebruik semantische HTML elementen binnen grid items zoals `<article>`,
`<section>` of `<div>` met de juiste heading structuur. Voeg een `id` attribuut
toe voor navigatie en toegankelijkheid. Zorg ervoor dat alle interactieve
elementen binnen het grid toegankelijk zijn via toetsenbord. Zie
[WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
en
[WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html).
