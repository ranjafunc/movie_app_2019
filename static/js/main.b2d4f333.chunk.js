(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{38:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),r=n(29),i=n.n(r),o=n(8),l=n(2);n(38);var j=function(e){return console.log(e),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(a.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},m=n(17),u=n.n(m),d=n(30),v=n(11),b=n(12),h=n(14),p=n(13),O=n(31),x=n.n(O);n(58);var f=function(e){var t=e.id,n=e.year,s=e.title,c=e.summary,r=e.poster,i=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:c,poster:r,genres:i}},children:[Object(a.jsx)("img",{src:r,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:n}),Object(a.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[c.slice(0,180),"..."]})]})]})})},g=(n(64),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.large_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component)),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(t.state),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsx)("div",{children:e.state.summary}):null}}]),n}(c.a.Component);n(65);var y=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"about"})]})};var N=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(a.jsx)(l.a,{path:"/about",component:j}),Object(a.jsx)(l.a,{path:"/movie/:id",component:_})]})})};i.a.render(Object(a.jsx)(N,{}),document.getElementById("egg"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b2d4f333.chunk.js.map