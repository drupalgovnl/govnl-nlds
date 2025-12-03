/* empty css              */function J({data:a,caption:n,responsive:e}){const r=["dictu-table"],o=K(a,n);if(o.classList.add(...r),e){const u=document.createElement("div");return u.classList.add("dictu-table__wrapper"),u.appendChild(o),u}return o}function K(a,n){const e=document.createElement("table"),r=b("thead","dictu-table__head"),o=b("tbody","dictu-table__body"),u=b("tfoot","dictu-table__foot");if(n){const l=document.createElement("caption");l.textContent=n,l.classList.add("dictu-table__caption"),e.appendChild(l)}return a.forEach(l=>{switch(l.section){case"head":r.appendChild(g(l.data,l.rowspan));break;case"foot":u.appendChild(g(l.data,l.rowspan));break;default:o.appendChild(g(l.data,l.rowspan))}}),r&&r.hasChildNodes()&&e.appendChild(r),o&&o.hasChildNodes()&&e.appendChild(o),u&&u.hasChildNodes()&&e.appendChild(u),e}function b(a,n){const e=document.createElement(a);return e.classList.add(n),e}function g(a){const n=document.createElement("tr");return a.forEach(e=>{switch(e.purpose){case"column-header":n.appendChild(w(e,"col"));break;case"row-header":n.appendChild(w(e,"row"));break;default:n.appendChild(Q(e))}}),n.classList.add("dictu-table__row"),n}function Q(a,n){const e=document.createElement("td");return e.textContent=a.value,a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),e.classList.add("dictu-table__cell"),e}function w(a,n){const e=document.createElement("th");return e.textContent=a.value,n&&e.setAttribute("scope",n),a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),e.classList.add("dictu-table__header"),e}const U={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"35"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel"},argTypes:{data:{control:"string",description:"De data van de tabel"},caption:{control:"string",description:"De caption van een tabel"}},component:J,tags:["wip"],title:"Componenten/Table"},p={},s={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met row headers"}},d={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]},{section:"foot",data:[{purpose:"row-header",value:"totaal"},{purpose:"cell",value:"650"},{purpose:"cell",value:"950"}]}],caption:"Dit is een tabel met een footer"}},t={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400",colspan:2}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een colspan"}},c={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100",rowspan:2},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een rowspan"}},v={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50",align:"end"}]}],caption:"Dit is een tabel met cellen die rechts uitgelijnd zijn"}},i={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Overkoepelende header tekst",colspan:2}]},{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"200"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel met twee column headers"}},m={args:{data:[{section:"head",data:[{purpose:"cell",value:"",colspan:2},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Overkoepelende row header",rowspan:2},{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"200"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel met twee row headers"}},h={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"},{purpose:"column-header",value:"Column 4"},{purpose:"column-header",value:"Column 5"},{purpose:"column-header",value:"Column 6"},{purpose:"column-header",value:"Column 7"},{purpose:"column-header",value:"Column 8"},{purpose:"column-header",value:"Column 9"},{purpose:"column-header",value:"Column 10"}]},{section:"body",data:[{purpose:"cell",value:"100"},{purpose:"cell",value:"200"},{purpose:"cell",value:"300"},{purpose:"cell",value:"400"},{purpose:"cell",value:"500"},{purpose:"cell",value:"600"},{purpose:"cell",value:"700"},{purpose:"cell",value:"800"},{purpose:"cell",value:"900"},{purpose:"cell",value:"1000"}]},{section:"body",data:[{purpose:"cell",value:"10"},{purpose:"cell",value:"20"},{purpose:"cell",value:"30"},{purpose:"cell",value:"40"},{purpose:"cell",value:"50"},{purpose:"cell",value:"60"},{purpose:"cell",value:"70"},{purpose:"cell",value:"80"},{purpose:"cell",value:"90"},{purpose:"cell",value:"100"}]}],caption:"Dit is een responsive tabel",responsive:!0}};var C,y,B;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(B=(y=p.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,T,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,S,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,$,k;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=($=t.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var H,L,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var O,j,x;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(j=v.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var F,z,N;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: ''
      }, {
        purpose: 'column-header',
        value: 'Overkoepelende header tekst',
        colspan: 2
      }]
    }, {
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
        value: '400'
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
        value: '200'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }],
    caption: 'Dit is een tabel met twee column headers'
  }
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var M,P,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'cell',
        value: '',
        colspan: 2
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
        value: 'Overkoepelende row header',
        rowspan: 2
      }, {
        purpose: 'row-header',
        value: 'Bedrag 1'
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
        value: 'Bedrag 2'
      }, {
        purpose: 'cell',
        value: '200'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }],
    caption: 'Dit is een tabel met twee row headers'
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var q,G,I;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: [{
      section: 'head',
      data: [{
        purpose: 'column-header',
        value: 'Column 1'
      }, {
        purpose: 'column-header',
        value: 'Column 2'
      }, {
        purpose: 'column-header',
        value: 'Column 3'
      }, {
        purpose: 'column-header',
        value: 'Column 4'
      }, {
        purpose: 'column-header',
        value: 'Column 5'
      }, {
        purpose: 'column-header',
        value: 'Column 6'
      }, {
        purpose: 'column-header',
        value: 'Column 7'
      }, {
        purpose: 'column-header',
        value: 'Column 8'
      }, {
        purpose: 'column-header',
        value: 'Column 9'
      }, {
        purpose: 'column-header',
        value: 'Column 10'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'cell',
        value: '100'
      }, {
        purpose: 'cell',
        value: '200'
      }, {
        purpose: 'cell',
        value: '300'
      }, {
        purpose: 'cell',
        value: '400'
      }, {
        purpose: 'cell',
        value: '500'
      }, {
        purpose: 'cell',
        value: '600'
      }, {
        purpose: 'cell',
        value: '700'
      }, {
        purpose: 'cell',
        value: '800'
      }, {
        purpose: 'cell',
        value: '900'
      }, {
        purpose: 'cell',
        value: '1000'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'cell',
        value: '10'
      }, {
        purpose: 'cell',
        value: '20'
      }, {
        purpose: 'cell',
        value: '30'
      }, {
        purpose: 'cell',
        value: '40'
      }, {
        purpose: 'cell',
        value: '50'
      }, {
        purpose: 'cell',
        value: '60'
      }, {
        purpose: 'cell',
        value: '70'
      }, {
        purpose: 'cell',
        value: '80'
      }, {
        purpose: 'cell',
        value: '90'
      }, {
        purpose: 'cell',
        value: '100'
      }]
    }],
    caption: 'Dit is een responsive tabel',
    responsive: true
  }
}`,...(I=(G=h.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const V=["DefaultTable","RowHeaderTable","FootTable","ColspanTable","RowspanTable","AlignEndTable","DoubleColumnHeaderTable","DoubleRowHeaderTable","ResponsiveTable"],Y=Object.freeze(Object.defineProperty({__proto__:null,AlignEndTable:v,ColspanTable:t,DefaultTable:p,DoubleColumnHeaderTable:i,DoubleRowHeaderTable:m,FootTable:d,ResponsiveTable:h,RowHeaderTable:s,RowspanTable:c,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{v as A,t as C,p as D,d as F,s as R,Y as T,c as a,i as b,m as c,h as d};
