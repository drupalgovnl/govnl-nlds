/* empty css              *//* empty css              */import{I as E}from"./icon.component-X7CMXdF1.js";const A=`<!-- @license CC0-1.0 -->

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/navigation-bar
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="node_modules/@dictu/navigation-bar/dist/index.css"
/>
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/navigation-bar/dist/index.css";
\`\`\`
`,D=({items:n=[],expanded:e=!1,isMobile:a=!1,menuId:t,classNames:i=[]})=>{const r=document.createElement("nav");r.classList.add("dictu-navigation-bar",...i),r.setAttribute("aria-label","Hoofdnavigatie"),r.setAttribute("role","navigation");const T='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>',R='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" /></svg>',s=document.createElement("button");return s.classList.add("dictu-navigation-bar__toggle"),s.setAttribute("aria-controls",t),s.setAttribute("aria-expanded",e),s.setAttribute("aria-haspopup",!0),s.innerText="Menu",s.insertAdjacentElement("afterbegin",E({icon:e?R:T,classes:["dictu-navigation-bar__menu-icon"]})),r.appendChild(s),r.appendChild(H(n,a,t,e)),r},H=(n,e,a,t)=>{const i=document.createElement("ul");return i.classList.add("dictu-navigation-bar__list"),i.id=a,i.setAttribute("role","menubar"),e&&!t&&i.classList.add("dictu-display-none"),n.forEach(r=>{i.appendChild(y(r))}),i},y=n=>{const e=document.createElement("li");return e.classList.add("dictu-navigation-bar__item"),"children"in n&&n.children!=null?(e.appendChild(Z(n.title,n.id,n.expanded)),e.appendChild(O(n.children,n.id,n.expanded))):e.appendChild(U(n)),e},U=n=>{const e=document.createElement("a");return e.classList.add("dictu-navigation-bar__link","dictu-focus-ring"),e.setAttribute("role","menuitem"),e.href=n.link,e.innerHTML=n.title,e},O=(n,e,a=!1)=>{const t=document.createElement("div");return t.classList.add("dictu-navigation-bar__submenu"),t.id=e,t.appendChild(z(n)),a||t.classList.add("dictu-display-none"),t},Z=(n,e,a=!1)=>{const t=document.createElement("button");t.classList.add("dictu-navigation-bar__submenu-toggler","dictu-focus-ring"),t.innerHTML=n,t.setAttribute("aria-controls",e),t.setAttribute("aria-expanded",a),t.setAttribute("aria-haspopup",!0);const r=E({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});return t.appendChild(r),t},z=n=>{const e=document.createElement("ul");return e.classList.add("dictu-navigation-bar__submenu-list"),e.setAttribute("role","menu"),n.forEach(a=>{const t=document.createElement("li");t.classList.add("dictu-navigation-bar__submenu-item");const i=document.createElement("a");i.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link","dictu-focus-ring"),i.href=a.link,i.innerText=a.label,i.setAttribute("role","menuitem"),t.appendChild(i),e.appendChild(t)}),e},J={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{link:"https://www.ez.nl",title:"Ministerie van Economische Zaken"},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!1,isMobile:!1,menuId:"default-menu"},argTypes:{items:{control:"array"},expanded:{control:"boolean"},isMobile:{control:"boolean"}},parameters:{docs:{description:{component:A}}},component:D,tags:["wip"],title:"Componenten/Navigation Bar"},l={},o={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!1,isMobile:!0,menuId:"default-mobile-menu"}},u={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!0,isMobile:!0,menuId:"default-mobile-menu"}},d={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",expanded:!0,children:[{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0,isMobile:!0,menuId:"default-mobile-menu-submenu"}},c={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",children:[{link:"#",title:"Submenu item 1"},{link:"#",title:"Submenu item 2"},{link:"#",title:"Submenu item 3"},{link:"#",title:"Submenu item 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}},m={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",expanded:!0,children:[{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}};var b,p,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    expanded: false,
    isMobile: true,
    menuId: 'default-mobile-menu'
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,S,k;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu'
  }
}`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,x,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: [{
        href: '#',
        label: 'Subpagina 1'
      }, {
        href: '#',
        label: 'Subpagina 2'
      }, {
        href: '#',
        label: 'Subpagina 3'
      }, {
        href: '#',
        label: 'Subpagina 4'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu-submenu'
  }
}`,...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var _,M,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      title: 'Submenu',
      id: 'submenu-1',
      children: [{
        link: '#',
        title: 'Submenu item 1'
      }, {
        link: '#',
        title: 'Submenu item 2'
      }, {
        link: '#',
        title: 'Submenu item 3'
      }, {
        link: '#',
        title: 'Submenu item 4'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: true
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,I,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: [{
        href: '#',
        label: 'Subpagina 1'
      }, {
        href: '#',
        label: 'Subpagina 2'
      }, {
        href: '#',
        label: 'Subpagina 3'
      }, {
        href: '#',
        label: 'Subpagina 4'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: true
  }
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const G=["NavigationBarDefault","NavigationBarMobile","NavigationBarMobileExpanded","NavigationBarMobileExpandedSubmenu","NavigationBarSubmenu","NavigationBarSubmenuOpen"],K=Object.freeze(Object.defineProperty({__proto__:null,NavigationBarDefault:l,NavigationBarMobile:o,NavigationBarMobileExpanded:u,NavigationBarMobileExpandedSubmenu:d,NavigationBarSubmenu:c,NavigationBarSubmenuOpen:m,__namedExportsOrder:G,default:J},Symbol.toStringTag,{value:"Module"}));export{K as N,A as R,l as a,c as b,m as c};
