# WithCardsOnMultipleRows component

De `WithCardsOnMultipleRows` variant van de page-grid component toont zes kaart
componenten in een drie-kolommen grid dat zich uitstrekt over meerdere rijen.
Deze variant demonstreert hoe het grid systeem grote hoeveelheden content kan
organiseren.

## Gebruik

Gebruik deze variant wanneer u veel kaart componenten hebt die georganiseerd
moeten worden in een consistent grid. Perfect voor uitgebreide content
overzichten, productcatalogi, of nieuwssecties.

```html
<div class="dictu-grid dictu-grid--columns-3" id="page-grid-multiple-cards">
  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de eerste kaart in het grid.
      </p>
    </div>
  </article>

  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Tweede Kaart</a>
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de tweede kaart in het grid.
      </p>
    </div>
  </article>

  <!-- Meer kaarten... -->

  <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Zesde Kaart (Accent)</a>
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de zesde kaart in accent stijl.
      </p>
    </div>
  </article>
</div>
```

## Kenmerken

- **Meerdere rijen**: Grid strekt zich automatisch uit over benodigde rijen
- **Zes kaart componenten**: Demonstratie van veel content in georganiseerd grid
- **Minimale kaart variant**: Kaarten zonder afbeeldingen voor snellere loading
- **Accent kaart highlight**: Laatste kaart gebruikt accent styling voor nadruk
- **Consistente spacing**: Gelijke spacing tussen alle grid items

## Grid Gedrag

Het grid gedraagt zich als volgt:

- **3 kolommen op desktop**: Optimale weergave op grote schermen
- **Automatische rij creatie**: Grid voegt rijen toe naar behoefte
- **Gelijke hoogtes**: Alle kaarten in een rij hebben dezelfde hoogte
- **Responsive aanpassing**: Past zich aan op kleinere schermen

## Minimale Kaart Variant

Deze variant gebruikt vereenvoudigde kaarten zonder afbeeldingen:

- Alleen content sectie met heading en paragraph
- Snellere laadtijden door minder afbeeldingen
- Focus op tekstuele content
- Behoud van alle toegankelijkheidsfeatures

## Gebruik Cases

- **Nieuwsoverzichten**: Veel artikelen in georganiseerd grid
- **Product catalogi**: Uitgebreide productlijsten
- **Blog overzichten**: Meerdere blog posts per pagina
- **Service portfolios**: Overzicht van diensten of features
- **Event listings**: Evenementen in chronologische grid

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- `columns` in te stellen op `3`
- `content` te vullen met 6 of meer kaart elementen
- Mix van standaard en accent kaarten te gebruiken
- Variatie in content lengtes te testen
- Responsive gedrag te controleren

## Toegankelijkheid

- **Logische leessequentie**: Kaarten zijn logisch geordend van links naar
  rechts, boven naar beneden
- **Consistent heading niveau**: Alle kaart headings gebruiken hetzelfde niveau
- **Focus management**: Duidelijke focus volgorde door het grid
- **Screen reader support**: Semantische structuur voor assistive technologies
- **Keyboard navigation**: Volledige navigatie zonder muis mogelijk

## Prestaties

- **Efficient rendering**: Grid rendering geoptimaliseerd voor veel elementen
- **Lazy loading**: Implementeer lazy loading voor content buiten viewport
- **Minimal images**: Variant gebruikt minder afbeeldingen voor snellere loading
- **CSS Grid optimization**: Native CSS Grid voor beste prestaties

## Layout Variaties

U kunt deze variant aanpassen voor:

- **Meer of minder kaarten**: Eenvoudig kaarten toevoegen/verwijderen
- **Verschillende kolomaantallen**: Wijzig naar 2 of 4 kolommen indien gewenst
- **Mixed content types**: Combineer verschillende soorten kaarten
- **Dynamic content**: Kaarten die dynamisch worden toegevoegd

## Responsive Strategie

- **Desktop (>768px)**: 3 kolommen grid
- **Tablet (768px-480px)**: 2 kolommen grid
- **Mobile (<480px)**: 1 kolom layout
- **Spacing aanpassingen**: Kleinere gaps op mobiele apparaten

## Browser Ondersteuning

- **Modern browsers**: Volledige CSS Grid ondersteuning
- **Legacy fallbacks**: Graceful degradation naar flexbox indien nodig
- **Progressive enhancement**: Basis functionaliteit werkt overal
