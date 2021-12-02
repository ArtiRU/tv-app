(this["webpackJsonptv-app"]=this["webpackJsonptv-app"]||[]).push([[0],{191:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(33),c=n.n(a),i=n(54),o=n(17),s=n(13),l=n(3),u=n(7),d=Object(u.a)("div")((function(e){var t=e.theme;return Object(l.a)({display:"flex",flexWrap:"wrap"},t.breakpoints.down("desktop_small"),{justifyContent:"center"})})),j=n(259),p=n(14),b=n(270),f=n(271),x=n(272),h=n(273),O=Object(u.a)(x.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.secondary.dark,maxWidth:300,cursor:"pointer",color:t.palette.primary.main,margin:20,"&: hover":{backgroundColor:t.palette.background.main},"& .css-1qvr50w-MuiTypography-root":{fontSize:"16px"}}})),m=Object(u.a)(h.a)((function(e){e.theme;return{width:200}})),g=Object(u.a)("div")((function(e){return{position:"absolute",top:10,right:10,display:"flex",justifyContent:"center",alignItems:"center",width:50,height:20,backgroundColor:e.theme.palette.background.green,fontSize:13,fontWeight:"bold"}})),v=n(260),y=n(74),k=n.n(y),w="/",S="/favorite",_="/films",C="/notifications",E="/search",I="https://image.tmdb.org/t/p/w300",L="https://image.tmdb.org/t/p/w500",G="https://www.movienewz.com/img/films/poster-holder.jpg",F="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",D="SET_ERROR",T="SET_IS_LOADING",R="SET_FILMS",N="SET_DRAWER",z="SET_PAGE",J="SET_FAVORITE",A="SET_GENRES",P="SET_SELECTED_GENRES",B="REMOVE_SELECTED_GENRES",M="SET_SEARCH",W="SET_CREDITS",H=n(261),q=n(16),U=n(52),V=n(15),Y=n(19),K=n.n(Y),Q=n(35),X=n(106),Z=n.n(X).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8b447e45c521b61c20b167f7f8a371ce"}}),$={setIsLoading:function(e){return{type:T,payload:e}},setError:function(e){return{type:D,payload:e}},setFilms:function(e){return{type:R,payload:e}},setPage:function(e){return{type:z,payload:e}},setFavorite:function(e){return{type:J,payload:e}},setGenres:function(e){return{type:A,payload:e}},setSearch:function(e){return{type:M,payload:e}},setCredits:function(e){return{type:W,payload:e}},setSelectedGenres:function(e){return{type:P,payload:e}},removeSelectedGenres:function(e){return{type:B,payload:e}},fetchAllFilms:function(e,t,n){return function(){var r=Object(Q.a)(K.a.mark((function r(a){var c;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a($.setIsLoading(!0)),r.next=4,Z.get(e+"?page=".concat(t,"&with_genres=").concat(n));case 4:c=r.sent,a($.setFilms(c.data.results)),setTimeout((function(){a($.setIsLoading(!1))}),1e3),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a($.setError(r.t0));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},addFavorite:function(e){return function(){var t=Object(Q.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n($.setIsLoading(!0)),t.next=3,JSON.parse(localStorage.getItem("favorite"));case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0=[];case 6:(r=t.t0).find((function(t){return t.title===e.title}))||(n($.setFavorite([].concat(Object(V.a)(r),[e]))),localStorage.setItem("favorite",JSON.stringify([].concat(Object(V.a)(r),[e])))),n($.setIsLoading(!1));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeFavorite:function(e){return function(){var t=Object(Q.a)(K.a.mark((function t(n){var r,a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(localStorage.getItem("favorite"));case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=[];case 5:r=t.t0,a=r.filter((function(t){return t.title!==e})),n($.setFavorite(a)),localStorage.setItem("favorite",JSON.stringify(a));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchGenres:function(){return function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t($.setIsLoading(!0)),e.next=3,Z.get("/genre/movie/list");case 3:n=e.sent,t($.setGenres(n.data.genres)),t($.setIsLoading(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchSearch:function(e){return function(){var t=Object(Q.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n($.setIsLoading(!0)),t.next=3,Z.get("/search/movie?query=".concat(e,"&include_adult=false"));case 3:r=t.sent,n($.setSearch(r.data.results)),n($.setIsLoading(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchCredits:function(e){return function(){var t=Object(Q.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n($.setIsLoading(!0)),t.next=3,Z.get("/movie/".concat(e,"/credits"));case 3:r=t.sent,n($.setCredits(r.data.cast)),n($.setIsLoading(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ee={setDrawer:function(e){return{type:N,payload:e}}},te=Object(s.a)(Object(s.a)({},$),ee),ne=function(){var e=Object(q.b)();return Object(U.b)(te,e)},re=n(257),ae=function(e){var t=e.getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;n<10&&(n="0"+n);var r=e.getFullYear()%100;return r<10&&(r="0"+r),t+"."+n+"."+r},ce=n(243),ie=n(266),oe=n(248),se=Object(u.a)(ie.a)((function(e){var t=e.theme;return{width:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:"10px",color:"#fff",boxShadow:t.shadows[5],padding:t.spacing(1,1,3)}})),le=Object(u.a)(oe.a)((function(){return{display:"flex",justifyContent:"center",alignItems:"center"}})),ue=Object(u.a)("div")((function(e){var t=e.theme;return Object(l.a)({display:"flex",overflow:"hidden"},t.breakpoints.between("mobile","laptop"),{flexDirection:"column"})})),de=Object(u.a)("img")((function(e){var t,n=e.theme;return t={display:"none"},Object(l.a)(t,n.breakpoints.up("laptop_medium"),{display:"block",width:"400px"}),Object(l.a)(t,n.breakpoints.between("laptop_small","laptop_medium"),{display:"block",width:"350px"}),Object(l.a)(t,n.breakpoints.between("laptop","desktop_small"),{display:"block",width:"300px"}),t})),je=Object(u.a)("img")((function(e){var t=e.theme;return Object(l.a)({display:"none"},t.breakpoints.between("mobile","laptop"),{display:"block"})})),pe=n(245),be=n(274),fe=n(108),xe=n.n(fe),he=(n(185),n(1)),Oe=function(e){return e.preventDefault()},me=function(e){var t=e.id,n=ne().fetchCredits,a=Object(q.c)((function(e){return e.films})).credits;Object(r.useEffect)((function(){n(t)}),[t]);var c=null===a||void 0===a?void 0:a.map((function(e){return Object(he.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",objectFit:"contain",padding:"10px",alignItems:"center"},children:[Object(he.jsx)("img",{src:e.profile_path?"".concat(I,"/").concat(e.profile_path):F,alt:null===e||void 0===e?void 0:e.name,width:200,onDragStart:Oe,style:{borderRadius:"10px",marginBotton:"5px",boxShadow:"0px 0px 5px black"}}),Object(he.jsx)("b",{children:null===e||void 0===e?void 0:e.name})]})}));return Object(he.jsx)(xe.a,{autpPlay:!0,mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:1},580:{items:2},800:{items:3},1366:{items:4},1600:{items:5},2e3:{items:7}},items:c})},ge=function(e){var t=e.children,n=e.id,a=Object(r.useState)(!1),c=Object(p.a)(a,2),i=c[0],o=c[1],s=Object(r.useState)({}),l=Object(p.a)(s,2),u=l[0],d=l[1],j=Object(r.useState)({}),b=Object(p.a)(j,2),f=b[0],x=b[1];return Object(r.useEffect)((function(){var e=!0,t=function(){var t=Object(Q.a)(K.a.mark((function t(){var r,a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.get("/movie/".concat(n,"/videos"));case 2:r=t.sent,e&&x(null===(a=r.data.results[0])||void 0===a?void 0:a.key);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var t=Object(Q.a)(K.a.mark((function t(){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.get("/movie/".concat(n));case 2:r=t.sent,e&&d(r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),r(),function(){return e=!1}}),[n]),Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(v.a,{onClick:function(){return o(!0)},children:t}),Object(he.jsx)(le,{open:i,onClose:function(){return o(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(he.jsx)(ce.a,{in:i,children:u&&Object(he.jsx)(se,{children:Object(he.jsxs)(ue,{children:[Object(he.jsx)(de,{src:u.poster_path?"".concat(L,"/").concat(u.poster_path):G,alt:u.name||u.title}),Object(he.jsx)(je,{src:u.backdrop_path?"".concat(L,"/").concat(u.backdrop_path):G,alt:u.name||u.title}),Object(he.jsxs)(v.a,{sx:{ml:"10px",width:"100%"},children:[Object(he.jsxs)(v.a,{sx:{fontWeight:"bold",fontSize:"22px"},children:[u.name||u.title,", ",(u.first_air_date||u.release_date||"----").substr(0,4)]}),Object(he.jsx)(v.a,{sx:{mt:"5px"},children:u.tagline&&Object(he.jsx)("i",{children:u.tagline})}),Object(he.jsx)(v.a,{sx:{mt:"10px"},children:u.overview}),Object(he.jsx)(me,{id:n}),Object(he.jsx)(be.a,{variant:"contained",startIcon:Object(he.jsx)(pe.a,{}),target:"_blank",href:"https://youtube.com/watch?v=".concat(f),sx:{mt:"10px",backgroundColor:"red",color:"#fff"},children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0440\u0435\u0439\u043b\u0435\u0440"})]})]})})})})]})},ve=function(e){var t=e.id,n=e.vote_average,a=e.title,c=e.poster_path,i=e.release_date,o=e.media_type,s=Object(r.useState)(!1),l=Object(p.a)(s,2),u=l[0],d=l[1],x=Object(q.c)((function(e){return e.films})),h=x.favorite,y=x.isLoading,w=ne().addFavorite,S=new Date,_=Object(he.jsx)(H.a,{color:u?"primary":"secondary",onClick:function(e){e.stopPropagation(),w({id:t,vote_average:n,title:a,poster_path:c,release_date:i,media_type:o,date:ae(S)})},children:Object(he.jsx)(k.a,{})});return Object(r.useEffect)((function(){localStorage.getItem("favorite")&&(JSON.parse(localStorage.getItem("favorite")||[]).find((function(e){return e.title===a}))&&d(!0))}),[h,a]),Object(he.jsx)(ge,{id:t,children:Object(he.jsxs)(O,{children:[Object(he.jsx)(m,{title:y?Object(he.jsx)(re.a,{width:"80%",height:"30px"}):a,action:y?Object(he.jsx)(re.a,{width:"40px",height:"40px"}):_}),Object(he.jsxs)(v.a,{sx:{position:"relative"},children:[y?Object(he.jsx)(re.a,{width:"100%",height:"250px"}):Object(he.jsx)(b.a,{component:"img",height:"300",image:c?I+c:F,alt:a}),!y&&Object(he.jsx)(g,{sx:{bgcolor:n>6.6?"background.green":"gray"},children:Object(he.jsx)(v.a,{children:n})})]}),y?Object(he.jsx)(re.a,{width:"100%"}):Object(he.jsx)(f.a,{children:Object(he.jsx)(v.a,{sx:{display:"flex",justifyContent:"center"},children:Object(he.jsx)(j.a,{variant:"body2",color:"text.light",children:i||"Release date is not found"})})})]})})},ye=n(249),ke=n(258),we=function(){var e=Object(q.c)((function(e){return e.films})),t=e.genres,n=e.selectedGenres,a=ne(),c=a.fetchGenres,i=a.setSelectedGenres,o=a.removeSelectedGenres;return Object(r.useEffect)((function(){return c(),function(){i([])}}),[]),Object(he.jsxs)(v.a,{children:[n.length>0&&n.map((function(e){return Object(he.jsx)(ke.a,{clickable:!0,size:"small",sx:{color:"#fff",backgroundColor:"primary.chip",mt:"10px",mr:"10px"},label:e.name,onDelete:function(){return o(e)}},e.id)})),t.length>0&&t.map((function(e){return Object(he.jsx)(ke.a,{clickable:!0,size:"small",sx:{color:"#fff",backgroundColor:"secondary.dark",mt:"10px",mr:"10px",padding:2},label:e.name,onClick:function(){return i({name:e.name,id:e.id})}},e.id)}))]})},Se=function(e){var t=e.films,n=Object(o.f)(),r=Object(q.c)((function(e){return e.films})).isLoading,a=ne().setPage;return Object(he.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(he.jsxs)(v.a,{sx:{flex:"1 1 auto"},children:[Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",sx:{ml:"20px"},children:"/"===n.location.pathname?"\u0422\u0440\u0435\u043d\u0434\u044b":"\u0424\u0438\u043b\u044c\u043c\u044b"}),"/films"===n.location.pathname&&Object(he.jsx)(v.a,{sx:{ml:"20px"},children:Object(he.jsx)(we,{})}),Object(he.jsx)(d,{children:t.map((function(e){return e.title&&Object(he.jsx)(ve,Object(s.a)({},e),e.id)}))})]}),Object(he.jsx)(v.a,{sx:{display:r?"none":"flex",justifyContent:"center"},children:Object(he.jsx)(ye.a,{count:1e3,color:"primary",onChange:function(e,t){a(t),window.scrollBy({behavior:"smooth",top:-1e3})}})})]})},_e=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},Ce=function(e,t){return function(n){var a=ne().fetchAllFilms,c=Object(q.c)((function(e){return e.films})),i=c.films,o=c.page,l=c.selectedGenres,u=_e(l);return Object(r.useEffect)((function(){a(t,o,u)}),[o,u]),Object(he.jsx)(e,Object(s.a)(Object(s.a)({},n),{},{films:i}))}},Ee=function(){var e=Object(q.c)((function(e){return e.films})).favorite;return Object(he.jsxs)(v.a,{children:[Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",sx:{pl:"20px"},children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(he.jsx)(d,{children:e?e.map((function(e){return e.title&&Object(he.jsx)(ve,Object(s.a)({},e),e.title)})):Object(he.jsx)(j.a,{sx:{mt:5},variant:"h5",color:"primary",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043f\u0443\u0441\u0442"})})]})},Ie=n(110),Le=n.n(Ie),Ge=function(e){var t=e.title,n=e.date,r=ne().removeFavorite;return Object(he.jsxs)(v.a,{sx:{mb:"20px",backgroundColor:"secondary.dark",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"15px"},children:[Object(he.jsxs)(v.a,{sx:{color:"#fff"},children:[Object(he.jsxs)(v.a,{sx:{color:"red",display:"inline"},children:[n,":  "]})," \u0424\u0438\u043b\u044c\u043c ",Object(he.jsx)(v.a,{sx:{color:"red",display:"inline"},children:t})," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"]}),Object(he.jsx)(H.a,{sx:{color:"#fff"},onClick:function(){return r(t)},children:Object(he.jsx)(Le.a,{})})]},t)},Fe=function(){var e=Object(q.c)((function(e){return e.films})).favorite;return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"}),Object(he.jsx)(v.a,{sx:{display:"flex",flexDirection:"column-reverse"},children:e?e.map((function(e){return Object(he.jsx)(Ge,Object(s.a)({},e),e.title)})):Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",sx:{ml:"20px"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"})})]})},De=n(251),Te=n(75),Re=n.n(Te),Ne=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(q.c)((function(e){return e.films})).search,i=ne().fetchSearch;return Object(he.jsxs)(v.a,{children:[Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",sx:{mb:"20px",pl:"20px"},children:"\u041f\u043e\u0438\u0441\u043a"}),Object(he.jsxs)(ie.a,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"calc(100% - 25px)",mb:"10px",ml:"20px"},children:[Object(he.jsx)(De.a,{sx:{ml:1,flex:1},placeholder:"\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432",onChange:function(e){return a(e.target.value)}}),Object(he.jsx)(H.a,{type:"button",sx:{p:"10px"},"aria-label":"search",onClick:function(){return i(n)},children:Object(he.jsx)(Re.a,{})})]}),Object(he.jsx)(d,{children:c.length>0?c.map((function(e){return Object(he.jsx)(ve,Object(s.a)({},e),e.id)})):Object(he.jsx)(j.a,{variant:"h5",component:"div",color:"primary",sx:{ml:"20px"},children:"\u0424\u0438\u043b\u044c\u043c\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})]})},ze=Ce(Se,"/trending/all/day"),Je=Ce(Se,"/discover/movie"),Ae=[{path:w,component:ze,exact:!0},{path:_,component:Je,exact:!0},{path:S,component:Ee,exact:!0},{path:C,component:Fe,exact:!0},{path:E,component:Ne,exact:!0}],Pe=function(){return Object(he.jsx)(o.c,{children:Ae.map((function(e){return Object(he.jsx)(o.a,{path:e.path,component:e.component,exact:e.exact},e.path)}))})},Be=n(262),Me=n(267),We=Object(u.a)(Me.a)((function(e){return{boxShadow:"0px 1px 5px black",backgroundColor:e.theme.palette.secondary.main}})),He=n(254),qe=n(111),Ue=n.n(qe),Ve=n(112),Ye=n.n(Ve),Ke=function(){var e=Object(o.f)(),t=ne().setDrawer,n=Object(q.c)((function(e){return e.films})).favorite;return Object(he.jsx)(We,{children:Object(he.jsxs)(Be.a,{children:[Object(he.jsx)(H.a,{color:"primary",size:"large",edge:"start",onClick:function(){return t(!0)},children:Object(he.jsx)(Ue.a,{})}),Object(he.jsx)(j.a,{sx:{cursor:"pointer"},variant:"h6",component:"div",color:"primary",onClick:function(){return e.push(w)},children:"FILMS HUB"}),Object(he.jsx)(v.a,{sx:{flexGrow:1}}),Object(he.jsx)(v.a,{children:Object(he.jsx)(H.a,{color:"primary",size:"large",edge:"end",onClick:function(){return e.push(C)},children:Object(he.jsx)(He.a,{badgeContent:n?n.length:0,color:"error",children:Object(he.jsx)(Ye.a,{})})})})]})})},Qe=Object(u.a)("div")((function(e){return{minHeight:"100vh",backgroundColor:e.theme.palette.secondary.main,padding:"76px 16px 80px 16px"}})),Xe=n(268),Ze=n(269),$e=Object(u.a)(Xe.a)((function(e){return{position:"fixed",bottom:0,left:0,right:0,backgroundColor:e.theme.palette.secondary.dark,zIndex:100}})),et=Object(u.a)(Ze.a)((function(e){return{color:e.theme.palette.primary.main}})),tt=n(114),nt=n.n(tt),rt=n(113),at=n.n(rt),ct=function(){var e=Object(o.f)(),t=Object(r.useState)(0),n=Object(p.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){0===a?e.push(w):1===a?e.push(_):2===a?e.push(S):3===a&&e.push(E)}),[a,e]),Object(he.jsx)(v.a,{sx:{width:"100%"},children:Object(he.jsxs)($e,{value:a,onChange:function(e,t){return c(t)},showLabels:!0,children:[Object(he.jsx)(et,{label:"\u0422\u0440\u0435\u043d\u0434\u044b",icon:Object(he.jsx)(at.a,{})}),Object(he.jsx)(et,{label:"\u0424\u0438\u043b\u044c\u043c\u044b",icon:Object(he.jsx)(nt.a,{})}),Object(he.jsx)(et,{label:"\u041b\u044e\u0431\u0438\u043c\u043e\u0435",icon:Object(he.jsx)(k.a,{})}),Object(he.jsx)(et,{label:"\u041f\u043e\u0438\u0441\u043a",icon:Object(he.jsx)(Re.a,{})})]})})},it=n(263),ot=n(252),st=n(264),lt=n(265),ut=n(115),dt=n.n(ut),jt=function(){return Object(he.jsx)(v.a,{sx:{width:250},children:Object(he.jsx)("nav",{children:Object(he.jsx)(it.a,{children:["\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438","\u0410\u043a\u0442\u0435\u0440\u044b"].map((function(e){return Object(he.jsxs)(ot.a,{children:[Object(he.jsx)(st.a,{children:Object(he.jsx)(dt.a,{})}),Object(he.jsx)(lt.a,{primary:e})]},e)}))})})})},pt=n(255);var bt=function(){var e=Object(q.c)((function(e){return e.modals})).drawer,t=ne(),n=t.setDrawer,a=t.setFavorite;return Object(r.useEffect)((function(){a(JSON.parse(localStorage.getItem("favorite")))}),[]),Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Ke,{}),Object(he.jsx)(pt.a,{open:e,onClose:function(){return n(!1)},children:Object(he.jsx)(jt,{})}),Object(he.jsx)(Qe,{children:Object(he.jsx)(Pe,{})}),Object(he.jsx)(ct,{})]})},ft=(n(190),n(256)),xt=n(76),ht=Object(xt.a)({palette:{primary:{main:"#ffffff",chip:"#9c27b0"},secondary:{main:"#39445a",dark:"#2d313a"},background:{main:"#f50",green:"#3bb33b;"},text:{light:"#ffffff",dark:"#000000"}},breakpoints:{values:{mobile:0,mobile_portrait_small:320,mobile_landscape_small:479,tablet_portrait_medium:480,tablet_landscape_medium:767,laptop:1024,laptop_small:1200,laptop_medium:1366,desktop_small:1650,desktop_large:1920}}}),Ot=n(116),mt={films:[],page:1,favorite:[],genres:[],selectedGenres:[],search:[],credits:[],isLoading:!1,error:null},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(s.a)(Object(s.a)({},e),{},{isLoading:t.payload});case D:return Object(s.a)(Object(s.a)({},e),{},{error:t.payload,isLoading:!1});case R:return Object(s.a)(Object(s.a)({},e),{},{films:t.payload});case z:return Object(s.a)(Object(s.a)({},e),{},{page:t.payload});case J:return Object(s.a)(Object(s.a)({},e),{},{favorite:t.payload});case A:return Object(s.a)(Object(s.a)({},e),{},{genres:t.payload});case P:return 0===t.payload.length?Object(s.a)(Object(s.a)({},e),{},{selectedGenres:[]}):Object(s.a)(Object(s.a)({},e),{},{selectedGenres:[].concat(Object(V.a)(e.selectedGenres),[{name:t.payload.name,id:t.payload.id}]),genres:e.genres.filter((function(e){return e.id!==t.payload.id}))});case B:return Object(s.a)(Object(s.a)({},e),{},{selectedGenres:e.selectedGenres.filter((function(e){return e.id!==t.payload.id})),genres:[].concat(Object(V.a)(e.genres),[{name:t.payload.name,id:t.payload.id}])});case M:return Object(s.a)(Object(s.a)({},e),{},{search:t.payload});case W:return Object(s.a)(Object(s.a)({},e),{},{credits:t.payload});default:return e}},vt={drawer:!1,contentOpen:!1},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;return t.type===N?Object(s.a)(Object(s.a)({},e),{},{drawer:t.payload}):e},kt=Object(U.c)({films:gt,modals:yt}),wt=Object(U.d)(kt,Object(U.a)(Ot.a));c.a.render(Object(he.jsx)(q.a,{store:wt,children:Object(he.jsx)(ft.a,{theme:ht,children:Object(he.jsx)(i.a,{children:Object(he.jsx)(bt,{})})})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.0574bbe3.chunk.js.map