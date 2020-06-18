(this["webpackJsonpmed-map"]=this["webpackJsonpmed-map"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),l=(n(13),function(e){var t=e.location,n=e.searchTerm;return c.a.createElement("button",{onClick:function(){window.open("https://www.volunteermatch.org/search/?l=".concat(t,"%2C+USA&k=").concat(n.toLowerCase(),"&searchOpps="),"_blank"),window.open("https://createthegood.aarp.org/volunteer-search.html?keywords=".concat(n.toLowerCase(),"&search_radius=25&showup_page=0&anytime=on"),"_blank")}},"Volunteer!")}),i=(n(14),function(){return c.a.createElement("header",null,c.a.createElement("div",null,c.a.createElement("h1",null,"MedMap"),c.a.createElement(l,{location:"fl",searchTerm:"cancer"})))}),u=n(1),m=n(5),s=n(6),p=function(e){var t=e.id;return c.a.createElement("p",{onClick:function(){return window.open("http://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat(t))}},t)},f=function(e){var t=e.searchTerm,n=Object(a.useState)([]),r=Object(u.a)(n,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){var e="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term=".concat(t,"+AND+free+fulltext[filter]&retmode=json");fetch(e).then((function(e){return e.json()})).then((function(e){return l(e.esearchresult.idlist)}))}),[t,o]),o?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Papers"),o.map((function(e,t){return c.a.createElement(p,{key:t,id:e})}))):null},h={al:1,ak:2,ar:5,az:4,ca:6,co:8,ct:9,dc:11,de:10,fl:12,ga:13,hi:15,ia:19,id:16,il:17,in:18,ks:20,ky:21,la:22,ma:25,md:24,me:23,mi:26,mn:27,mo:29,ms:28,mt:30,nc:37,nd:38,ne:31,nh:33,nj:34,nm:35,nv:32,ny:36,oh:39,ok:40,or:41,pa:42,ri:44,sc:45,sd:46,tn:47,tx:48,ut:49,va:51,vt:50,wa:53,wi:55,wv:54,wy:56},E=function(e){var t=e.disease,n=e.state,r=e.year,o=Object(a.useState)(0),l=Object(u.a)(o,2),i=l[0],m=l[1];return Object(a.useEffect)((function(){if(n){var e="http://api.census.gov/data/2010/sf1?key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/med-map"}).REACT_APP_CENSUS_API_KEY,"&get=P0010001,P0080003,P0010001,P0080006,NAME&for=state:").concat(h[n]);fetch(e).then((function(e){return e.json()})).then((function(e){return m(e[1][0])})),m(100)}}),[t,n,r]),c.a.createElement("p",null,"Populaion: ".concat(i))},d=function(e){var t=e.book,n=t.creators,a=t.title,r=t.publicationName,o=t.publicationDate;return c.a.createElement("p",null,"".concat(a," ").concat(n.join(", ")," ").concat(r," ").concat(o))},b=function(e){var t=e.searchTerm,n=Object(a.useState)(),r=Object(u.a)(n,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){var e="http://api.springer.com/metadata/json?q=keyword:".concat(t,"&api_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/med-map"}).REACT_APP_SPRINGER_API_KEY);fetch(e).then((function(e){return e.json()})).then((function(e){return l(e.records.map((function(e){return{creators:e.creators,title:e.title,publicationName:e.publicationName,publicationDate:e.publicationDate}})))}))}),[t]),o?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Books"),o.map((function(e,t){return c.a.createElement(d,{key:t,book:e})}))):null},v=(n(15),n(16),["--","Diabetes","Cancer","Flu"]),w=["2014","2015","2016","2017","2018","2019"],g=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("--"),l=Object(u.a)(o,2),i=l[0],p=l[1],h=Object(a.useState)("2014"),d=Object(u.a)(h,2),g=d[0],j=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,n),c.a.createElement("div",null,c.a.createElement(m.SVGMap,{className:"map",map:s.a,isLocationSelected:function(e){return e.id===n},onLocationClick:function(e){return r(e.target.id)}}),c.a.createElement(E,{disease:i,state:n,year:g}),c.a.createElement("select",{onChange:function(e){var t=e.target;p(t.value)}},v.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)}))),c.a.createElement("select",{onChange:function(e){var t=e.target;j(t.value)}},w.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)}))),c.a.createElement(f,{searchTerm:i}),c.a.createElement(b,{searchTerm:i})))},j=(n(17),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Nicholas Glazer :: Stephen DiGiacomo :: 2014-2019"))}),k=(n(18),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(g,null),c.a.createElement(j,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(7);n.n(O).a.config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/med-map"})),o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6ce3cab6.chunk.js.map