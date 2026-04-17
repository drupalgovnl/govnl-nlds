import{H as V}from"./heading.component-CysBehLB.js";import{P as W}from"./paragraph.component-MjdFU0yj.js";/* empty css              *//* empty css              *//* empty css              */const u=({content:e,id:t,ariaLabel:d,title:o,gap:m,classNames:C=[]})=>{const a=document.createElement("section");if(a.classList.add("dictu-section",...C),m!=="none"&&a.classList.add(`dictu-section--gap-${m}`),o){const r=V({content:o,level:2});t&&(r.id=t,a.setAttribute("aria-labelledby",t)),a.appendChild(r)}if(e){if(typeof e=="string"){const G=new DOMParser().parseFromString(e,"text/html"),g=document.createDocumentFragment();Array.from(G.body.childNodes).forEach(O=>{g.appendChild(O.cloneNode(!0))}),a.appendChild(g)}e instanceof HTMLElement&&a.appendChild(e),e instanceof Array&&e.forEach(r=>{r instanceof HTMLElement&&a.appendChild(r)})}return d&&!o&&a.setAttribute("aria-label",d),a},F={args:{title:"Sectie titel",id:"page-section-1",gap:"none"},argTypes:{content:{control:"text",description:"De HTML inhoud van de page-section"},id:{control:"text",description:"Sectie ID voor navigatie en toegankelijkheid"},ariaLabel:{control:"text",description:"Toegankelijke naam voor de sectie"},title:{control:"text",description:"Titel van de sectie, gebruikt voor toegankelijkheid en structuur"},gap:{control:"radio",options:["none","small","medium","large"],description:"Het formaat van de gap tussen elementen in de section",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}}},component:u,render:e=>{const t=[];return["Dit is een page-section component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit."].forEach(o=>{const m=W({text:o});t.push(m)}),u({...e,content:t})},title:"Componenten/Page Section"},s={args:{}},n={args:{title:"",ariaLabel:"Voorbeeld sectie met aria label"}},i={args:{title:""}},c={args:{gap:"small"}},l={args:{gap:"medium"}},p={args:{gap:"large"}};var S,f,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var P,h,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: '',
    ariaLabel: 'Voorbeeld sectie met aria label'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,T,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: ''
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var v,x,A;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    gap: 'small'
  }
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var D,E,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    gap: 'medium'
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var H,_,j;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const N=["DefaultPageSection","AriaLabelPageSection","WithoutTitlePageSection","SmallGapPageSection","MediumGapPageSection","LargeGapPageSection"],B=Object.freeze(Object.defineProperty({__proto__:null,AriaLabelPageSection:n,DefaultPageSection:s,LargeGapPageSection:p,MediumGapPageSection:l,SmallGapPageSection:c,WithoutTitlePageSection:i,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{n as A,s as D,p as L,l as M,B as P,c as S,i as W};
