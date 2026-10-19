/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{I as S}from"./icon.component-dCjJmEUh.js";const de=`<!-- @license CC0-1.0 -->

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
`,le=({items:e=[],expanded:t,isMobile:i,menuId:a,classNames:s=[]})=>{const n=document.createElement("nav");n.classList.add("dictu-navigation-bar",...s),n.setAttribute("aria-label","Hoofdnavigatie"),n.setAttribute("role","navigation");const o='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" /></svg>',d='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" /></svg>',r=document.createElement("button");return r.classList.add("dictu-navigation-bar__toggle"),r.setAttribute("aria-controls",a),r.setAttribute("aria-expanded",t),r.setAttribute("aria-haspopup",!0),r.innerText="Menu",r.insertAdjacentElement("afterbegin",S({icon:t?d:o,classNames:["dictu-navigation-bar__menu-icon"]})),n.appendChild(r),n.appendChild(ce(e,i,a,t)),n},ce=(e,t,i,a)=>{const s=document.createElement("ul");return s.classList.add("dictu-navigation-bar__list"),s.id=i,s.setAttribute("role","menubar"),t&&!a&&s.classList.add("dictu-display-none"),e.forEach(n=>{s.appendChild(ge(n,t))}),s},ge=(e,t)=>{const i=document.createElement("li");return i.classList.add("dictu-navigation-bar__item"),i.setAttribute("role","none"),"children"in e&&e.children!=null?(e.isBigMenu&&i.classList.add("dictu-navigation-bar__item--big-menu"),i.appendChild(pe(e.title,e.id,e.expanded)),i.appendChild(be(e.children,e.id,e.expanded,e.isBigMenu,t))):i.appendChild(me(e)),i},me=e=>{const t=document.createElement("a");return t.classList.add("dictu-navigation-bar__link","dictu-focus-ring"),t.setAttribute("role","menuitem"),t.href=e.link,t.innerHTML=e.title,t},pe=(e,t,i=!1)=>{const a=document.createElement("button");a.classList.add("dictu-navigation-bar__submenu-toggler","dictu-focus-ring"),a.innerHTML=e,a.setAttribute("role","menuitem"),a.setAttribute("aria-controls",t),a.setAttribute("aria-expanded",i),a.setAttribute("aria-haspopup",!0);const n=S({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});return a.appendChild(n),a},be=(e,t,i=!1,a=!1,s=!1)=>{const n=document.createElement("div");if(n.classList.add(a?"dictu-navigation-bar__big-menu":"dictu-navigation-bar__submenu"),n.id=t,a){const o=document.createElement("div");o.classList.add("dictu-navigation-bar__grid","dictu-grid");let d=[];const r=[];e.forEach(l=>{(l.href||l.link)==="<nolink>"?(d=[],r.push(d),d.push(l)):(d.length===0&&r.push(d),d.push(l))});const u=Math.min(Math.max(r.length,1),4);o.classList.add(`dictu-grid--columns-${u}`),r.forEach((l,p)=>{const c=document.createElement("div");c.classList.add("dictu-navigation-bar__column"),c.appendChild(he(l,t,p,s)),o.appendChild(c)}),n.appendChild(o)}else n.appendChild(ve(e));return i||n.classList.add("dictu-display-none"),n},oe=(e,t=!1)=>{const i=document.createElement("li");i.classList.add("dictu-navigation-bar__submenu-item"),i.setAttribute("role","none");const a=e.href||e.link,s=e.label||e.title;if(a==="<nolink>"){const n=document.createElement("span");n.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link"),n.innerText=s,i.appendChild(n)}else{const n=document.createElement("a");if(n.classList.add("dictu-navigation-bar__link","dictu-navigation-bar__submenu-link","dictu-focus-ring"),n.href=a,n.innerText=s,n.setAttribute("role","menuitem"),t){const o=new S({icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z"/></svg>',classNames:["dictu-navigation-bar__item-icon"]});n.insertAdjacentElement("afterbegin",o)}i.appendChild(n)}return i},ve=e=>{const t=document.createElement("ul");return t.classList.add("dictu-navigation-bar__submenu-list"),t.setAttribute("role","menu"),e.forEach(i=>{t.appendChild(oe(i,!1))}),t},he=(e,t,i,a)=>{const s=document.createDocumentFragment(),n=document.createElement("ul");n.classList.add("dictu-navigation-bar__submenu-list"),n.setAttribute("role","menu");const o=e.find(u=>(u.href||u.link)==="<nolink>"),d=o?o.expanded===!0||o.expanded==="true":!1;a&&!d&&n.classList.add("dictu-display-none");const r=`${t}-${i+1}`;return n.id=r,e.forEach(u=>{const l=u.href||u.link,p=u.label||u.title;if(l==="<nolink>"){const c=document.createElement("div");c.classList.add("dictu-navigation-bar__submenu-heading");const g=document.createElement("button");g.classList.add("dictu-navigation-bar__submenu-toggler","dictu-navigation-bar__big-menu-toggler","dictu-navigation-bar__big-menu-toggler--mobile","dictu-focus-ring"),g.setAttribute("role","menuitem");const A=document.createElement("span");A.innerText=p,g.appendChild(A),g.setAttribute("aria-controls",r),g.setAttribute("aria-expanded",u.expanded??"false"),g.setAttribute("aria-haspopup","true");const ue=S({icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"/></svg>'});g.appendChild(ue);const E=document.createElement("span");E.classList.add("dictu-navigation-bar__submenu-heading-title","dictu-navigation-bar__submenu-heading-title--desktop"),E.innerText=p,c.appendChild(g),c.appendChild(E),s.appendChild(c)}else n.appendChild(oe(u,!0))}),n.childNodes.length>0&&s.appendChild(n),s},fe=[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},{link:"https://www.ez.nl",title:"Ministerie van Economische Zaken"},{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],b=e=>Array.from({length:e},(t,i)=>({href:"#",label:`Subpagina ${i+1}`})),N=b(4),k=(e=!1)=>[{href:"<nolink>",label:"Subsectie A",...e&&{expanded:!0}},...b(6),{href:"<nolink>",label:"Subsectie B"},...b(6),{href:"<nolink>",label:"Subsectie C"},...b(6),{href:"<nolink>",label:"Subsectie D"},...b(6)],m=e=>[{link:"https://www.dictu.nl",title:"Dienst ICT Uitvoering"},e,{link:"https://www.rijksoverheid.nl",title:"Rijksoverheid"}],Ce={args:{items:fe,expanded:!1,isMobile:!1,menuId:"default-menu"},argTypes:{items:{control:"array"},expanded:{control:"boolean"},isMobile:{control:"boolean"},isBigMenu:{control:"boolean"}},parameters:{docs:{description:{component:de}}},component:le,tags:["wip"],title:"Componenten/Navigation Bar"},v={},h={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!1,isMobile:!0,menuId:"default-mobile-menu"}},f={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{expanded:!0,isMobile:!0,menuId:"default-mobile-menu"}},C={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:m({title:"Submenu",id:"submenu-1",expanded:!0,children:N}),expanded:!0,isMobile:!0,menuId:"default-mobile-menu-submenu"}},x={args:{items:m({title:"Submenu",id:"submenu-1",children:N}),expanded:!0}},M={args:{items:m({title:"Submenu",id:"submenu-1",expanded:!0,children:N}),expanded:!0}},w={args:{items:m({title:"Bigmenu",id:"submenu-1",expanded:!1,isBigMenu:!0,children:k(!1)}),expanded:!1}},B={args:{items:m({title:"Bigmenu",id:"submenu-1",expanded:!0,isBigMenu:!0,children:k(!1)}),expanded:!0}},_={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:m({title:"Bigmenu",id:"submenu-1",expanded:!0,isBigMenu:!0,children:k(!1)}),expanded:!0,isMobile:!0}},L={globals:{viewport:{value:"mobile1",isRotated:!1}},args:{items:m({title:"Bigmenu",id:"submenu-1",expanded:!0,isBigMenu:!0,children:k(!0)}),expanded:!0,isMobile:!0}};var I,T,R;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(R=(T=v.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var j,O,y;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(O=h.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var H,Z,D;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var z,$,G;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: submenuChildren
    }),
    expanded: true,
    isMobile: true,
    menuId: 'default-mobile-menu-submenu'
  }
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,P,U;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      children: submenuChildren
    }),
    expanded: true
  }
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var F,q,K;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: withMenu({
      title: 'Submenu',
      id: 'submenu-1',
      expanded: true,
      children: submenuChildren
    }),
    expanded: true
  }
}`,...(K=(q=M.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,V,W;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: false,
      isBigMenu: true,
      children: getBigMenuChildren(false)
    }),
    expanded: false
  }
}`,...(W=(V=w.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(false)
    }),
    expanded: true
  }
}`,...(ee=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,te,ie;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(false)
    }),
    expanded: true,
    isMobile: true
  }
}`,...(ie=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,se,re;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  args: {
    items: withMenu({
      title: 'Bigmenu',
      id: 'submenu-1',
      expanded: true,
      isBigMenu: true,
      children: getBigMenuChildren(true)
    }),
    expanded: true,
    isMobile: true
  }
}`,...(re=(se=L.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const xe=["NavigationBarDefault","NavigationBarMobile","NavigationBarMobileExpanded","NavigationBarMobileExpandedSubmenu","NavigationBarSubmenu","NavigationBarSubmenuOpen","NavigationBarBigMenu","NavigationBarBigMenuOpen","NavigationBarMobileBigMenuOpen","NavigationBarMobileBigMenuOpenExpanded"],ke=Object.freeze(Object.defineProperty({__proto__:null,NavigationBarBigMenu:w,NavigationBarBigMenuOpen:B,NavigationBarDefault:v,NavigationBarMobile:h,NavigationBarMobileBigMenuOpen:_,NavigationBarMobileBigMenuOpenExpanded:L,NavigationBarMobileExpanded:f,NavigationBarMobileExpandedSubmenu:C,NavigationBarSubmenu:x,NavigationBarSubmenuOpen:M,__namedExportsOrder:xe,default:Ce},Symbol.toStringTag,{value:"Module"}));export{ke as N,de as R,v as a,x as b,M as c,B as d};
