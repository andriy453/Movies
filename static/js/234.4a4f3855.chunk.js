"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[234],{234:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var i=a(439),n=a(791),s=a(689),c=a(243),r="Reviews_Item__+uUiw",o="Reviews_Title__FwMK0",u="Reviews_Text__o81lC",l=a(184);var h=function(){var e=(0,s.UO)().movieid,t=(0,n.useState)([]),a=(0,i.Z)(t,2),h=a[0],_=a[1];return(0,n.useEffect)((function(){var t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=9472ead59ab5d905fc1e97a44f85f6b1"),params:{language:"en-US",page:"1"},headers:{accept:"application/json"}};c.Z.request(t).then((function(e){_(e.data.results)})).catch((function(e){console.error(e)}))}),[e]),0===h.length?(0,l.jsx)("h3",{children:"No Reviews."}):(0,l.jsx)("ul",{children:null===h||void 0===h?void 0:h.map((function(e){return(0,l.jsxs)("li",{className:r,children:[(0,l.jsxs)("h4",{className:o,children:["Author:",e.author]}),(0,l.jsx)("p",{className:u,children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=234.4a4f3855.chunk.js.map