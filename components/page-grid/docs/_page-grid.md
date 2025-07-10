Gebruik in CSS de `.dictu-grid` class name voor de page-grid component.

## Beschrijving

De page-grid component toont een responsief grid systeem dat content kan
weergeven in 1 tot 4 kolommen. Het grid past zich automatisch aan verschillende
schermgroottes aan en biedt een consistente spacing tussen grid items.

### Voorbeeldgebruik

```html
<div class="dictu-grid dictu-grid--columns-3" id="page-grid-example">
  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading">Eerste Item</h2>
      <p class="dictu-paragraph">Inhoud van het eerste grid item.</p>
    </div>
  </article>

  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading">Tweede Item</h2>
      <p class="dictu-paragraph">Inhoud van het tweede grid item.</p>
    </div>
  </article>

  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading">Derde Item</h2>
      <p class="dictu-paragraph">Inhoud van het derde grid item.</p>
    </div>
  </article>
</div>
```

## CSS Klassen

- `.dictu-grid` — hoofdcontainer voor het grid systeem
- `.dictu-grid--columns-1` — één kolom layout
- `.dictu-grid--columns-2` — twee kolommen layout
- `.dictu-grid--columns-3` — drie kolommen layout (standaard)
- `.dictu-grid--columns-4` — vier kolommen layout

## Functies

- **Responsief ontwerp**: Automatische aanpassing aan verschillende
  schermgroottes
- **Flexibele kolommen**: Ondersteuning voor 1 tot 4 kolommen
- **Consistente spacing**: Gestandaardiseerde spacing tussen grid items
- **Semantische HTML**: Gebruik van semantische elementen binnen grid items
- **Toegankelijkheid**: Volledig toegankelijk voor screenreaders

## Responsiviteit

Het grid past zich automatisch aan op kleinere schermen:

- Op desktop: volledige kolom configuratie
- Op mobiel (≤ 48em): geoptimaliseerde spacing en layout

## Gebruik Cases

- **Kaarten grid**: Voor het weergeven van meerdere kaart componenten
- **Afbeeldingen galerij**: Voor het tonen van afbeeldingen in een grid
- **Content blokken**: Voor gestructureerde content weergave
- **Product overzichten**: Voor e-commerce toepassingen

## Toegankelijkheid

Gebruik semantische HTML elementen binnen grid items zoals `<article>`,
`<section>` of `<div>` met de juiste heading structuur. Voeg een `id` attribuut
toe voor navigatie en toegankelijkheid. Zorg ervoor dat alle interactieve
elementen binnen het grid toegankelijk zijn via toetsenbord. Zie
[WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
en
[WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html).
