/* empty css              *//* empty css              *//* empty css             *//* empty css                *//* empty css                  *//* empty css              *//* empty css             *//* empty css                  *//* empty css             *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */const J={title:"Voorbeelden/Informatiepagina",parameters:{layout:"fullscreen",docs:{description:{component:"Een complete informatiepagina die alle componenten uit het NLDS toont in een samenhangende layout."}}},tags:["autodocs"]},h={render:()=>{const n=document.createElement("div");n.style.minHeight="100vh",n.style.display="flex",n.style.flexDirection="column";const d=document.createElement("a");d.classList.add("dictu-skip-link"),d.href="#main-content",d.innerText="Ga direct naar inhoud";const a=document.createElement("header");a.style.backgroundColor="var(--dictu-color-blue-700, #154273)",a.style.color="white",a.style.padding="1rem 0";const s=document.createElement("nav");s.classList.add("dictu-navigation-bar"),s.setAttribute("aria-label","Hoofdnavigatie"),s.innerHTML=`
      <input type="checkbox" id="nav-toggle" class="dictu-navigation-bar__toggle" aria-controls="nav-list" aria-label="Menu tonen/verbergen" />
      <a href="#" class="dictu-navigation-bar__link dictu-navigation-bar__home" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="white"/>
        </svg>
      </a>
      <label for="nav-toggle" class="dictu-navigation-bar__menu-label" tabindex="0">
        <span class="dictu-navigation-bar__menu-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="white"/>
          </svg>
        </span>
      </label>
      <ul class="dictu-navigation-bar__list" id="nav-list" role="menubar">
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Over DICTU</span>
          </a>
        </li>
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Diensten</span>
          </a>
        </li>
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Contact</span>
          </a>
        </li>
      </ul>
    `;const e=document.createElement("main");e.id="main-content",e.style.flex="1",e.style.padding="2rem",e.style.maxWidth="1200px",e.style.margin="0 auto",e.style.width="100%";const r=document.createElement("section");r.style.marginBottom="2rem",r.style.textAlign="center";const C=document.createElement("div");C.classList.add("dictu-logo"),C.innerHTML=`
      <div class="dictu-logo__image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -12 44 88" role="img">
          <title>Logo Rijksoverheid</title>
          <rect x="0" y="-12" fill="var(--dictu-logo-emblem-background-color, #154273)" width="44" height="88"></rect>
          <path fill="var(--dictu-logo-emblem-color, #FFFFFF)" d="M22.764,56.35h-0.765v-2.123h0.765V56.35z M26.214,46.997h-0.765v-2.123h0.765V46.997z M12.048,43.336 c-0.058,0-0.455,0.002-0.455,0.084s0.184,0.041,0.455,0.084c0.611,0.105,0.854,0.414,1.283,0.414c0.39,0,0.789-0.266,0.635-0.828 c-0.026-0.094-0.083-0.072-0.094-0.008c-0.061,0.25-0.371,0.396-0.697,0.396C12.771,43.479,12.685,43.336,12.048,43.336z"></path>
        </svg>
      </div>
      <div class="dictu-logo__text">
        <span class="dictu-logo__title">Dienst ICT Uitvoering</span>
        <span class="dictu-logo__subtitle">Ministerie van Economische Zaken</span>
      </div>
    `;const o=document.createElement("section");o.style.marginBottom="3rem",o.style.textAlign="center";const v=document.createElement("h1");v.classList.add("dictu-heading","dictu-heading--level-1"),v.innerText="Nederlandse Linkbaseerde Design System";const b=document.createElement("p");b.classList.add("dictu-paragraph","dictu-paragraph--lead"),b.innerText="Een moderne, toegankelijke en gebruiksvriendelijke design system voor Nederlandse overheidswebsites.";const c=document.createElement("section");c.style.marginBottom="3rem";const k=document.createElement("h2");k.classList.add("dictu-heading","dictu-heading--level-2"),k.innerText="Over dit Design System";const f=document.createElement("p");f.classList.add("dictu-paragraph"),f.innerText="Dit design system biedt een uitgebreide set van herbruikbare componenten die zijn ontworpen volgens de Nederlandse toegankelijkheidsrichtlijnen. Alle componenten zijn getest op gebruiksvriendelijkheid en toegankelijkheid.";const p=document.createElement("section");p.style.marginBottom="3rem";const L=document.createElement("h3");L.classList.add("dictu-heading","dictu-heading--level-3"),L.innerText="Voorbeelden van Componenten";const t=document.createElement("div");t.style.display="flex",t.style.gap="1rem",t.style.flexWrap="wrap",t.style.marginTop="1rem";const y=document.createElement("button");y.classList.add("dictu-button","dictu-button--primary-action","dictu-focus-ring"),y.innerText="Primaire Actie";const x=document.createElement("button");x.classList.add("dictu-button","dictu-button--secondary-action","dictu-focus-ring"),x.innerText="Secundaire Actie";const _=document.createElement("button");_.classList.add("dictu-button","dictu-button--subtle","dictu-focus-ring"),_.innerHTML='<span class="dictu-icon" aria-hidden="true"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.37032 2.5058C7.90009 1.55647 8.90228 0.967743 9.99 0.967743C11.0777 0.967743 12.0799 1.55646 12.6097 2.50578L19.7052 14.748C19.7287 14.7887 19.7494 14.8309 19.767 14.8745C20.1397 15.7958 20.032 16.8418 19.4793 17.6678C18.9267 18.4938 18.0008 18.9925 17.007 18.9995L17 18.9995H3C2.98172 18.9995 2.96356 18.999 2.94552 18.998C2.91027 19 2.87456 19 2.83851 18.9982C1.86882 18.9482 0.983287 18.432 0.461991 17.6128C-0.0593058 16.7936 -0.151893 15.7728 0.213514 14.8732C0.231014 14.8301 0.251498 14.7883 0.274816 14.748L7.37032 2.5058Z" fill="#0A2750"/></svg></span> Met Icoon';const u=document.createElement("section");u.style.marginBottom="3rem";const w=document.createElement("h3");w.classList.add("dictu-heading","dictu-heading--level-3"),w.innerText="Nuttige Links";const l=document.createElement("p");l.classList.add("dictu-paragraph");const m=document.createElement("a");m.classList.add("dictu-link"),m.href="#",m.innerText="Meer informatie over toegankelijkheid",l.appendChild(document.createTextNode("Voor meer details, bekijk ")),l.appendChild(m),l.appendChild(document.createTextNode(" op onze website."));const i=document.createElement("footer");i.style.backgroundColor="#f8f9fa",i.style.padding="2rem",i.style.marginTop="3rem",i.style.borderTop="1px solid #e9ecef";const H=document.createElement("h3");H.classList.add("dictu-heading","dictu-heading--level-3"),H.innerText="Footer Links";const E=document.createElement("ul");return E.classList.add("dictu-link-list"),[{label:"Contact",href:"#"},{label:"Colofon",href:"#"},{label:"Toegankelijkheid",href:"#"},{label:"Privacy",href:"#"}].forEach(T=>{const S=document.createElement("li");S.classList.add("dictu-link-list__item");const g=document.createElement("a");g.classList.add("dictu-link","dictu-link-list__link"),g.href=T.href,g.innerHTML=`<span class="dictu-icon" role="presentation" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/></svg></span>${T.label}`,S.appendChild(g),E.appendChild(S)}),n.appendChild(d),a.appendChild(s),n.appendChild(a),r.appendChild(C),e.appendChild(r),o.appendChild(v),o.appendChild(b),e.appendChild(o),c.appendChild(k),c.appendChild(f),e.appendChild(c),t.appendChild(y),t.appendChild(x),t.appendChild(_),p.appendChild(L),p.appendChild(t),e.appendChild(p),u.appendChild(w),u.appendChild(l),e.appendChild(u),n.appendChild(e),i.appendChild(H),i.appendChild(E),n.appendChild(i),n},parameters:{docs:{description:{story:"Een complete voorbeeldpagina die alle NLDS componenten toont in een realistische layout. Inclusief navigatie, content secties, buttons, links en footer."}}}};var B,M,P;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    // Create main page container
    const page = document.createElement('div');
    page.style.minHeight = '100vh';
    page.style.display = 'flex';
    page.style.flexDirection = 'column';

    // Create Skip Link
    const skipLink = document.createElement('a');
    skipLink.classList.add('dictu-skip-link');
    skipLink.href = '#main-content';
    skipLink.innerText = 'Ga direct naar inhoud';

    // Create Header with Navigation
    const header = document.createElement('header');
    header.style.backgroundColor = 'var(--dictu-color-blue-700, #154273)';
    header.style.color = 'white';
    header.style.padding = '1rem 0';

    // Navigation Bar
    const nav = document.createElement('nav');
    nav.classList.add('dictu-navigation-bar');
    nav.setAttribute('aria-label', 'Hoofdnavigatie');
    nav.innerHTML = \`
      <input type="checkbox" id="nav-toggle" class="dictu-navigation-bar__toggle" aria-controls="nav-list" aria-label="Menu tonen/verbergen" />
      <a href="#" class="dictu-navigation-bar__link dictu-navigation-bar__home" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="white"/>
        </svg>
      </a>
      <label for="nav-toggle" class="dictu-navigation-bar__menu-label" tabindex="0">
        <span class="dictu-navigation-bar__menu-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="white"/>
          </svg>
        </span>
      </label>
      <ul class="dictu-navigation-bar__list" id="nav-list" role="menubar">
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Over DICTU</span>
          </a>
        </li>
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Diensten</span>
          </a>
        </li>
        <li class="dictu-navigation-bar__item" role="none">
          <a href="#" class="dictu-navigation-bar__link" role="menuitem" tabindex="0">
            <span class="dictu-navigation-bar__title">Contact</span>
          </a>
        </li>
      </ul>
    \`;

    // Create Main Content Area
    const main = document.createElement('main');
    main.id = 'main-content';
    main.style.flex = '1';
    main.style.padding = '2rem';
    main.style.maxWidth = '1200px';
    main.style.margin = '0 auto';
    main.style.width = '100%';

    // Logo Section
    const logoSection = document.createElement('section');
    logoSection.style.marginBottom = '2rem';
    logoSection.style.textAlign = 'center';
    const logo = document.createElement('div');
    logo.classList.add('dictu-logo');
    logo.innerHTML = \`
      <div class="dictu-logo__image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -12 44 88" role="img">
          <title>Logo Rijksoverheid</title>
          <rect x="0" y="-12" fill="var(--dictu-logo-emblem-background-color, #154273)" width="44" height="88"></rect>
          <path fill="var(--dictu-logo-emblem-color, #FFFFFF)" d="M22.764,56.35h-0.765v-2.123h0.765V56.35z M26.214,46.997h-0.765v-2.123h0.765V46.997z M12.048,43.336 c-0.058,0-0.455,0.002-0.455,0.084s0.184,0.041,0.455,0.084c0.611,0.105,0.854,0.414,1.283,0.414c0.39,0,0.789-0.266,0.635-0.828 c-0.026-0.094-0.083-0.072-0.094-0.008c-0.061,0.25-0.371,0.396-0.697,0.396C12.771,43.479,12.685,43.336,12.048,43.336z"></path>
        </svg>
      </div>
      <div class="dictu-logo__text">
        <span class="dictu-logo__title">Dienst ICT Uitvoering</span>
        <span class="dictu-logo__subtitle">Ministerie van Economische Zaken</span>
      </div>
    \`;

    // Hero Section with Heading
    const heroSection = document.createElement('section');
    heroSection.style.marginBottom = '3rem';
    heroSection.style.textAlign = 'center';
    const mainHeading = document.createElement('h1');
    mainHeading.classList.add('dictu-heading', 'dictu-heading--level-1');
    mainHeading.innerText = 'Nederlandse Linkbaseerde Design System';
    const leadParagraph = document.createElement('p');
    leadParagraph.classList.add('dictu-paragraph', 'dictu-paragraph--lead');
    leadParagraph.innerText = 'Een moderne, toegankelijke en gebruiksvriendelijke design system voor Nederlandse overheidswebsites.';

    // Content Sections
    const contentSection = document.createElement('section');
    contentSection.style.marginBottom = '3rem';
    const sectionHeading = document.createElement('h2');
    sectionHeading.classList.add('dictu-heading', 'dictu-heading--level-2');
    sectionHeading.innerText = 'Over dit Design System';
    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('dictu-paragraph');
    contentParagraph.innerText = 'Dit design system biedt een uitgebreide set van herbruikbare componenten die zijn ontworpen volgens de Nederlandse toegankelijkheidsrichtlijnen. Alle componenten zijn getest op gebruiksvriendelijkheid en toegankelijkheid.';

    // Button Section
    const buttonSection = document.createElement('section');
    buttonSection.style.marginBottom = '3rem';
    const buttonHeading = document.createElement('h3');
    buttonHeading.classList.add('dictu-heading', 'dictu-heading--level-3');
    buttonHeading.innerText = 'Voorbeelden van Componenten';
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '1rem';
    buttonContainer.style.flexWrap = 'wrap';
    buttonContainer.style.marginTop = '1rem';

    // Primary Button
    const primaryButton = document.createElement('button');
    primaryButton.classList.add('dictu-button', 'dictu-button--primary-action', 'dictu-focus-ring');
    primaryButton.innerText = 'Primaire Actie';

    // Secondary Button
    const secondaryButton = document.createElement('button');
    secondaryButton.classList.add('dictu-button', 'dictu-button--secondary-action', 'dictu-focus-ring');
    secondaryButton.innerText = 'Secundaire Actie';

    // Subtle Button with Icon
    const subtleButton = document.createElement('button');
    subtleButton.classList.add('dictu-button', 'dictu-button--subtle', 'dictu-focus-ring');
    subtleButton.innerHTML = '<span class="dictu-icon" aria-hidden="true"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.37032 2.5058C7.90009 1.55647 8.90228 0.967743 9.99 0.967743C11.0777 0.967743 12.0799 1.55646 12.6097 2.50578L19.7052 14.748C19.7287 14.7887 19.7494 14.8309 19.767 14.8745C20.1397 15.7958 20.032 16.8418 19.4793 17.6678C18.9267 18.4938 18.0008 18.9925 17.007 18.9995L17 18.9995H3C2.98172 18.9995 2.96356 18.999 2.94552 18.998C2.91027 19 2.87456 19 2.83851 18.9982C1.86882 18.9482 0.983287 18.432 0.461991 17.6128C-0.0593058 16.7936 -0.151893 15.7728 0.213514 14.8732C0.231014 14.8301 0.251498 14.7883 0.274816 14.748L7.37032 2.5058Z" fill="#0A2750"/></svg></span> Met Icoon';

    // Links Section
    const linksSection = document.createElement('section');
    linksSection.style.marginBottom = '3rem';
    const linksHeading = document.createElement('h3');
    linksHeading.classList.add('dictu-heading', 'dictu-heading--level-3');
    linksHeading.innerText = 'Nuttige Links';
    const linkParagraph = document.createElement('p');
    linkParagraph.classList.add('dictu-paragraph');
    const exampleLink = document.createElement('a');
    exampleLink.classList.add('dictu-link');
    exampleLink.href = '#';
    exampleLink.innerText = 'Meer informatie over toegankelijkheid';
    linkParagraph.appendChild(document.createTextNode('Voor meer details, bekijk '));
    linkParagraph.appendChild(exampleLink);
    linkParagraph.appendChild(document.createTextNode(' op onze website.'));

    // Footer Section with Link List
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#f8f9fa';
    footer.style.padding = '2rem';
    footer.style.marginTop = '3rem';
    footer.style.borderTop = '1px solid #e9ecef';
    const footerHeading = document.createElement('h3');
    footerHeading.classList.add('dictu-heading', 'dictu-heading--level-3');
    footerHeading.innerText = 'Footer Links';
    const linkList = document.createElement('ul');
    linkList.classList.add('dictu-link-list');
    const footerLinks = [{
      label: 'Contact',
      href: '#'
    }, {
      label: 'Colofon',
      href: '#'
    }, {
      label: 'Toegankelijkheid',
      href: '#'
    }, {
      label: 'Privacy',
      href: '#'
    }];
    footerLinks.forEach(linkData => {
      const listItem = document.createElement('li');
      listItem.classList.add('dictu-link-list__item');
      const link = document.createElement('a');
      link.classList.add('dictu-link', 'dictu-link-list__link');
      link.href = linkData.href;
      link.innerHTML = \`<span class="dictu-icon" role="presentation" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/></svg></span>\${linkData.label}\`;
      listItem.appendChild(link);
      linkList.appendChild(listItem);
    });

    // Assemble the page
    page.appendChild(skipLink);
    header.appendChild(nav);
    page.appendChild(header);
    logoSection.appendChild(logo);
    main.appendChild(logoSection);
    heroSection.appendChild(mainHeading);
    heroSection.appendChild(leadParagraph);
    main.appendChild(heroSection);
    contentSection.appendChild(sectionHeading);
    contentSection.appendChild(contentParagraph);
    main.appendChild(contentSection);
    buttonContainer.appendChild(primaryButton);
    buttonContainer.appendChild(secondaryButton);
    buttonContainer.appendChild(subtleButton);
    buttonSection.appendChild(buttonHeading);
    buttonSection.appendChild(buttonContainer);
    main.appendChild(buttonSection);
    linksSection.appendChild(linksHeading);
    linksSection.appendChild(linkParagraph);
    main.appendChild(linksSection);
    page.appendChild(main);
    footer.appendChild(footerHeading);
    footer.appendChild(linkList);
    page.appendChild(footer);
    return page;
  },
  parameters: {
    docs: {
      description: {
        story: 'Een complete voorbeeldpagina die alle NLDS componenten toont in een realistische layout. Inclusief navigatie, content secties, buttons, links en footer.'
      }
    }
  }
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const K=["InformatiePagina"];export{h as InformatiePagina,K as __namedExportsOrder,J as default};
