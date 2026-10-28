/* empty css              */const a=`<!-- @license CC0-1.0 -->

Gebruik in CSS de \`.dictu-rich-text\` class name.
`,d=`<!-- @license CC0-1.0 -->

> **Let op: De RichText component is verouderd en zal geen verdere updates
> krijgen. **
>
> Gebruik in plaats daarvan de losse componenten.

De Rich Text component voegt standaard styling toe aan platte HTML waar je geen
controle over hebt, zoals content uit een CMS.

De volgende HTML elementen worden voorzien van standaard opmaak:

- Paragrafen
- Links
- Kopteksten

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/rich-text
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/rich-text/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/rich-text/dist/index.css";
\`\`\`

Dit component maakt gebruik van de design tokens van \`@dictu/paragraph\`,
\`@dictu/link\` en \`@dictu/heading\`. Zorg ervoor dat je de design tokens van deze
componenten ook hebt ingeladen als je dit component gebruikt.

## Richtlijnen

- Zorg ervoor dat de content van de component alleen \`p\`, \`a\`, en \`h1\` t/m \`h6\`
  elementen bevat.
- Zorg ervoor dat de semantische structuur van de tekst behouden blijft.
- Voeg geen inline stijlen toe; vertrouw op de meegeleverde CSS voor consistente
  opmaak.

## Links

- [Rich Text Content](https://www.nldesignsystem.nl/rich-text-content/)
`,c={args:{content:`
      <p>Paragraaf met een <a href="#">link</a>.</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <img src="assets/example-image.jpg" alt="Voorbeeldafbeelding" />
      <ul>
        <li>Ongesorteerde lijst item 1</li>
        <li>Ongesorteerde lijst item 2</li>
        <li>Ongesorteerde lijst item 3</li>
      </ul>
      <ol>
        <li>Gesorteerde lijst item 1</li>
        <li>Gesorteerde lijst item 2</li>
        <li>Gesorteerde lijst item 3</li>
      </ol>
      <blockquote>Dit is een citaat.</blockquote>
      <table>
        <thead>
          <tr>
            <th>Kop 1</th>
            <th>Kop 2</th>
            <th>Kop 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rij 1, Cel 1</td>
            <td>Rij 1, Cel 2</td>
            <td>Rij 1, Cel 3</td>
          </tr>
          <tr>
            <td>Rij 2, Cel 1</td>
            <td>Rij 2, Cel 2</td>
            <td>Rij 2, Cel 3</td>
          </tr>
        </tbody>
      </table>
    `,id:"rich-text-1"},argTypes:{content:{control:"text",description:"De HTML inhoud van de rich-text component"},id:{control:"text",description:"Container ID voor navigatie en toegankelijkheid"}},parameters:{docs:{description:{component:d}}},render:({content:e,id:i})=>{const t=document.createElement("div");if(t.classList.add("dictu-rich-text"),t.setAttribute("id",i),e){if(typeof e=="string"){const o=new DOMParser().parseFromString(e,"text/html"),n=document.createDocumentFragment();Array.from(o.body.childNodes).forEach(r=>{n.appendChild(r.cloneNode(!0))}),t.appendChild(n)}e instanceof HTMLElement&&t.appendChild(e)}return t},tags:["deprecated","autodocs"],title:"Componenten/Rich Text"},p={args:{},parameters:{docs:{description:{story:a}}}},h=["Default"];export{p as Default,h as __namedExportsOrder,c as default};
