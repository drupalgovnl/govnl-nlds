import{L as p}from"./label.component-DIIE1Bz3.js";const g={args:{value:"Dit is een label",variant:"default",required:!1},argTypes:{value:{control:"string",description:"De tekst in de label"},variant:{control:"radio",description:"Variant van de label",options:["default","strong"]},targetId:{control:"string",description:"De Id van het labelbare form element"},required:{control:"boolean",description:"Of het labelbare form element required is of niet"},requiredText:{control:"string",description:"De text voor het required gedeelte"}},component:p,tags:["wip"],title:"Componenten/Form elements/Label"},e={args:{targetId:"form-input-1"}},r={args:{targetId:"form-input-2",required:!0,requiredMsg:"(Verplicht)"}},t={args:{targetId:"form-input-3",value:"Dit is een strong label",variant:"strong"}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-1'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-2',
    required: true,
    requiredMsg: '(Verplicht)'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-3',
    value: 'Dit is een strong label',
    variant: 'strong'
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const m=["LabelDefault","LabelRequired","LabelStrong"],f=Object.freeze(Object.defineProperty({__proto__:null,LabelDefault:e,LabelRequired:r,LabelStrong:t,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{f as L,e as a,t as b,r as c};
