/* empty css              */const V=({data:a,caption:n,responsive:e})=>{const r=["dictu-table"],o=X(a,n);if(o.classList.add(...r),e){const u=document.createElement("div");return u.classList.add("dictu-table__wrapper"),u.appendChild(o),u}return o},X=(a,n)=>{const e=document.createElement("table"),r=g("thead","dictu-table__head"),o=g("tbody","dictu-table__body"),u=g("tfoot","dictu-table__foot");if(n){const l=document.createElement("caption");l.textContent=n,l.classList.add("dictu-table__caption"),e.appendChild(l)}return a.forEach(l=>{switch(l.section){case"head":r.appendChild(w(l.data,l.rowspan));break;case"foot":u.appendChild(w(l.data,l.rowspan));break;default:o.appendChild(w(l.data,l.rowspan))}}),r&&r.hasChildNodes()&&e.appendChild(r),o&&o.hasChildNodes()&&e.appendChild(o),u&&u.hasChildNodes()&&e.appendChild(u),e},g=(a,n)=>{const e=document.createElement(a);return e.classList.add(n),e},w=a=>{const n=document.createElement("tr");return a.forEach(e=>{switch(e.purpose){case"column-header":n.appendChild(C(e,"col"));break;case"row-header":n.appendChild(C(e,"row"));break;default:n.appendChild(Y(e))}}),n.classList.add("dictu-table__row"),n},Y=(a,n)=>{const e=document.createElement("td");return e.textContent=a.value,a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),a.accent&&e.classList.add("dictu-table__cell-accent"),e.classList.add("dictu-table__cell"),e},C=(a,n)=>{const e=document.createElement("th");return e.textContent=a.value,n&&e.setAttribute("scope",n),a.colspan&&e.setAttribute("colspan",a.colspan),a.rowspan&&e.setAttribute("rowspan",a.rowspan),a.align==="end"&&e.classList.add("dictu-table__cell--align-end"),e.classList.add("dictu-table__header"),e},Z={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"20"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"cell",value:"35"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel"},argTypes:{data:{control:"string",description:"De data van de tabel"},caption:{control:"string",description:"De caption van een tabel"}},component:V,tags:["wip"],title:"Componenten/Table"},p={},s={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met row headers"}},c={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]},{section:"foot",data:[{purpose:"row-header",value:"totaal"},{purpose:"cell",value:"650"},{purpose:"cell",value:"950"}]}],caption:"Dit is een tabel met een footer"}},t={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400",colspan:2}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een colspan"}},d={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100",rowspan:2},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50"}]}],caption:"Dit is een tabel met een rowspan"}},v={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"100"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 3"},{purpose:"cell",value:"50"},{purpose:"cell",value:"100",align:"end"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 4"},{purpose:"cell",value:"100"},{purpose:"cell",value:"50",align:"end"}]}],caption:"Dit is een tabel met cellen die rechts uitgelijnd zijn"}},i={args:{data:[{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Overkoepelende header tekst",colspan:2}]},{section:"head",data:[{purpose:"cell",value:""},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"200"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel met twee column headers"}},m={args:{data:[{section:"head",data:[{purpose:"cell",value:"",colspan:2},{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"}]},{section:"body",data:[{purpose:"row-header",value:"Overkoepelende row header",rowspan:2},{purpose:"row-header",value:"Bedrag 1"},{purpose:"cell",value:"400"},{purpose:"cell",value:"400"}]},{section:"body",data:[{purpose:"row-header",value:"Bedrag 2"},{purpose:"cell",value:"200"},{purpose:"cell",value:"100"}]}],caption:"Dit is een tabel met twee row headers"}},h={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"},{purpose:"column-header",value:"Column 4"},{purpose:"column-header",value:"Column 5"},{purpose:"column-header",value:"Column 6"},{purpose:"column-header",value:"Column 7"},{purpose:"column-header",value:"Column 8"},{purpose:"column-header",value:"Column 9"},{purpose:"column-header",value:"Column 10"}]},{section:"body",data:[{purpose:"cell",value:"100"},{purpose:"cell",value:"200"},{purpose:"cell",value:"300"},{purpose:"cell",value:"400"},{purpose:"cell",value:"500"},{purpose:"cell",value:"600"},{purpose:"cell",value:"700"},{purpose:"cell",value:"800"},{purpose:"cell",value:"900"},{purpose:"cell",value:"1000"}]},{section:"body",data:[{purpose:"cell",value:"10"},{purpose:"cell",value:"20"},{purpose:"cell",value:"30"},{purpose:"cell",value:"40"},{purpose:"cell",value:"50"},{purpose:"cell",value:"60"},{purpose:"cell",value:"70"},{purpose:"cell",value:"80"},{purpose:"cell",value:"90"},{purpose:"cell",value:"100"}]}],caption:"Dit is een responsive tabel",responsive:!0}},b={args:{data:[{section:"head",data:[{purpose:"column-header",value:"Column 1"},{purpose:"column-header",value:"Column 2"},{purpose:"column-header",value:"Column 3"},{purpose:"column-header",value:"Column 4"}]},{section:"body",data:[{purpose:"cell",value:"10",accent:!0},{purpose:"cell",value:"20"},{purpose:"cell",value:"30"},{purpose:"cell",value:"40"}]},{section:"body",data:[{purpose:"cell",value:"10"},{purpose:"cell",value:"20",accent:!0},{purpose:"cell",value:"30"},{purpose:"cell",value:"40"}]},{section:"body",data:[{purpose:"cell",value:"10"},{purpose:"cell",value:"20"},{purpose:"cell",value:"30",accent:!0},{purpose:"cell",value:"40"}]},{section:"body",data:[{purpose:"cell",value:"10"},{purpose:"cell",value:"20"},{purpose:"cell",value:"30"},{purpose:"cell",value:"40",accent:!0}]}],caption:"Dit is een tabel met accent cellen"}};var y,B,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(f=(B=p.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var T,_,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var S,E,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var $,k,A;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var L,H,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,x,F;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(x=v.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var z,N,M;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var P,W,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,I,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'cell',
        value: '10',
        accent: true
      }, {
        purpose: 'cell',
        value: '20'
      }, {
        purpose: 'cell',
        value: '30'
      }, {
        purpose: 'cell',
        value: '40'
      }]
    }, {
      section: 'body',
      data: [{
        purpose: 'cell',
        value: '10'
      }, {
        purpose: 'cell',
        value: '20',
        accent: true
      }, {
        purpose: 'cell',
        value: '30'
      }, {
        purpose: 'cell',
        value: '40'
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
        value: '30',
        accent: true
      }, {
        purpose: 'cell',
        value: '40'
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
        value: '40',
        accent: true
      }]
    }],
    caption: 'Dit is een tabel met accent cellen'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ee=["DefaultTable","RowHeaderTable","FootTable","ColspanTable","RowspanTable","AlignEndTable","DoubleColumnHeaderTable","DoubleRowHeaderTable","ResponsiveTable","AccentCell"],ne=Object.freeze(Object.defineProperty({__proto__:null,AccentCell:b,AlignEndTable:v,ColspanTable:t,DefaultTable:p,DoubleColumnHeaderTable:i,DoubleRowHeaderTable:m,FootTable:c,ResponsiveTable:h,RowHeaderTable:s,RowspanTable:d,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{v as A,t as C,p as D,c as F,s as R,ne as T,d as a,i as b,m as c,h as d,b as e};
