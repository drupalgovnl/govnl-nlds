<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

```console
npm install --save-dev @dictu/embed
```

Je kunt de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@dictu/embed/dist/index.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```javascript
import "@dictu/embed/dist/index.css";
```

## Richtlijnen

Gebruik de Embed component voor het presenteren van inhoud van een externe bron.
Wanneer je zelf controle hebt over de inhoud, gebruik dan het Embed component
niet.

### Toegankelijkheid

Zorg bij het gebruik van de Embed component voor een beschrijvende titel die
duidelijk de embedded content beschrijft, zodat gebruikers van een screenreader
goed kunnen beoordelen wat de inhoud is. Zonder een duidelijke titel moeten
gebruikers met een screen reader eerst de `iframe` zelf in om de inhoud te
kunnen bepalen. Dit is verwarrend en kost meer tijd.

## Waarschuwing

Elke iframe is een compleet nieuwe document omgeving. Dit houdt in dat elke
Embed component voor een groter gebruik van geheugen en andere resources zorgt.
Hoewel het theoretisch mogelijk is om zo vaak als je wilt gebruik te maken van
de Embed component, is het belangrijk om uit te kijken voor performance
problemen.
