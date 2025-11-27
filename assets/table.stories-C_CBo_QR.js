/* empty css              */function L({data:a,caption:n}){const e=["dictu-table"],l=x(a,n);return l.classList.add(...e),l}function x(a,n){const e=document.createElement("table"),l=i("thead","dictu-table__head"),d=i("tbody","dictu-table__body"),c=i("tfoot","dictu-table__foot");if(n){const o=document.createElement("caption");o.textContent=n,o.classList.add("dictu-table__caption"),e.appendChild(o)}return a.forEach(o=>{switch(o.section){case"head":l.appendChild(v(o.data,o.rowspan));break;case"foot":c.appendChild(v(o.data,o.rowspan));break;default:d.appendChild(v(o.data,o.rowspan))}}),l&&l.hasChildNodes()&&e.appendChild(l),d&&d.hasChildNodes()&&e.appendChild(d),c&&c.hasChildNodes()&&e.appendChild(c),e}function i(a,n){const e=document.createElement(a);return e.classList.add(n),e}function v(a){const n=document.createElement("tr");return a.forEach(e=>{switch(e.purpose){case"column-header":n.appendChild(b(e,"col"));break;case"row-header":n.appendChild(b(e,"row"));break;default:n.appendChild(A(e))}}),n.classList.add("dictu-table__row"),n}function A(a,n){const e=document.createElement("td");return e.textContent=a.value,a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),e.classList.add("dictu-table__cell"),e}function b(a,n){const e=document.createElement("th");return e.textContent=a.value,n&&e.setAttribute("scope",n),a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),e.classList.add("dictu-table__header"),e}const H={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"35"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel"},argTypes:{data:{control:"string",description:"De data van de tabel"},caption:{control:"string",description:"De caption van een tabel"}},component:L,tags:["wip"],title:"Componenten/Table"},r={},u={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met row headers"}},p={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]},{section:"foot",data:[{purpose:"row-header",value:"totaal"},{purpose:"cell",value:"650"},{purpose:"cell",value:"950"}]}],caption:"Dit is een tabel met een footer"}},s={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400",colspan:2}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een colspan"}},t={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100",rowspan:2},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een rowspan"}};var h,m,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(w=(m=r.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var g,y,C;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var B,f,T;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(f=p.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var _,D,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var $,E,R;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(E=t.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const k=["DefaultTable","RowHeaderTable","FootTable","ColspanTable","RowspanTable"],N=Object.freeze(Object.defineProperty({__proto__:null,ColspanTable:s,DefaultTable:r,FootTable:p,RowHeaderTable:u,RowspanTable:t,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{s as C,r as D,p as F,u as R,N as T,t as a};
