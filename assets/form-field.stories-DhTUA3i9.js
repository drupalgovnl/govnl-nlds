import"./label.component-DIIE1Bz3.js";import{T as h}from"./text-input.component-CitIGVob.js";import{C as D}from"./checkbox.component-PLTYKzR5.js";import{F as a}from"./form-field.component-B7EXBhMX.js";const S={args:{error:!1,variant:"default",labelText:"Text",required:!1,requiredText:"(verplicht)",labelVariant:"default",descriptionText:"Description",errorText:"Dit is een foutmelding",errorIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10V6C9 5.44772 9.44771 5 10 5ZM9 14C9 13.4477 9.44771 13 10 13H10.01C10.5623 13 11.01 13.4477 11.01 14C11.01 14.5523 10.5623 15 10.01 15H10C9.44771 15 9 14.5523 9 14Z" /></svg>'},argTypes:{id:{control:"string",description:"De id van het inputveld"},variant:{control:"radio",description:"Variant van de form field",options:["default","inline"]},descriptionText:{control:"string",description:"De beschrijving van het inputveld"},labelText:{control:"string",description:"De tekst in de legend"},required:{control:"boolean",description:"Of er in de legend komt te staan dat het veld verplicht is"},labelVariant:{control:"radio",description:"Variant van de legend",options:["default","strong"]},error:{control:"boolean",description:"Of de form field een error state heeft of niet"},errorText:{control:"string",description:"De error message van de form field"},content:{description:"De inhoud van de form field"}},component:a,render:e=>a({...e,content:h({id:e.id,error:e.error})}),tags:["wip"],title:"Componenten/Form elements/Form field"},r={args:{id:"defaultFormField",required:!0,descriptionText:""}},o={args:{id:"errorFormField",error:!0,required:!0,descriptionText:""}},n={args:{id:"descriptionFormField",required:!0}},i={args:{id:"labelStrongFormField",labelVariant:"strong"}},t={args:{id:"inlineFormfield",variant:"inline"},render:e=>a({...e,content:D({id:e.id})})};var d,s,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'defaultFormField',
    required: true,
    descriptionText: ''
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'errorFormField',
    error: true,
    required: true,
    descriptionText: ''
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,F,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'descriptionFormField',
    required: true
  }
}`,...(g=(F=n.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var f,v,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'labelStrongFormField',
    labelVariant: 'strong'
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,b,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'inlineFormfield',
    variant: 'inline'
  },
  render: args => {
    return FormField({
      ...args,
      content: Checkbox({
        id: args.id
      })
    });
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const q=["DefaultFormField","ErrorFormField","DescriptionFormField","LabelStrongFormField","InlineFormField"],M=Object.freeze(Object.defineProperty({__proto__:null,DefaultFormField:r,DescriptionFormField:n,ErrorFormField:o,InlineFormField:t,LabelStrongFormField:i,__namedExportsOrder:q,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,o as E,M as F,t as I,i as L,n as a};
