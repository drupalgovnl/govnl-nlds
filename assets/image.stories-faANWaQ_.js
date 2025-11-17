/* empty css              */const ee=`# Image component

De image component biedt een toegankelijke en responsieve manier om afbeeldingen
weer te geven.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/image
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/image/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/image/dist/index.css";
\`\`\`

## Richtlijnen

- Gebruik in CSS de \`.dictu-image\` class name voor de image component.
- Specificeer altijd \`width\` en \`height\` attributen voor layout shift preventie.
- Gebruik beschrijvende alt-tekst voor betekenisvolle afbeeldingen.
- Voor decoratieve afbeeldingen gebruik \`alt=""\`.

## Beschrijving

De image component biedt een toegankelijke en responsieve manier om afbeeldingen
weer te geven. De component ondersteunt verschillende beeldverhoudingen, lazy
loading, en heeft ingebouwde toegankelijkheidsfeatures voor zowel betekenisvolle
als decoratieve afbeeldingen.

### Voorbeeldgebruik

\`\`\`html
<!-- Standaard afbeelding -->
<img
  class="dictu-image dictu-image__aspect-ratio:square"
  src="/example-image.jpg"
  alt="Beschrijving van de afbeelding"
  width="640"
  height="640"
  loading="lazy"
/>

<!-- Decoratieve afbeelding -->
<img
  class="dictu-image dictu-image__aspect-ratio:landscape"
  src="/decorative-image.jpg"
  alt=""
  width="640"
  height="480"
  loading="lazy"
/>
\`\`\`

## CSS Klassen

- \`.dictu-image\` — basis styling voor afbeeldingen
- \`.dictu-image__aspect-ratio:square\` — vierkante beeldverhouding (1:1)
- \`.dictu-image__aspect-ratio:landscape\` — liggende beeldverhouding (4:3)
- \`.dictu-image__aspect-ratio:portrait\` — staande beeldverhouding (3:4)
- \`.dictu-image__aspect-ratio:video\` — video beeldverhouding (16:9)

## Functies

- **Responsief ontwerp**: Automatische aanpassing aan containergrootte
- **Lazy loading**: Ondersteuning voor \`loading="lazy"\` attribuut
- **Toegankelijkheid**: Verschillende modi voor betekenisvolle en decoratieve
  afbeeldingen
- **Focus management**: Zichtbare focus indicators voor toegankelijkheid
- **Beeldverhoudingen**: Verschillende beeldverhoudingen beschikbaar
- **Prestaties**: Geoptimaliseerd voor snelle laadtijden

## Beeldverhoudingen

De component ondersteunt vier standaard beeldverhoudingen:

### Square (1:1)

\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:square" src="..." alt="..." />
\`\`\`

Ideaal voor profielfoto's, iconen en vierkante afbeeldingen.

### Landscape (4:3)

\`\`\`html
<img
  class="dictu-image dictu-image__aspect-ratio:landscape"
  src="..."
  alt="..."
/>
\`\`\`

Geschikt voor landschapsfoto's en horizontale content.

### Portrait (3:4)

\`\`\`html
<img
  class="dictu-image dictu-image__aspect-ratio:portrait"
  src="..."
  alt="..."
/>
\`\`\`

Perfect voor portretfoto's en verticale content.

### Video (16:9)

\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:video" src="..." alt="..." />
\`\`\`

Ideaal voor thumbnails van video's en widescreen content.

## Toegankelijkheid

### Betekenisvolle afbeeldingen

Voor afbeeldingen die informatie overbrengen:

\`\`\`html
<img
  class="dictu-image"
  src="chart.jpg"
  alt="Verkoopcijfers Q1 2024 tonen 15% stijging"
  role="img"
/>
\`\`\`

### Decoratieve afbeeldingen

Voor afbeeldingen die alleen visueel zijn:

\`\`\`html
<img class="dictu-image" src="decoration.jpg" alt="" />
\`\`\`

### Linked afbeeldingen

Voor klikbare afbeeldingen voeg beschrijvende aria-labels toe:

\`\`\`html
<a
  href="/artikel"
  aria-label="Lees artikel: Nieuwe ontwikkelingen in web toegankelijkheid"
>
  <img class="dictu-image" src="artikel-thumb.jpg" alt="" />
</a>
\`\`\`

## Attributes

De component ondersteunt alle standaard HTML img attributes:

- **src**: Pad naar de afbeelding (verplicht)
- **alt**: Alternatieve tekst (verplicht, kan leeg zijn voor decoratieve
  afbeeldingen)
- **width/height**: Afmetingen voor layout shift preventie
- **loading**: \`lazy\` of \`eager\` voor laadstrategie
- **role**: \`img\`
- **aria-describedby**: Koppeling met beschrijvende tekst

## Performance

- Gebruik \`loading="lazy"\` voor afbeeldingen buiten de viewport
- Specificeer altijd \`width\` en \`height\` om layout shift te voorkomen
- Gebruik geoptimaliseerde afbeeldingsformaten (WebP, AVIF)
- Overweeg responsive images met \`srcset\` voor verschillende schermgroottes

## Focus Management

De component heeft ingebouwde focus styling:

- Zichtbare outline bij keyboard navigatie
- Decoratieve afbeeldingen krijgen geen focus
- Configureerbare focus kleuren via CSS custom properties

## CSS Custom Properties

- \`--govnl-focus-outline-color\`: Kleur van de focus outline

## Browser Ondersteuning

- Moderne aspect-ratio CSS eigenschap
- Fallback voor oudere browsers via padding-top methode
- Progressive enhancement voor lazy loading

## Licentie

EUPL-1.2
`,ae=["auto","hero","landscape","photo","portrait","square","tall","ultrawide","wide"],ne={title:"Componenten/Image",parameters:{docs:{description:{component:ee}}},args:{src:"assets/example-image.jpg",alt:"Dit is een voorbeeld van een bijschrift",loading:"lazy",decorative:!1,width:"100%",height:"100%",aspectRatio:"wide"},argTypes:{src:{control:"text",description:"De URL van de afbeelding"},alt:{control:"text",description:"Alternatieve tekst voor de afbeelding"},loading:{control:"select",options:["lazy","eager"],description:"Laad de afbeelding lui of direct"},decorative:{control:"boolean",description:"Is de afbeelding decoratief?"},ariaDescribedBy:{control:"text",description:"De ID van het element dat de afbeelding beschrijft"},width:{control:"text",description:"De breedte van de afbeelding"},height:{control:"text",description:"De hoogte van de afbeelding"},aspectRatio:{control:"select",options:ae,description:"De beeldverhouding van de afbeelding"}},tags:["autodocs"],render:X=>{const{src:p,alt:m,loading:h,decorative:Y,ariaDescribedBy:u,width:v,height:b,aspectRatio:f}=X,e=document.createElement("img");return e.classList.add("dictu-image"),p&&(e.src=p),h&&(e.loading=h),v&&(e.width=v),b&&(e.height=b),Y?e.alt="":(e.setAttribute("role","img"),m&&(e.alt=m)),u&&e.setAttribute("aria-describedby",u),f&&e.classList.add(`dictu-aspect-ratio-${f}`),e}},a={name:"Default Image",args:{src:"assets/example-image.jpg",alt:"Dit is een voorbeeld van een bijschrift",width:"640",height:"640",aspectRatio:"square"}},t={name:"Decorative Image",args:{src:"assets/example-image.jpg",alt:"Dit is een voorbeeld van een decoratieve afbeelding",loading:"lazy",decorative:!0,ariaDescribedBy:"",width:"640",height:"640",aspectRatio:"square"}},n={name:"Auto Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Auto aspect ratio image example",aspectRatio:"auto",width:"960",height:"540"}},i={name:"Hero Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Hero aspect ratio image example",aspectRatio:"hero",width:"960",height:"540"}},r={name:"Landscape Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Landscape aspect ratio image example",aspectRatio:"landscape",width:"960",height:"540"}},s={name:"Photo Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Photo aspect ratio image example",aspectRatio:"photo",width:"960",height:"540"}},o={name:"Portrait Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Portrait aspect ratio image example",aspectRatio:"portrait",width:"960",height:"540"}},c={name:"Square Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Square aspect ratio image example",aspectRatio:"square",width:"960",height:"540"}},l={name:"Tall Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Tall aspect ratio image example",aspectRatio:"tall",width:"960",height:"540"}},d={name:"Ultrawide Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Ultrawide aspect ratio image example",aspectRatio:"ultrawide",width:"960",height:"540"}},g={name:"Wide Aspect Ratio",args:{src:"assets/example-image.jpg",alt:"Wide aspect ratio image example",aspectRatio:"wide",width:"960",height:"540"}};var j,w,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Default Image',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld van een bijschrift',
    width: '640',
    height: '640',
    aspectRatio: 'square'
  }
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,R,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Decorative Image',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld van een decoratieve afbeelding',
    loading: 'lazy',
    decorative: true,
    ariaDescribedBy: '',
    width: '640',
    height: '640',
    aspectRatio: 'square'
  }
}`,...(S=(R=t.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var A,D,y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Auto Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Auto aspect ratio image example',
    aspectRatio: 'auto',
    width: '960',
    height: '540'
  }
}`,...(y=(D=n.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var _,P,z;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Hero Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Hero aspect ratio image example',
    aspectRatio: 'hero',
    width: '960',
    height: '540'
  }
}`,...(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var q,L,I;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Landscape Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Landscape aspect ratio image example',
    aspectRatio: 'landscape',
    width: '960',
    height: '540'
  }
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var T,C,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Photo Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Photo aspect ratio image example',
    aspectRatio: 'photo',
    width: '960',
    height: '540'
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var V,U,G;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Portrait Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Portrait aspect ratio image example',
    aspectRatio: 'portrait',
    width: '960',
    height: '540'
  }
}`,...(G=(U=o.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,O,W;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Square Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Square aspect ratio image example',
    aspectRatio: 'square',
    width: '960',
    height: '540'
  }
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var F,E,J;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Tall Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Tall aspect ratio image example',
    aspectRatio: 'tall',
    width: '960',
    height: '540'
  }
}`,...(J=(E=l.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var K,M,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Ultrawide Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Ultrawide aspect ratio image example',
    aspectRatio: 'ultrawide',
    width: '960',
    height: '540'
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Z,Q,$;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Wide Aspect Ratio',
  args: {
    src: 'assets/example-image.jpg',
    alt: 'Wide aspect ratio image example',
    aspectRatio: 'wide',
    width: '960',
    height: '540'
  }
}`,...($=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};const ie=["Default","Decorative","Auto","Hero","Landscape","Photo","Portrait","Square","Tall","Ultrawide","Wide"];export{n as Auto,t as Decorative,a as Default,i as Hero,r as Landscape,s as Photo,o as Portrait,c as Square,l as Tall,d as Ultrawide,g as Wide,ie as __namedExportsOrder,ne as default};
