"use strict";(self.webpackChunkpractic_react=self.webpackChunkpractic_react||[]).push([[645],{1645:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),c=e(9439),a=e(7757),o=e.n(a),s=e(2791),u=e(1087),i=e(7689),f=e(4047),l="single-post-page_title__rQ8Bj",p=e(184),d=function(){var t,n=(0,s.useState)({}),e=(0,c.Z)(n,2),a=e[0],d=e[1],h=(0,i.UO)().id,m=(0,i.s0)(),v=(null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)||"/";(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n,e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.u_)(h);case 3:n=t.sent,e=n.data,d(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0.response,console.log(r.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]);return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("button",{onClick:function(){return m(v)},children:"Go back"}),(0,p.jsx)("h1",{className:l,children:a.title}),(0,p.jsx)("p",{children:a.body}),(0,p.jsx)(u.rU,{state:{from:v},to:"comments",children:"Comments"}),(0,p.jsx)(i.j3,{})]})}},4047:function(t,n,e){e.d(n,{Jq:function(){return c},cl:function(){return a},u_:function(){return o},w8:function(){return s}});var r=e(5294).Z.create({baseURL:"https://jsonplaceholder.typicode.com/posts"}),c=function(){return r.get("/")},a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("/",{params:{q:t,_page:n,_limit:4}})},o=function(t){return r.get("/".concat(t))},s=function(t){return r.get("/".concat(t,"/comments"))}}}]);
//# sourceMappingURL=645.ac3a05d9.chunk.js.map