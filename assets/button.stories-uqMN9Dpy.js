/* empty css              */const H=`<!-- @license CC0-1.0 -->

Button uitleg

## Gebruik deze component

Je kunt de CSS zo in je project installeren:

\`\`\`console
npm install --save-dev @dictu/button
\`\`\`

Je kunt de CSS uit \`node_modules/\` importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@dictu/button/dist/index.css" />
\`\`\`

Als je CSS imports gebruikt vanuit JavaScript:

\`\`\`javascript
import "@dictu/button/index.css";
\`\`\`

## Richtlijnen

Tekst toevoegen

## Links

### Relevante WCAG regels

Aanpassen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
`,x={argTypes:{label:{control:"string"},variant:{control:"radio",options:["primary-action","secondary-action","subtle","icon-only"]},iconPosition:{control:"radio",options:["none","before","after"]},icon:{options:["home","alert","none"],mapping:{home:'<span class="dictu-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C21.9931 11.5789 22.0787 12.009 21.9239 12.3827C21.7691 12.7564 21.4045 13 21 13H20V19C20 20.6569 18.6569 22 17 22H7.00003C5.34318 22 4.00003 20.6569 4.00003 19V13H3.00003C2.59557 13 2.23093 12.7564 2.07615 12.3827C1.92137 12.009 2.00692 11.5789 2.29292 11.2929L11.2929 2.29289ZM11 14C10.4477 14 10 14.4477 10 15V20H14V15C14 14.4477 13.5523 14 13 14H11ZM18 19C18 19.5523 17.5523 20 17 20H16V15C16 13.3431 14.6569 12 13 12H11C9.34318 12 8.00003 13.3431 8.00003 15V20H7.00003C6.44775 20 6.00003 19.5523 6.00003 19L6.00003 12C6.00003 11.5712 5.73013 11.2054 5.35094 11.0633L12 4.41421L18.6491 11.0633C18.2699 11.2054 18 11.5712 18 12L18 19Z" fill="#154273"/></svg></span>',alert:'<span class="dictu-icon" role="presentation" aria-hidden="true"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.37032 2.5058C7.90009 1.55647 8.90228 0.967743 9.99 0.967743C11.0777 0.967743 12.0799 1.55646 12.6097 2.50578L19.7052 14.748C19.7287 14.7887 19.7494 14.8309 19.767 14.8745C20.1397 15.7958 20.032 16.8418 19.4793 17.6678C18.9267 18.4938 18.0008 18.9925 17.007 18.9995L17 18.9995H3C2.98172 18.9995 2.96356 18.999 2.94552 18.998C2.91027 19 2.87456 19 2.83851 18.9982C1.86882 18.9482 0.983287 18.432 0.461991 17.6128C-0.0593058 16.7936 -0.151893 15.7728 0.213514 14.8732C0.231014 14.8301 0.251498 14.7883 0.274816 14.748L7.37032 2.5058ZM2.94475 17.001C2.96304 17 2.98146 16.9995 3 16.9995H16.9959C17.3261 16.9962 17.6334 16.8302 17.8171 16.5556C17.9904 16.2966 18.0325 15.9726 17.9333 15.6794L10.8748 3.50095L10.865 3.48362C10.6889 3.1653 10.3538 2.96774 9.99 2.96774C9.62621 2.96774 9.29112 3.1653 9.115 3.48362L9.10518 3.50095L2.04625 15.6801C1.94889 15.9662 1.98595 16.2823 2.14931 16.539C2.32308 16.8121 2.61826 16.9842 2.94149 17.0008C2.94258 17.0009 2.94367 17.0009 2.94475 17.001ZM10 6.9995C10.5523 6.9995 11 7.44721 11 7.9995V9.9995C11 10.5518 10.5523 10.9995 10 10.9995C9.44772 10.9995 9 10.5518 9 9.9995V7.9995C9 7.44721 9.44772 6.9995 10 6.9995ZM9 13.9995C9 13.4472 9.44772 12.9995 10 12.9995H10.01C10.5623 12.9995 11.01 13.4472 11.01 13.9995C11.01 14.5518 10.5623 14.9995 10.01 14.9995H10C9.44772 14.9995 9 14.5518 9 13.9995Z" fill="#0A2750"/></svg></span>'},control:{type:"select",labels:{home:"Home",alert:"Alert"}}},disabled:{control:"boolean"}},parameters:{docs:{description:{component:H}}},render:({label:h,variant:w,iconPosition:a,icon:i,disabled:y})=>{const L=["dictu-button",`dictu-button--${w}`,"dictu-focus-ring"],n=document.createElement("button"),S=`${a==="before"?i:""} ${h} ${a==="after"?i:""}`;return n.innerHTML=S,n.disabled=y,n.classList.add(...L),n},tags:["autodocs"],title:"Componenten/Button"},e={args:{label:"Dit is een button",variant:"primary-action",disabled:!1,icon:"none",iconPosition:"none"}},o={args:{label:"Dit is een secondary button",variant:"secondary-action",disabled:!1,icon:"none",iconPosition:"none"}},t={args:{label:"Dit is een subtle button",variant:"subtle",disabled:!1,icon:"alert",iconPosition:"before"}},s={args:{label:"",variant:"icon-only",disabled:!1,icon:"alert",iconPosition:"before"}};var r,l,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Dit is een button',
    variant: 'primary-action',
    disabled: false,
    icon: 'none',
    iconPosition: 'none'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Dit is een secondary button',
    variant: 'secondary-action',
    disabled: false,
    icon: 'none',
    iconPosition: 'none'
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,b,m;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Dit is een subtle button',
    variant: 'subtle',
    disabled: false,
    icon: 'alert',
    iconPosition: 'before'
  }
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '',
    variant: 'icon-only',
    disabled: false,
    icon: 'alert',
    iconPosition: 'before'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const P=["PrimaryAction","SecondaryAction","Subtle","IconOnly"];export{s as IconOnly,e as PrimaryAction,o as SecondaryAction,t as Subtle,P as __namedExportsOrder,x as default};
