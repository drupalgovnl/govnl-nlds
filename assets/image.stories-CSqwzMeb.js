const I=`# Image component

De image component biedt een toegankelijke en responsieve manier om afbeeldingen weer te geven.

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
De image component biedt een toegankelijke en responsieve manier om afbeeldingen weer te geven. De component ondersteunt verschillende beeldverhoudingen, lazy loading, en heeft ingebouwde toegankelijkheidsfeatures voor zowel betekenisvolle als decoratieve afbeeldingen.

### Voorbeeldgebruik
\`\`\`html
<!-- Standaard afbeelding -->
<img class="dictu-image dictu-image__aspect-ratio:square"
     src="/example-image.jpg"
     alt="Beschrijving van de afbeelding"
     width="640"
     height="640"
     loading="lazy">

<!-- Decoratieve afbeelding -->
<img class="dictu-image dictu-image__aspect-ratio:landscape"
     src="/decorative-image.jpg"
     alt=""
     width="640"
     height="480"
     loading="lazy">
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
- **Toegankelijkheid**: Verschillende modi voor betekenisvolle en decoratieve afbeeldingen
- **Focus management**: Zichtbare focus indicators voor toegankelijkheid
- **Beeldverhoudingen**: Verschillende beeldverhoudingen beschikbaar
- **Prestaties**: Geoptimaliseerd voor snelle laadtijden

## Beeldverhoudingen
De component ondersteunt vier standaard beeldverhoudingen:

### Square (1:1)
\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:square" src="..." alt="...">
\`\`\`
Ideaal voor profielfoto's, iconen en vierkante afbeeldingen.

### Landscape (4:3)
\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:landscape" src="..." alt="...">
\`\`\`
Geschikt voor landschapsfoto's en horizontale content.

### Portrait (3:4)
\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:portrait" src="..." alt="...">
\`\`\`
Perfect voor portretfoto's en verticale content.

### Video (16:9)
\`\`\`html
<img class="dictu-image dictu-image__aspect-ratio:video" src="..." alt="...">
\`\`\`
Ideaal voor thumbnails van video's en widescreen content.

## Toegankelijkheid

### Betekenisvolle afbeeldingen
Voor afbeeldingen die informatie overbrengen:
\`\`\`html
<img class="dictu-image"
     src="chart.jpg"
     alt="Verkoopcijfers Q1 2024 tonen 15% stijging"
     role="img">
\`\`\`

### Decoratieve afbeeldingen
Voor afbeeldingen die alleen visueel zijn:
\`\`\`html
<img class="dictu-image"
     src="decoration.jpg"
     alt="">
\`\`\`

### Linked afbeeldingen
Voor klikbare afbeeldingen voeg beschrijvende aria-labels toe:
\`\`\`html
<a href="/artikel" aria-label="Lees artikel: Nieuwe ontwikkelingen in web toegankelijkheid">
  <img class="dictu-image" src="artikel-thumb.jpg" alt="">
</a>
\`\`\`

## Attributes
De component ondersteunt alle standaard HTML img attributes:

- **src**: Pad naar de afbeelding (verplicht)
- **alt**: Alternatieve tekst (verplicht, kan leeg zijn voor decoratieve afbeeldingen)
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
`,C=["landscape","portrait","square","video"],B={title:"Components/Image",parameters:{docs:{description:{component:I}}},args:{src:"/example-image.jpg",alt:"Dit is een voorbeeld van een bijschrift",loading:"lazy",decorative:!1,width:"100%",height:"100%",aspectRatio:"16/9"},argTypes:{src:{control:"text",description:"De URL van de afbeelding"},alt:{control:"text",description:"Alternatieve tekst voor de afbeelding"},loading:{control:"select",options:["lazy","eager"],description:"Laad de afbeelding lui of direct"},decorative:{control:"boolean",description:"Is de afbeelding decoratief?"},ariaDescribedBy:{control:"text",description:"De ID van het element dat de afbeelding beschrijft"},width:{control:"text",description:"De breedte van de afbeelding"},height:{control:"text",description:"De hoogte van de afbeelding"},aspectRatio:{control:"select",options:C,description:"De beeldverhouding van de afbeelding"}},tags:["autodocs"],title:"Componenten/Image",render:P=>{const{src:s,alt:d,loading:c,decorative:V,ariaDescribedBy:l,width:g,height:m,aspectRatio:p}=P,e=document.createElement("img");return e.classList.add("dictu-image"),s&&(e.src=s),c&&(e.loading=c),g&&(e.width=g),m&&(e.height=m),V?e.alt="":(e.setAttribute("role","img"),d&&(e.alt=d)),l&&e.setAttribute("aria-describedby",l),p&&e.classList.add(`dictu-image__aspect-ratio:${p}`),e}},a={name:"Default Image",args:{src:"/example-image.jpg",alt:"Dit is een voorbeeld van een bijschrift",width:"640",height:"640",aspectRatio:"square"}},n={name:"Decorative Image",args:{src:"/example-image.jpg",alt:"Dit is een voorbeeld van een decoratieve afbeelding",loading:"lazy",decorative:!0,ariaDescribedBy:"",width:"640",height:"640",aspectRatio:"square"}},i={name:"Landscape Aspect Ratio",args:{src:"/example-image.jpg",alt:"Landscape image example",aspectRatio:"landscape",width:"640",height:"360"}},t={name:"Portrait Aspect Ratio",args:{src:"/example-image.jpg",alt:"Portrait image example",aspectRatio:"portrait",width:"360",height:"640"}},r={name:"Square Aspect Ratio",args:{src:"/example-image.jpg",alt:"Square image example",aspectRatio:"square",width:"640",height:"640"}},o={name:"Video Aspect Ratio",args:{src:"/example-image.jpg",alt:"Video aspect ratio image example",aspectRatio:"video",width:"960",height:"540"}};var u,h,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default Image',
  args: {
    src: '/example-image.jpg',
    alt: 'Dit is een voorbeeld van een bijschrift',
    width: '640',
    height: '640',
    aspectRatio: 'square'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,f,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Decorative Image',
  args: {
    src: '/example-image.jpg',
    alt: 'Dit is een voorbeeld van een decoratieve afbeelding',
    loading: 'lazy',
    decorative: true,
    ariaDescribedBy: '',
    width: '640',
    height: '640',
    aspectRatio: 'square'
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,S,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Landscape Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    alt: 'Landscape image example',
    aspectRatio: 'landscape',
    width: '640',
    height: '360'
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,x,_;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Portrait Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    alt: 'Portrait image example',
    aspectRatio: 'portrait',
    width: '360',
    height: '640'
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var y,R,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Square Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    alt: 'Square image example',
    aspectRatio: 'square',
    width: '640',
    height: '640'
  }
}`,...(A=(R=r.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var z,q,L;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Video Aspect Ratio',
  args: {
    src: '/example-image.jpg',
    alt: 'Video aspect ratio image example',
    aspectRatio: 'video',
    width: '960',
    height: '540'
  }
}`,...(L=(q=o.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};const G=["Default","Decorative","Landscape","Portrait","Square","Video"];export{n as Decorative,a as Default,i as Landscape,t as Portrait,r as Square,o as Video,G as __namedExportsOrder,B as default};
