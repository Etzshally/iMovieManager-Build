"use strict";(self.webpackChunkmovie_list=self.webpackChunkmovie_list||[]).push([[515],{5678:function(t,n,e){e.d(n,{nC:function(){return a},FF:function(){return r},ab:function(){return i},tn:function(){return s}});var a=function(t){return{type:"ADD_TO_WATCHLIST",payload:t}},r=function(t){return{type:"ADD_TO_WATCHED",payload:t}},i=function(t){return{type:"REMOVE_FROM_WATCHLIST",payload:t}},s=function(t){return{type:"REMOVE_FROM_WATCHED",payload:t}}},8361:function(t,n,e){e.d(n,{$h:function(){return a},_n:function(){return r},bV:function(){return i}});var a="a06430d8522adb1e2a6e3b2ed2779fd8",r="https://api.themoviedb.org/3/search/movie",i="https://image.tmdb.org/t/p/w300"},9688:function(t,n,e){e.d(n,{u:function(){return u}});var a=e(885),r=e(2791),i=e(5678),s=e(1853),c=e(8361),o=e(184),u=function(t){var n=t.type,e=t.movie,u=(0,r.useContext)(s.G).dispatch,l=(0,r.useState)(!1),d=(0,a.Z)(l,2),f=d[0],h=d[1];return(0,o.jsxs)("div",{className:"movie-card",onMouseLeave:function(){return h(!1)},onMouseOver:function(){return h(!0)},children:[e.poster_path?(0,o.jsx)("img",{src:c.bV+e.poster_path,alt:e.title,className:"poster"}):(0,o.jsx)("h4",{className:"alt-text",children:e.title}),(0,o.jsx)("div",{className:f?"overlay show-overlay":"overlay",children:(0,o.jsxs)("div",{className:"controls",children:["watchList"===n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("i",{className:"fas fa-eye",onClick:function(){u((0,i.FF)(e)),u((0,i.ab)(e.id))}}),(0,o.jsx)("i",{className:"far fa-trash-alt",onClick:function(){return u((0,i.ab)(e.id))}})]}),"watched"===n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("i",{className:"fas fa-eye-slash ",onClick:function(){u((0,i.tn)(e.id)),u((0,i.nC)(e))}}),(0,o.jsx)("i",{className:"far fa-trash-alt",onClick:function(){return u((0,i.tn)(e.id))}})]})]})})]})}},9515:function(t,n,e){e.r(n);var a=e(2791),r=e(9688),i=e(1853),s=e(184);n.default=function(){var t=(0,a.useContext)(i.G).state;return(0,s.jsx)("div",{className:"card-container",children:t.watched.length>0?t.watched.map((function(t){return(0,s.jsx)(r.u,{movie:t,type:"watched"},t.id)})):(0,s.jsx)("h2",{children:"Nothing here..."})})}}}]);
//# sourceMappingURL=515.a940554b.chunk.js.map