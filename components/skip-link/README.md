<!-- @license CC0-1.0 -->

Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren
zonder gebruik te maken van een muis of touchscreen.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/skip-link
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/skip-link/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/skip-link/dist/index.css";
```

## Richtlijnen

Skip links zijn belangrijk om te gebruiken op de meeste websites omdat voor
sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te
gebruiken. Met een skip link ga je naar een andere plek op dezelfde pagina,
zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt
aanklikken, zonder tijd te besteden aan de hoofdnavigatie.

## Gebruik skip link

Gebruik voor een skip link de class name `dictu-skip-link` op een `anchor`
element. Voeg de class name `dictu-skip-link--visible-on-focus` toe wanneer de
skip link alleen zichtbaar moet zijn wanneer het element focus heeft.

## Links

### Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks)
