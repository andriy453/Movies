"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[185],{185:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var i=a(439),n=a(791),r=a(243),o=a(686),s=a.n(o),u=a(87),c=a(689),l={form:"Movies_form__mp42q",input:"Movies_input__OE3ef",itemMovie:"Movies_itemMovie__jmcot",button:"Movies_button__hVjwG"},m=a(184);var f=function(){var e=(0,n.useState)([]),t=(0,i.Z)(e,2),a=t[0],o=t[1],f=(0,n.useState)(!1),h=(0,i.Z)(f,2),v=h[0],p=h[1],d=(0,n.useState)(""),_=(0,i.Z)(d,2),g=_[0],b=_[1],x=(0,u.lr)(),j=(0,i.Z)(x,2),w=j[0],S=j[1],k=(0,c.TH)(),M=w.get("q");(0,n.useEffect)((function(){if(M){var e={method:"GET",url:"https://api.themoviedb.org/3/search/movie?api_key=9472ead59ab5d905fc1e97a44f85f6b1",params:{query:"".concat(M),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer 9472ead59ab5d905fc1e97a44f85f6b1"}};r.Z.request(e).then((function(e){o(e.data)})).catch((function(e){console.error(e)}))}}),[v]);var N=a.results;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),""===M&&s().Notify.failure("please writing value "),setTimeout((function(){p(!1)}),500)},className:l.form,children:[(0,m.jsx)("input",{onChange:function(e){if(b(e.target.value),""===e.currentTarget.value.trim())return S({});S({q:e.currentTarget.value.toLowerCase()})},className:l.input,type:"text",value:g,placeholder:"Search movies"}),(0,m.jsx)("button",{type:"submit",className:l.button,children:(0,m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png",width:"33px",height:"33px",alt:""})})]}),(0,m.jsx)("ul",{className:l.conteiner_movie,children:null!==N&&(null===N||void 0===N?void 0:N.map((function(e){var t=e.id,a=e.original_title;return(0,m.jsx)("li",{children:(0,m.jsx)(u.rU,{className:l.itemMovie,state:{from:k},to:"/movies/".concat(t),children:a})},t)})))})]})}}}]);
//# sourceMappingURL=185.cb53c05a.chunk.js.map