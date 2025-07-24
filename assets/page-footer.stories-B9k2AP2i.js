/* empty css              *//* empty css              *//* empty css              *//* empty css              */const F=`<!-- @license CC0-1.0 -->

De page-footer component toont de voettekst van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/design-tokens
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/page-footer.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/design-tokens/dist/page-footer.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-page-footer\` class voor de voettekst.
- Gebruik semantische HTML: \`<footer role="contentinfo">\` voor de
  hoofdcontainer.
- Voeg een \`lang\` attribuut toe om de taal aan te geven.
- Gebruik logische heading niveaus voor de structuur.
- Zorg voor goede focus-states en toetsenbordnavigatie voor alle links.

### Voorbeeldgebruik

\`\`\`html
<footer class="dictu-page-footer" role="contentinfo" lang="nl">
  <div class="dictu-page-footer__container">
    <div class="dictu-page-footer__text-container">
      <h2 class="dictu-heading dictu-heading--level-2">Footer kop</h2>
      <p class="dictu-paragraph">
        Dit is een voettekst die extra informatie biedt.
      </p>
    </div>
    <div class="dictu-page-footer__columns">
      <div class="dictu-page-footer__column">
        <h3 class="dictu-heading dictu-heading--level-3">Kop 1</h3>
        <ul class="dictu-link-list">
          <li class="dictu-link-list__item">
            <a
              href="/privacy"
              class="dictu-link dictu-link-list__link"
              title="Lees ons privacy beleid"
            >
              <span
                class="dictu-icon dictu-link-list__icon"
                role="presentation"
              >
                <!-- Arrow icon SVG -->
              </span>
              <span>Privacy beleid</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
\`\`\`

## CSS Klassen

- \`.dictu-page-footer\` — hoofdcontainer voor de voettekst
- \`.dictu-page-footer__container\` — interne container voor de inhoud
- \`.dictu-page-footer__text-container\` — container voor de hoofdtekst en
  beschrijving
- \`.dictu-page-footer__columns\` — container voor de kolommen met links
- \`.dictu-page-footer__column\` — individuele kolom met links

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
\`proprietary/design-tokens/src/components/page-footer.tokens.json\` voor een
overzicht van beschikbare tokens. Voorbeeld:

\`\`\`css
.dictu-page-footer {
  --govnl-page-footer-background-color: #fff;
  --govnl-page-footer-color: #123456;
  /* ... */
}
\`\`\`

## Toegankelijkheid

- Gebruik altijd een \`<footer>\` met \`role="contentinfo"\`.
- Voeg een \`lang\` attribuut toe voor de juiste taal.
- Externe links krijgen automatisch een aria-label met "(opent in nieuw
  venster)".
- Gebruik logische heading niveaus waarbij kolomtitels één niveau hoger zijn dan
  de hoofdtekst.
- Iconen hebben \`role="presentation"\` om te voorkomen dat ze door screenreaders
  worden voorgelezen.
- Zie
  [WCAG 2.1.3 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  en
  [WCAG 2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html).

# Varianten

## PageFooter (Standaard)

De volledige page-footer component met hoofdtekst, beschrijving en kolommen met
links.

\`\`\`js
export const PageFooter = {
  args: {
    heading: "Footer kop",
    text: "Dit is een voettekst die extra informatie biedt.",
    headingLevel: 2,
    lang: "nl",
    columns: [
      {
        title: "Kop 1",
        items: [
          {
            label: "Privacy beleid",
            href: "/privacy",
            title: "Lees ons privacy beleid",
          },
        ],
      },
    ],
  },
};
\`\`\`

## MinimalPageFooter

Een eenvoudige variant met alleen hoofdtekst en beschrijving, zonder kolommen.

\`\`\`js
export const MinimalPageFooter = {
  args: {
    heading: "Minimale Footer",
    text: "Een eenvoudige footer zonder kolommen.",
    headingLevel: 2,
    lang: "nl",
    columns: [],
  },
};
\`\`\`

## MinimalPageFooterOnlyColumns

Een variant die alleen kolommen met links toont, zonder hoofdtekst of
beschrijving.

\`\`\`js
export const MinimalPageFooterOnlyColumns = {
  args: {
    heading: "",
    text: "",
    headingLevel: 2,
    lang: "nl",
    columns: [
      {
        title: "Belangrijke Links",
        items: [
          {
            label: "Toegankelijkheidsverklaring",
            href: "/toegankelijkheid",
            title: "Lees onze toegankelijkheidsverklaring",
          },
        ],
      },
    ],
  },
};
\`\`\`

## Link Types

De component ondersteunt verschillende link types:

- **Interne links**: Normale navigatie binnen de site
- **Externe links**: Automatisch \`target="_blank"\` en
  \`rel="noopener noreferrer"\`
- **Download links**: Met \`download\` attribuut voor bestanden
- **Aangepaste aria-labels**: Voor verbeterde toegankelijkheid

### Externe link voorbeeld:

\`\`\`js
{
  label: "W3C WCAG Richtlijnen",
  href: "https://www.w3.org/WAI/WCAG22/quickref/",
  title: "Bezoek de officiële WCAG 2.2 richtlijnen",
  external: true
}
\`\`\`

### Download link voorbeeld:

\`\`\`js
{
  label: "PDF Handleiding",
  href: "/handleiding.pdf",
  title: "Download de handleiding als PDF",
  download: "handleiding.pdf"
}
\`\`\`

## Styling

De styling wordt verzorgd door de page-footer CSS en importeert automatisch de
benodigde child components:

- \`.dictu-page-footer\`
- \`.dictu-page-footer__container\`
- \`.dictu-page-footer__text-container\`
- \`.dictu-page-footer__columns\`
- \`.dictu-page-footer__column\`

Plus alle gerelateerde klassen van heading, paragraph, link-list, link en icon
components.

## Licentie

EUPL-1.2
`,M={argTypes:{heading:{control:"text",description:"Main heading for the footer"},text:{control:"text",description:"Descriptive text for the footer"},columns:{control:"array",description:"Array of column objects with title and items"},headingLevel:{control:{type:"range",min:1,max:6},description:"Heading level for the main footer heading (affects column titles too)"}},parameters:{docs:{description:{component:F}}},tags:["autodocs"],title:"Componenten/Page Footer"},A=()=>{const e=document.createElement("span");return e.classList.add("dictu-icon","dictu-link-list__icon"),e.setAttribute("role","presentation"),e.innerHTML=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/>
  </svg>`,e},P=e=>{if(!e)return null;const n=document.createElement("p");return n.classList.add("dictu-paragraph"),n.textContent=e,n},E=(e,n)=>{if(!e||!n)return null;const t=document.createElement(`h${n}`);return t.classList.add("dictu-heading",`dictu-heading--level-${n}`),t.textContent=e,t},y=e=>{const n=document.createElement("a");n.classList.add("dictu-link","dictu-link-list__link"),n.href=e.href||"#",n.appendChild(A());const t=document.createElement("span");return t.textContent=e.label||"",n.appendChild(t),[{condition:e.title,attr:"title",value:e.title},{condition:e.download,attr:"download",value:e.download},{condition:e.ariaLabel&&!e.external,attr:"aria-label",value:e.ariaLabel}].forEach(({condition:o,attr:r,value:l})=>{o&&n.setAttribute(r,l)}),e.external&&(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),n.setAttribute("aria-label",e.ariaLabel||`${e.label} (opent in nieuw venster)`)),n},D=e=>{if(!(e!=null&&e.length))return null;const n=document.createElement("ul");n.classList.add("dictu-link-list");const t=document.createDocumentFragment();return e.forEach(i=>{const o=document.createElement("li");o.classList.add("dictu-link-list__item"),o.appendChild(y(i)),t.appendChild(o)}),n.appendChild(t),n},W=(e,n)=>{const t=document.createElement("div");t.classList.add("dictu-page-footer__column");const i=E(e.title,n+1);i&&t.appendChild(i);const o=D(e.items);return o&&t.appendChild(o),t},c={heading:"Footer kop",text:"Dit is een voettekst die extra informatie biedt.",headingLevel:2,columns:[{title:"Kop 1",items:[{label:"Privacy beleid",href:"/privacy",title:"Lees ons privacy beleid",ariaLabel:"Privacy beleid - meer informatie over hoe we uw gegevens gebruiken"},{label:"Algemene voorwaarden",href:"/voorwaarden",title:"Bekijk onze algemene voorwaarden"},{label:"Contact",href:"/contact",title:"Neem contact met ons op"}]},{title:"Kop 2",items:[{label:"Over ons",href:"/over-ons",title:"Meer informatie over onze organisatie"},{label:"Nieuws",href:"/nieuws",title:"Bekijk het laatste nieuws"},{label:"Externe link",href:"https://example.com",title:"Bezoek externe website",external:!0}]}]},d={render:e=>{const{heading:n,text:t,columns:i,headingLevel:o=2}=e||{},r=document.createElement("footer");r.classList.add("dictu-page-footer"),r.setAttribute("role","contentinfo");const l=document.createElement("div");if(l.classList.add("dictu-page-footer__container"),n||t){const a=document.createElement("div");a.classList.add("dictu-page-footer__text-container");const s=E(n,o);s&&a.appendChild(s);const g=P(t);g&&a.appendChild(g),l.appendChild(a)}if(i!=null&&i.length){const a=document.createElement("div");a.classList.add("dictu-page-footer__columns");const s=document.createDocumentFragment();i.forEach(g=>{s.appendChild(W(g,o))}),a.appendChild(s),l.appendChild(a)}return r.appendChild(l),r},args:c},m={...d,args:{heading:"Minimale Footer",text:"Een eenvoudige footer zonder kolommen.",headingLevel:2,columns:[]},parameters:{docs:{description:{story:"Een minimale variant van de PageFooter met alleen een hoofdtekst en geen kolommen voor eenvoudige use cases."}}}},u={...d,args:{heading:"",text:"",headingLevel:2,columns:[{title:"Heading 1",items:[{label:"Toegankelijkheidsverklaring",href:"/toegankelijkheid",title:"Lees onze toegankelijkheidsverklaring",ariaLabel:"Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen"},{label:"Sitemap",href:"/sitemap",title:"Bekijk de volledige sitemap"},{label:"PDF Handleiding",href:"/handleiding.pdf",title:"Download de handleiding als PDF",download:"handleiding.pdf"}]},{title:"EHeading 2",items:[{label:"W3C WCAG Richtlijnen",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]},{title:"Heading 3",items:[{label:"W3C WCAG Richtlijnen 3",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]}]},parameters:{docs:{description:{story:"Een minimale variant van de PageFooter met alleen kolommen."}}}};var p,h,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  heading: 'Footer kop',
  text: 'Dit is een voettekst die extra informatie biedt.',
  headingLevel: 2,
  columns: [{
    title: 'Kop 1',
    items: [{
      label: 'Privacy beleid',
      href: '/privacy',
      title: 'Lees ons privacy beleid',
      ariaLabel: 'Privacy beleid - meer informatie over hoe we uw gegevens gebruiken'
    }, {
      label: 'Algemene voorwaarden',
      href: '/voorwaarden',
      title: 'Bekijk onze algemene voorwaarden'
    }, {
      label: 'Contact',
      href: '/contact',
      title: 'Neem contact met ons op'
    }]
  }, {
    title: 'Kop 2',
    items: [{
      label: 'Over ons',
      href: '/over-ons',
      title: 'Meer informatie over onze organisatie'
    }, {
      label: 'Nieuws',
      href: '/nieuws',
      title: 'Bekijk het laatste nieuws'
    }, {
      label: 'Externe link',
      href: 'https://example.com',
      title: 'Bezoek externe website',
      external: true
    }]
  }]
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,v,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const {
      heading,
      text,
      columns,
      headingLevel = 2
    } = args || {};

    // Create main footer element
    const pageFooter = document.createElement('footer');
    pageFooter.classList.add('dictu-page-footer');
    pageFooter.setAttribute('role', 'contentinfo');

    // Create container
    const container = document.createElement('div');
    container.classList.add('dictu-page-footer__container');

    // Create text container
    if (heading || text) {
      const textContainer = document.createElement('div');
      textContainer.classList.add('dictu-page-footer__text-container');

      // Add heading and text
      const headingElement = createHeading(heading, headingLevel);
      if (headingElement) textContainer.appendChild(headingElement);
      const textElement = createParagraph(text);
      if (textElement) textContainer.appendChild(textElement);
      container.appendChild(textContainer);
    }

    // Create columns if they exist
    if (columns?.length) {
      const columnsContainer = document.createElement('div');
      columnsContainer.classList.add('dictu-page-footer__columns');
      const fragment = document.createDocumentFragment();
      columns.forEach(column => {
        fragment.appendChild(createColumn(column, headingLevel));
      });
      columnsContainer.appendChild(fragment);
      container.appendChild(columnsContainer);
    }
    pageFooter.appendChild(container);
    return pageFooter;
  },
  args: DefaultFooterData
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,C,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...PageFooter,
  args: {
    heading: 'Minimale Footer',
    text: 'Een eenvoudige footer zonder kolommen.',
    headingLevel: 2,
    columns: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Een minimale variant van de PageFooter met alleen een hoofdtekst en geen kolommen voor eenvoudige use cases.'
      }
    }
  }
}`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var j,L,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...PageFooter,
  args: {
    heading: '',
    text: '',
    headingLevel: 2,
    columns: [{
      title: 'Heading 1',
      items: [{
        label: 'Toegankelijkheidsverklaring',
        href: '/toegankelijkheid',
        title: 'Lees onze toegankelijkheidsverklaring',
        ariaLabel: 'Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen'
      }, {
        label: 'Sitemap',
        href: '/sitemap',
        title: 'Bekijk de volledige sitemap'
      }, {
        label: 'PDF Handleiding',
        href: '/handleiding.pdf',
        title: 'Download de handleiding als PDF',
        download: 'handleiding.pdf'
      }]
    }, {
      title: 'EHeading 2',
      items: [{
        label: 'W3C WCAG Richtlijnen',
        href: 'https://www.w3.org/WAI/WCAG22/quickref/',
        title: 'Bezoek de officiële WCAG 2.2 richtlijnen',
        external: true
      }, {
        label: 'Nederlandse Overheid',
        href: 'https://www.rijksoverheid.nl',
        title: 'Bezoek de website van de Nederlandse overheid',
        external: true
      }]
    }, {
      title: 'Heading 3',
      items: [{
        label: 'W3C WCAG Richtlijnen 3',
        href: 'https://www.w3.org/WAI/WCAG22/quickref/',
        title: 'Bezoek de officiële WCAG 2.2 richtlijnen',
        external: true
      }, {
        label: 'Nederlandse Overheid',
        href: 'https://www.rijksoverheid.nl',
        title: 'Bezoek de website van de Nederlandse overheid',
        external: true
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Een minimale variant van de PageFooter met alleen kolommen.'
      }
    }
  }
}`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const H=["DefaultFooterData","PageFooter","MinimalPageFooter","MinimalPageFooterOnlyColumns"];export{c as DefaultFooterData,m as MinimalPageFooter,u as MinimalPageFooterOnlyColumns,d as PageFooter,H as __namedExportsOrder,M as default};
