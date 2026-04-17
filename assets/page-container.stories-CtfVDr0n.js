import{P as o}from"./page-container.component-B2dkwwMD.js";import{P as h}from"./paragraph.component-MjdFU0yj.js";/* empty css              *//* empty css              */const D={args:{id:"page-container-1",gap:"none"},argTypes:{content:{control:"text",description:"De HTML inhoud van de page-container"},id:{control:"text",description:"Container ID voor navigatie en toegankelijkheid"},gap:{control:"radio",options:["none","small","medium","large"],description:"Het formaat van de gap tussen elementen in de container",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}}},component:o,render:f=>{const t=[];return["Dit is een page-container component die gestructureerde content gebieden biedt met consistente spacing en styling. De component is toegankelijk en gebruikt semantische HTML.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit."].forEach(S=>{const y=h({text:S});t.push(y)}),o({...f,content:t})},title:"Componenten/Page Container"},e={args:{}},a={args:{gap:"small"}},r={args:{gap:"medium"}},n={args:{gap:"large"}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: 'small'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    gap: 'medium'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var P,C,b;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  }
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const _=["DefaultPageContainer","SmallGapPageContainer","MediumGapPageContainer","LargeGapPageContainer"],k=Object.freeze(Object.defineProperty({__proto__:null,DefaultPageContainer:e,LargeGapPageContainer:n,MediumGapPageContainer:r,SmallGapPageContainer:a,__namedExportsOrder:_,default:D},Symbol.toStringTag,{value:"Module"}));export{e as D,n as L,r as M,k as P,a as S};
