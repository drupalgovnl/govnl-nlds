<!-- @license CC0-1.0 -->

De navigation-bar component toont de navigatiebalk van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/design-tokens
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/design-tokens/dist/navigation-bar.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/design-tokens/dist/navigation-bar.css";
```

## Richtlijnen

- Gebruik altijd de `.dictu-navigation-bar` class voor de navigatiebalk.
- Gebruik semantische HTML: `<nav aria-label="Hoofdnavigatie">` met een `<ul>` en `<li>` voor de navigatie-items.
- Zorg voor goede focus-states en toetsenbordnavigatie (tab, enter, space).
- Gebruik de bijbehorende CSS-variabelen voor consistente styling.

### Voorbeeldgebruik

```html
<nav class="dictu-navigation-bar" aria-label="Hoofdnavigatie" role="navigation">
  <ul class="dictu-navigation-bar__list" role="menubar">
    <li class="dictu-navigation-bar__item" role="none">
      <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
        <span class="dictu-navigation-bar__title">Home</span>
      </a>
    </li>
    <li class="dictu-navigation-bar__item" role="none">
      <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
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

## Design Tokens / CSS-variabelen
De component gebruikt design tokens voor kleuren, spacing, etc. Zie `proprietary/design-tokens/src/components/navigation-bar.tokens.json` voor een overzicht van beschikbare tokens. Voorbeeld:

```css
.dictu-navigation-bar {
  --govnl-nav-bar-background-color: #fff;
  --govnl-nav-bar-color: #123456;
  /* ... */
}
```

## Toegankelijkheid
- Gebruik altijd een `<nav>` met `aria-label` en `role="navigation"`.
- Gebruik `role="menubar"` op de `<ul>`, `role="none"` op `<li>`, en `role="menuitem"` op de links.
- Gebruik `tabindex="0"` op de links voor volledige toetsenbordnavigatie.
- Zorg dat links goed bereikbaar zijn met het toetsenbord.
- Zorg voor voldoende contrast en zichtbare focus.
- Zie [WCAG 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) en [WCAG 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

# NavigationItem component

De `NavigationItem` component is een individueel item voor gebruik binnen de navigatiebalk van het Dictu Design Systeem. Deze component ondersteunt verschillende iconen, waaronder een Home-icoon, en is volledig toegankelijk volgens WCAG 2.2-richtlijnen.

## Gebruik

Gebruik deze component binnen een `<ul>` in de navigation-bar:

```html
<li class="dictu-navigation-bar__item" role="none">
  <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
    <span class="dictu-icon" aria-hidden="true">
      <!-- SVG voor het gewenste icoon, bijvoorbeeld Home -->
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12L12 4l9 8v8a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-4h-4v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" fill="currentColor"/></svg>
    </span>
    <span class="dictu-navigation-bar__icon"></span>
    Titel van het item
  </a>
</li>
```

## Beschikbare iconen
- home
- settings
- info
- contact

Het juiste icoon wordt automatisch getoond op basis van de `icon`-prop.

## Toegankelijkheid
- Gebruik altijd `role="none"` op het `<li>`-element.
- Gebruik `role="menuitem"` en `tabindex="0"` op de link.
- Iconen zijn voorzien van `aria-hidden="true"` zodat ze niet door screenreaders worden voorgelezen.

## Voorbeeld in Storybook
De Storybook story laat zien hoe je het Home-icoon gebruikt:

```js
export const NavigationItem = {
  args: {
    icon: "home",
    title: "Dienst ICT Uitvoering",
    link: "https://www.dictu.nl",
  },
};
```

## Styling
De styling wordt verzorgd door de navigation-bar CSS. Gebruik altijd de juiste klassen:
- `.dictu-navigation-bar__item`
- `.dictu-navigation-bar__link`
- `.dictu-icon`

## Licentie
EUPL-1.2

