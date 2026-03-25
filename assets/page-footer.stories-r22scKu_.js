/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{P as j}from"./paragraph.component-MjdFU0yj.js";import{L as P}from"./link-list.component-C6_S2g_r.js";import{H as F}from"./heading.component-CzcCeUlG.js";import{P as L}from"./page-container.component-B2SpsN4Z.js";const A=({heading:e,text:i,columns:t,headingLevel:a=2,classNames:r=[]})=>{const c=document.createElement("footer");c.classList.add("dictu-page-footer",...r),c.setAttribute("role","contentinfo");const g=L({classNames:["dictu-page-footer__container",...r]});if(e||i){const n=document.createElement("div");n.classList.add("dictu-page-footer__text-container");const o=C(e,a);o&&n.appendChild(o);const h=W(i);h&&n.appendChild(h),g.appendChild(n)}if(t!=null&&t.length){const n=document.createElement("div");n.classList.add("dictu-page-footer__columns");const o=document.createDocumentFragment();t.forEach(h=>{o.appendChild(_(h,a))}),n.appendChild(o),g.appendChild(n)}return c.appendChild(g),c},W=e=>j({text:e,classNames:["dictu-page-footer__text"]}),C=(e,i)=>F({content:e,level:i}),z=e=>P({items:e,classNames:["dictu-page-footer__link-list"]}),_=(e,i)=>{const t=document.createElement("div");t.classList.add("dictu-page-footer__column");const a=C(e.title,i+1);a&&t.appendChild(a);const r=z(e.items);return r&&t.appendChild(r),t},B={args:{heading:"Footer heading",headingLevel:2},argTypes:{heading:{control:"text",description:"Main heading for the footer"},text:{control:"text",description:"Descriptive text for the footer"},columns:{control:"array",description:"Array of column objects with title and items"},headingLevel:{control:{type:"range",min:1,max:6},description:"Heading level for the main footer heading (affects column titles too)",table:{disable:!0}}},tags:["wip"],component:A,title:"Componenten/Page Footer"},l={args:{heading:"Footer heading",text:"Dit is een voettekst die extra informatie biedt.",columns:[{title:"Kop 1",items:[{label:"Privacy beleid",href:"/privacy",title:"Lees ons privacy beleid",ariaLabel:"Privacy beleid - meer informatie over hoe we uw gegevens gebruiken"},{label:"Algemene voorwaarden",href:"/voorwaarden",title:"Bekijk onze algemene voorwaarden"},{label:"Contact",href:"/contact",title:"Neem contact met ons op"}]},{title:"Kop 2",items:[{label:"Over ons",href:"/over-ons",title:"Meer informatie over onze organisatie"},{label:"Nieuws",href:"/nieuws",title:"Bekijk het laatste nieuws"},{label:"Externe link",href:"https://example.com",title:"Bezoek externe website",external:!0}]}]}},d={args:{heading:"Minimale Footer",text:"Een eenvoudige footer zonder kolommen.",columns:[]}},s={args:{heading:"",text:"",headingLevel:2,columns:[{title:"Heading 1",items:[{label:"Toegankelijkheidsverklaring",href:"/toegankelijkheid",title:"Lees onze toegankelijkheidsverklaring",ariaLabel:"Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen"},{label:"Sitemap",href:"/sitemap",title:"Bekijk de volledige sitemap"},{label:"PDF Handleiding",href:"/handleiding.pdf",title:"Download de handleiding als PDF",download:"handleiding.pdf"}]},{title:"Heading 2",items:[{label:"W3C WCAG Richtlijnen",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]},{title:"Heading 3",items:[{label:"W3C WCAG Richtlijnen 3",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]}]}};var m,p,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    text: 'Dit is een voettekst die extra informatie biedt.',
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
  }
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,k,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    heading: 'Minimale Footer',
    text: 'Een eenvoudige footer zonder kolommen.',
    columns: []
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,b,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      title: 'Heading 2',
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
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const y=["DefaultPageFooter","MinimalPageFooter","MinimalPageFooterOnlyColumns"],q=Object.freeze(Object.defineProperty({__proto__:null,DefaultPageFooter:l,MinimalPageFooter:d,MinimalPageFooterOnlyColumns:s,__namedExportsOrder:y,default:B},Symbol.toStringTag,{value:"Module"}));export{l as D,d as M,q as P,s as a};
