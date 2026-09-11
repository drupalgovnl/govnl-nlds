/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{I as C}from"./icon.component-X7CMXdF1.js";const Y=`<!-- @license CC0-1.0 -->

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
`,ee=({items:n=[],expanded:a,isMobile:i,menuId:l,classNames:t=[]})=>{const e=document.createElement("nav");e.classList.add("dictu-navigation-bar",...t),e.setAttribute("aria-label","Hoofdnavigatie"),e.setAttribute("role","navigation");const b='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>',r='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" /></svg>',u=document.createElement("button");return u.classList.add("dictu-navigation-bar__toggle"),u.setAttribute("aria-controls",l),u.setAttribute("aria-expanded",a),u.setAttribute("aria-haspopup",!0),u.innerText="Menu",u.insertAdjacentElement("afterbegin",C({icon:a?r:b,classes:["dictu-navigation-bar__menu-icon"]})),e.appendChild(u),e.appendChild(ne(n,i,l,a)),e},ne=(n,a,i,l)=>{const t=document.createElement("ul");return t.classList.add("dictu-navigation-bar__list"),t.id=i,t.setAttribute("role","menubar"),a&&!l&&t.classList.add("dictu-display-none"),n.forEach(e=>{t.appendChild(ae(e,a))}),t},ae=(n,a)=>{const i=document.createElement("li");return i.classList.add("dictu-navigation-bar__item"),"children"in n&&n.children!=null?(n.isBigMenu&&i.classList.add("dictu-navigation-bar__item--big-menu"),i.appendChild(le(n.title,n.id,n.expanded)),i.appendChild(te(n.children,n.id,n.expanded,n.isBigMenu,a))):i.appendChild(ie(n)),i},ie=n=>{const a=document.createElement("a");return a.classList.add("dictu-navigation-bar__link","dictu-focus-ring"),a.setAttribute("role","menuitem"),a.href=n.link,a.innerHTML=n.title,a},le=(n,a,i=!1)=>{const l=document.createElement("button");l.classList.add("dictu-navigation-bar__submenu-toggler","dictu-focus-ring"),l.innerHTML=n,l.setAttribute("aria-controls",a),l.setAttribute("aria-expanded",i),l.setAttribute("aria-haspopup",!0);const e=C({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});return l.appendChild(e),l},te=(n,a,i=!1,l=!1,t=!1)=>{const e=document.createElement("div");if(e.classList.add(l?"dictu-navigation-bar__big-menu":"dictu-navigation-bar__submenu"),e.id=a,l){const b=document.createElement("div");b.classList.add("dictu-navigation-bar__grid","dictu-grid");let r=[];const u=[];n.forEach(s=>{(s.href||s.link)==="<nolink>"?(r=[],u.push(r),r.push(s)):(r.length===0&&u.push(r),r.push(s))});const k=Math.min(Math.max(u.length,1),4);b.classList.add(`dictu-grid--columns-${k}`),u.forEach((s,o)=>{const d=document.createElement("div");d.classList.add("dictu-navigation-bar__column"),d.appendChild(ue(s,a,o,t)),b.appendChild(d)}),e.appendChild(b)}else e.appendChild(re(n));return i||e.classList.add("dictu-display-none"),e},W=(n,a=!1)=>{const i=document.createElement("li");i.classList.add("dictu-navigation-bar__submenu-item");const l=n.href||n.link,t=n.label||n.title;if(l==="<nolink>"){const e=document.createElement("span");e.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link"),e.innerText=t,i.appendChild(e)}else{const e=document.createElement("a");if(e.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link","dictu-focus-ring"),e.href=l,e.innerText=t,e.setAttribute("role","menuitem"),a){const b=new C({icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z"/></svg>',classes:["dictu-navigation-bar__item-icon"]});e.insertAdjacentElement("afterbegin",b)}i.appendChild(e)}return i},re=n=>{const a=document.createElement("ul");return a.classList.add("dictu-navigation-bar__submenu-list"),a.setAttribute("role","menu"),n.forEach(i=>{a.appendChild(W(i,!1))}),a},ue=(n,a,i,l)=>{const t=document.createDocumentFragment(),e=document.createElement("ul");e.classList.add("dictu-navigation-bar__submenu-list"),e.setAttribute("role","menu"),l&&e.classList.add("dictu-display-none");const b=`${a}-${i+1}`;return e.id=b,n.forEach(r=>{const u=r.href||r.link,k=r.label||r.title;if(u==="<nolink>"){const s=document.createElement("div");s.classList.add("dictu-navigation-bar__submenu-heading");const o=document.createElement("button");o.classList.add("dictu-navigation-bar__submenu-toggler","dictu-navigation-bar__big-menu-toggler","dictu-navigation-bar__big-menu-toggler--mobile","dictu-focus-ring");const d=document.createElement("span");d.innerText=k,o.appendChild(d),o.setAttribute("aria-controls",b),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-haspopup","true");const X=C({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});o.appendChild(X);const x=document.createElement("span");x.classList.add("dictu-navigation-bar__submenu-heading-title","dictu-navigation-bar__submenu-heading-title--desktop"),x.innerText=k,s.appendChild(o),s.appendChild(x),t.appendChild(s)}else e.appendChild(W(r,!0))}),e.childNodes.length>0&&t.appendChild(e),t},be={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{link:"https://www.ez.nl",title:"Ministerie van Economische Zaken"},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!1,isMobile:!1,menuId:"default-menu"},argTypes:{items:{control:"array"},expanded:{control:"boolean"},isMobile:{control:"boolean"},isBigMenu:{control:"boolean"}},parameters:{docs:{description:{component:Y}}},component:ee,tags:["wip"],title:"Componenten/Navigation Bar"},g={},p={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!1,isMobile:!0,menuId:"default-mobile-menu"}},c={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!0,isMobile:!0,menuId:"default-mobile-menu"}},h={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",expanded:!0,children:[{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0,isMobile:!0,menuId:"default-mobile-menu-submenu"}},f={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",children:[{link:"#",title:"Submenu item 1"},{link:"#",title:"Submenu item 2"},{link:"#",title:"Submenu item 3"},{link:"#",title:"Submenu item 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}},S={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Submenu",id:"submenu-1",expanded:!0,children:[{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}},m={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Bigmenu",id:"submenu-1",expanded:!1,isBigMenu:!0,children:[{href:"<nolink>",label:"Subsectie A"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie B"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie C"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie D"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!1}},v={args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Bigmenu",id:"submenu-1",expanded:!0,isBigMenu:!0,children:[{href:"<nolink>",label:"Subsectie A"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie B"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie C"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie D"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0}},w={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{title:"Bigmenu",id:"submenu-1",expanded:!0,isBigMenu:!0,children:[{href:"<nolink>",label:"Subsectie A"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie B"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie C"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"},{href:"<nolink>",label:"Subsectie D"},{href:"#",label:"Subpagina 1"},{href:"#",label:"Subpagina 2"},{href:"#",label:"Subpagina 3"},{href:"#",label:"Subpagina 4"},{href:"#",label:"Subpagina 5"},{href:"#",label:"Subpagina 6"}]},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],expanded:!0,isMobile:!0}};var _,B,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var M,j,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var E,N,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var A,R,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(R=h.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var U,O,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(O=f.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var y,Z,z;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var G,J,$;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: false,
      isBigMenu: true,
      children: [{
        href: '<nolink>',
        label: 'Subsectie A'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie B'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie C'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie D'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: false
  }
}`,...($=(J=m.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var F,P,q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: [{
      link: 'https://www.dictu.nl',
      title: 'Dienst ICT Uitvoering'
    }, {
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: [{
        href: '<nolink>',
        label: 'Subsectie A'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie B'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie C'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie D'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: true
  }
}`,...(q=(P=v.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var K,Q,V;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: [{
        href: '<nolink>',
        label: 'Subsectie A'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie B'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie C'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }, {
        href: '<nolink>',
        label: 'Subsectie D'
      }, {
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
      }, {
        href: '#',
        label: 'Subpagina 5'
      }, {
        href: '#',
        label: 'Subpagina 6'
      }]
    }, {
      link: 'https://www.rijksoverheid.nl',
      title: 'Rijksoverheid'
    }],
    expanded: true,
    isMobile: true
  }
}`,...(V=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const se=["NavigationBarDefault","NavigationBarMobile","NavigationBarMobileExpanded","NavigationBarMobileExpandedSubmenu","NavigationBarSubmenu","NavigationBarSubmenuOpen","NavigationBarBigMenu","NavigationBarBigMenuOpen","NavigationBarMobileBigMenuOpen"],fe=Object.freeze(Object.defineProperty({__proto__:null,NavigationBarBigMenu:m,NavigationBarBigMenuOpen:v,NavigationBarDefault:g,NavigationBarMobile:p,NavigationBarMobileBigMenuOpen:w,NavigationBarMobileExpanded:c,NavigationBarMobileExpandedSubmenu:h,NavigationBarSubmenu:f,NavigationBarSubmenuOpen:S,__namedExportsOrder:se,default:be},Symbol.toStringTag,{value:"Module"}));export{fe as N,Y as R,g as a,f as b,S as c,v as d};
