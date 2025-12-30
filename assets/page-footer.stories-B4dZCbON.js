/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */const L=({heading:e,text:t,columns:n,headingLevel:a=2,classNames:i=[]})=>{const o=document.createElement("footer");o.classList.add("dictu-page-footer",...i),o.setAttribute("role","contentinfo");const l=document.createElement("div");if(l.classList.add("dictu-page-footer__container","dictu-container"),e||t){const r=document.createElement("div");r.classList.add("dictu-page-footer__text-container");const d=x(e,a);d&&r.appendChild(d);const g=A(t);g&&r.appendChild(g),l.appendChild(r)}if(n!=null&&n.length){const r=document.createElement("div");r.classList.add("dictu-page-footer__columns");const d=document.createDocumentFragment();n.forEach(g=>{d.appendChild(F(g,a))}),r.appendChild(d),l.appendChild(r)}return o.appendChild(l),o},j=()=>{const e=document.createElement("span");return e.classList.add("dictu-icon","dictu-link-list__icon"),e.setAttribute("role","presentation"),e.innerHTML=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="currentColor"/>
  </svg>`,e},A=e=>{if(!e)return null;const t=document.createElement("p");return t.classList.add("dictu-page-footer-page-footer-paragraph","dictu-paragraph"),t.textContent=e,t},x=(e,t)=>{if(!e||!t)return null;const n=document.createElement(`h${t}`);return n.classList.add("dictu-page-footer-heading","dictu-heading",`dictu-heading--level-${t}`),n.textContent=e,n},E=e=>{const t=document.createElement("a");t.classList.add("dictu-link","dictu-link-list__link"),t.href=e.href||"#",t.appendChild(j());const n=document.createElement("span");return n.textContent=e.label||"",t.appendChild(n),[{condition:e.title,attr:"title",value:e.title},{condition:e.download,attr:"download",value:e.download},{condition:e.ariaLabel&&!e.external,attr:"aria-label",value:e.ariaLabel}].forEach(({condition:i,attr:o,value:l})=>{i&&t.setAttribute(o,l)}),e.external&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"),t.setAttribute("aria-label",e.ariaLabel||`${e.label} (opent in nieuw venster)`)),t},_=e=>{if(!(e!=null&&e.length))return null;const t=document.createElement("ul");t.classList.add("dictu-link-list","dictu-page-footer__link-list");const n=document.createDocumentFragment();return e.forEach(a=>{const i=document.createElement("li");i.classList.add("dictu-link-list__item"),i.appendChild(E(a)),n.appendChild(i)}),t.appendChild(n),t},F=(e,t)=>{const n=document.createElement("div");n.classList.add("dictu-page-footer__column");const a=x(e.title,t+1);a&&n.appendChild(a);const i=_(e.items);return i&&n.appendChild(i),n},P={args:{headingLevel:2},argTypes:{heading:{control:"text",description:"Main heading for the footer"},text:{control:"text",description:"Descriptive text for the footer"},columns:{control:"array",description:"Array of column objects with title and items"},headingLevel:{control:{type:"range",min:1,max:6},description:"Heading level for the main footer heading (affects column titles too)",table:{disable:!0}}},tags:["wip"],component:L,title:"Componenten/Page Footer"},s={args:{heading:"Footer heading",text:"Dit is een voettekst die extra informatie biedt.",columns:[{title:"Kop 1",items:[{label:"Privacy beleid",href:"/privacy",title:"Lees ons privacy beleid",ariaLabel:"Privacy beleid - meer informatie over hoe we uw gegevens gebruiken"},{label:"Algemene voorwaarden",href:"/voorwaarden",title:"Bekijk onze algemene voorwaarden"},{label:"Contact",href:"/contact",title:"Neem contact met ons op"}]},{title:"Kop 2",items:[{label:"Over ons",href:"/over-ons",title:"Meer informatie over onze organisatie"},{label:"Nieuws",href:"/nieuws",title:"Bekijk het laatste nieuws"},{label:"Externe link",href:"https://example.com",title:"Bezoek externe website",external:!0}]}]}},c={args:{heading:"Minimale Footer",text:"Een eenvoudige footer zonder kolommen.",columns:[]}},h={args:{heading:"",text:"",headingLevel:2,columns:[{title:"Heading 1",items:[{label:"Toegankelijkheidsverklaring",href:"/toegankelijkheid",title:"Lees onze toegankelijkheidsverklaring",ariaLabel:"Toegankelijkheidsverklaring - hoe wij toegankelijkheid waarborgen"},{label:"Sitemap",href:"/sitemap",title:"Bekijk de volledige sitemap"},{label:"PDF Handleiding",href:"/handleiding.pdf",title:"Download de handleiding als PDF",download:"handleiding.pdf"}]},{title:"Heading 2",items:[{label:"W3C WCAG Richtlijnen",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]},{title:"Heading 3",items:[{label:"W3C WCAG Richtlijnen 3",href:"https://www.w3.org/WAI/WCAG22/quickref/",title:"Bezoek de officiële WCAG 2.2 richtlijnen",external:!0},{label:"Nederlandse Overheid",href:"https://www.rijksoverheid.nl",title:"Bezoek de website van de Nederlandse overheid",external:!0}]}]}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,k,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: 'Minimale Footer',
    text: 'Een eenvoudige footer zonder kolommen.',
    columns: []
  }
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var v,w,C;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(w=h.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const W=["DefaultPageFooter","MinimalPageFooter","MinimalPageFooterOnlyColumns"],G=Object.freeze(Object.defineProperty({__proto__:null,DefaultPageFooter:s,MinimalPageFooter:c,MinimalPageFooterOnlyColumns:h,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,c as M,G as P,h as a};
