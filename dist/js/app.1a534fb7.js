(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a4f8d":"d8514138","chunk-32507fc1":"1f798315","chunk-711b2eab":"dc978578","chunk-8edc1036":"07584313"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-32507fc1":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0a4f8d":"31d6cfe0","chunk-32507fc1":"81ec574a","chunk-711b2eab":"31d6cfe0","chunk-8edc1036":"31d6cfe0"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuejs-essential/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("TheHeader"),n("div",{staticClass:"main-container container",attrs:{id:"main-container"}},[n("router-view")],1),n("TheFooter")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:function(e){return t.toggleNav()}}},[n("span",{staticClass:"sr-only"},[t._v("Toggle nav")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{key:e.id,class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(a)}}},[t._v(t._s(e))])])}),0),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar,alt:""}}):t._e(),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),n("span",{staticClass:"caret"})]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("编辑资料\n          ")])],1),n("li",[n("a",{attrs:{href:"#"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-bav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v("登录\n    ")]),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v("注册\n    ")])],1)])},l=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=n("2f62");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var v={name:"TheEntry",computed:f({},Object(d["b"])(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},h=v,m=n("2877"),b=Object(m["a"])(h,c,l,!1,null,"4dc61184",null),g=b.exports,y={name:"TheHeader.vue",components:{TheEntry:g},data:function(){return{logo:{src:"".concat(this.uploadsUrl),title:"Vuejs"},navList:["社区","问答","教程","头条"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl=""},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},w=y,_=(n("879a"),Object(m["a"])(w,o,i,!1,null,"42eef8a8",null)),k=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{key:e.id,style:t.contactStyle,attrs:{title:e.title,href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}),0),n("br"),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{staticClass:"footer-sponsor-link",attrs:{title:t.title,src:t.logo,alt:t.title,width:"98"}})])])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",{key:e.id},[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",{key:e.id},[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},O=[],j={name:"TheFooter.vue",data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n      <span style="font-size:0.9em">Designed by\n        <span style="color: #e27575;font-size: 14px;">❤</span>\n        <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n      </span>\n    ',sponsor:{title:"赞助商",list:[{logo:"https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},E=j,S=(n("a69f"),Object(m["a"])(E,C,O,!1,null,"62901f59",null)),x=S.exports,P={name:"app",components:{TheHeader:k,TheFooter:x}},T=P,L=(n("5c0b"),n("5c64"),Object(m["a"])(T,r,s,!1,null,null,null)),N=L.exports,D=n("8c4f"),I=[{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-32507fc1").then(n.bind(null,"935e"))}},{path:"/",name:"Home",component:function(){return n.e("chunk-711b2eab").then(n.bind(null,"bb51"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e("chunk-8edc1036").then(n.bind(null,"5326"))}},{path:"/users/1/edit",name:"EditUsers",component:function(){return n.e("chunk-2d0a4f8d").then(n.bind(null,"095c"))}}];a["a"].use(D["a"]);var U=new D["a"]({mode:"history",linkExactActiveClass:"active",routes:I});U.beforeEach(function(t,e,n){var a=U.app.$options.store.state.auth;a&&-1!==t.path.indexOf("/auth/")?n("/"):n()});var A=U,$=n("768b"),B=(n("ffc1"),n("7618"));function H(t,e,n){n=n&&"object"===Object(B["a"])(n)?n:{};var a="string"===typeof t.value?t.value.trim():"",r=n,s=r.title,o=void 0===s?"该项":s,i=r.error,c="";if(e.required&&""===a)c="".concat(o,"不能为空");else if(n.target){var l=document.querySelector(n.target),u=l?l.value:null;u!==a&&(c="输入的".concat(o,"不匹配"))}else if(n.regex)try{n.regex.test(a)||(c="".concat(o,"格式不正确"))}catch(d){}c?q(t,void 0===i?c:i):q(t)}function q(t,e){var n=t.parentElement,a=M(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}function M(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a='<span class="help-block"></span>',r=document.createRange().createContextualFragment(a);e.appendChild(r),n=e.querySelector(".help-block")}return n}var R={bind:function(t,e,n){var a=e.value,r=e.arg,s=e.modifiers,o=-1!==["change","blur","input"].indexOf(r)?r:"change",i=function(){q(t)},c=function(){H(t,s,a)};t.addEventListener("input",i,!1),t.addEventListener(o,c,!1),t.destroy=function(){t.removeEventListener("input",i,!1),t.removeEventListener(o,c,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,r=e.modifiers,s=t.closest("[data-validator-form]"),o=s?s.querySelector("[type=submit]"):null;if(o){var i=function(){H(t,r,a);var e=s.querySelectorAll(".has-error");e.length?o.canSubmit=!1:o.canSubmit=!0};o.addEventListener("click",i,!1),t.destroySubmitBtn=function(){o.removeEventListener("click",i,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},z={bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},r=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",r,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",r,!1),t.destroy=null}},unbind:function(t){t.destroy()}};a["a"].directive("validator",R);for(var F={validator:R,dropdown:z},J=0,V=Object.entries(F);J<V.length;J++){var Q=Object($["a"])(V[J],2),W=Q[0],Z=Q[1];a["a"].directive(W,Z)}var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:"alert alert-"+t.type+" alert-dismissible"},[n("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.close}},[n("span",[t._v("×")])]),t._v("\n  "+t._s(t.msg)+"\n")])},K=[],X={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},Y=X,tt=Object(m["a"])(Y,G,K,!1,null,"644f0c9b",null),et=tt.exports;a["a"].component("Message",et);var nt=n("e8ec");function at(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?at(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}a["a"].use(d["a"]);var st={user:nt["a"].getItem("user"),auth:nt["a"].getItem("auth")},ot={UPDATE_USER:function(t,e){t.user=e,nt["a"].setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,nt["a"].setItem("auth",e)}},it={login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),A.push("/")},logout:function(t){var e=t.commit;e("UPDATE_AUTH",!1),A.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,r=n.user;r&&"object"===Object(B["a"])(r)&&(e=rt({},r,{},e)),a("UPDATE_USER",e)}},ct=new d["a"].Store({state:st,mutations:ot,actions:it}),lt=ct,ut=n("3d20"),dt=n.n(ut),pt={install:function(t){dt.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=dt.a,t.prototype.$swal=dt.a}};a["a"].use(pt),a["a"].config.productionTip=!1,new a["a"]({router:A,store:lt,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),r=n.n(a);r.a},"5c64":function(t,e,n){"use strict";var a=n("6ee5"),r=n.n(a);r.a},"6ee5":function(t,e,n){},"879a":function(t,e,n){"use strict";var a=n("aca8"),r=n.n(a);r.a},a69f:function(t,e,n){"use strict";var a=n("c6a5"),r=n.n(a);r.a},aca8:function(t,e,n){},c6a5:function(t,e,n){},e332:function(t,e,n){},e8ec:function(t,e,n){"use strict";var a=localStorage;e["a"]={setItem:function(t,e){a.setItem(t,JSON.stringify(e))},getItem:function(t){try{return JSON.parse(a.getItem(t))}catch(e){return null}},removeIten:function(t){a.removeItem(t)}}}});
//# sourceMappingURL=app.1a534fb7.js.map