<!-- @license CC0-1.0 -->

De Rich Text component voegt standaard styling toe aan platte HTML waar je geen
controle over hebt, zoals content uit een CMS.

De volgende HTML elementen worden voorzien van standaard opmaak:

- Paragrafen
- Links
- Kopteksten

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/rich-text
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/rich-text/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/rich-text/dist/index.css";
```

Dit component maakt gebruik van de design tokens van `@dictu/paragraph`,
`@dictu/link` en `@dictu/heading`. Zorg ervoor dat je de design tokens van deze
componenten ook hebt ingeladen als je dit component gebruikt.

## Richtlijnen

- Zorg ervoor dat de content van de component alleen `p`, `a`, en `h1` t/m `h6`
  elementen bevat.
- Zorg ervoor dat de semantische structuur van de tekst behouden blijft.
- Voeg geen inline stijlen toe; vertrouw op de meegeleverde CSS voor consistente
  opmaak.

## Links

- [Rich Text Content](https://www.nldesignsystem.nl/rich-text-content/)
