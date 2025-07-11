/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */const D=`Gebruik in CSS de \`.dictu-grid\` class name voor de grid component.

## Beschrijving

De grid component toont een responsief grid systeem dat content kan weergeven in
1 tot 4 kolommen. Het grid past zich automatisch aan verschillende
schermgroottes aan en biedt een consistente spacing tussen grid items. De
component ondersteunt ook autoflow functionaliteit voor automatische plaatsing
van items.

### Standaard Gebruik

De standaard variant toont een eenvoudig drie-kolommen grid met placeholder
content. Deze variant demonstreert de basis functionaliteit van het grid
systeem.

\`\`\`html
<div class="dictu-grid dictu-grid--columns-3" id="page-grid-1">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## CSS Klassen

- \`.dictu-grid\` — hoofdcontainer voor het grid systeem
- \`.dictu-grid--columns-1\` — één kolom layout
- \`.dictu-grid--columns-2\` — twee kolommen layout
- \`.dictu-grid--columns-3\` — drie kolommen layout (standaard)
- \`.dictu-grid--columns-4\` — vier kolommen layout
- \`.dictu-grid--autoflow\` — automatische plaatsing van items in kolommen

## Functies

- **Responsief ontwerp**: Automatische aanpassing aan verschillende
  schermgroottes
- **Flexibele kolommen**: Ondersteuning voor 1 tot 4 kolommen
- **Autoflow ondersteuning**: Automatische plaatsing van items wanneer enabled
- **Consistente spacing**: Gestandaardiseerde spacing tussen grid items
- **Semantische HTML**: Gebruik van semantische elementen binnen grid items
- **Toegankelijkheid**: Volledig toegankelijk voor screenreaders

## Responsiviteit

Het grid past zich automatisch aan op kleinere schermen:

- Op desktop: volledige kolom configuratie
- Op mobiel (≤ 48em): geoptimaliseerde spacing en layout

## Gebruik Cases

- **Basis content grid**: Voor eenvoudige content organisatie
- **Kaarten grid**: Voor het weergeven van meerdere kaart componenten
- **Afbeeldingen galerij**: Voor het tonen van afbeeldingen in een grid layout
- **Content blokken**: Voor gestructureerde content weergave
- **Product overzichten**: Voor e-commerce toepassingen

## Parameters

De grid component accepteert de volgende parameters:

- **\`autoflow\`** (boolean): Geeft aan of het grid automatische plaatsing moet
  gebruiken. Als dit waar is, worden items in de volgende beschikbare ruimte
  geplaatst.
- **\`content\`** (string|HTMLElement): De HTML inhoud van het grid
- **\`columns\`** (1|2|3|4): Aantal kolommen in het grid. Standaard is 3.
- **\`id\`** (string): ID voor navigatie en toegankelijkheid

## Toegankelijkheid

Gebruik semantische HTML elementen binnen grid items zoals \`<article>\`,
\`<section>\` of \`<div>\` met de juiste heading structuur. Voeg een \`id\` attribuut
toe voor navigatie en toegankelijkheid. Zorg ervoor dat alle interactieve
elementen binnen het grid toegankelijk zijn via toetsenbord. Zie
[WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
en
[WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html).
`,x=`# WithImages variant

De \`WithImages\` variant van de grid component toont afbeeldingen in een
twee-kolommen grid layout. Deze variant demonstreert hoe het grid systeem
gebruikt kan worden voor visuele content met verschillende aspect ratio's.

## Gebruik

Gebruik deze variant wanneer u afbeeldingen in een gestructureerd grid wilt
weergeven. De component ondersteunt verschillende aspect ratio's en is volledig
responsief.

\`\`\`html
<div class="dictu-grid dictu-grid--columns-2" id="page-grid-images">
  <img
    class="dictu-image dictu-aspect-ratio-landscape"
    src="/example-image.jpg"
    alt="Eerste voorbeeld afbeelding in landscape formaat"
    loading="lazy"
    width="640"
    height="360"
  />

  <img
    class="dictu-image dictu-aspect-ratio-landscape"
    src="/example-image.jpg"
    alt="Tweede voorbeeld afbeelding in landscape formaat"
    loading="lazy"
    width="640"
    height="640"
  />
</div>
\`\`\`

## Kenmerken

- **Twee kolommen layout**: Optimaal voor afbeeldingen vergelijking en weergave
- **Mixed aspect ratios**: Demonstratie van verschillende beeldverhoudingen in
  hetzelfde grid
- **Lazy loading**: Prestatie-optimalisatie met \`loading="lazy"\`
- **Toegankelijke alt-tekst**: Betekenisvolle beschrijvingen voor screenreaders
- **Responsive afbeeldingen**: Automatische aanpassing aan schermgrootte

## Aspect Ratio Klassen

- \`.dictu-aspect-ratio-landscape\` — 16:9 landschap formaat
- \`.dictu-aspect-ratio-portrait\` — 9:16 portret formaat
- \`.dictu-aspect-ratio-square\` — 1:1 vierkant formaat

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- \`columns\` in te stellen op \`2\`
- \`content\` te vullen met \`<img>\` elementen
- Juiste \`dictu-image\` en aspect ratio klassen toe te voegen
- \`loading="lazy"\` en width/height attributen in te stellen

## Toegankelijkheid

- Gebruik altijd betekenisvolle \`alt\` attributen voor afbeeldingen
- Vermijd decoratieve afbeeldingen zonder alt-tekst (gebruik \`alt=""\`)
- Zorg voor voldoende contrast bij tekst over afbeeldingen
- Test de layout met verschillende afbeeldingsgroottes
- De component voldoet aan WCAG 2.2 AA-standaarden

## Prestaties

- Gebruik \`loading="lazy"\` voor afbeeldingen buiten de viewport
- Specificeer \`width\` en \`height\` attributen om layout shifts te voorkomen
- Optimaliseer afbeeldingsformaten (WebP, AVIF waar mogelijk)
- Gebruik responsive afbeeldingen met \`srcset\` voor verschillende schermgroottes

## Styling

De styling wordt verzorgd door:

- \`.dictu-grid\` en \`.dictu-grid--columns-2\` voor grid layout
- \`.dictu-image\` voor afbeelding styling
- \`.dictu-aspect-ratio-*\` klassen voor beeldverhoudingen
- Utility klassen voor spacing en responsive gedrag
`,S=`# WithCards variant

De \`WithCards\` variant van de grid component toont kaart componenten in een
drie-kolommen grid layout. Deze variant demonstreert hoe verschillende card
varianten (standaard en accent) samen kunnen worden gebruikt in een
gestructureerd grid met volledige kaart content inclusief afbeeldingen.

## Gebruik

Gebruik deze variant wanneer u rijke kaart componenten wilt weergeven in een
overzichtelijk grid. Perfect voor nieuwsartikelen, productoverzichten, of andere
content die visueel aantrekkelijk gepresenteerd moet worden.

\`\`\`html
<div class="dictu-grid dictu-grid--columns-3">
  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Eerste voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de eerste kaart in het grid. Een korte beschrijving
        die de gebruiker interesseert.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 8 juli 2025</small>
  </article>

  <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Tweede voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link"
          >Tweede Kaart (Accent)</a
        >
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de tweede kaart in accent stijl. Deze kaart valt
        meer op door de accent styling.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
  </article>

  <article class="dictu-card dictu-focus-ring" tabindex="0">
    <div class="dictu-card__image-container">
      <img
        class="dictu-image dictu-card__image"
        src="/example-image.jpg"
        alt="Derde voorbeeld afbeelding"
      />
    </div>
    <div class="dictu-card__content">
      <h2 class="dictu-card__heading">
        <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
      </h2>
      <p class="dictu-card__paragraph">
        Dit is de inhoud van de derde kaart in het grid. Een mooie afsluiting
        van de drie kaarten.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
  </article>
</div>
\`\`\`

## Kenmerken

- **Drie kolommen layout**: Optimaal voor content overzichten
- **Mixed card varianten**: Combinatie van standaard en accent kaarten
- **Volledige kaart content**: Afbeelding, titel, beschrijvende tekst en
  metadata
- **Interactieve elementen**: Focus states en klikbare kaarten met tabindex
- **Semantische HTML**: Gebruik van \`<article>\` elementen voor elke kaart

## Card Varianten

- **Standaard kaart**: \`.dictu-card\` - neutrale styling
- **Accent kaart**: \`.dictu-card--accent\` - opvallende styling voor belangrijke
  content

## Kaart Componenten

Elke kaart bestaat uit:

- **Image container**: \`.dictu-card__image-container\` met afbeelding
- **Content sectie**: \`.dictu-card__content\` met titel en tekst
- **Heading**: \`.dictu-card__heading\` met klikbare link
- **Paragraph**: \`.dictu-card__paragraph\` met beschrijvende tekst
- **Metadata**: \`.dictu-card__metadata\` met aanvullende informatie

## Gebruik in Storybook

In Storybook kunt u deze variant aanmaken door:

- \`columns\` in te stellen op \`3\`
- \`content\` te vullen met complete \`<article class="dictu-card">\` elementen
- Mix van standaard en accent kaarten te gebruiken
- Betekenisvolle content en metadata toe te voegen

## Toegankelijkheid

- Gebruik semantische \`<article>\` elementen voor elke kaart
- Voeg \`tabindex="0"\` toe voor toetsenbordnavigatie
- Gebruik \`.dictu-focus-ring\` voor zichtbare focus states
- Zorg voor betekenisvolle link teksten in headings
- Test de layout met verschillende content lengtes
- Voeg \`aria-label\` toe waar nodig voor context

## Interactiviteit

- **Focus management**: Duidelijke focus indicators
- **Klikbare kaarten**: Hele kaart wordt klikbaar via heading link
- **Hover states**: Visuele feedback bij mouse hover
- **Keyboard navigation**: Volledige toetsenbord ondersteuning

## Responsive Gedrag

Op kleinere schermen:

- Grid past zich aan naar minder kolommen
- Kaarten behouden hun proporties
- Spacing wordt geoptimaliseerd voor mobiele weergave
- Touch targets blijven toegankelijk

## Styling Dependencies

De styling vereist deze componenten:

- Page-grid CSS (\`.dictu-grid\`, \`.dictu-grid--columns-3\`)
- Card CSS (alle \`.dictu-card\` varianten)
- Image CSS (\`.dictu-image\`)
- Heading CSS (\`.dictu-heading\`)
- Link CSS (\`.dictu-link\`)
- Paragraph CSS (\`.dictu-paragraph\`)
- Utilities CSS (focus ring, spacing)
`,G=`# WithCardsOnMultipleRows variant

De \`WithCardsOnMultipleRows\` variant van de grid component toont zes kaart
componenten in een drie-kolommen grid dat zich uitstrekt over meerdere rijen.
Deze variant demonstreert hoe het grid systeem grote hoeveelheden content kan
organiseren met vereenvoudigde kaarten zonder afbeeldingen.

## Gebruik

Gebruik deze variant wanneer u veel kaart componenten hebt die georganiseerd
moeten worden in een consistent grid. Perfect voor uitgebreide content
overzichten, productcatalogi, of nieuwssecties waar de focus ligt op tekstuele
content.

\`\`\`html
<div class="dictu-grid dictu-grid--columns-3">
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

  <!-- Vier meer kaarten... -->

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
\`\`\`

## Kenmerken

- **Meerdere rijen**: Grid strekt zich automatisch uit over benodigde rijen
- **Zes kaart componenten**: Demonstratie van veel content in georganiseerd grid
- **Vereenvoudigde kaarten**: Kaarten zonder afbeeldingen voor snellere loading
  en focus op tekstuele content
- **Accent kaart highlight**: Laatste kaart gebruikt accent styling voor nadruk
- **Consistente spacing**: Gelijke spacing tussen alle grid items

## Grid Gedrag

Het grid gedraagt zich als volgt:

- **3 kolommen op desktop**: Optimale weergave op grote schermen
- **Automatische rij creatie**: Grid voegt rijen toe naar behoefte
- **Gelijke hoogtes**: Alle kaarten in een rij hebben dezelfde hoogte
- **Responsive aanpassing**: Past zich aan op kleinere schermen

## Vereenvoudigde Kaart Variant

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

- \`columns\` in te stellen op \`3\`
- \`content\` te vullen met 6 of meer kaart elementen
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
`,C=`<!-- @license CC0-1.0 -->

De grid component biedt een flexibel en responsief grid systeem voor het
organiseren van content in kolommen van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/grid
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/grid/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/grid/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-grid\` class voor de grid container.
- Specificeer het aantal kolommen met \`.dictu-grid--columns-{1-4}\` modifier
  klassen.
- Gebruik semantische HTML binnen grid items: \`<article>\`, \`<section>\`, etc.
- Voeg een \`id\` attribuut toe voor navigatie en toegankelijkheid.
- Zorg voor consistente content binnen grid items.
- Test de layout op verschillende schermgroottes.

### Voorbeeldgebruik

\`\`\`html
<div class="dictu-grid dictu-grid--columns-3" id="content-grid" lang="nl">
  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-1" class="dictu-link dictu-card__link"
          >Eerste Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Een korte beschrijving van het eerste artikel in het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 11 juli 2025</small>
  </article>

  <article class="dictu-card dictu-card--accent">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-2" class="dictu-link dictu-card__link"
          >Belangrijk Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Een highlighted artikel met accent styling voor extra aandacht.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
  </article>

  <article class="dictu-card">
    <div class="dictu-card__content">
      <h2 class="dictu-heading dictu-card__heading">
        <a href="/artikel-3" class="dictu-link dictu-card__link"
          >Derde Artikel</a
        >
      </h2>
      <p class="dictu-paragraph dictu-card__paragraph">
        Het derde artikel completeert de eerste rij van het grid.
      </p>
    </div>
    <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
  </article>
</div>
\`\`\`

## CSS Klassen

- \`.dictu-grid\` — hoofdcontainer voor het grid systeem
- \`.dictu-grid--columns-1\` — één kolom layout
- \`.dictu-grid--columns-2\` — twee kolommen layout
- \`.dictu-grid--columns-3\` — drie kolommen layout (standaard)
- \`.dictu-grid--columns-4\` — vier kolommen layout
- \`.dictu-grid--autoflow\` — automatische plaatsing van items in kolommen

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor layout, spacing, etc. Zie
\`proprietary/design-tokens/src/components/grid.tokens.json\` voor een overzicht
van beschikbare tokens. Voorbeeld:

\`\`\`css
.dictu-grid {
  --govnl-grid-gap-row-max: 2rem;
  --govnl-grid-gap-column-max: 2rem;
  --govnl-grid-gap-row-min: 1rem;
  --govnl-grid-gap-column-min: 1rem;
  --govnl-grid-template-rows-auto: auto;
  --govnl-grid-template-columns-col-1: 1fr;
  --govnl-grid-template-columns-col-2: repeat(2, 1fr);
  --govnl-grid-template-columns-col-3: repeat(3, 1fr);
  --govnl-grid-template-columns-col-4: repeat(4, 1fr);
}
\`\`\`

## Responsiviteit

Het grid systeem past zich automatisch aan verschillende schermgroottes aan:

- **Desktop (>768px)**: Volledige kolom configuratie
- **Tablet (768px-480px)**: Gereduceerd aantal kolommen waar nodig
- **Mobile (<480px)**: Meestal single-column layout
- **Spacing**: Kleinere gaps op mobiele apparaten voor optimaal ruimtegebruik

## Toegankelijkheid

- Gebruik semantische HTML elementen (\`<article>\`, \`<section>\`) voor grid items.
- Voeg een \`lang\` attribuut toe voor de juiste taal.
- Gebruik logische heading niveaus die aansluiten bij de paginastructuur.
- Zorg voor voldoende kleurcontrast in grid items.
- Test toetsenbordnavigatie door alle interactieve elementen.
- Gebruik \`aria-label\` voor context waar nodig.
- Zie
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html),
  [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
  en
  [WCAG 1.4.3 Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

# Varianten

## Default

De basis grid component zonder content, toont drie lege placeholder items.

\`\`\`js
export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};
\`\`\`

## WithImages

Een twee-kolommen grid met afbeeldingen die verschillende aspect ratio's
demonstreert.

\`\`\`js
export const WithImages = {
  args: {
    content: \`
      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Eerste voorbeeld afbeelding"
           loading="lazy"
           width="640"
           height="360" />
      <!-- Meer afbeeldingen... -->
    \`,
    columns: 2,
    id: "page-grid-images",
  },
};
\`\`\`

## WithCards

Een drie-kolommen grid met volledige kaart componenten inclusief afbeeldingen,
tekst en metadata.

\`\`\`js
export const WithCards = {
  args: {
    content: \`
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <!-- Volledige kaart content -->
      </article>
      <!-- Meer kaarten... -->
    \`,
    columns: 3,
  },
};
\`\`\`

## WithCardsOnMultipleRows

Een uitgebreid grid met zes kaart componenten verspreid over meerdere rijen,
demonstreert schaalbaarheid.

\`\`\`js
export const WithCardsOnMultipleRows = {
  args: {
    content: \`
      <!-- 6 kaart componenten -->
    \`,
    columns: 3,
  },
};
\`\`\`

## Componenten

De page-grid component kan elk type content bevatten, maar werkt uitstekend
samen met:

- **Card**: Voor gestructureerde content blokken
- **Image**: Voor visuele galerijen
- **Paragraph**: Voor tekst content
- **Heading**: Voor sectie titels
- **Link**: Voor navigatie elementen

## Styling

De styling wordt verzorgd door de page-grid CSS en gebruikt:

- **CSS Grid**: Voor moderne, flexibele layouts
- **Design tokens**: Voor consistente spacing en responsive gedrag
- **Modifier klassen**: Voor verschillende kolom configuraties
- **Media queries**: Voor responsive aanpassingen

## Layout Patronen

### Content Cards Grid

\`\`\`html
<div class="dictu-grid dictu-grid--columns-3">
  <article class="dictu-card">...</article>
  <article class="dictu-card dictu-card--accent">...</article>
  <article class="dictu-card">...</article>
</div>
\`\`\`

### Image Gallery

\`\`\`html
<div class="dictu-grid dictu-grid--columns-2">
  <img class="dictu-image dictu-aspect-ratio-landscape" />
  <img class="dictu-image dictu-aspect-ratio-landscape" />
</div>
\`\`\`

### Mixed Content

\`\`\`html
<div class="dictu-grid dictu-grid--columns-4">
  <section>...</section>
  <aside>...</aside>
  <article>...</article>
  <div>...</div>
</div>
\`\`\`

## Browser Ondersteuning

- **Modern browsers**: Volledige CSS Grid ondersteuning
- **IE 11**: Graceful degradation met fallback layouts
- **Progressive enhancement**: Basis functionaliteit werkt overal

## Prestaties

- **Efficient rendering**: Native CSS Grid voor optimale prestaties
- **Lazy loading**: Ondersteunt lazy loading van content
- **Minimal CSS**: Alleen benodigde styles worden geladen
- **Responsive images**: Werkt samen met responsive image technieken

## Licentie

EUPL-1.2
`,W={args:{autoflow:!1,content:`
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    `,columns:3,id:"page-grid-1"},argTypes:{autoflow:{control:"boolean",description:"Geeft aan of het grid automatische plaatsing moet gebruiken. Als dit waar is, worden items in de volgende beschikbare ruimte geplaatst."},content:{control:"text",description:"De HTML inhoud van het grid"},columns:{control:"select",options:[1,2,3,4],description:"Aantal kolommen in het grid. Standaard is 3."},id:{control:"text",description:"ID voor navigatie en toegankelijkheid"}},parameters:{docs:{description:{component:C}}},render:({autoflow:b,content:n,columns:f,id:w})=>{const e=document.createElement("div");if(e.classList.add("dictu-grid",`dictu-grid--columns-${f}`),b&&e.classList.add("dictu-grid--autoflow"),e.setAttribute("id",w),n){if(typeof n=="string"){const j=new DOMParser().parseFromString(n,"text/html"),d=document.createDocumentFragment();Array.from(j.body.childNodes).forEach(y=>{d.appendChild(y.cloneNode(!0))}),e.appendChild(d)}n instanceof HTMLElement&&e.appendChild(n)}return e},tags:["autodocs"],title:"Componenten/Grid"},a={args:{},parameters:{docs:{description:{story:D}}}},i={args:{content:`
      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Eerste voorbeeld afbeelding in landscape formaat"
           loading="lazy"
           width="640"
           height="360" />

      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Tweede voorbeeld afbeelding in landscape formaat"
           loading="lazy"
           width="640"
           height="640" />
    `,columns:2,id:"page-grid-images"},parameters:{docs:{description:{story:x}}}},t={args:{content:`
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Eerste voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de eerste kaart in het grid. Een korte beschrijving die de gebruiker interesseert.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 8 juli 2025</small>
      </article>

      <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Tweede voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Tweede Kaart (Accent)</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de tweede kaart in accent stijl. Deze kaart valt meer op door de accent styling.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Derde voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid. Een mooie afsluiting van de drie kaarten.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
      </article>
    `,columns:3,id:"page-grid-cards"},parameters:{docs:{description:{story:S}}}},r={args:{content:`
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

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vierde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vierde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vijfde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vijfde kaart in het grid.
          </p>
        </div>
      </article>

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
    `,columns:3,id:"page-grid-multiple-cards"},parameters:{docs:{description:{story:G}}}};var c,s,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: defaultDocs
      }
    }
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,g,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: \`
      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Eerste voorbeeld afbeelding in landscape formaat"
           loading="lazy"
           width="640"
           height="360" />

      <img class="dictu-image dictu-aspect-ratio-landscape"
           src="/example-image.jpg"
           alt="Tweede voorbeeld afbeelding in landscape formaat"
           loading="lazy"
           width="640"
           height="640" />
    \`,
    columns: 2,
    id: 'page-grid-images'
  },
  parameters: {
    docs: {
      description: {
        story: withImagesDocs
      }
    }
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: \`
      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Eerste voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Eerste Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de eerste kaart in het grid. Een korte beschrijving die de gebruiker interesseert.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 8 juli 2025</small>
      </article>

      <article class="dictu-card dictu-card--accent dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Tweede voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Tweede Kaart (Accent)</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de tweede kaart in accent stijl. Deze kaart valt meer op door de accent styling.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 9 juli 2025</small>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__image-container">
          <img class="dictu-image dictu-card__image" src="/example-image.jpg" alt="Derde voorbeeld afbeelding" />
        </div>
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid. Een mooie afsluiting van de drie kaarten.
          </p>
        </div>
        <small class="dictu-card__metadata">Gepubliceerd op 10 juli 2025</small>
      </article>
    \`,
    columns: 3,
    id: 'page-grid-cards'
  },
  parameters: {
    docs: {
      description: {
        story: withCardsDocs
      }
    }
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,k,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: \`
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

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Derde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de derde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vierde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vierde kaart in het grid.
          </p>
        </div>
      </article>

      <article class="dictu-card dictu-focus-ring" tabindex="0">
        <div class="dictu-card__content">
          <h2 class="dictu-card__heading">
            <a href="#" class="dictu-link dictu-card__link">Vijfde Kaart</a>
          </h2>
          <p class="dictu-card__paragraph">
            Dit is de inhoud van de vijfde kaart in het grid.
          </p>
        </div>
      </article>

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
    \`,
    columns: 3,
    id: 'page-grid-multiple-cards'
  },
  parameters: {
    docs: {
      description: {
        story: withCardsMultipleRowsDocs
      }
    }
  }
}`,...(_=(k=r.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const I=["Default","WithImages","WithCards","WithCardsOnMultipleRows"];export{a as Default,t as WithCards,r as WithCardsOnMultipleRows,i as WithImages,I as __namedExportsOrder,W as default};
