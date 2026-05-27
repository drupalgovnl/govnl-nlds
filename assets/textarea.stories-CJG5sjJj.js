/* empty css              */function H({id:E,name:O,rows:C,cols:L,placeholder:c,error:P,disabled:j,classNames:z=[]}){const A=["dictu-textarea","dictu-focus-ring",...z],e=document.createElement("textarea");return e.id=E,e.name=O,e.classList.add(...A),e.rows=C,e.cols=L,P&&e.classList.add("dictu-textarea--error"),j&&(e.classList.add("dictu-textarea--read-only"),e.setAttribute("disabled","")),c&&e.setAttribute("placeholder",c),e}const R={args:{size:"default",error:!1,placeholder:"",rows:2,cols:20,disabled:!1},argTypes:{id:{control:"string",description:"De id van de textarea"},name:{control:"string",description:"De name van de textarea"},rows:{control:"string",description:"Het aantal rows van de textarea"},cols:{control:"string",description:"Het aantal cols van de textarea"},error:{control:"boolean",description:"Of de textarea een error heeft"},placeholder:{control:"string",description:"De placeholder in de textarea"},disabled:{control:"boolean",description:"De disabled state van de textarea"}},component:H,title:"Componenten/Form elements/Textarea"},a={args:{id:"textarea-1"}},r={args:{id:"textarea-2",rows:5}},t={args:{id:"textarea-3",cols:10}},s={args:{id:"textarea-4",error:!0}},o={args:{id:"textarea-5",disabled:!0}},n={args:{id:"textarea-6",placeholder:"Dit is een placeholder"}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'textarea-1'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'textarea-2',
    rows: 5
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,g,T;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'textarea-3',
    cols: 10
  }
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'textarea-4',
    error: true
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var D,S,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'textarea-5',
    disabled: true
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var _,v,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'textarea-6',
    placeholder: 'Dit is een placeholder'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const F=["TextareaDefault","TextareaRows","TextareaCols","TextareaError","TextareaDisabled","TextareaPlaceholder"],$=Object.freeze(Object.defineProperty({__proto__:null,TextareaCols:t,TextareaDefault:a,TextareaDisabled:o,TextareaError:s,TextareaPlaceholder:n,TextareaRows:r,__namedExportsOrder:F,default:R},Symbol.toStringTag,{value:"Module"}));export{$ as T,a,r as b,t as c,s as d,o as e,n as f};
