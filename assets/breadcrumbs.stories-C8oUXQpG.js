/* empty css              *//* empty css              */import{L as E}from"./link.component-C0Dy0Q2q.js";import{I as b}from"./icon.component-X7CMXdF1.js";const I=({crumbs:e,classNames:n,isMobile:a})=>{const B=b({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52851 3.52864C5.78886 3.26829 6.21097 3.26829 6.47132 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.2111 10.4713 8.47144L6.47132 12.4714C6.21097 12.7318 5.78886 12.7318 5.52851 12.4714C5.26816 12.2111 5.26816 11.789 5.52851 11.5286L9.05711 8.00004L5.52851 4.47145C5.26816 4.2111 5.26816 3.78899 5.52851 3.52864Z" fill="#475569"/>
</svg>
`,classes:["dictu-breadcrumbs__icon"]}),y=b({icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4713 3.52864C10.7317 3.78899 10.7317 4.2111 10.4713 4.47145L6.94273 8.00004L10.4713 11.5286C10.7317 11.789 10.7317 12.2111 10.4713 12.4714C10.211 12.7318 9.78886 12.7318 9.52851 12.4714L5.52851 8.47144C5.26816 8.2111 5.26816 7.78899 5.52851 7.52864L9.52851 3.52864C9.78886 3.26829 10.211 3.26829 10.4713 3.52864Z" fill="#154273"/>
</svg>`,classes:["dictu-breadcrumbs__icon"]}),M=["dictu-breadcrumbs",...n||[]],i=document.createElement("nav"),o=document.createElement("ol");if(i.setAttribute("aria-label","Breadcrumb"),i.classList.add(...M),o.classList.add("dictu-breadcrumbs__list"),a){if(!e.length>=1)return;const c=m(e.at(e.length-2));c.insertAdjacentElement("afterbegin",y.cloneNode(!0)),o.appendChild(c)}else e.forEach((c,H)=>{const d=m(c);H!==e.length-1&&d.insertAdjacentElement("beforeend",B.cloneNode(!0)),o.appendChild(d)});return i.appendChild(o),i},m=e=>{if(!e.label)return;const n=document.createElement("li");if(n.classList.add("dictu-breadcrumbs__list-item"),e.link){const a=E({content:`${e.label}`,href:e.link,classNames:"dictu-breadcrumbs__link"});n.appendChild(a)}else{const a=document.createElement("span");a.innerHTML=e.label,a.classList.add("dictu-breadcrumbs__current"),n.appendChild(a)}return n},P={args:{crumbs:[{label:"Home",link:"/"},{label:"Category 1",link:"/category1"},{label:"Subcategory"}],classNames:[],isMobile:!1},argTypes:{crumbs:{type:"object",description:"An array of breadcrumb objects"},classNames:{type:"array",description:"Additional classes for the breadcrumbs component"},isMobile:{type:"boolean",description:"Flag to render mobile version"}},component:I,tags:["wip"],title:"Componenten/Breadcrumbs"},r={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina"}]}},l={args:{crumbs:[{label:"Home",link:"/"}]}},s={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina",link:"#"},{label:"Onderwerp",link:"#"},{label:"Details"}]}},t={args:{crumbs:[{label:"Home",link:"/"},{label:"Pagina",link:"#"},{label:"Subpagina"}],isMobile:!0},parameters:{viewport:{defaultViewport:"mobileSmall"}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,k,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Home',
      link: '/'
    }]
  }
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var L,v,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,_,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const j=["DefaultBreadcrumbs","SingleBreadcrumb","LongBreadcrumbs","MobileBreadcrumbs"],O=Object.freeze(Object.defineProperty({__proto__:null,DefaultBreadcrumbs:r,LongBreadcrumbs:s,MobileBreadcrumbs:t,SingleBreadcrumb:l,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{O as B,r as D,s as L,t as M,l as S};
