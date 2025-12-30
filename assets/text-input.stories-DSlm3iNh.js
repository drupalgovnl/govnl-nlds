import{T as h}from"./text-input.component-CitIGVob.js";const S={args:{size:"default",error:!1,placeholder:"",disabled:!1},argTypes:{id:{control:"string",description:"De id van de text input"},error:{control:"boolean",description:"Of de text input een error heeft"},placeholder:{control:"string",description:"De placeholder in het input veld"},size:{control:"radio",description:"Grootte van de text input",options:["default","small"]},disabled:{control:"boolean",description:"De disabled state van de text input"}},component:h,tags:["wip"],title:"Componenten/Form elements/Text Input"},e={args:{id:"text-input-1"}},t={args:{id:"text-input-2",size:"small"}},r={args:{id:"text-input-3",error:!0}},a={args:{id:"text-input-4",disabled:!0}},s={args:{id:"text-input-5",placeholder:"Dit is een placeholder"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'text-input-1'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'text-input-2',
    size: 'small'
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'text-input-3',
    error: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,g,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'text-input-4',
    disabled: true
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var I,f,b;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'text-input-5',
    placeholder: 'Dit is een placeholder'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const D=["TextInputDefault","TextInputSmall","TextInputError","TextInputReadOnly","TextInputPlaceholder"],O=Object.freeze(Object.defineProperty({__proto__:null,TextInputDefault:e,TextInputError:r,TextInputPlaceholder:s,TextInputReadOnly:a,TextInputSmall:t,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{O as T,e as a,t as b,r as c,a as d,s as e};
