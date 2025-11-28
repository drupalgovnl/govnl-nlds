function _({value:b,targetId:f,required:L,requiredMsg:o,variant:q}){const v=["dictu-label"],e=document.createElement("label");if(e.textContent=b,e.setAttribute("for",f),e.classList.add(...v),q==="strong"&&e.classList.add("dictu-label--strong"),L&&o){const n=document.createElement("span");n.classList.add("dictu-label__required"),n.textContent=o,e.appendChild(n)}return e}const D={args:{value:"Dit is een label",variant:"default",required:!1},argTypes:{value:{control:"string",description:"De tekst in de label"},variant:{control:"radio",description:"Variant van de label",options:["default","strong"]},targetId:{control:"string",description:"De Id van het labelbare form element"},required:{control:"boolean",description:"Of het labelbare form element required is of niet"},requiredText:{control:"string",description:"De text voor het required gedeelte"}},component:_,tags:["wip"],title:"Componenten/Form elements/Label"},t={args:{targetId:"form-input-1"}},r={args:{targetId:"form-input-2",required:!0,requiredMsg:"(Verplicht)"}},a={args:{targetId:"form-input-3",value:"Dit is een strong label",variant:"strong"}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-1'
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-2',
    required: true,
    requiredMsg: '(Verplicht)'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    targetId: 'form-input-3',
    value: 'Dit is een strong label',
    variant: 'strong'
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const I=["LabelDefault","LabelRequired","LabelStrong"],S=Object.freeze(Object.defineProperty({__proto__:null,LabelDefault:t,LabelRequired:r,LabelStrong:a,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{S as L,t as a,a as b,r as c};
