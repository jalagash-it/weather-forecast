(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-14a730d9":"72be3fb3","chunk-2d217357":"4794a30e","chunk-2d21a3d2":"2169d9ef","chunk-2d22d746":"3e764f56","chunk-3a593c1c":"303e1b69"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-14a730d9":1,"chunk-3a593c1c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-14a730d9":"303a6028","chunk-2d217357":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3a593c1c":"4dafecbc"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dcc":function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),a=o.a.create({baseURL:"api/",headers:{"Content-Type":"application/json"}});a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.token=t),e})),a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),t["a"]=a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={mounted:function(){window["test"]=this}},c=u,i=n("2877"),s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,f=n("5f5b"),d=n("b1e0"),p=(n("f9e3"),n("2dd8"),n("d3b7"),n("8c4f")),h=n("2f62"),m=n("0dcc");r["default"].use(h["a"]);var g=new h["a"].Store({state:{user:{}},mutations:{setUser:function(e,t){e.user=t}},actions:{checkUser:function(e){var t=e.commit;return m["a"].post("/check").then((function(e){return t("setUser",e.data.user),e}))},logout:function(e){var t=e.commit;localStorage.removeItem("token"),t("setUser",null)}}}),v=g;r["default"].use(p["a"]);var b=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},beforeEnter:function(e,t,n){v.dispatch("checkUser").then((function(){return n()})).catch((function(){return n("/login")}))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-3a593c1c").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-14a730d9").then(n.bind(null,"a55b"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}}],w=new p["a"]({base:"/",routes:b}),k=w,y=(n("4de4"),n("7db0"),n("4160"),n("ac1f"),n("5319"),n("498a"),n("159b"),n("53ca")),S=n("0c6e"),O=n("359c"),j=n.n(O),N={insert:function(e,t){console.log(e,t);var n=JSON.parse(localStorage.getItem(e))||[];n.push(t),localStorage.setItem(e,JSON.stringify(n))},where:function(e,t){var n=JSON.parse(localStorage.getItem(e));return n?n.filter(t):[]},update:function(e,t,n){console.log(e,n);var r=JSON.parse(localStorage.getItem(e))||[],o=r.filter(t);return o.forEach((function(e){Object.assign(e,n)})),localStorage.setItem(e,JSON.stringify(r)),o.length}};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,n=void 0===t?"development":t,r=new S["b"]({environment:n,seeds:function(){var e=JSON.parse(localStorage.getItem("users"))||[];e.find((function(e){return"test@mail.ru"===e.email&&"test"===e.password}))||N.insert("users",{email:"test@mail.ru",password:"test"})},routes:function(){this.namespace="api",this.post("/register",(function(e,t){var n=JSON.parse(t.requestBody);return P(n)?N.where("users",(function(e){return e.email===n.email||e.login===n.login})).length>0?new S["a"](409):(N.insert("users",n),new S["a"](200)):new S["a"](400,{},{message:"bad request"})})),this.post("/login",(function(e,t){var n=JSON.parse(t.requestBody),r=j.a.random.alphaNumeric(100),o=N.update("users",(function(e){return e.email===n.email&&e.password===n.password}),{token:r});return o>0?r:new S["a"](403)})),this.post("/check",(function(e,t){var n=t.requestHeaders.token;if(!n||100!==n.length)return new S["a"](403);var r=N.where("users",(function(e){return e.token===n}));if(!r.length)return new S["a"](403);var o=r[0],a=o.id,u=o.email;return new S["a"](200,{},{user:{id:a,email:u}})})),this.post("/logout",(function(e,t){var n=JSON.parse(t.requestBody),r=N.where("users",(function(e){return e.email===n.email&&e.token===n.token}));return r&&r.length?(N.update("users",r,0,{token:j.a.random.alphaNumeric(100)}),new S["a"](200)):new S["a"](403)}))}});return r}var P=function(e){return e.login="string"===Object(y["a"])(e.login).toLowerCase()&&e.login.replace(/\s+?/g,""),A(e.email)&&J(e.login)&&_(e.password)&&e.password===e.confirm},A=function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},J=function(e){return!!e&&(e=String(e).trim(),/^\w+$/.test(e))},_=function(e){var t=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;return t.test(e)};r["default"].config.productionTip=!1,r["default"].use(f["a"]),r["default"].use(d["a"]),E(),new r["default"]({router:k,render:function(e){return e(l)},store:v}).$mount("#app")}});
//# sourceMappingURL=app.3323b726.js.map