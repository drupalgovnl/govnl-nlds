/* empty css              *//* empty css              */import{I as N}from"./icon.component-X7CMXdF1.js";const E=`<!-- @license CC0-1.0 -->

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
`,I=({items:n=[],expanded:e=!1,isMobile:a=!1,menuId:t,classNames:i=[]})=>{const r=document.createElement("nav");r.classList.add("dictu-navigation-bar",...i),r.setAttribute("aria-label","Hoofdnavigatie"),r.setAttribute("role","navigation");const B='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>',j='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" /></svg>',s=document.createElement("button");return s.classList.add("dictu-navigation-bar__toggle"),s.setAttribute("aria-controls",t),s.setAttribute("aria-expanded",e),s.setAttribute("aria-haspopup",!0),s.innerText="Menu",s.insertAdjacentElement("afterbegin",N({icon:e?j:B,classes:["dictu-navigation-bar__menu-icon"]})),r.appendChild(s),r.appendChild(A(n,a,t,e)),r},A=(n,e,a,t)=>{const i=document.createElement("ul");return i.classList.add("dictu-navigation-bar__list"),i.id=a,i.setAttribute("role","menubar"),e&&!t&&i.classList.add("dictu-display-none"),n.forEach(r=>{i.appendChild(T(r))}),i},T=n=>{const e=document.createElement("li");return e.classList.add("dictu-navigation-bar__item"),"children"in n&&n.children!=null?(e.appendChild(H(n.title,n.id,n.expanded)),e.appendChild(R(n.children,n.id,n.expanded))):e.appendChild(D(n)),e},D=n=>{const e=document.createElement("a");return e.classList.add("dictu-navigation-bar__link","dictu-focus-ring"),e.setAttribute("role","menuitem"),e.href=n.link,e.innerHTML=n.title,e},R=(n,e,a=!1)=>{const t=document.createElement("div");return t.classList.add("dictu-navigation-bar__submenu"),t.id=e,t.appendChild(y(n)),a||t.classList.add("dictu-display-none"),t},H=(n,e,a=!1)=>{const t=document.createElement("button");t.classList.add("dictu-navigation-bar__submenu-toggler","dictu-focus-ring"),t.innerHTML=n,t.setAttribute("aria-controls",e),t.setAttribute("aria-expanded",a),t.setAttribute("aria-haspopup",!0);const r=N({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});return t.appendChild(r),t},y=n=>{const e=document.createElement("ul");return e.classList.add("dictu-navigation-bar__submenu-list"),e.setAttribute("role","menu"),n.forEach(a=>{const t=document.createElement("li");t.classList.add("dictu-navigation-bar__submenu-item");const i=document.createElement("a");i.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link","dictu-focus-ring"),i.href=a.link,i.innerText=a.label,i.setAttribute("role","menuitem"),t.appendChild(i),e.appendChild(t)}),e},O={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{link:"https://www.ez.nl",title:"Ministerie van Economische Zaken"},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!1,isMobile:!1,menuId:"default-menu"},argTypes:{items:{control:"array"},expanded:{control:"boolean"},isMobile:{control:"boolean"}},parameters:{docs:{description:{component:E}}},component:I,tags:["wip"],title:"Componenten/Navigation Bar"},o={},l={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!1,isMobile:!0,menuId:"default-mobile-menu"}},u={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!0,isMobile:!0,menuId:"default-mobile-menu"}},d={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",children:[{link:"#",title:"Submenu item 1"},{link:"#",title:"Submenu item 2"},{link:"#",title:"Submenu item 3"},{link:"#",title:"Submenu item 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}},c={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",expanded:!0,children:[{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,v,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,f,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,k,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var _,x,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(x=c.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Z=["NavigationBarDefault","NavigationBarDefaultMobile","NavigationBarDefaultMobileExpanded","NavigationBarSubmenu","NavigationBarSubmenuOpen"],G=Object.freeze(Object.defineProperty({__proto__:null,NavigationBarDefault:o,NavigationBarDefaultMobile:l,NavigationBarDefaultMobileExpanded:u,NavigationBarSubmenu:d,NavigationBarSubmenuOpen:c,__namedExportsOrder:Z,default:O},Symbol.toStringTag,{value:"Module"}));export{G as N,E as R,o as a,d as b,c};
