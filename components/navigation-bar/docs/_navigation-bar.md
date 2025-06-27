Gebruik in CSS de `.dictu-navigation-bar` class name voor de navigation-bar
component.

## Beschrijving

De navigation-bar component toont een horizontale navigatiebalk met links,
eventueel met iconen en een zoekveld.

### Voorbeeldgebruik

```html
<nav class="dictu-navigation-bar" aria-label="Hoofdnavigatie" role="navigation">
  <ul class="dictu-navigation-bar__list" role="menubar">
    <li class="dictu-navigation-bar__item" role="none">
      <a
        href="#"
        class="dictu-navigation-bar__link"
        role="menuitem"
        tabindex="0"
      >
        <span class="dictu-navigation-bar__title">Home</span>
      </a>
    </li>
    <li class="dictu-navigation-bar__item" role="none">
      <a
        href="#"
        class="dictu-navigation-bar__link"
        role="menuitem"
        tabindex="0"
      >
        <span class="dictu-navigation-bar__title">Over</span>
      </a>
    </li>
  </ul>
</nav>
```

## CSS Klassen

- `.dictu-navigation-bar` — container voor de navigatiebalk
- `.dictu-navigation-bar__list` — lijst van navigatie-items
- `.dictu-navigation-bar__item` — individueel navigatie-item
- `.dictu-navigation-bar__link` — link in de navigatiebalk
- `.dictu-navigation-bar__icon` — optioneel icoon bij een item
- `.dictu-navigation-bar__icon--active` — actieve icoonstijl
- `.dictu-navigation-bar__search` — zoekveld in de navigatiebalk

## Toegankelijkheid

Gebruik altijd een `<nav>` met `aria-label` en `role="navigation"`. Gebruik
`role="menubar"` op de `<ul>`, `role="none"` op `<li>`, en `role="menuitem"` op
de links. Gebruik `tabindex="0"` op de links voor volledige
toetsenbordnavigatie. Zie
[WCAG 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
en
[WCAG 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).
