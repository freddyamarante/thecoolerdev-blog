import{s as h,D as x,r as l,p as d,P as j,j as o,bv as v,d as H,Q as I,b$ as k,G as B,au as E,R as O,O as y}from"./sanity-c1d07973.js";var u;function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:a,menuItems:n,menuItemGroups:r,title:i}=t,{features:s}=H();return!(n!=null&&n.length)&&!i?null:o(I,{actions:o(k,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:s.backButton&&a>0&&o(B,{as:E,"data-as":"a",icon:O,mode:"bleed"}),title:i})}const G=h(x)(u||(u=C([`
  position: relative;
`])));function L(t){const{children:e}=t,{collapsed:a}=y();return o(G,{hidden:a,height:"fill",overflow:"auto",children:e})}function U(t){const{index:e,pane:a,paneKey:n,...r}=t,{child:i,component:s,menuItems:m,menuItemGroups:p,title:f="",type:R,...P}=a,[c,b]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(L,{children:[v.isValidElementType(s)&&l.createElement(s,{...r,...P,ref:b,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{U as default};