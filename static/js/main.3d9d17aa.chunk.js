(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),s=n(14),a=n.n(s),o=(n(22),n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))});var i=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(i,{id:e.id,name:e.name,email:e.email},e.id)}))})},l=n(4),d=n.n(l),j=n(15),u=n(5);var h=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"400px"},children:e.children})},p=n(16),f=n.n(p);var O=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),o=Object(u.a)(a,2),i=o[0],l=o[1];Object(c.useEffect)(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);var p=i.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{type:"search",onChange:function(e){s(e.target.value),console.log(n)},value:n,placeholder:"Search Robots",className:"pa3 ba b--green bg-lightest-blue"})}),Object(r.jsx)(h,{children:Object(r.jsx)(b,{robots:p})})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),o()}},[[42,1,2]]]);
//# sourceMappingURL=main.3d9d17aa.chunk.js.map