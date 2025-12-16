import{L as b}from"./link.component-C0Dy0Q2q.js";import{I as m}from"./icon.component-C3zd11FN.js";const N=({crumbs:n,classNames:B,isMobile:y})=>{const M=m({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z" fill="#475569"/>
</svg>
`,classes:["dictu-breadcrumbs__icon"]}),H=m({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4713 3.52864C10.7317 3.78899 10.7317 4.2111 10.4713 4.47145L6.94273 8.00004L10.4713 11.5286C10.7317 11.789 10.7317 12.2111 10.4713 12.4714C10.211 12.7318 9.78886 12.7318 9.52851 12.4714L5.52851 8.47144C5.26816 8.2111 5.26816 7.78899 5.52851 7.52864L9.52851 3.52864C9.78886 3.26829 10.211 3.26829 10.4713 3.52864Z" fill="#154273"/>
</svg>`,classes:["dictu-breadcrumbs__icon"]}),P=["dictu-breadcrumbs",...B||[]],o=document.createElement("nav"),c=document.createElement("ol");return o.setAttribute("aria-label","Breadcrumb"),o.classList.add(...P),c.classList.add("dictu-breadcrumbs__list"),n.forEach((e,d)=>{if(!e.label||!e.link)return;const a=document.createElement("li");a.classList.add("dictu-breadcrumbs__list-item");let l=b({content:`${e.label}`,href:e.link,classNames:"dictu-breadcrumbs__link"});d===n.length-1&&(l=b({content:e.label,href:e.link,classNames:"dictu-breadcrumbs__link"}),l.setAttribute("aria-current","page"),l.classList.add("dictu-breadcrumbs__link--current")),y?d===n.length-1&&n.length>=1&&(a.appendChild(H.cloneNode(!0)),a.appendChild(l)):(a.appendChild(l),d!==n.length-1&&a.appendChild(M.cloneNode(!0))),c.appendChild(a)}),o.appendChild(c),o},D={args:{crumbs:[{label:"Home",link:"/"},{label:"Category 1",link:"/category1"},{label:"Subcategory",link:"/category1/subcategory"}],classNames:[],isMobile:!1},argTypes:{crumbs:{type:"object",description:"An array of breadcrumb objects"},classNames:{type:"array",description:"Additional classes for the breadcrumbs component"},isMobile:{type:"boolean",description:"Flag to render mobile version"}},component:N,tags:["wip"],title:"Componenten/Breadcrumbs"},r={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina",link:"#"}]}},s={args:{crumbs:[{label:"Home",link:"/"}]}},i={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina",link:"#"},{label:"Onderwerp",link:"#"},{label:"Details",link:"#"}]}},t={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina",link:"#"}],isMobile:!0},parameters:{viewport:{defaultViewport:"mobileSmall"}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Pagina',
      link: '#'
    }, {
      label: 'Subpagina',
      link: '#'
    }]
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,f,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }]
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,v,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Pagina',
      link: '#'
    }, {
      label: 'Subpagina',
      link: '#'
    }, {
      label: 'Onderwerp',
      link: '#'
    }, {
      label: 'Details',
      link: '#'
    }]
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var L,C,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Pagina',
      link: '#'
    }, {
      label: 'Subpagina',
      link: '#'
    }],
    isMobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall'
    }
  }
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const E=["DefaultBreadcrumbs","SingleBreadcrumb","LongBreadcrumbs","MobileBreadcrumbs"],j=Object.freeze(Object.defineProperty({__proto__:null,DefaultBreadcrumbs:r,LongBreadcrumbs:i,MobileBreadcrumbs:t,SingleBreadcrumb:s,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{j as B,r as D,i as L,t as M};
