import{I as j}from"./icon.component-C3zd11FN.js";/* empty css              */const b=({items:I,type:r="unordered",icon:i})=>{const N=r==="ordered"?"ol":"ul",a=document.createElement(N),S=["dictu-list",`dictu-list--${r}`];return a.classList.add(...S),I.forEach(e=>{const t=document.createElement("li");t.classList.add("dictu-list__item");let u=e,c=null;typeof e=="object"&&e!==null&&(u=e.label,c=e.children);const d=document.createElement("span");if(d.classList.add("dictu-list__item-content"),r==="icon"&&i){const l=j({icon:i,classes:["dictu-list__item-icon"]});t.appendChild(l)}if(d.textContent=u,t.appendChild(d),c){const l=b({items:c,type:r,icon:i});t.appendChild(l)}a.appendChild(t)}),a},m=["Niveau 1 item 1",{label:"Niveau 1 item 2",children:["Niveau 2 item 1","Niveau 2 item 2",{label:"Niveau 2 item 3",children:["Niveau 3 item 1","Niveau 3 item 2"]}]},"Niveau 1 item 3"],w=`<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H12.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683417 8.29289 0.292893Z" fill="#0F172A"/>
</svg>`,x={title:"Componenten/List",component:b,argTypes:{type:{control:{type:"select"},options:["unordered","ordered","icon"],description:"Het type lijst.",table:{defaultValue:{summary:"unordered"}}},items:{control:"object",description:"De items in de lijst. Kan genest zijn."},icon:{control:"text",description:"SVG icoon voor de icon variant.",if:{arg:"type",eq:"icon"}}},tags:["wip"]},s={args:{type:"unordered",items:m}},n={args:{type:"ordered",items:m}},o={args:{type:"icon",items:m,icon:w}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    items: defaultItems
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'ordered',
    items: defaultItems
  }
}`,...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var C,_,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    items: defaultItems,
    icon: icon
  }
}`,...(y=(_=o.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const E=["Unordered","Ordered","IconList"],T=Object.freeze(Object.defineProperty({__proto__:null,IconList:o,Ordered:n,Unordered:s,__namedExportsOrder:E,default:x},Symbol.toStringTag,{value:"Module"}));export{o as I,T as L,n as O,s as U};
