const m=`<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/embed
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/embed/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/embed/index.css";
\`\`\`

## Richtlijnen

Gebruik de Embed component voor het presenteren van inhoud van een externe bron.
Wanneer je zelf controle hebt over de inhoud, gebruik dan het Embed component
niet.

### Toegankelijkheid

Zorg bij het gebruik van de Embed component voor een beschrijvende titel die
duidelijk de embedded content beschrijft, zodat gebruikers van een screenreader
goed kunnen beoordelen wat de inhoud is. Zonder een duidelijke titel moeten
gebruikers met een screen reader eerst de \`iframe\` zelf in om de inhoud te
kunnen bepalen. Dit is verwarrend en kost meer tijd.

## Waarschuwing

Elke iframe is een compleet nieuwe document omgeving. Dit houdt in dat elke
Embed component voor een groter gebruik van geheugen en andere resources zorgt.
Hoewel het theoretisch mogelijk is om zo vaak als je wilt gebruik te maken van
de Embed component, is het belangrijk om uit te kijken voor performance
problemen.
`,u={argTypes:{title:{control:"text",description:"De titel van de iframe"},source:{control:"text",description:"De bron welke embedded wordt"},width:{control:"text",description:"De breedte van de iframe"},height:{control:"text",description:"De hoogte van de iframe"},allowFullscreen:{control:"boolean",description:"Optie om de fullscreen mogelijkheid toe te laten voor de embedded content"}},parameters:{docs:{description:{component:m}}},render:({source:i,title:d,width:s,height:a,allowFullscreen:l})=>{const c=["dictu-embed"],e=document.createElement("iframe");return e.classList.add(...c),e.setAttribute("title",d),e.setAttribute("src",i),e.setAttribute("width",s),e.setAttribute("height",a),l&&e.setAttribute("allowfullscreen",""),e},tags:["autodocs"],title:"Componenten/Embed"},n={args:{title:"Youtube video van DICTU met als titel Werken bij DICTU: werken aan het technisch ontwerp van websites voor miljoenen Nederlanders.",source:"https://www.youtube.com/embed/uhr3ylfGaCo?si=AU2YPlrsLl-rzwZi",width:"560",height:"315"}};var t,o,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'Youtube video van DICTU met als titel Werken bij DICTU: werken aan het technisch ontwerp van websites voor miljoenen Nederlanders.',
    source: 'https://www.youtube.com/embed/uhr3ylfGaCo?si=AU2YPlrsLl-rzwZi',
    width: '560',
    height: '315'
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const b=["Embed"];export{n as Embed,b as __namedExportsOrder,u as default};
