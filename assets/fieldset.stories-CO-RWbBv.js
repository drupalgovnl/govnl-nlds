import"./label.component-DIIE1Bz3.js";import{T as V}from"./text-input.component-CitIGVob.js";import{C as w}from"./checkbox.component-PLTYKzR5.js";import{I as j}from"./icon.component-X7CMXdF1.js";import{F as H}from"./form-field.component-B7EXBhMX.js";function g({content:e,legendText:r,required:t,requiredText:i,legendVariant:n,descriptionText:s,error:p,errorText:k,errorIcon:I}){const M=["dictu-fieldset"],o=document.createElement("fieldset");return o.classList.add(...M),o.appendChild(y({legendText:r,required:t,requiredText:i,legendVariant:n})),s&&o.appendChild(A({descriptionText:s})),p&&(o.appendChild(O({errorText:k,errorIcon:I})),o.classList.add("dictu-fieldset--error")),o.appendChild(Z({content:e})),o}function y({legendText:e,required:r,requiredText:t,legendVariant:i}){const n=document.createElement("legend");if(n.innerHTML=e,n.classList.add("dictu-fieldset__legend"),i==="strong"&&n.classList.add("dictu-fieldset__legend--strong"),r){const s=document.createElement("span");s.classList.add("dictu-fieldset__legend-required"),s.innerHTML=t,n.appendChild(s)}return n}function A({descriptionText:e}){const r=document.createElement("span");return r.classList.add("dictu-fieldset__description"),r.innerHTML=e,r}function O({errorText:e,errorIcon:r}){const t=document.createElement("div");t.classList.add("dictu-fieldset__error-message"),t.innerHTML=e;const i=j({icon:r});return t.insertAdjacentElement("afterbegin",i),t}function Z({content:e}){const r=document.createElement("div");return r.classList.add("dictu-fieldset__content"),Array.isArray(e)||(e=[e]),e.forEach(t=>{r.appendChild(t)}),r}const B={args:{error:!1,legendText:"Text",required:!1,requiredText:"(verplicht)",legendVariant:"default",descriptionText:"Description",errorText:"Dit is een foutmelding",errorIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10V6C9 5.44772 9.44771 5 10 5ZM9 14C9 13.4477 9.44771 13 10 13H10.01C10.5623 13 11.01 13.4477 11.01 14C11.01 14.5523 10.5623 15 10.01 15H10C9.44771 15 9 14.5523 9 14Z" /></svg>'},argTypes:{id:{control:"string",description:"De id van het inputveld"},descriptionText:{control:"string",description:"De beschrijving van het inputveld"},legendText:{control:"string",description:"De tekst in de legend"},required:{control:"boolean",description:"Of er in de legend komt te staan dat het veld verplicht is"},legendVariant:{control:"radio",description:"Variant van de legend",options:["default","strong"]},error:{control:"boolean",description:"Of de fieldset een error state heeft of niet"},errorText:{control:"string",description:"De error message van de fieldset"},content:{description:"De inhoud van de fieldset"}},component:g,render:e=>g({...e,content:V({id:e.id,error:e.error})}),tags:["wip"],title:"Componenten/Form elements/Fieldset"},d={args:{id:"defaultInput",required:!0,descriptionText:""}},a={args:{id:"errorInput",error:!0,required:!0,descriptionText:""}},c={args:{id:"legendStrongInput",required:!0}},l={args:{id:"legendStrongInput",required:!0,legendVariant:"strong"}},u={args:{id:"checkboxFieldset",legendText:"Welke fruitsoorten eet je graag?",legendVariant:"strong",descriptionText:""},render:e=>{const r=[];return["Banaan","Appel","Tomaat","Peer"].forEach((i,n)=>{const s=`checkbox-${n}`,p=H({variant:"inline",labelText:i,id:s,content:w({id:s})});r.push(p)}),g({...e,content:r})}};var m,f,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'defaultInput',
    required: true,
    descriptionText: ''
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,C,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'errorInput',
    error: true,
    required: true,
    descriptionText: ''
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,F,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'legendStrongInput',
    required: true
  }
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,b,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'legendStrongInput',
    required: true,
    legendVariant: 'strong'
  }
}`,...(E=(b=l.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var S,q,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'checkboxFieldset',
    legendText: 'Welke fruitsoorten eet je graag?',
    legendVariant: 'strong',
    descriptionText: ''
  },
  render: args => {
    const contentList = [];
    const values = ['Banaan', 'Appel', 'Tomaat', 'Peer'];
    values.forEach((value, index) => {
      const id = \`checkbox-\${index}\`;
      const formField = FormField({
        variant: 'inline',
        labelText: value,
        id,
        content: Checkbox({
          id
        })
      });
      contentList.push(formField);
    });
    return Fieldset({
      ...args,
      content: contentList
    });
  }
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const P=["DefaultFieldset","ErrorFieldset","DescriptionFieldset","LegendStrongFieldset","CheckboxExampleFieldset"],K=Object.freeze(Object.defineProperty({__proto__:null,CheckboxExampleFieldset:u,DefaultFieldset:d,DescriptionFieldset:c,ErrorFieldset:a,LegendStrongFieldset:l,__namedExportsOrder:P,default:B},Symbol.toStringTag,{value:"Module"}));export{u as C,d as D,a as E,K as F,l as L,c as a};
