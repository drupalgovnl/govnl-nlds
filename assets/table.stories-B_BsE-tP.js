/* empty css              */function H({data:a,caption:n}){const e=["dictu-table"],l=k(a,n);return l.classList.add(...e),l}function k(a,n){const e=document.createElement("table"),l=v("thead","dictu-table__head"),c=v("tbody","dictu-table__body"),i=v("tfoot","dictu-table__foot");if(n){const o=document.createElement("caption");o.textContent=n,o.classList.add("dictu-table__caption"),e.appendChild(o)}return a.forEach(o=>{switch(o.section){case"head":l.appendChild(b(o.data,o.rowspan));break;case"foot":i.appendChild(b(o.data,o.rowspan));break;default:c.appendChild(b(o.data,o.rowspan))}}),l&&l.hasChildNodes()&&e.appendChild(l),c&&c.hasChildNodes()&&e.appendChild(c),i&&i.hasChildNodes()&&e.appendChild(i),e}function v(a,n){const e=document.createElement(a);return e.classList.add(n),e}function b(a){const n=document.createElement("tr");return a.forEach(e=>{switch(e.purpose){case"column-header":n.appendChild(h(e,"col"));break;case"row-header":n.appendChild(h(e,"row"));break;default:n.appendChild(F(e))}}),n.classList.add("dictu-table__row"),n}function F(a,n){const e=document.createElement("td");return e.textContent=a.value,a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),e.classList.add("dictu-table__cell"),e}function h(a,n){const e=document.createElement("th");return e.textContent=a.value,n&&e.setAttribute("scope",n),a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),e.classList.add("dictu-table__header"),e}const z={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"35"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel"},argTypes:{data:{control:"string",description:"De data van de tabel"},caption:{control:"string",description:"De caption van een tabel"}},component:H,tags:["wip"],title:"Componenten/Table"},r={},u={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met row headers"}},p={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]},{section:"foot",data:[{purpose:"row-header",value:"totaal"},{purpose:"cell",value:"650"},{purpose:"cell",value:"950"}]}],caption:"Dit is een tabel met een footer"}},s={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400",colspan:2}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een colspan"}},t={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100",rowspan:2},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een rowspan"}},d={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50",align:"end"}]}],caption:"Dit is een tabel met cellen die rechts uitgelijnd zijn"}};var m,g,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,C,B;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 1'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '400'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 3'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 4'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '50'
      }]
    }],
    caption: 'Dit is een tabel met row headers'
  }
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var f,_,T;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 1'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '400'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 3'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 4'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '50'
      }]
    }, {
      section: 'foot',
      data: [{
        purpose: 'row-header',
        value: 'totaal'
      }, {
        purpose: 'cell',
        value: '650'
      }, {
        purpose: 'cell',
        value: '950'
      }]
    }],
    caption: 'Dit is een tabel met een footer'
  }
}`,...(T=(_=p.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var D,E,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 1'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '400',
        colspan: 2
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 3'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 4'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '50'
      }]
    }],
    caption: 'Dit is een tabel met een colspan'
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var $,A,L;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 1'
      }, {
        purpose: 'cell',
        value: '100',
        rowspan: 2
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '400'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 3'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 4'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '50'
      }]
    }],
    caption: 'Dit is een tabel met een rowspan'
  }
}`,...(L=(A=t.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var R,j,x;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2',
        align: 'end'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 1'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '400',
        align: 'end'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '400'
      }, {
        purpose: 'cell',
        value: '400',
        align: 'end'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 3'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '100',
        align: 'end'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'row-header',
        value: 'Bedrag 4'
      }, {
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '50',
        align: 'end'
      }]
    }],
    caption: 'Dit is een tabel met cellen die rechts uitgelijnd zijn'
  }
}`,...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const N=["DefaultTable","RowHeaderTable","FootTable","ColspanTable","RowspanTable","AlignEndTable"],M=Object.freeze(Object.defineProperty({__proto__:null,AlignEndTable:d,ColspanTable:s,DefaultTable:r,FootTable:p,RowHeaderTable:u,RowspanTable:t,__namedExportsOrder:N,default:z},Symbol.toStringTag,{value:"Module"}));export{d as A,s as C,r as D,p as F,u as R,M as T,t as a};
