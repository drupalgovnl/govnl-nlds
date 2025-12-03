<!-- @license CC0-1.0 -->

Een verwijzing om een een externe bron of bestand te openen of te navigeren
binnen dezelfde pagina of website.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/link
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/link/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/link/dist/index.css";
```

## Link gebruiken

Gebruik in CSS de `.dictu-link` class name.

## Link om een Image of andere inline-box componenten

Om te zorgen dat de states van een Link component goed werken als een link om
een inline-box element zoals een Image is gezet gebruik je de `dictu-link` class
name in combinatie met `dictu-link--inline-box` class name.

## Links

- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
