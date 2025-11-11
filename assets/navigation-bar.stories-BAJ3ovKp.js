/* empty css              */const s=`<!-- @license CC0-1.0 -->

De navigation-bar component toont de navigatiebalk van het Dictu Design Systeem.

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/design-tokens
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/design-tokens/dist/navigation-bar.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/design-tokens/dist/navigation-bar.css";
\`\`\`

## Richtlijnen

- Gebruik altijd de \`.dictu-navigation-bar\` class voor de navigatiebalk.
- Gebruik semantische HTML: \`<nav aria-label="Hoofdnavigatie">\` met een \`<ul>\`
  en \`<li>\` voor de navigatie-items.
- Zorg voor goede focus-states en toetsenbordnavigatie (tab, enter, space).
- Gebruik de bijbehorende CSS-variabelen voor consistente styling.

### Voorbeeldgebruik

\`\`\`html
<nav class="dictu-navigation-bar" aria-label="Hoofdnavigatie" role="navigation">
  <ul class="dictu-navigation-bar__list" role="menubar">
    <li class="dictu-navigation-bar__item" role="none">
      <a
        href="#"
        class="dictu-navigation-bar__link"
        role="menuitem"
        tabindex="0"
      >
        <span class="dictu-navigation-bar__title">Home</span>
      </a>
    </li>
    <li class="dictu-navigation-bar__item" role="none">
      <a
        href="#"
        class="dictu-navigation-bar__link"
        role="menuitem"
        tabindex="0"
      >
        <span class="dictu-navigation-bar__title">Over</span>
      </a>
    </li>
  </ul>
</nav>
\`\`\`

## CSS Klassen

- \`.dictu-navigation-bar\` — container voor de navigatiebalk
- \`.dictu-navigation-bar__list\` — lijst van navigatie-items
- \`.dictu-navigation-bar__item\` — individueel navigatie-item
- \`.dictu-navigation-bar__link\` — link in de navigatiebalk
- \`.dictu-navigation-bar__icon\` — optioneel icoon bij een item
- \`.dictu-navigation-bar__icon--active\` — actieve icoonstijl
- \`.dictu-navigation-bar__search\` — zoekveld in de navigatiebalk

## Design Tokens / CSS-variabelen

De component gebruikt design tokens voor kleuren, spacing, etc. Zie
\`proprietary/design-tokens/src/components/navigation-bar.tokens.json\` voor een
overzicht van beschikbare tokens. Voorbeeld:

\`\`\`css
.dictu-navigation-bar {
  --govnl-nav-bar-background-color: #fff;
  --govnl-nav-bar-color: #123456;
  /* ... */
}
\`\`\`

## Toegankelijkheid

- Gebruik altijd een \`<nav>\` met \`aria-label\` en \`role="navigation"\`.
- Gebruik \`role="menubar"\` op de \`<ul>\`, \`role="none"\` op \`<li>\`, en
  \`role="menuitem"\` op de links.
- Gebruik \`tabindex="0"\` op de links voor volledige toetsenbordnavigatie.
- Zorg dat links goed bereikbaar zijn met het toetsenbord.
- Zorg voor voldoende contrast en zichtbare focus.
- Zie
  [WCAG 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
  en
  [WCAG 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

# NavigationItem component

De \`NavigationItem\` component is een individueel item voor gebruik binnen de
navigatiebalk van het Dictu Design Systeem. Deze component ondersteunt
verschillende iconen, waaronder een Home-icoon, en is volledig toegankelijk
volgens WCAG 2.2-richtlijnen.

## Gebruik

Gebruik deze component binnen een \`<ul>\` in de navigation-bar:

\`\`\`html
<li class="dictu-navigation-bar__item" role="none">
  <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
    <span class="dictu-icon" aria-hidden="true">
      <!-- SVG voor het gewenste icoon, bijvoorbeeld Home -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12L12 4l9 8v8a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-4h-4v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z"
          fill="currentColor"
        />
      </svg>
    </span>
    <span class="dictu-navigation-bar__icon"></span>
    Titel van het item
  </a>
</li>
\`\`\`

## Beschikbare iconen

- home
- settings
- info
- contact

Het juiste icoon wordt automatisch getoond op basis van de \`icon\`-prop.

## Toegankelijkheid

- Gebruik altijd \`role="none"\` op het \`<li>\`-element.
- Gebruik \`role="menuitem"\` en \`tabindex="0"\` op de link.
- Iconen zijn voorzien van \`aria-hidden="true"\` zodat ze niet door screenreaders
  worden voorgelezen.

## Voorbeeld in Storybook

De Storybook story laat zien hoe je het Home-icoon gebruikt:

\`\`\`js
export const NavigationItem = {
  args: {
    icon: "home",
    title: "Dienst ICT Uitvoering",
    link: "https://www.dictu.nl",
  },
};
\`\`\`

## Styling

De styling wordt verzorgd door de navigation-bar CSS. Gebruik altijd de juiste
klassen:

- \`.dictu-navigation-bar__item\`
- \`.dictu-navigation-bar__link\`
- \`.dictu-icon\`

## Licentie

EUPL-1.2
`,c={argTypes:{items:{control:"array"}},parameters:{docs:{description:{component:s}}},tags:["autodocs"],title:"Componenten/NavigationBar"},e={render:r=>{const n=document.createElement("nav"),{items:l}=r||[];return n.classList.add("dictu-navigation-bar"),n.setAttribute("aria-label","Hoofdnavigatie"),n.setAttribute("role","navigation"),n.innerHTML=`
      <input type="checkbox" id="nav-toggle" class="dictu-navigation-bar__toggle" aria-controls="nav-list" aria-label="Menu tonen/verbergen" />
      <a href="#" class="dictu-navigation-bar__link dictu-navigation-bar__home" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="#154273"/>
        </svg>
      </a>
      <label for="nav-toggle" class="dictu-navigation-bar__menu-label" tabindex="0">
        <span class="dictu-navigation-bar__menu-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#154273"/>
        </svg>
        </span>
      </label>
      <ul class="dictu-navigation-bar__list" id="nav-list" role="menubar">
        ${l.map(i=>`
          <li class="dictu-navigation-bar__item" role="none">
            <a href="${i.link}" class="dictu-navigation-bar__link dictu-focus-ring" role="menuitem" tabindex="0">
              <span class="dictu-navigation-bar__title">${i.title}</span>
            </a>
          </li>
        `).join("")}
      </ul>
    `,n},args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{link:"https://www.ez.nl",title:"Ministerie van Economische Zaken"},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}]}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    // Responsive, accessible, JS-free navigation bar
    const navigationBar = document.createElement('nav');
    const {
      items
    } = args || [];
    navigationBar.classList.add('dictu-navigation-bar');
    navigationBar.setAttribute('aria-label', 'Hoofdnavigatie');
    navigationBar.setAttribute('role', 'navigation');
    navigationBar.innerHTML = \`
      <input type="checkbox" id="nav-toggle" class="dictu-navigation-bar__toggle" aria-controls="nav-list" aria-label="Menu tonen/verbergen" />
      <a href="#" class="dictu-navigation-bar__link dictu-navigation-bar__home" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="#154273"/>
        </svg>
      </a>
      <label for="nav-toggle" class="dictu-navigation-bar__menu-label" tabindex="0">
        <span class="dictu-navigation-bar__menu-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#154273"/>
        </svg>
        </span>
      </label>
      <ul class="dictu-navigation-bar__list" id="nav-list" role="menubar">
        \${items.map(item => \`
          <li class="dictu-navigation-bar__item" role="none">
            <a href="\${item.link}" class="dictu-navigation-bar__link dictu-focus-ring" role="menuitem" tabindex="0">
              <span class="dictu-navigation-bar__title">\${item.title}</span>
            </a>
          </li>
        \`).join('')}
      </ul>
    \`;
    return navigationBar;
  },
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      link: 'https://www.ez.nl',
      title: 'Ministerie van Economische Zaken'
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }]
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const v=["NavigationBar"];export{e as NavigationBar,v as __namedExportsOrder,c as default};
