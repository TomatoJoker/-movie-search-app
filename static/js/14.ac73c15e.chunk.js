"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[14],{3014:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(2791);var r=n(8787),i=n(7689),s=n(824),a=n(1397),o=n(8125),c=n(184),u=function(e){var t=(0,i.UO)().movieId,n=(0,o.Z)("/movie/".concat(t,"/reviews?api_key=").concat("3fe9b56bae93b4ba306d578cc49974bc")).apiData;if(!n)return null;var u=n.results;return u&&0===u.length?(0,c.jsx)(r.$0,{children:(0,c.jsx)(r.W2,{children:(0,c.jsx)(s.xu,{pt:"40px",children:(0,c.jsx)("h3",{children:"We don't have any review for this film"})})})}):(0,c.jsx)(r.$0,{children:(0,c.jsx)(r.W2,{children:u&&(0,c.jsx)(a.QI,{children:u.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,c.jsxs)(a.HC,{mt:"30px",children:[(0,c.jsx)("h3",{children:n}),(0,c.jsx)(s.xu,{mt:"20px",children:(0,c.jsx)("p",{children:r})})]},t)}))})})})}},8125:function(e,t,n){function r(e,t,n,r,i,s,a){try{var o=e[s](a),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var a=e.apply(t,n);function o(e){r(a,i,s,o,c,"next",e)}function c(e){r(a,i,s,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return u}});var s=n(9439),a=n(7757),o=n.n(a),c=n(2791),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.themoviedb.org/3",n=(0,c.useState)(null),r=(0,s.Z)(n,2),a=r[0],u=r[1],l=(0,c.useState)(null),f=(0,s.Z)(l,2),d=f[0],h=f[1];return(0,c.useEffect)((function(){var n=function(){var n=i(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(t).concat(e));case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("HTTP error! status: ".concat(r.status));case 6:return n.next=8,r.json();case 8:i=n.sent,u(i),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),h(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),{apiData:a,error:d}}},1397:function(e,t,n){n.d(t,{HC:function(){return b},QI:function(){return _}});var r=n(1413),i=n(4942),s=n(4925),a=n(9439),o=n(9640),c=n(9886),u=n(2791);var l=n(5597),f=n(6516),d=n(2996),h=n(8378),p=n(184),v=["children","styleType","stylePosition","spacing"],m=["as"],x=["as"],y=(0,c.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),j=(0,a.Z)(y,2),Z=j[0],w=j[1],k=(0,l.G)((function(e,t){var n=(0,f.jC)("List",e),a=(0,d.Lr)(e),o=a.children,c=a.styleType,l=void 0===c?"none":c,m=a.stylePosition,x=a.spacing,y=(0,s.Z)(a,v),j=function(e){return u.Children.toArray(e).filter((function(e){return(0,u.isValidElement)(e)}))}(o),w=x?(0,i.Z)({},"& > *:not(style) ~ *:not(style)",{mt:x}):{};return(0,p.jsx)(Z,{value:n,children:(0,p.jsx)(h.m.ul,(0,r.Z)((0,r.Z)({ref:t,listStyleType:l,listStylePosition:m,role:"list",__css:(0,r.Z)((0,r.Z)({},n.container),w)},y),{},{children:j}))})}));k.displayName="List",(0,l.G)((function(e,t){e.as;var n=(0,s.Z)(e,m);return(0,p.jsx)(k,(0,r.Z)({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))})).displayName="OrderedList";var _=(0,l.G)((function(e,t){e.as;var n=(0,s.Z)(e,x);return(0,p.jsx)(k,(0,r.Z)({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));_.displayName="UnorderedList";var b=(0,l.G)((function(e,t){var n=w();return(0,p.jsx)(h.m.li,(0,r.Z)((0,r.Z)({ref:t},e),{},{__css:n.item}))}));b.displayName="ListItem",(0,l.G)((function(e,t){var n=w();return(0,p.jsx)(o.J,(0,r.Z)((0,r.Z)({ref:t,role:"presentation"},e),{},{__css:n.icon}))})).displayName="ListIcon"}}]);
//# sourceMappingURL=14.ac73c15e.chunk.js.map