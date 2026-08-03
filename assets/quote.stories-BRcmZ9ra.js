/* empty css              */function j({citation:M,author:a,work:p,source:u}){const T=["dictu-quote"],d=document.createElement("figure");d.classList.add(...T);const l=document.createElement("blockquote");l.classList.add("dictu-quote__blockquote"),u&&l.setAttribute("cite",u);const m=document.createElement("p");if(m.innerHTML=M,m.classList.add("dictu-quote__citation"),l.appendChild(m),d.appendChild(l),a||p){const o=document.createElement("figcaption");if(o.classList.add("dictu-quote__caption"),a){const e=document.createElement("div");if(e.classList.add("dictu-quote__author"),e.innerHTML=a.name,o.appendChild(e),a.role){const t=document.createElement("div");t.classList.add("dictu-quote__role"),t.innerHTML=a.role,o.appendChild(t)}}if(p){const e=document.createElement("cite");if(e.classList.add("dictu-quote__work"),e.innerHTML=p,u){const t=document.createElement("a");t.classList.add("dictu-link"),t.href=u,t.appendChild(e),o.appendChild(t)}else o.appendChild(e)}d.appendChild(o)}return d}const y={args:{citation:"May the force be ever in your favor, Mr. Potter"},argTypes:{citation:{control:"string",description:"Het citaat"},author:{control:"object",description:"De auteur van het citaat"},work:{control:"string",description:"De bron waaruit geciteerd wordt"},source:{control:"string",description:"URL van de bron"}},component:j,tags:["wip"],title:"Componenten/Quote"},r={},n={args:{author:{name:"Gandalf of Rivia"}}},s={args:{author:{name:"Gandalf of Rivia",role:"Starfleet Captain"}}},i={args:{work:"Chronicles of Narnia"}},c={args:{citation:"Nieuwe RVO-website draagt bij aan duurzame toekomst",author:{name:"R. Steenbergen"},work:"dictu.nl",source:"https://www.dictu.nl/interview-rikkert-steenbergen"}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,b,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    author: {
      name: 'Gandalf of Rivia'
    }
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var _,q,k;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    author: {
      name: 'Gandalf of Rivia',
      role: 'Starfleet Captain'
    }
  }
}`,...(k=(q=s.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var L,Q,v;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    work: 'Chronicles of Narnia'
  }
}`,...(v=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:v.source}}};var R,S,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    citation: 'Nieuwe RVO-website draagt bij aan duurzame toekomst',
    author: {
      name: 'R. Steenbergen'
    },
    work: 'dictu.nl',
    source: 'https://www.dictu.nl/interview-rikkert-steenbergen'
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const A=["DefaultQuote","AuthorQuote","RoleQuote","WorkQuote","CiteQuote"],H=Object.freeze(Object.defineProperty({__proto__:null,AuthorQuote:n,CiteQuote:c,DefaultQuote:r,RoleQuote:s,WorkQuote:i,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{n as A,c as C,r as D,H as Q,s as R,i as W};
