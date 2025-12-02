/* empty css              *//* empty css              */import{H as O}from"./heading.component--w7arIA8.js";import{I as Z}from"./icon.component-BiJB5nKt.js";const B=({content:a,href:t,classNames:m})=>{const e=document.createElement("a");e.classList.add("dictu-link",...m.split(" ").filter(u=>u));const p=(a==null?void 0:a.nodeType)!==void 0;return e.href=t,p?e.appendChild(a):e.innerHTML=a,e},F=({headingLevel:a,link:t,content:m,footer_content:e,variant:p="default",image_src:u,alt:h,icon:k,subheading:b,full_card_link:S})=>{const _=!!S,n=document.createElement("div");n.classList.add("dictu-card",`dictu-card--${p}`,"dictu-focus-ring"),_?(n.href=t.href,n.setAttribute("role","link")):n.setAttribute("role","article");const g=document.createElement("div");g.classList.add("dictu-card__image-container");const s=document.createElement("img");s.classList.add("dictu-image","dictu-card__image"),s.src=u||"",s.alt=h||"",g.appendChild(s);const L=k?Z({icon:k,label:h}):null,y=B({text:(t==null?void 0:t.text)??"",href:t.href,classNames:_?"card__link dictu-card__full-card-link":"dictu-card__link"}),C=O({innerHTML:y,level:a});C.classList.add("dictu-card__heading");const r=document.createElement("div");r.classList.add("dictu-card__content"),L&&r.appendChild(L),r.appendChild(C);const l=document.createElement("p");l.classList.add("dictu-card__subheading"),l.innerText=b||"";const f=[];b&&(f.push(l.id),r.appendChild(l));const c=document.createElement("p");c.classList.add("dictu-card__paragraph"),c.innerText=m??"",f.push(c.id),r.appendChild(c);const v=document.createElement("small");return v.classList.add("dictu-card__metadata"),e&&(v.innerText=e,f.push(v.id)),e&&r.appendChild(v),n.appendChild(g),n.appendChild(r),n},I={args:{image_src:"assets/example-image.jpg",alt:"Dit is een voorbeeld afbeelding",headingLevel:2,link:{href:"#",text:"Lees meer"},content:"Dit is een voorbeeld van de inhoud van de kaart.",footer_content:"Dit is een voorbeeld van de footer content",variant:"default",icon:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.55301 0.105573C8.83453 -0.0351909 9.1659 -0.0351909 9.44743 0.105573L17.4474 4.10557C17.7862 4.27496 18.0002 4.62123 18.0002 5C18.0002 5.37877 17.7862 5.72504 17.4474 5.89443L9.44743 9.89443C9.1659 10.0352 8.83453 10.0352 8.55301 9.89443L0.553005 5.89443C0.214221 5.72504 0.000219048 5.37877 0.000219048 5C0.000219048 4.62123 0.214221 4.27496 0.553005 4.10557L8.55301 0.105573ZM3.23629 5L9.00022 7.88197L14.7642 5L9.00022 2.11803L3.23629 5ZM0.105792 8.55279C0.352781 8.05881 0.953454 7.85858 1.44743 8.10557L9.00022 11.882L16.553 8.10557C17.047 7.85858 17.6477 8.05881 17.8946 8.55279C18.1416 9.04676 17.9414 9.64744 17.4474 9.89443L9.44743 13.8944C9.1659 14.0352 8.83453 14.0352 8.55301 13.8944L0.553005 9.89443C0.059027 9.64744 -0.141197 9.04676 0.105792 8.55279ZM0.105792 12.5528C0.352781 12.0588 0.953454 11.8586 1.44743 12.1056L9.00022 15.882L16.553 12.1056C17.047 11.8586 17.6477 12.0588 17.8946 12.5528C18.1416 13.0468 17.9414 13.6474 17.4474 13.8944L9.44743 17.8944C9.1659 18.0352 8.83453 18.0352 8.55301 17.8944L0.553005 13.8944C0.059027 13.6474 -0.141197 13.0468 0.105792 12.5528Z" fill="#154273"/>
</svg>`,subheading:"Dit is een voorbeeld subheading",full_card_link:!1},argTypes:{image_src:{control:"text",description:"De bron van de afbeelding in de kaart"},alt:{control:"text",description:"Alternatieve tekst voor de afbeelding"},headingLevel:{control:"select",options:[2,3,4,5,6],description:"Het niveau van de heading"},link:{control:"object",description:"Link object met href en tekst voor de link"},content:{control:"text",description:"De inhoud van de kaart"},variant:{control:"select",options:["default","accent"],description:"De variant van de kaart"},footer_content:{control:"text",description:"Metadata die onderaan de kaart wordt weergegeven"},icon:{control:"text",description:"Optionele icon voor de kaart"},subheading:{control:"text",description:"Optionele subheading voor de kaart"},full_card_link:{control:"boolean",description:"Maakt de hele kaart klikbaar als true"}},tags:["wip"],render:F,title:"Componenten/Card"},d={args:{image_src:"assets/example-image.jpg",alt:"Dit is een voorbeeld afbeelding voor een kaart",headingLevel:2,link:{href:"#",text:"De titel van de kaart"},content:"Dit is een voorbeeld van de inhoud van de kaart.",metadata:"Dit is een voorbeeld van de metadata",variant:"default"}},i={args:{image_src:"assets/example-image.jpg",alt:"Dit is een voorbeeld afbeelding voor een accent kaart",headingLevel:2,link:{href:"#",text:"De titel van de accent kaart"},content:"Dit is een voorbeeld van de inhoud van de accent kaart.",footer_content:"Dit is een voorbeeld van de accent metadata",variant:"accent"}},o={args:{image_src:"assets/example-image.jpg",alt:"Dit is een voorbeeld afbeelding voor een kaart",headingLevel:2,link:{href:"#",text:"De titel van de kaart"},content:"Dit is een voorbeeld van de inhoud van de kaart.",footer_content:"Dit is een voorbeeld van de metadata",variant:"default",full_card_link:!0}};var D,x,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de kaart'
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    metadata: 'Dit is een voorbeeld van de metadata',
    variant: 'default'
  }
}`,...(E=(x=d.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var j,w,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een accent kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de accent kaart'
    },
    content: 'Dit is een voorbeeld van de inhoud van de accent kaart.',
    footer_content: 'Dit is een voorbeeld van de accent metadata',
    variant: 'accent'
  }
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var T,A,H;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    image_src: 'assets/example-image.jpg',
    alt: 'Dit is een voorbeeld afbeelding voor een kaart',
    headingLevel: 2,
    link: {
      href: '#',
      text: 'De titel van de kaart'
    },
    content: 'Dit is een voorbeeld van de inhoud van de kaart.',
    footer_content: 'Dit is een voorbeeld van de metadata',
    variant: 'default',
    full_card_link: true
  }
}`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const N=["DefaultCard","AccentCard","FullCardLink"],G=Object.freeze(Object.defineProperty({__proto__:null,AccentCard:i,DefaultCard:d,FullCardLink:o,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{i as A,G as C};
