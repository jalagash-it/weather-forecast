(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"c2a5422e","chunk-2d22d746":"fa9fe8dd","chunk-503060c8":"deda24b3","chunk-02781f2c":"4a4d761f","chunk-2cb116ae":"ddc4f279"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02781f2c":1,"chunk-2cb116ae":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-503060c8":"31d6cfe0","chunk-02781f2c":"e76bd08d","chunk-2cb116ae":"8c4136c7"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Погода в мире")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Название города"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Поиск")])],1),null!==e.user?n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("Пользователь")])]},proxy:!0}],null,!1,2449041069)},[n("b-dropdown-item",{attrs:{to:"/profile"}},[e._v("Профиль")]),n("b-dropdown-item",{attrs:{to:"/auth"}},[e._v("Выйти")])],1):n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("Гость")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"/register"}},[e._v("Регистрация")]),n("b-dropdown-item",{attrs:{to:"/login"}},[e._v("Войти")])],1)],1)],1)],1)],1),n("router-view")],1)},a=[],u={data:function(){return{user:null}}},c=u,i=n("2877"),s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,d=n("5f5b"),f=n("b1e0"),p=(n("f9e3"),n("2dd8"),n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("weathers of world")])},h=[],v={name:"Home"},b=v,g=Object(i["a"])(b,m,h,!1,null,null,null),w=g.exports;r["default"].use(p["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-503060c8"),n.e("chunk-02781f2c")]).then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-503060c8"),n.e("chunk-2cb116ae")]).then(n.bind(null,"a55b"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}}],k=new p["a"]({mode:"history",base:"/",routes:y}),_=k,O=(n("ac1f"),n("5319"),n("498a"),n("53ca")),S=n("0c6e"),j=n("359c"),P=n.n(j);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,n=void 0===t?"development":t,r=new S["d"]({environment:n,models:{users:S["b"]},factories:{users:S["a"].extend({})},routes:function(){this.namespace="api",this.post("/register",(function(e,t){var n=JSON.parse(t.requestBody);return console.log(n),A(n)?e.users.where((function(e){return e.email===n.email||e.login===n.login})).length>0?new S["c"](409):(e.users.create(n),new S["c"](200)):new S["c"](400,{message:"bad request"})})),this.post("/login",(function(e,t){var n=JSON.parse(t.requestBody),r=e.users.where((function(e){return e.email===n.email&&e.password===n.password}));if(console.log(r),r&&r.length){var o=P.a.random.alphaNumeric(100);return r.models[0].update({token:o}),o}return new S["c"](403)})),this.post("/logout",(function(e,t){var n=JSON.parse(t.requestBody),r=e.users.where((function(e){return e.email===n.email&&e.token===n.token}));return r&&r.length?(r.models[0].update({token:P.a.random.alphaNumeric(100)}),new S["c"](200)):new S["c"](403)}))}});return r}var A=function(e){return e.login="string"===Object(O["a"])(e.login).toLowerCase()&&e.login.replace(/\s+?/g,""),C(e.email)&&E(e.login)&&N(e.password)&&e.password===e.confirm},C=function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},E=function(e){return!!e&&(e=String(e).trim(),/^\w+$/.test(e))},N=function(e){var t=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;return t.test(e)};r["default"].config.productionTip=!1,r["default"].use(d["a"]),r["default"].use(f["a"]),x(),new r["default"]({router:_,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.64e940bc.js.map