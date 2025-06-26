Gebruik in CSS de `.dictu-page-container` class name voor de page-container
component.

## Beschrijving

De page-container component biedt een basis container-element met consistente
maximale breedte, centrering en padding instellingen. De component gebruikt
semantische HTML en volgt toegankelijkheidsrichtlijnen voor een gestructureerde
pagina-indeling.

### Voorbeeldgebruik

```html
<div class="dictu-page-container">
  <h1 class="dictu-heading dictu-heading--level-1">Pagina titel</h1>
  <p class="dictu-paragraph">
    Dit is de inhoud van de pagina met consistente styling en spacing.
  </p>
</div>
```

### Als hoofdcontainer

```html
<main class="dictu-page-container">
  <section class="dictu-page-section">
    <h2 class="dictu-heading dictu-heading--level-2">Sectie titel</h2>
    <p class="dictu-paragraph">
      Deze container zorgt voor consistente breedte en centrering.
    </p>
  </section>
</main>
```

## CSS Klassen

- `.dictu-page-container` — hoofdcontainer voor de pagina content

## Functies

- **Maximale breedte**: Gecontroleerde maximale breedte via design tokens
  (standaard 1280px)
- **Centrering**: Automatische centrering van content met `margin: 0 auto`
- **Flexibele breedte**: 100% breedte die zich aanpast aan het scherm
- **Padding**: Horizontale padding voor consistente uitlijning via design tokens
- **Reset margins**: Alle margins worden gereset voor predictable styling
- **Responsief**: Flexibele breedte die zich aanpast aan verschillende
  schermgroottes

## Design Tokens

De component gebruikt de volgende design tokens:

- `--govnl-container-max-inline-width`: Maximale inline breedte
- `--govnl-container-padding-inline`: Horizontale padding
- `--govnl-container-max-width`: Maximale breedte (fallback: 1280px)

## Toegankelijkheid

Gebruik semantisch juiste HTML elementen zoals `<div>`, `<main>`, `<article>` of
`<section>` afhankelijk van de context. Voeg indien nodig een `id` attribuut toe
voor navigatie en toegankelijkheid. Gebruik logische heading niveaus binnen de
container.
