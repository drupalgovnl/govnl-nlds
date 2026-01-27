/* empty css              *//* empty css              */import{L as B}from"./link.component-KS7kVO7o.js";import{I as d}from"./icon.component-X7CMXdF1.js";const y=({crumbs:e,classNames:a,isMobile:n})=>{const w=d({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z" fill="#475569"/>
</svg>
`,classes:["dictu-breadcrumbs__icon"]}),_=d({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4713 3.52864C10.7317 3.78899 10.7317 4.2111 10.4713 4.47145L6.94273 8.00004L10.4713 11.5286C10.7317 11.789 10.7317 12.2111 10.4713 12.4714C10.211 12.7318 9.78886 12.7318 9.52851 12.4714L5.52851 8.47144C5.26816 8.2111 5.26816 7.78899 5.52851 7.52864L9.52851 3.52864C9.78886 3.26829 10.211 3.26829 10.4713 3.52864Z" fill="#154273"/>
</svg>`,classes:["dictu-breadcrumbs__icon"]}),C=["dictu-breadcrumbs",...a||[]],s=document.createElement("nav"),i=document.createElement("ol");if(s.setAttribute("aria-label","Breadcrumb"),s.classList.add(...C),i.classList.add("dictu-breadcrumbs__list"),n){if(!e.length>=1)return;const o=b(e.at(e.length-2));o.insertAdjacentElement("afterbegin",_.cloneNode(!0)),i.appendChild(o)}else e.forEach((o,S)=>{const c=b(o);S!==e.length-1&&c.insertAdjacentElement("beforeend",w.cloneNode(!0)),i.appendChild(c)});return s.appendChild(i),s},b=e=>{if(!e.label)return;const a=document.createElement("li");if(a.classList.add("dictu-breadcrumbs__list-item"),e.link){const n=B({content:`${e.label}`,href:e.link,classNames:"dictu-breadcrumbs__link"});a.appendChild(n)}else{const n=document.createElement("span");n.innerHTML=e.label,n.classList.add("dictu-breadcrumbs__current"),a.appendChild(n)}return a},M={args:{crumbs:[{label:"Home",link:"/"},{label:"Category 1",link:"/category1"},{label:"Subcategory"}],classNames:[],isMobile:!1},argTypes:{crumbs:{type:"object",description:"An array of breadcrumb objects"},classNames:{type:"array",description:"Additional classes for the breadcrumbs component"},isMobile:{type:"boolean",description:"Flag to render mobile version"}},component:y,tags:["wip"],title:"Componenten/Breadcrumbs"},l={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina"}]}},r={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina",link:"#"},{label:"Onderwerp",link:"#"},{label:"Details"}]}},t={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina"}],isMobile:!0},parameters:{viewport:{defaultViewport:"mobileSmall"}}};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Pagina',
      link: '#'
    }, {
      label: 'Subpagina'
    }]
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      label: 'Details'
    }]
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,L,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Pagina',
      link: '#'
    }, {
      label: 'Subpagina'
    }],
    isMobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall'
    }
  }
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const E=["DefaultBreadcrumbs","LongBreadcrumbs","MobileBreadcrumbs"],x=Object.freeze(Object.defineProperty({__proto__:null,DefaultBreadcrumbs:l,LongBreadcrumbs:r,MobileBreadcrumbs:t,__namedExportsOrder:E,default:M},Symbol.toStringTag,{value:"Module"}));export{x as B,l as D,r as L,t as M};
