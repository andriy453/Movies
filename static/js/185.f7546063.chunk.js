"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[185],{185:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var a=i(439),r=i(791),o=i(243),s=i(686),n=i.n(s),c=i(87),l=i(689),u={form:"Movies_form__mp42q",input:"Movies_input__OE3ef",itemMovie:"Movies_itemMovie__jmcot",button:"Movies_button__hVjwG",conteiner_movie:"Movies_conteiner_movie__EMS5g",title:"Movies_title__EqSqF",item:"Movies_item__+Yifn",cartConteiner:"Movies_cartConteiner__Lz46W",titleMovie:"Movies_titleMovie__vA1LW",yearMovie:"Movies_yearMovie__lW3Sx",scoreMovie:"Movies_scoreMovie__5Nh0-"},m=i(184);var v=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),i=t[0],s=t[1],v=(0,r.useState)(!1),_=(0,a.Z)(v,2),h=_[0],d=_[1],f=(0,r.useState)(""),p=(0,a.Z)(f,2),g=p[0],M=p[1],x=(0,c.lr)(),b=(0,a.Z)(x,2),j=b[0],N=b[1],w=(0,l.TH)(),k=j.get("q");(0,r.useEffect)((function(){if(k){var e={method:"GET",url:"https://api.themoviedb.org/3/search/movie?api_key=9472ead59ab5d905fc1e97a44f85f6b1&limit=10",params:{query:"".concat(k),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer 9472ead59ab5d905fc1e97a44f85f6b1"}};o.Z.request(e).then((function(e){s(e.data)})).catch((function(e){console.error(e)}))}}),[h]);var S=i.results;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(!0),""===k&&n().Notify.failure("please writing value "),setTimeout((function(){d(!1)}),500)},className:u.form,children:[(0,m.jsx)("input",{onChange:function(e){if(M(e.target.value),""===e.currentTarget.value.trim())return N({});N({q:e.currentTarget.value.toLowerCase()})},className:u.input,type:"text",value:g,placeholder:"Search movies"}),(0,m.jsx)("button",{type:"submit",className:u.button,children:(0,m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png",width:"33px",height:"33px",alt:""})})]}),(0,m.jsx)("ul",{className:u.conteiner_movie,children:null!==S&&(null===S||void 0===S?void 0:S.filter((function(e){return e.title})).map((function(e){var t=e.title,i=e.id,a=e.poster_path,r=e.release_date,o=e.vote_average,s=new Date(r),n=Number.isNaN(s)?"Unknown":s.getFullYear(),l=Math.round(100*Number(o)/10);return(0,m.jsx)("li",{className:u.item,children:(0,m.jsxs)(c.rU,{className:u.itemMovie,state:{from:w},to:"/movies/".concat(i),children:[a?(0,m.jsx)("img",{height:450,width:300,className:u.img,src:"https://image.tmdb.org/t/p/w500".concat(a),alt:t}):(0,m.jsx)("img",{height:450,width:300,className:u.img,src:"https://rukminim1.flixcart.com/image/300/300/kzx1a4w0/sticker/m/r/i/medium-404-error-not-found-0-1-an-sb6528-sign-ever-original-imagbtu8ztxntpkx.jpeg",alt:t}),(0,m.jsxs)("div",{className:u.cartConteiner,children:[(0,m.jsx)("h2",{className:u.titleMovie,children:t}),(0,m.jsx)("p",{className:u.yearMovie,children:n}),(0,m.jsxs)("p",{className:u.scoreMovie,children:["User Score: ",l,"%"]})]})]})},i)})))})]})}}}]);
//# sourceMappingURL=185.f7546063.chunk.js.map