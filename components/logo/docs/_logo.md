Gebruik in CSS de `.dictu-logo` class name voor het logo component.

## Beschrijving

Het logo component toont het logo van Dictu Design System, bestaande uit een
afbeelding, een titel en een subtitel.

### Voorbeeldgebruik

```html
<div class="dictu-logo">
  <div class="dictu-logo__image">
    <plaats_hier_een_svg_code></plaats_hier_een_svg_code>
  </div>
  <div class="dictu-logo__text">
    <div class="dictu-logo__title">Titel</div>
    <div class="dictu-logo__subtitle">Subtitel</div>
  </div>
</div>
```

## CSS Klassen

- `.dictu-logo` — container voor het logo
- `.dictu-logo__image` — bevat de logo-afbeelding (SVG of img)
- `.dictu-logo__text` - Tekst wrapper van het logo
- `.dictu-logo__title` — titel van het logo
- `.dictu-logo__subtitle` — subtitel van het logo

## Toepassing

Gebruik deze klassen om het logo correct te stylen volgens de huisstijl. De
component maakt gebruik van CSS-variabelen die gedefinieerd zijn in de design
tokens.
