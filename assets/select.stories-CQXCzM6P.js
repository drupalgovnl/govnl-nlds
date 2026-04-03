/* empty css              */function z({id:y,name:C,options:s,required:I,inline:M,multiple:R,disabled:w,error:A,classNames:T=[]}){const k=["dictu-select","dictu-focus-ring",...T],e=document.createElement("select");return e.id=y,e.name=C,e.classList.add(...k),M&&e.classList.add("dictu-select--inline"),R&&(e.setAttribute("multiple","true"),e.classList.add("dictu-select--multiple")),w&&(e.setAttribute("disabled","true"),e.ariaDisabled=!0),A&&(e.classList.add("dictu-select--error"),e.ariaInvalid=!0),I&&(e.required=!0,e.ariaRequired=!0),s&&s.forEach(c=>{const i=document.createElement("option");i.value=c.value,i.textContent=c.label,e.appendChild(i)}),e}const F={args:{options:[{label:"optie 1",value:"option-1"},{label:"optie 2",value:"option-2"},{label:"optie 3",value:"option-3"},{label:"optie 4",value:"option-4"}],name:"opties",inline:!1,multiple:!1,disabled:!1,error:!1},argTypes:{id:{control:"string",description:"De id van de Select component"},name:{control:"string",description:"De name van de Select component"},options:{control:"object",description:"De opties in de Select component"},inline:{control:"boolean",description:"Of de Select component als inline variant moet worden getoond"},multiple:{control:"boolean",description:"Of er meerdere opties kunnen worden geselecteerd"},disabled:{control:"boolean",description:"Of de Select component disabled is"},error:{control:"boolean",description:"Of de Select component een error heeft"},required:{control:"boolean",description:"Of de Select component verplicht is"}},component:z,title:"Componenten/Form elements/Select"},t={args:{id:"select-1"}},o={args:{id:"select-1",inline:!0}},n={args:{id:"select-1",multiple:!0,options:[{label:"optie 1",value:"option-1"},{label:"optie 2",value:"option-2"},{label:"optie 3",value:"option-3"},{label:"optie 4",value:"option-4"},{label:"optie 5",value:"option-5"},{label:"optie 6",value:"option-6"},{label:"optie 7",value:"option-7"},{label:"optie 8",value:"option-8"}]}},r={args:{id:"select-1",disabled:!0}},l={args:{id:"select-1",error:!0}},a={args:{id:"select-1",required:!0}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'select-1'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,b,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    inline: true
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,g,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    multiple: true,
    options: [{
      label: 'optie 1',
      value: 'option-1'
    }, {
      label: 'optie 2',
      value: 'option-2'
    }, {
      label: 'optie 3',
      value: 'option-3'
    }, {
      label: 'optie 4',
      value: 'option-4'
    }, {
      label: 'optie 5',
      value: 'option-5'
    }, {
      label: 'optie 6',
      value: 'option-6'
    }, {
      label: 'optie 7',
      value: 'option-7'
    }, {
      label: 'optie 8',
      value: 'option-8'
    }]
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,O,q;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    disabled: true
  }
}`,...(q=(O=r.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var E,_,h;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    error: true
  }
}`,...(h=(_=l.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var L,j,x;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    required: true
  }
}`,...(x=(j=a.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const P=["SelectDefault","SelectInline","SelectMultiple","SelectDisabled","SelectError","SelectRequired"],G=Object.freeze(Object.defineProperty({__proto__:null,SelectDefault:t,SelectDisabled:r,SelectError:l,SelectInline:o,SelectMultiple:n,SelectRequired:a,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{G as S,t as a,l as b,r as c,o as d,n as e};
